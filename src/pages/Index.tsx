import { Helmet } from "react-helmet";
import SEOHead from "@/components/SEOHead";
import Hero from "@/components/Hero";
import WeatherInfo from "@/components/WeatherInfo";
import QuickAccess from "@/components/QuickAccess";
import TopPicks from "@/components/TopPicks";
import SeoContentSections from "@/components/SeoContentSections";
import VideoSection from "@/components/VideoSection";
import FoodDrink from "@/components/FoodDrink";
import DogFriendly from "@/components/DogFriendly";
import EventsOn from "@/components/EventsOn";
import Accommodation from "@/components/Accommodation";
import MapSection from "@/components/MapSection";
import AboutSection from "@/components/AboutSection";
import FaqSection from "@/components/FaqSection";

const Index = () => {
  return (
    <>
      <SEOHead
        title="Duncan's Guide – Townsville | Best Beaches, Food & Local Attractions"
        description="Discover Townsville's best beaches, cafés, walks and hidden gems with Duncan's Guide — your AI-powered local guide to everything North Queensland."
        canonical="https://duncansguide.com/townsville"
      />
      <Helmet>

        {/* WebSite Schema */}
        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "Duncan's Guide – Townsville",
            "url": "https://duncansguide.com"
          }
          `}
        </script>

        {/* WebPage Schema */}
        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Duncan's Guide – Townsville",
            "description": "Your AI-powered local guide to Townsville.",
            "url": "https://duncansguide.com"
          }
          `}
        </script>
      </Helmet>

      {/* DO NOT render Header/Footer here — TownsvilleLayout handles them */}
      <div className="min-h-screen pt-20">
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
        <section id="seo-content">
          <SeoContentSections />
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
        <section id="faq">
          <FaqSection />
        </section>
      </div>
    </>
  );
};

export default Index;

