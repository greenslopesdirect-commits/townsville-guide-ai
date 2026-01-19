import { Outlet } from "react-router-dom";
import HeaderImproved from "@/components/HeaderImproved";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import SEOHead from "@/components/SEOHead";

const TownsvilleLayout = () => {
  return (
    <div className="relative">
      {/* Global SEO for Townsville pages */}
      <SEOHead
        title="MyAussieGuide – Townsville"
        description="Your complete local guide to Townsville — beaches, food, events, dog-friendly spots, and insider tips."
        canonical="https://www.myaussieguide.com.au"
      />

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

