import Hero from "@/components/Hero";
import WeatherInfo from "@/components/WeatherInfo";
import QuickAccess from "@/components/QuickAccess";
import TopPicks from "@/components/TopPicks";
import FoodDrink from "@/components/FoodDrink";
import DogFriendly from "@/components/DogFriendly";
import EventsOn from "@/components/EventsOn";
import MapSection from "@/components/MapSection";
import About from "@/components/About";
import Footer from "@/components/Footer";
import WeatherWidget from "@/components/WeatherWidget";

const Index = () => {
  return (
    <div className="min-h-screen">
      <WeatherWidget />
      <Hero />
      <WeatherInfo />
      <QuickAccess />
      <TopPicks />
      <FoodDrink />
      <DogFriendly />
      <EventsOn />
      <MapSection />
      <About />
      <Footer />
    </div>
  );
};

export default Index;
