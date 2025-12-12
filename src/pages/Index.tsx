import { Helmet } from "react-helmet";
import SEOHead from "@/components/SEOHead";
import Hero from "@/components/Hero";
import NewsletterSection from "@/components/NewsletterSection";
import WeatherInfo from "@/components/WeatherInfo";
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
        {/* Google AdSense header slot (pending approval) */}
        <AdSensePlaceholder slot="header" />
        
        <Hero />
        
        {/* Newsletter Section - High converting email capture */}
        <NewsletterSection />
        
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
        
        {/* Google AdSense content slot (pending approval) */}
        <AdSensePlaceholder slot="content" className="my-8" />
        
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
        
        {/* Local Shop - Activity Book */}
        <LocalShopSection />
        
        {/* Newsletter House Ad - Replaces generic advertiser space */}
        <section className="container mx-auto px-4 py-8">
          <NewsletterHouseAd />
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
        
        {/* Google AdSense footer slot (pending approval) */}
        <AdSensePlaceholder slot="footer" className="mb-8" />
      </div>
    </>
  );
};

export default Index;

