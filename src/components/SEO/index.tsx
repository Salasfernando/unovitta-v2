import React from 'react';

const SITE_URL = 'https://www.unovitta.com.br';
const SITE_NAME = 'UnoVitta Clínicas';
const DEFAULT_IMAGE = '/logo.png';

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  image?: string;
  type?: 'website' | 'article';
  keywords?: string;
  author?: string;
  schema?: object | object[];
  robots?: string;
}

const SEO: React.FC<SEOProps> = ({
  title,
  description,
  canonical,
  image = DEFAULT_IMAGE,
  type = 'website',
  keywords,
  author = 'UnoVitta Clínicas',
  schema,
  robots = 'index, follow'
}) => {
  const siteUrl = SITE_URL;
  const fullUrl = canonical
    ? canonical.startsWith('http://') || canonical.startsWith('https://')
      ? canonical
      : `${siteUrl}${canonical}`
    : siteUrl;
  const imageUrl = image.startsWith('http://') || image.startsWith('https://') ? image : `${siteUrl}${image}`;
  const fullTitle = title.toLowerCase().includes('unovitta') ? title : `${title} | UnoVitta`;
  const siteName = SITE_NAME;
  const locale = 'pt_BR';

  return (
    <>
      <title data-seo="true">{fullTitle}</title>
      <meta name="description" content={description} data-seo="true" />
      <meta name="author" content={author} data-seo="true" />
      <meta name="robots" content={robots} data-seo="true" />
      <meta property="og:type" content={type} data-seo="true" />
      {canonical && <meta property="og:url" content={fullUrl} data-seo="true" />}
      <meta property="og:title" content={fullTitle} data-seo="true" />
      <meta property="og:description" content={description} data-seo="true" />
      <meta property="og:image" content={imageUrl} data-seo="true" />
      <meta property="og:site_name" content={siteName} data-seo="true" />
      <meta property="og:locale" content={locale} data-seo="true" />
      <meta property="og:image:alt" content={`${fullTitle} — ${siteName}`} data-seo="true" />
      <meta name="twitter:card" content="summary_large_image" data-seo="true" />
      {canonical && <meta name="twitter:url" content={fullUrl} data-seo="true" />}
      <meta name="twitter:title" content={fullTitle} data-seo="true" />
      <meta name="twitter:description" content={description} data-seo="true" />
      <meta name="twitter:image" content={imageUrl} data-seo="true" />
      <meta name="twitter:image:alt" content={`${fullTitle} — ${siteName}`} data-seo="true" />
      {keywords && <meta name="keywords" content={keywords} data-seo="true" />}
      {canonical && <link rel="canonical" href={fullUrl} data-seo="true" />}
      {schema ? (
        <script
          type="application/ld+json"
          data-seo="true"
          dangerouslySetInnerHTML={{
            __html: Array.isArray(schema) ? JSON.stringify(schema) : JSON.stringify(schema)
          }}
        />
      ) : null}
    </>
  );
};

export default SEO;
