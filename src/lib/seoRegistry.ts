// Build-time SEO extraction side-channel.
//
// react-helmet's DOM-commit mechanism does not work reliably in this project
// (confirmed: zero head mutation in both dev and production builds, across
// multiple Helmet versions). Rather than depend on it, SEOHead publishes the
// same values it already passes to <Helmet> into a plain window global. The
// static prerender script (scripts/prerender.mjs) reads this after navigating
// to each route in a real browser, so the build's static <head> output is
// sourced from the exact same props each page already defines — nothing is
// duplicated or re-authored.
export interface SeoRegistryData {
  title: string;
  description: string;
  canonical: string;
  ogImage: string;
  ogType: string;
  noindex: boolean;
}

declare global {
  interface Window {
    __TSG_SEO__?: SeoRegistryData;
  }
}

export function publishSeo(data: SeoRegistryData): void {
  if (typeof window !== "undefined") {
    window.__TSG_SEO__ = data;
  }
}
