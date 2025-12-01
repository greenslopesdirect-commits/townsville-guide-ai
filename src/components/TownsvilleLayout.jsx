import { Outlet } from 'react-router-dom';
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const TownsvilleLayout = () => {
  return (
    <>
      <Header />

      <div className="min-h-screen pt-20">
        <Outlet />
      </div>

      <Footer />
    </>
  );
};

export default TownsvilleLayout;

