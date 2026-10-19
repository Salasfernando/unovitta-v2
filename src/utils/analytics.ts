type CTAEventParams = {
  location: string;
  treatment?: string;
  destination?: string;
};

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    gtag_report_conversion_whatsapp?: (url?: string) => boolean;
  }
}

type WhatsAppAdsConversionSource = 'direct_tag' | 'ga4_import';

// Current source is the existing direct Google Ads tag. If Ads is changed to
// import the GA4 event, switch this to 'ga4_import' to prevent a second direct hit.
const WHATSAPP_ADS_CONVERSION_SOURCE: WhatsAppAdsConversionSource = 'direct_tag';

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
  if (
    WHATSAPP_ADS_CONVERSION_SOURCE === 'direct_tag' &&
    typeof window !== 'undefined' &&
    typeof window.gtag_report_conversion_whatsapp === 'function'
  ) {
    window.gtag_report_conversion_whatsapp();
  }

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
