import { Helmet } from "react-helmet";

interface SEOHeadProps {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  noindex?: boolean;
}

const SEOHead = ({
  title,
  description,
  canonical,
  ogImage = "https://www.townsvilleguide.com.au/og-image.jpg",
  ogType = "website",
  noindex = false,
}: SEOHeadProps) => {
  const fullTitle = title.includes("Townsville Guide")
    ? title
    : `${title} | Townsville Guide`;

  // Standardize on NO trailing slash (except the root "/"). Accept either a
  // full URL or a path in the `canonical` prop; if none is supplied, derive
  // the canonical from the current route's pathname so we never silently
  // default to the homepage.
  const SITE = "https://www.townsvilleguide.com.au";
  let path: string;
  if (canonical) {
    try {
      path = new URL(canonical, SITE).pathname;
    } catch {
      path = canonical.startsWith("/") ? canonical : `/${canonical}`;
    }
  } else if (typeof window !== "undefined") {
    path = window.location.pathname || "/";
  } else {
    path = "/";
  }
  if (path.length > 1 && path.endsWith("/")) path = path.slice(0, -1);
  const canonicalUrl = `${SITE}${path}`;


  return (
    <Helmet>
      {/* Standard Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />

      {/* OpenGraph Meta Tags */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="Townsville Guide" />
      <meta property="og:locale" content="en_AU" />

      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonicalUrl} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* Indexing Control */}
      <meta name="robots" content={noindex ? "noindex, follow" : "index, follow"} />
      <meta name="googlebot" content={noindex ? "noindex, follow" : "index, follow"} />

      {/* Verification script is injected once statically in index.html — do not duplicate here. */}
    </Helmet>
  );
};

export default SEOHead;
