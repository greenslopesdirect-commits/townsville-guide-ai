import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import WeatherInfo from "@/components/WeatherInfo";
import QuickAccess from "@/components/QuickAccess";
import TopPicks from "@/components/TopPicks";
import VideoSection from "@/components/VideoSection";
import FoodDrink from "@/components/FoodDrink";
import DogFriendly from "@/components/DogFriendly";
import EventsOn from "@/components/EventsOn";
import Accommodation from "@/components/Accommodation";
import MapSection from "@/components/MapSection";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";
import WeatherWidget from "@/components/WeatherWidget";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Duncan's Guide – Townsville | Best Beaches, Food & Local Attractions</title>
        <meta 
          name="description" 
          content="Discover Townsville's best beaches, cafés, walks and hidden gems with Duncan's Guide — your AI-powered local guide to everything North Queensland." 
        />
      </Helmet>
      
      <div className="min-h-screen">
      <Header />
      
      <Hero />
      <section id="weather">
        <WeatherInfo />
      </section>
      <section id="quick-access">
        <QuickAccess />
      </section>
      <section id="top-picks">
        <TopPicks />
      </section>
      <section id="video">
        <VideoSection />
      </section>
      <section id="food-drink">
        <FoodDrink />
      </section>
      <section id="dog-friendly">
        <DogFriendly />
      </section>
      <section id="events">
        <EventsOn />
      </section>
      <section id="accommodation">
        <Accommodation />
      </section>
      <section id="map">
        <MapSection />
      </section>
      <section id="about">
        <AboutSection />
      </section>
      <Footer />
      </div>
    </>
  );
};

export default Index;