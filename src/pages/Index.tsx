import { Helmet } from "react-helmet";
import Header from "@/components/Header";
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

  {/* WebSite Schema */}
  <script type="application/ld+json">
    {`
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "Duncan's Guide – Townsville",
      "url": "https://duncansguide.com",
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://duncansguide.com/search?q={search_term_string}",
        "query-input": "required name=search_term_string"
      }
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
      "url": "https://duncansguide.com",
      "description": "Your AI-powered local guide to Townsville: beaches, restaurants, dog parks, attractions, events and hidden gems.",
      "breadcrumb": {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://duncansguide.com"
          }
        ]
      }
    }
    `}
  </script>

  {/* Organization Schema */}
  <script type="application/ld+json">
    {`
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Duncan's Guide – Townsville",
      "url": "https://duncansguide.com",
      "logo": "https://duncansguide.com/logo.png",
      "image": "https://duncansguide.com/og-image.jpg",
      "description": "An AI-powered local guide to Townsville, showcasing the best beaches, restaurants, events, and insider tips for exploring North Queensland.",
      "email": "greenslopesdirect@gmail.com",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Townsville",
        "addressRegion": "QLD",
        "addressCountry": "Australia"
      },
      "sameAs": [
        "https://facebook.com",
        "https://instagram.com"
      ]
    }
    `}
  </script>
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
      <Footer />
      </div>
    </>
  );
};

export default Index;
