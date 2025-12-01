import { Outlet } from "react-router-dom";
import HeaderImproved from "@/components/HeaderImproved";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

const TownsvilleLayout = () => {
  return (
    <>
      <HeaderImproved />

      <div className="min-h-screen pt-20">
        <Outlet />
      </div>

      <Footer />
      <BackToTop />
    </>
  );
};

export default TownsvilleLayout;
