import React, { useEffect } from 'react';

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  image?: string;
  type?: 'website' | 'article';
  keywords?: string;
  author?: string;
  schema?: object | object[];
}

const SEO: React.FC<SEOProps> = ({
  title,
  description,
  canonical,
  image = '/logo.png',
  type = 'website',
  keywords,
  author = 'UnoVitta Clínicas',
  schema
}) => {
  const siteUrl = 'https://unovitta.com.br';
  const fullUrl = canonical
    ? canonical.startsWith('http://') || canonical.startsWith('https://')
      ? canonical
      : `${siteUrl}${canonical}`
    : siteUrl;
  const imageUrl = image.startsWith('http://') || image.startsWith('https://') ? image : `${siteUrl}${image}`;
  const fullTitle = title.toLowerCase().includes('unovitta') ? title : `${title} | UnoVitta`;
  const siteName = 'UnoVitta';
  const locale = 'pt_BR';

  useEffect(() => {
    document.title = fullTitle;

    const metaTags = [
      { name: 'description', content: description },
      { name: 'author', content: author },
      { name: 'robots', content: 'index, follow' },
      { property: 'og:type', content: type },
      { property: 'og:url', content: fullUrl },
      { property: 'og:title', content: fullTitle },
      { property: 'og:description', content: description },
      { property: 'og:image', content: imageUrl },
      { property: 'og:site_name', content: siteName },
      { property: 'og:locale', content: locale },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:url', content: fullUrl },
      { name: 'twitter:title', content: fullTitle },
      { name: 'twitter:description', content: description },
      { name: 'twitter:image', content: imageUrl }
    ];

    if (keywords) {
      metaTags.push({ name: 'keywords', content: keywords });
    }

    document.querySelectorAll('meta[data-seo="true"]').forEach(el => el.remove());

    metaTags.forEach(tag => {
      const meta = document.createElement('meta');
      Object.entries(tag).forEach(([key, value]) => {
        meta.setAttribute(key, value);
      });
      meta.setAttribute('data-seo', 'true');
      document.head.appendChild(meta);
    });

    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', fullUrl);

    return () => {
      document.querySelectorAll('meta[data-seo="true"]').forEach(el => el.remove());
    };
  }, [fullTitle, description, author, type, fullUrl, image, keywords, siteUrl]);

  return (
    <>
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
