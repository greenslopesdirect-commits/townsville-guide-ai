// Build-time SEO extraction side-channel.
//
// react-helmet's DOM-commit mechanism does not work reliably in this project
// (confirmed: zero head mutation in both dev and production builds, across
// multiple Helmet versions). Rather than depend on it, SEOHead publishes the
// same values it already passes to <Helmet> into a plain global. The SSR
// prerender entry (src/entry-server.tsx) reads this back immediately after
// rendering each route, so the build's static <head> output is sourced from
// the exact same props each page already defines — nothing is duplicated or
// re-authored. `globalThis` (not `window`) so this works identically in the
// browser and in the Node SSR render.
export interface SeoRegistryData {
  title: string;
  description: string;
  canonical: string;
  ogImage: string;
  ogType: string;
  noindex: boolean;
}

declare global {
  // eslint-disable-next-line no-var
  var __TSG_SEO__: SeoRegistryData | undefined;
}

export function publishSeo(data: SeoRegistryData): void {
  globalThis.__TSG_SEO__ = data;
}
