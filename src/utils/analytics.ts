import { readPrivacyConsent } from './privacyConsent';

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    gtag_report_conversion_whatsapp?: (url?: string) => boolean;
  }
}

const DEFAULT_GA4_MEASUREMENT_ID = 'G-R46VM95LRK';
const GA4_MEASUREMENT_ID = import.meta.env.VITE_GA4_MEASUREMENT_ID?.trim() || DEFAULT_GA4_MEASUREMENT_ID;

export const initializeGA4 = (): void => {
  if (!GA4_MEASUREMENT_ID || typeof window.gtag !== 'function') return;

  // A tag Google já carregada no index.html é compartilhada pelo Ads e pelo GA4.
  // O envio de page_view fica a cargo do rastreador de rotas React.
  window.gtag('config', GA4_MEASUREMENT_ID, { send_page_view: false });
};

const sendEvent = (name: string, params: Record<string, unknown>): void => {
  if (!GA4_MEASUREMENT_ID || typeof window === 'undefined' || typeof window.gtag !== 'function') return;
  if (readPrivacyConsent()?.marketing === false) return;
  window.gtag('event', name, params);
};

type WhatsAppClickContext = string | { currentTarget: HTMLElement };

const getPageLocation = (): string => (typeof window === 'undefined' ? '' : window.location.href);

export const trackWhatsAppConversion = (context?: WhatsAppClickContext, textOverride?: string): void => {
  const element = typeof context === 'object' ? context?.currentTarget : undefined;
  const buttonLocation = typeof context === 'string'
    ? context
    : element?.dataset.analyticsLocation || (typeof window === 'undefined' ? '' : window.location.pathname);
  const buttonText = textOverride || element?.getAttribute('aria-label') || element?.innerText?.trim().slice(0, 100) || 'WhatsApp';

  sendEvent('click_whatsapp', {
    button_location: buttonLocation,
    button_text: buttonText,
    page_location: getPageLocation(),
  });

  if (readPrivacyConsent()?.marketing === false) return;
  if (typeof window !== 'undefined' && typeof window.gtag_report_conversion_whatsapp === 'function') {
    window.gtag_report_conversion_whatsapp();
  }
};

export const trackPhoneClick = (location: string, buttonText = 'Ligar para a clínica'): void => {
  sendEvent('phone_click', {
    button_location: location,
    button_text: buttonText,
    page_location: getPageLocation(),
  });
};

export const trackEmailClick = (location: string): void => {
  sendEvent('email_click', {
    button_location: location,
    button_text: 'Enviar email',
    page_location: getPageLocation(),
  });
};

export const trackDirectionsClick = (location: string): void => {
  sendEvent('directions_click', {
    button_location: location,
    button_text: 'Ver localização no mapa',
    page_location: getPageLocation(),
  });
};

export const trackContactFormSubmit = (): void => {
  // Envia apenas o sinal de envio, sem nome, telefone ou conteúdo da mensagem.
  sendEvent('contact_form_submit', {
    button_location: 'contact_form',
    page_location: getPageLocation(),
  });
};

export const trackArticleShare = (articleSlug: string): void => {
  sendEvent('share', {
    method: 'WhatsApp',
    content_type: 'article',
    item_id: articleSlug,
    page_location: getPageLocation(),
  });
};

export const trackPageView = (pagePath: string, pageTitle: string): void => {
  sendEvent('page_view', {
    page_title: pageTitle,
    page_location: `${window.location.origin}${pagePath}`,
  });
};
