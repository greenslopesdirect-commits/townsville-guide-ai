import { Outlet, useLocation } from "react-router-dom";
import HeaderImproved from "@/components/HeaderImproved";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import GuideTrustPanel from "@/components/GuideTrustPanel";
import { isGuidePath } from "@/data/guideTrust";

// NOTE: Do NOT render <SEOHead> here. Each route owns its own title,
// description, and canonical via its own <SEOHead>/<Helmet>. Injecting a
// sitewide canonical at the layout level caused every page to ship a
// duplicate canonical pointing at the homepage — a classic keyword
// cannibalisation trigger.
const TownsvilleLayout = () => {
  const location = useLocation();
  const showTrustPanel = isGuidePath(location.pathname);

  return (
    <div className="relative">
      <HeaderImproved />

      {/* Main content area - starts below fixed header */}
      <main className="relative z-0 pt-20">
        <Outlet />

        {showTrustPanel && (
          <div className="container mx-auto max-w-4xl px-4 pb-12">
            <GuideTrustPanel />
          </div>
        )}
      </main>

      <Footer />
      <BackToTop />
    </div>
  );
};

export default TownsvilleLayout;

