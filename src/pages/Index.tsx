import { Helmet } from "react-helmet";
import SEOHead from "@/components/SEOHead";
import Hero from "@/components/Hero";
import NewsletterSection from "@/components/NewsletterSection";
import WeatherWidget from "@/components/WeatherWidget";  // ✅ Correct import
import WeatherInfo from "@/components/WeatherInfo";       // Still here for testing
import QuickAccess from "@/components/QuickAccess";
import TopPicks from "@/components/TopPicks";
import SeoContentSections from "@/components/SeoContentSections";
import VideoSection from "@/components/VideoSection";
import FoodDrink from "@/components/FoodDrink";
import DogFriendly from "@/components/DogFriendly";
import EventsOn from "@/components/EventsOn";
import Accommodation from "@/components/Accommodation";
import LocalShopSection from "@/components/LocalShopSection";
import MapSection from "@/components/MapSection";
import AboutSection from "@/components/AboutSection";
import FaqSection from "@/components/FaqSection";
import AdSensePlaceholder from "@/components/AdSensePlaceholder";
import NewsletterHouseAd from "@/components/NewsletterHouseAd";

const Index = () => {
  return (
    <>
      <SEOHead
        title="MyAussieGuide – Townsville | Best Beaches, Food & Local Attractions"
        description="Discover Townsville's best beaches, cafés, walks and hidden gems with MyAussieGuide — your AI-powered local guide to everything North Queensland."
        canonical="https://duncansguide.com/townsville"
      />

      <Helmet>
        {/* WebSite Schema */}
        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "MyAussieGuide – Townsville",
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
            "name": "MyAussieGuide – Townsville",
            "description": "Your AI-powered local guide to Townsville.",
            "url": "https://duncansguide.com"
          }
          `}
        </script>
      </Helmet>

      {/* DO NOT render Header/Footer here — TownsvilleLayout handles them */}
      <div className="min-h-screen pt-0">

        {/* Google AdSense header slot */}
        <AdSensePlaceholder slot="header" />

        <Hero />

        {/* Newsletter Section */}
        <NewsletterSection />

        {/* WEATHER SECTION */}
        <section id="weather">
          <div className="mb-6">
            <WeatherInfo /> {/* Existing system – keep until new widget works */}
          </div>
          <div className="mb-6">
            <WeatherWidget /> {/* New weather widget */}
          </div>
        </section>

        {/* Quick Access */}
        <section id="quick-access">
          <QuickAccess />
        </section>

        {/* Top Picks */}
        <section id="top-picks">
          <TopPicks />
        </section>

        {/* SEO Content */}
        <section id="seo-content">
          <SeoContentSections />
        </section>

        {/* AdSense */}
        <AdSensePlaceholder slot="content" className="my-8" />

        {/* Video Section */}
        <section id="video">
          <VideoSection />
        </section>

        {/* Food & Drink */}
        <section id="food-drink">
          <FoodDrink />
        </section>

        {/* Dog Friendly */}
        <section id="dog-friendly">
          <DogFriendly />
        </section>

        {/* Events */}
        <section id="events">
          <EventsOn />
        </section>

        {/* Accommodation */}
        <section id="accommodation">
          <Accommodation />
        </section>

        {/* Local Shop */}
        <LocalShopSection />

        {/* Newsletter House Ad */}
        <section className="container mx-auto px-4 py-8">
          <NewsletterHouseAd />
        </section>

        {/* Map */}
        <section id="map">
          <MapSection />
        </section>

        {/* About */}
        <section id="about">
          <AboutSection />
        </section>

        {/* FAQ */}
        <section id="faq">
          <FaqSection />
        </section>

        {/* AdSense Footer */}
        <AdSensePlaceholder slot="footer" className="mb-8" />
      </div>
    </>
  );
};

export default Index;
