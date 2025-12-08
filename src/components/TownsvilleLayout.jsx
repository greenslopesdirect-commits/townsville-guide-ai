import { Outlet } from "react-router-dom";
import HeaderImproved from "@/components/HeaderImproved";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

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

