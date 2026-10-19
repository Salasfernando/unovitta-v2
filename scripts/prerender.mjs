import { readFile, mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { PassThrough } from 'node:stream';
import React from 'react';
import { renderToPipeableStream } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { ServerStyleSheet } from 'styled-components';
import { createServer } from 'vite';

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const siteOrigin = 'https://unovitta.com.br';
const outputDirectory = path.join(projectRoot, 'dist');

const sitemap = await readFile(path.join(projectRoot, 'public/sitemap.xml'), 'utf8');
const routePaths = [...sitemap.matchAll(/<loc>\s*([^<]+)\s*<\/loc>/g)]
  .map(([, loc]) => new URL(loc.trim()))
  .filter(url => url.origin === siteOrigin)
  .map(url => url.pathname);

if (routePaths.length === 0) {
  throw new Error('Nenhuma URL válida foi encontrada em public/sitemap.xml.');
}

const vite = await createServer({
  root: projectRoot,
  configFile: path.join(projectRoot, 'vite.config.ts'),
  logLevel: 'error',
  server: { middlewareMode: true },
  appType: 'custom',
});

try {
  const { AppShell } = await vite.ssrLoadModule('/src/App.tsx');
  const template = await readFile(path.join(outputDirectory, 'index.html'), 'utf8');

  for (const routePath of [...new Set(routePaths)]) {
    const sheet = new ServerStyleSheet();
    const app = sheet.collectStyles(
      React.createElement(
        StaticRouter,
        { location: routePath },
        React.createElement(AppShell),
      ),
    );

    const { markup, styles } = await renderRoute(app, sheet);
    const rootMarkupStart = markup.indexOf('<div');

    if (rootMarkupStart < 0) {
      throw new Error(`A renderização de ${routePath} não produziu o conteúdo da aplicação.`);
    }

    const headMarkup = markup.slice(0, rootMarkupStart);
    const appMarkup = markup.slice(rootMarkupStart);
    const renderedDocument = template
      .replace(/<title>[\s\S]*?<\/title>\s*/i, '')
      .replace(/<meta\b[^>]*\bdata-seo="true"[^>]*>\s*/gi, '')
      .replace(/<link\b[^>]*\bdata-seo="true"[^>]*>\s*/gi, '')
      .replace('<div id="root"></div>', `<div id="root">${appMarkup}</div>`)
      .replace('</head>', `${headMarkup}${styles}</head>`);

    if (!renderedDocument.includes(`<div id="root">${appMarkup}</div>`)) {
      throw new Error(`Não foi possível inserir o HTML pré-renderizado para ${routePath}.`);
    }

    const routeSegments = routePath.split('/').filter(Boolean);
    const pageDirectory = path.join(outputDirectory, ...routeSegments);
    const outputPath = routePath === '/'
      ? path.join(outputDirectory, 'index.html')
      : path.join(pageDirectory, 'index.html');

    await mkdir(path.dirname(outputPath), { recursive: true });
    await writeFile(outputPath, renderedDocument, 'utf8');
    sheet.seal();
    console.log(`Pré-renderizada: ${routePath}`);
  }
} finally {
  await vite.close();
}

function renderRoute(app, sheet) {
  return new Promise((resolve, reject) => {
    const output = new PassThrough();
    const chunks = [];
    let renderError;

    output.on('data', chunk => chunks.push(chunk));
    output.on('error', reject);
    output.on('end', () => {
      if (renderError) {
        reject(renderError);
        return;
      }

      resolve({
        markup: Buffer.concat(chunks).toString('utf8'),
        styles: sheet.getStyleTags(),
      });
    });

    let stream;
    stream = renderToPipeableStream(app, {
      onAllReady() {
        stream.pipe(output);
      },
      onShellError(error) {
        reject(error);
      },
      onError(error) {
        renderError = error;
      },
    });
  });
}
