import React from 'react';

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  image?: string;
  type?: 'website' | 'article';
  keywords?: string;
  author?: string;
}

const SEO: React.FC<SEOProps> = ({
  title,
  description,
  canonical,
  image = '../../assets/images/imgmeta.png',
  type = 'website',
  keywords,
  author = 'UnoVitta Clínicas'
}) => {
  const siteUrl = 'https://unovitta.com.br';
  const fullUrl = canonical ? `${siteUrl}${canonical}` : siteUrl;
  const fullTitle = `${title} | UnoVitta`;
  
  React.useEffect(() => {
    // Atualizar título da página
    document.title = fullTitle;
    
    // Atualizar meta tags
    const metaTags = [
      { name: 'description', content: description },
      { name: 'author', content: author },
      { property: 'og:type', content: type },
      { property: 'og:url', content: fullUrl },
      { property: 'og:title', content: fullTitle },
      { property: 'og:description', content: description },
      { property: 'og:image', content: `${siteUrl}${image}` },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:url', content: fullUrl },
      { name: 'twitter:title', content: fullTitle },
      { name: 'twitter:description', content: description },
      { name: 'twitter:image', content: `${siteUrl}${image}` }
    ];
    
    if (keywords) {
      metaTags.push({ name: 'keywords', content: keywords });
    }
    
    // Remover meta tags existentes para evitar duplicação
    document.querySelectorAll('meta[data-seo="true"]').forEach(el => el.remove());
    
    // Adicionar novas meta tags
    metaTags.forEach(tag => {
      const meta = document.createElement('meta');
      Object.entries(tag).forEach(([key, value]) => {
        meta.setAttribute(key, value);
      });
      meta.setAttribute('data-seo', 'true');
      document.head.appendChild(meta);
    });
    
    // Atualizar link canônico
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', fullUrl);
    
    // Limpeza ao desmontar o componente
    return () => {
      document.querySelectorAll('meta[data-seo="true"]').forEach(el => el.remove());
    };
  }, [fullTitle, description, author, type, fullUrl, image, keywords, siteUrl]);
  
  return null; // Este componente não renderiza nada visível
};

export default SEO;
