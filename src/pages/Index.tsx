import Hero from "@/components/Hero";
import QuickAccess from "@/components/QuickAccess";
import TopPicks from "@/components/TopPicks";
import MapSection from "@/components/MapSection";
import About from "@/components/About";
import Footer from "@/components/Footer";
import WeatherWidget from "@/components/WeatherWidget";

const Index = () => {
  return (
    <div className="min-h-screen">
      <WeatherWidget />
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
