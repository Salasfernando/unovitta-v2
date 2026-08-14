type CTAEventParams = {
  location: string;
  treatment?: string;
  destination?: string;
};

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

const sendEvent = (name: string, params: Record<string, unknown>): void => {
  if (typeof window === 'undefined' || typeof window.gtag !== 'function') return;
  window.gtag('event', name, params);
};

export const trackCTAClick = ({ location, treatment, destination = 'whatsapp' }: CTAEventParams): void => {
  sendEvent('cta_click', {
    cta_location: location,
    treatment: treatment || 'não informado',
    destination
  });
};

export const trackWhatsAppStart = ({ location, treatment }: CTAEventParams): void => {
  trackCTAClick({ location, treatment, destination: 'whatsapp' });
  sendEvent('whatsapp_start', {
    cta_location: location,
    treatment: treatment || 'não informado'
  });
};

export const trackPhoneClick = (location: string): void => {
  sendEvent('phone_click', { cta_location: location });
};

export const trackFormSubmit = (location: string): void => {
  sendEvent('contact_form_submit', { form_location: location });
};
