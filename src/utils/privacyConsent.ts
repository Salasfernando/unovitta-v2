export const PRIVACY_CONSENT_KEY = 'unovitta-privacy-consent-v1';

export interface PrivacyConsent {
  marketing: boolean;
  updatedAt: string;
}

declare global {
  interface Window {
    dataLayer?: unknown[][];
    gtag?: (...args: unknown[]) => void;
    gtag_report_conversion_whatsapp?: (url?: string) => boolean;
    gtag_report_conversion_contact?: (url?: string) => boolean;
  }
}

export function readPrivacyConsent(): PrivacyConsent | null {
  if (typeof window === 'undefined') return null;
  try {
    const stored = window.localStorage.getItem(PRIVACY_CONSENT_KEY);
    if (!stored) return null;
    const parsed = JSON.parse(stored) as Partial<PrivacyConsent>;
    if (typeof parsed.marketing !== 'boolean') return null;
    return { marketing: parsed.marketing, updatedAt: parsed.updatedAt ?? '' };
  } catch {
    return null;
  }
}

function clearMarketingCookies(): void {
  const names = document.cookie.split(';').map((part) => part.trim().split('=')[0]);
  const knownMarketingCookies = names.filter((name) => name === '_gcl_au' || name.startsWith('_gcl_aw') || name.startsWith('_gac_'));
  knownMarketingCookies.forEach((name) => {
    document.cookie = `${name}=; Max-Age=0; path=/; SameSite=Lax`;
  });
}

function enableGoogleAds(): void {
  if (typeof window === 'undefined') return;

  window.dataLayer = window.dataLayer ?? [];
  window.gtag = window.gtag ?? function (...args: unknown[]) {
    window.dataLayer?.push(args);
  };

  window.gtag('consent', 'default', {
    ad_storage: 'denied',
    ad_user_data: 'denied',
    ad_personalization: 'denied',
    analytics_storage: 'denied',
  });
  window.gtag('js', new Date());
  window.gtag('config', 'AW-962820594');

  window.gtag_report_conversion_whatsapp = () => {
    window.gtag?.('event', 'conversion', {
      send_to: 'AW-962820594/_qA-CK2N8aIaEPLzjcsD',
      value: 1.0,
      currency: 'BRL',
    });
    return false;
  };

  window.gtag_report_conversion_contact = (url?: string) => {
    window.gtag?.('event', 'conversion', {
      send_to: 'AW-962820594/0EUkCN3XqcQaEPLzjcsD',
      value: 1.0,
      currency: 'BRL',
      event_callback: () => {
        if (url) window.location.assign(url);
      },
    });
    return false;
  };

  if (!document.getElementById('google-ads-tag')) {
    const script = document.createElement('script');
    script.id = 'google-ads-tag';
    script.async = true;
    script.src = 'https://www.googletagmanager.com/gtag/js?id=AW-962820594';
    document.head.appendChild(script);
  }

  window.gtag('consent', 'update', {
    ad_storage: 'granted',
    ad_user_data: 'granted',
    ad_personalization: 'granted',
    analytics_storage: 'denied',
  });
}

export function savePrivacyConsent(marketing: boolean): void {
  const consent: PrivacyConsent = { marketing, updatedAt: new Date().toISOString() };
  try {
    window.localStorage.setItem(PRIVACY_CONSENT_KEY, JSON.stringify(consent));
  } catch {
    // The current selection still applies to this page view if storage is unavailable.
  }

  if (marketing) {
    enableGoogleAds();
    return;
  }

  window.gtag?.('consent', 'update', {
    ad_storage: 'denied',
    ad_user_data: 'denied',
    ad_personalization: 'denied',
    analytics_storage: 'denied',
  });
  window.gtag_report_conversion_whatsapp = undefined;
  window.gtag_report_conversion_contact = undefined;
  clearMarketingCookies();
}

export function applySavedPrivacyConsent(): void {
  if (readPrivacyConsent()?.marketing) enableGoogleAds();
}
