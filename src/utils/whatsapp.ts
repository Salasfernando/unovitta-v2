import type { AnchorHTMLAttributes } from 'react';

const DESKTOP_MEDIA_QUERY = '(min-width: 768px)';

export const isDesktopViewport = (): boolean => {
  if (typeof window === 'undefined' || typeof window.matchMedia !== 'function') {
    return true;
  }

  return window.matchMedia(DESKTOP_MEDIA_QUERY).matches;
};

export const getWhatsAppLinkProps = (): Pick<AnchorHTMLAttributes<HTMLAnchorElement>, 'target' | 'rel'> => {
  if (!isDesktopViewport()) {
    return {};
  }

  return {
    target: '_blank',
    rel: 'noopener noreferrer'
  };
};

export const openWhatsAppLink = (url: string): void => {
  if (typeof window === 'undefined') {
    return;
  }

  if (isDesktopViewport()) {
    window.open(url, '_blank', 'noopener,noreferrer');
    return;
  }

  window.location.assign(url);
};