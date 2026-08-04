import { analyticsConfig } from '@/config/analytics';

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>;
    gtag?: (...args: unknown[]) => void;
    fbq?: (...args: unknown[]) => void;
  }
}

/**
 * Dispara eventos para Google Tag Manager / GA4 e Meta Pixel de forma segura.
 */
export function trackEvent(eventName: string, params?: Record<string, string | number | boolean>): void {
  if (typeof window === 'undefined') return;

  // Registrar em modo de desenvolvimento ou quando dataLayer existir
  if (process.env.NODE_ENV === 'development') {
    console.log(`[Analytics Event Tracked]: ${eventName}`, params || {});
  }

  // Google Tag Manager / GA4 dataLayer
  if (window.dataLayer) {
    window.dataLayer.push({
      event: eventName,
      ...params,
    });
  }

  // gtag direct fallback
  if (typeof window.gtag === 'function') {
    window.gtag('event', eventName, params);
  }

  // Meta Pixel fallback
  if (typeof window.fbq === 'function') {
    window.fbq('trackCustom', eventName, params);
  }
}

export const events = analyticsConfig.events;
