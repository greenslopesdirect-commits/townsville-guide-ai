import WeatherWidget from "@/components/WeatherWidget";

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
import CommunityTrustSection from "@/components/TestimonialSection";
import LocalInsightCard from "@/components/LocalInsightCard";

const Index = () => {
  return (
    <>
      <SEOHead
        title="MyAussieGuide – Townsville | Best Beaches, Food, Walks & Local Tips"
        description="Discover Townsville's beaches, cafés, walks, dog-friendly spots and local attractions with MyAussieGuide — your smart local guide to North Queensland."
        canonical="https://www.myaussieguide.com.au/townsville"
      />
      <Helmet>

        {/* WebSite Schema */}
        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "MyAussieGuide – Townsville",
            "url": "https://www.myaussieguide.com.au"
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
            "url": "https://www.myaussieguide.com.au"
          }
          `}
        </script>

        {/* FAQPage Schema - matches FaqSection content */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What's the best time to visit Townsville?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Dry season May–October is ideal for sunny days and comfortable temperatures, but Townsville's tropical climate means the city is warm and welcoming year-round."
                }
              },
              {
                "@type": "Question",
                "name": "Is Townsville family-friendly?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes — Townsville is extremely family-friendly. Riverway Lagoons, Castle Hill, The Strand waterpark, and Billabong Sanctuary are all great for families with kids of all ages."
                }
              },
              {
                "@type": "Question",
                "name": "What's the best free thing to do in Townsville?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Watching sunset from The Strand beachfront or climbing Castle Hill Lookout for panoramic views are both completely free and unforgettable experiences."
                }
              },
              {
                "@type": "Question",
                "name": "Is Townsville dog-friendly?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Very — Townsville has several off-leash dog parks including Rowes Bay, dog-friendly beach zones along The Strand, and many pet-friendly cafés and restaurants."
                }
              },
              {
                "@type": "Question",
                "name": "How do I get to Magnetic Island from Townsville?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "SeaLink ferries depart daily from the Breakwater Terminal in Townsville. The journey takes just 20 minutes, with multiple departures throughout the day."
                }
              }
            ]
          })}
        </script>
      </Helmet>

      {/* DO NOT render Header/Footer here — TownsvilleLayout handles them */}
      <div className="min-h-screen pt-0">
        {/* Google AdSense header slot (pending approval) */}
        <AdSensePlaceholder slot="header" />
        
        <Hero />
        
        {/* Local Insight - Introduction */}
        <div className="container mx-auto px-4 max-w-4xl py-8">
          <LocalInsightCard title="More Than a Gateway" variant="insight">
            <p>
              Townsville is more than just the gateway to Magnetic Island—it's the events capital of the North. 
              While we love our laid-back tropical lifestyle, the city transforms into a high-octane playground during the dry season.
            </p>
            <p className="font-medium text-amber-700 dark:text-amber-300">
              🌴 We run on "Tropical Time," so slow down, check the trading hours, and enjoy the rhythm of the North.
            </p>
          </LocalInsightCard>
        </div>
        
        {/* Newsletter Section - High converting email capture with PDF offer */}
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
        
        {/* Local Shop - Activity Book Waitlist
<LocalShopSection />
*/}
       
        <section id="map">
          <MapSection />
        </section>
        <section id="about">
          <AboutSection />
        </section>
        <section id="faq">
          <FaqSection />
        </section>
        
        {/* Community Trust Section */}
        <CommunityTrustSection />
        
        {/* Google AdSense footer slot (pending approval) */}
        <AdSensePlaceholder slot="footer" className="mb-8" />
      </div>
    </>
  );
};

export default Index;

