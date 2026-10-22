import React from 'react';

type ResponsiveImageProps = React.ComponentProps<'img'> & {
  sizes?: string;
};

const UNSPLASH_HOSTS = new Set(['images.unsplash.com', 'plus.unsplash.com']);
const RESPONSIVE_WIDTHS = [320, 640, 960, 1280, 1600];

function getUnsplashSrcSet(src: string): string | undefined {
  try {
    const imageUrl = new URL(src);
    if (!UNSPLASH_HOSTS.has(imageUrl.hostname)) return undefined;

    return RESPONSIVE_WIDTHS
      .map((width) => {
        const candidate = new URL(imageUrl);
        candidate.searchParams.set('w', String(width));
        candidate.searchParams.set('q', '80');
        return `${candidate.toString()} ${width}w`;
      })
      .join(', ');
  } catch {
    return undefined;
  }
}

const ResponsiveImage: React.FC<ResponsiveImageProps> = ({ src, srcSet, sizes, ...imageProps }) => {
  const generatedSrcSet = typeof src === 'string' ? getUnsplashSrcSet(src) : undefined;

  return (
    <img
      {...imageProps}
      src={src}
      srcSet={srcSet ?? generatedSrcSet}
      sizes={sizes ?? (generatedSrcSet ? '(max-width: 768px) 100vw, 50vw' : undefined)}
    />
  );
};

export default ResponsiveImage;
