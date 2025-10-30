import Hero from "@/components/Hero";
import QuickAccess from "@/components/QuickAccess";
import TopPicks from "@/components/TopPicks";
import MapSection from "@/components/MapSection";
import About from "@/components/About";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <QuickAccess />
      <TopPicks />
      <MapSection />
      <About />
      <Footer />
    </div>
  );
};

export default Index;
