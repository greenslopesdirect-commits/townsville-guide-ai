// src/layouts/TownsvilleLayout.tsx

import { Outlet } from 'react-router-dom';
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const TownsvilleLayout = () => {
  return (
    <>
      <Header />
      
      {/* This container ensures the content starts below the fixed header */}
      <div className="min-h-screen pt-20"> 
        {/* The Outlet is the placeholder for the specific page content (Beaches, History, etc.) */}
        <Outlet /> 
      </div>
      
      <Footer />
    </>
  );
};

export default TownsvilleLayout;
