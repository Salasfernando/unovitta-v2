declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    gtag_report_conversion_whatsapp?: (url?: string) => boolean;
  }
}

const sendEvent = (name: string, params: Record<string, unknown>): void => {
  if (typeof window === 'undefined' || typeof window.gtag !== 'function') return;
  window.gtag('event', name, params);
};

export const trackWhatsAppConversion = (): void => {
  if (typeof window !== 'undefined' && typeof window.gtag_report_conversion_whatsapp === 'function') {
    window.gtag_report_conversion_whatsapp();
  }
};

export const trackPhoneClick = (location: string): void => {
  sendEvent('phone_click', { cta_location: location });
};
