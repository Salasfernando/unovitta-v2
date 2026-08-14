# UnoVitta — Website Institucional

Website institucional da **UnoVitta Clínicas**, clínica odontológica localizada em Brazlândia, Brasília/DF. O projeto apresenta a clínica, seus tratamentos, conteúdos educativos, canais de contato e fluxos de agendamento pelo WhatsApp.

A interface utiliza uma identidade visual editorial e acolhedora, com verde-floresta, marfim, verde-sálvia e âmbar. O objetivo é combinar confiança clínica, leitura confortável e chamadas de conversão claras.

## Visão geral

O site é uma aplicação frontend estática construída com React, TypeScript, Vite e Styled Components. A navegação ocorre como uma SPA, com rotas internas gerenciadas pelo React Router. O projeto não possui backend próprio: os formulários e CTAs de contato direcionam o visitante para WhatsApp, telefone, e-mail ou mapa.

| Área | Objetivo |
|---|---|
| Home | Apresentar a clínica, orientar o visitante e gerar agendamentos |
| Tratamentos | Mostrar especialidades e ajudar o visitante a escolher um caminho |
| Páginas individuais | Trabalhar SEO e conversão para tratamentos estratégicos |
| Sobre | Apresentar a filosofia, experiência e diferenciais da UnoVitta |
| Blog | Publicar conteúdos de educação e prevenção odontológica |
| Contato | Facilitar WhatsApp, telefone, localização e envio de dados |

## Tecnologias

| Tecnologia | Uso |
|---|---|
| React 19 | Componentização da interface |
| TypeScript | Tipagem e segurança no desenvolvimento |
| Vite | Servidor local e build de produção |
| React Router DOM | Rotas e navegação SPA |
| Styled Components | Estilos encapsulados e tokens visuais |
| React Icons | Biblioteca única de ícones vetoriais |
| ESLint | Validação de qualidade do código |
| Schema.org / JSON-LD | Dados estruturados para SEO |

## Requisitos

Recomenda-se utilizar **Node.js 20 ou superior** e npm. Para conferir as versões instaladas:

```bash
node --version
npm --version
```

## Instalação local

Clone o repositório e entre na pasta do projeto:

```bash
git clone URL_DO_REPOSITORIO
cd unovitta-v2
```

Instale as dependências:

```bash
npm install
```

Inicie o ambiente de desenvolvimento:

```bash
npm run dev
```

O Vite exibirá no terminal o endereço local, normalmente:

```text
http://localhost:5173
```

## Scripts disponíveis

| Comando | Finalidade |
|---|---|
| `npm run dev` | Inicia o servidor de desenvolvimento |
| `npm run build` | Executa TypeScript e gera o build de produção |
| `npm run lint` | Verifica problemas de lint no projeto |
| `npm run preview` | Serve localmente o build de produção |

Fluxo recomendado antes de criar um pull request:

```bash
npm run lint
npm run build
```

## Rotas públicas

| Rota | Conteúdo |
|---|---|
| `/` | Página inicial |
| `/servicos` | Visão geral dos tratamentos |
| `/servicos/implantes` | Página de implantes dentários |
| `/servicos/alinhadores` | Página de alinhadores transparentes |
| `/servicos/estetica` | Página de odontologia estética e lentes |
| `/servicos/clareamento` | Página de clareamento dental |
| `/sobre` | Sobre a UnoVitta |
| `/blog` | Lista de artigos |
| `/blog/:slug` | Artigo individual |
| `/contato` | Formulário e informações de contato |

As quatro páginas estratégicas de tratamento utilizam um componente compartilhado, mas recebem conteúdo, title, description, keywords, canonical, imagem, FAQ e dados estruturados próprios.

## Estrutura principal

```text
src/
├── App.tsx                         # Rotas e layout global
├── components/
│   ├── SEO/                        # Metatags, canonical e JSON-LD
│   ├── layout/
│   │   ├── Header/                 # Navegação global e CTA do cabeçalho
│   │   └── Footer/                 # CTA final, links e contatos
│   ├── sections/                   # Seções reutilizadas da home
│   │   ├── Hero/
│   │   ├── PainPoints/
│   │   ├── HowItWorks/
│   │   ├── About/
│   │   ├── Services/
│   │   ├── Testimonials/
│   │   ├── Contact/
│   │   └── HomeEnhancements/       # Confiança, equipe e FAQ
│   ├── ui/                         # Biblioteca visual compartilhada
│   │   └── index.tsx               # Button, SectionHeader, TreatmentCard,
│   │                               # TrustMetric, ContactCard e FAQItem
│   └── WhatsAppButton/             # Botão flutuante de WhatsApp
├── pages/
│   ├── Home/
│   ├── Treatment/                  # Páginas estratégicas por slug
│   ├── Services/
│   ├── About/
│   ├── Blog/
│   ├── BlogPost/
│   ├── Contact/
│   └── NotFound/
├── styles/
│   └── GlobalStyles.ts             # Tokens de cor, tipografia e acessibilidade
└── utils/
    ├── analytics.ts                # Eventos de conversão e microconversões
    └── whatsapp.ts                 # Links e comportamento responsivo do WhatsApp

public/
├── robots.txt
├── sitemap.xml
└── images/                         # Ativos locais já utilizados pelo projeto
```

## Identidade visual

Os principais tokens estão em `src/styles/GlobalStyles.ts`.

| Token | Valor | Aplicação |
|---|---|---|
| `--color-primary` | `#164B45` | Hero, navegação, botões e ícones |
| `--color-primary-dark` | `#103A35` | CTA intermediário e rodapé |
| `--color-secondary` | `#D9A441` | CTA principal, divisores e detalhes |
| `--color-accent` | `#8DAF9F` | Acentos e estados suaves |
| `--color-gray-100` | `#FAF7F1` | Fundo marfim |
| `--color-gray-300` | `#DED7CA` | Bordas e separadores |
| `--color-dark` | `#1A302D` | Títulos e textos de maior contraste |

A tipografia usa **Manrope** para títulos e **DM Sans** para textos, navegação, formulários e botões. As fontes são carregadas no `index.html`.

## Imagens temporárias

A clínica ainda não possui um banco próprio de fotografias. Por isso, algumas seções usam imagens temporárias hospedadas no Unsplash. Os pontos principais de substituição são:

| Conteúdo | Arquivo |
|---|---|
| Hero da home | `src/components/sections/Hero/index.tsx` |
| Imagens dos tratamentos | `src/pages/Treatment/index.tsx` |
| Retratos temporários da equipe | `src/components/sections/HomeEnhancements/index.tsx` |
| Imagens dos cards e artigos | Componentes e páginas correspondentes |

Ao receber fotos próprias, substitua apenas os URLs, preserve os textos `alt` e mantenha os atributos `width`, `height`, `loading` e `decoding`. Recomenda-se converter os arquivos finais para WebP ou AVIF antes da publicação.

## SEO

O componente `src/components/SEO/index.tsx` controla title, description, canonical, Open Graph, Twitter Cards e JSON-LD por rota.

A implementação atual inclui:

- Dados estruturados de negócio local e clínica odontológica.
- Schema `FAQPage` na home.
- Schema `MedicalWebPage` nas páginas individuais de tratamento.
- Schema `BlogPosting` nos artigos do blog.
- `robots.txt` público.
- `sitemap.xml` com as páginas principais, artigos e tratamentos estratégicos.
- Keywords e descriptions específicas para Brazlândia e região.

Antes da publicação, revise as informações clínicas, endereço, telefone, horários, perfis sociais e números de prova social para garantir que estejam confirmados pela clínica.

## Rastreamento de conversões

O arquivo `src/utils/analytics.ts` centraliza os eventos:

| Evento | Uso |
|---|---|
| `cta_click` | Clique em uma chamada de ação |
| `whatsapp_start` | Início de conversa pelo WhatsApp |
| `phone_click` | Clique para ligar para a clínica |
| `contact_form_submit` | Envio do formulário de contato |

Os eventos são enviados por `gtag` quando a tag do Google está disponível. A navegação continua funcionando mesmo se o rastreamento não estiver configurado.

Para configurar o Google Ads, mantenha a Google tag no `index.html`, confirme o ID da conta e defina quais eventos serão conversões primárias. Recomenda-se usar o início de conversa ou o envio do formulário como conversão principal e manter cliques genéricos como microconversões.

Não inclua chaves privadas, senhas ou credenciais de contas no repositório. Identificadores públicos de tags devem ser revisados antes da publicação.

## Publicação

O projeto gera uma aplicação frontend estática com Vite. Em uma hospedagem como Vercel, Netlify, Cloudflare Pages ou serviço equivalente, configure:

| Configuração | Valor |
|---|---|
| Build command | `npm run build` |
| Output directory | `dist` |
| Install command | `npm install` |
| Node.js | 20 ou superior recomendado |

Como o projeto usa React Router, a hospedagem precisa redirecionar rotas desconhecidas para `index.html`. Sem esse fallback, acessos diretos a `/servicos/implantes` ou `/blog/slug` podem retornar 404 no servidor apesar de funcionarem durante a navegação interna.

## Checklist antes do deploy

- Confirmar endereço, telefone, horários e links oficiais da clínica.
- Substituir as imagens temporárias por fotos autorizadas ou ativos licenciados.
- Revisar títulos, descriptions e textos dos tratamentos.
- Confirmar o ID real do Google Ads e validar eventos no modo de teste.
- Executar `npm run lint`.
- Executar `npm run build`.
- Testar home, tratamentos, quatro páginas individuais, blog e contato.
- Validar sitemap e dados estruturados nos ambientes públicos.
- Configurar fallback de `index.html` na hospedagem.
- Conferir o site em telas pequenas e em navegação por teclado.

## Licença e direitos autorais

O conteúdo institucional, a marca, os textos clínicos e os dados de contato pertencem à UnoVitta Clínicas. As imagens temporárias do Unsplash devem ser substituídas ou revisadas conforme a licença e a política de uso definida para a publicação final.

Desenvolvido por Salas Tech.
