import { Outlet } from "react-router-dom";
import HeaderImproved from "@/components/HeaderImproved";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

// NOTE: Do NOT render <SEOHead> here. Each route owns its own title,
// description, and canonical via its own <SEOHead>/<Helmet>. Injecting a
// sitewide canonical at the layout level caused every page to ship a
// duplicate canonical pointing at the homepage — a classic keyword
// cannibalisation trigger.
const TownsvilleLayout = () => {
  return (
    <div className="relative">
      <HeaderImproved />

      {/* Main content area - starts below fixed header */}
      <main className="relative z-0 pt-20">
        <Outlet />
      </main>

      <Footer />
      <BackToTop />
    </div>
  );
};

export default TownsvilleLayout;
