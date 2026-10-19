import type { AnchorHTMLAttributes } from 'react';

export const WHATSAPP_NUMBER = '556134794514';
export const DISPLAY_PHONE_NUMBER = '(61) 3479-4514';
export const TELEPHONE_LINK = `+${WHATSAPP_NUMBER}`;

const DESKTOP_MEDIA_QUERY = '(min-width: 768px)';

export const buildWhatsAppUrl = (message: string, shortLink = false): string => {
  const baseUrl = shortLink ? `https://wa.me/${WHATSAPP_NUMBER}` : 'https://api.whatsapp.com/send';
  const query = shortLink
    ? `?text=${encodeURIComponent(message)}`
    : `?phone=${WHATSAPP_NUMBER}&text=${encodeURIComponent(message)}`;

  return `${baseUrl}${query}`;
};

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
