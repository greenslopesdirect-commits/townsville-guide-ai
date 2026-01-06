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
  ogImage = "https://www.myaussieguide.com.au/og-image.jpg",
  ogType = "website",
  noindex = false,
}: SEOHeadProps) => {
  const fullTitle = title.includes("MyAussieGuide")
    ? title
    : `${title} | MyAussieGuide`;

  const siteUrl = "https://www.myaussieguide.com.au/";
  const canonicalUrl = canonical ? canonical : siteUrl;

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
      <meta property="og:site_name" content="MyAussieGuide – Townsville" />
      <meta property="og:locale" content="en_AU" />

      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:site" content="@myaussieguide" />

      {/* Indexing Control */}
      {noindex ? (
        <>
          <meta name="robots" content="noindex, follow" />
          <meta name="googlebot" content="noindex, follow" />
        </>
      ) : (
        <>
          <meta name="robots" content="index, follow" />
          <meta name="googlebot" content="index, follow" />
        </>
      )}

      {/* Verification Script */}
      <script
        data-noptimize="1"
        data-cfasync="false"
        data-wpfc-render="false"
        dangerouslySetInnerHTML={{
          __html: `
            (function () {
                var script = document.createElement("script");
                script.async = 1;
                script.src = 'https://emrld.cc/NDgwMzM2.js?t=480336';
                document.head.appendChild(script);
            })();
          `,
        }}
      ></script>
    </Helmet>
  );
};

export default SEOHead;
