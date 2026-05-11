import { Link } from "react-router-dom";
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
import MapSection from "@/components/MapSection";
import AboutSection from "@/components/AboutSection";
import FaqSection from "@/components/FaqSection";
import AdSensePlaceholder from "@/components/AdSensePlaceholder";
import CommunityTrustSection from "@/components/TestimonialSection";
import LocalInsightCard from "@/components/LocalInsightCard";

const Index = () => {
  return (
    <>
      {/* UPDATE: Revised for Evergreen/February Strategy */}
      <SEOHead
        title="Townsville Guide 2026 | Things to Do, Events & Local Tips"
        description="Discover the best of Townsville in May 2026. Updated local guide for events, Cowboys game days, Magnetic Island trips, and stinger safety."
        canonical="https://www.myaussieguide.com.au/"
      />
      <Helmet>

        {/* WebSite Schema */}
        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "My Aussie Guide: Townsville & North Queensland",
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
            "name": "My Aussie Guide: Townsville & North Queensland",
            "description": "Your AI-powered local guide to Townsville and North Queensland.",
            "url": "https://www.myaussieguide.com.au"
          }
          `}
        </script>

        {/* FAQPage Schema */}
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
           <LocalInsightCard title="The 'Perfect Dry' Has Arrived" variant="insight">
               <p>
                 The <strong>"Perfect Dry"</strong> has arrived. This week, we're gearing up for the massive <strong>Caravan & 4x4 Expo at Reid Park (May 15–17)</strong> and counting down to the <strong>Dream Fields Festival on May 23</strong>. If you're heading to Brisbane for Magic Round, safe travels — otherwise, we'll see you at the stadium for the <strong>Rabbitohs clash on May 24</strong>!
                 Arriving by air? Our <Link to="/townsville-airport" className="text-primary font-medium hover:underline">Townsville Airport Guide</Link> covers everything you need to know before landing.
               </p>
              <p className="font-medium text-amber-700 dark:text-amber-300">
               🌴 We run on "Tropical Time," so slow down, check the trading hours, and enjoy the rhythm of the North.
             </p>
           </LocalInsightCard>
        </div>
        
        {/* Newsletter Section */}
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

        {/* Wildcard "Did You Know?" Tip */}
        <div className="container mx-auto px-4 max-w-4xl py-6">
          <div className="bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800 rounded-2xl p-5 sm:p-6 flex gap-4 items-start">
            <span className="text-2xl shrink-0" aria-hidden="true">💡</span>
            <div>
              <h3 className="font-bold text-amber-900 dark:text-amber-200 text-base sm:text-lg">Did You Know?</h3>
              <p className="text-amber-800 dark:text-amber-300 text-sm sm:text-base mt-1 leading-relaxed">
                <strong>May 10:</strong> Celebrate Mother's Day with a sunrise walk at <strong>Rossiter Park</strong> or the <strong>Colour Frenzy at Riverway</strong> — both are great local traditions.
              </p>
            </div>
          </div>
        </div>

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

        {/* The Ville Today */}
        <section className="py-10 sm:py-16 px-3 sm:px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="bg-background border-2 border-border/40 rounded-2xl p-6 sm:p-8 space-y-3">
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">The Ville Today 🌴</h2>
                <span className="text-sm text-muted-foreground font-medium">(Updated: May 4, 2026)</span>
              </div>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                Heading to the <strong>Cowboys vs Eels game on May 8</strong>? The CBD will be busy from late afternoon. Plan to walk across <strong>Lowths Bridge before the 4:30 PM closure</strong> if you're parking in the city.
              </p>
            </div>

            {/* Friday Night Footy Local Tip */}
            <div className="mt-6 bg-blue-50 dark:bg-blue-950/30 border-2 border-blue-300 dark:border-blue-700 rounded-2xl p-5 sm:p-6">
              <p className="text-base sm:text-lg text-blue-800 dark:text-blue-300 font-medium leading-relaxed">
                🏉 Heads-Up Friday May 8: Cowboys vs Eels at QCB Stadium — <strong>8:00 PM kick-off</strong> (gates open 6:30 PM). Lowths Bridge closes at <strong>4:30 PM</strong>, so plan parking, dinner bookings and your walk across early.
              </p>
            </div>
          </div>
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
        
        {/* Community Trust Section */}
        <CommunityTrustSection />
        
        {/* Google AdSense footer slot (pending approval) */}
        <AdSensePlaceholder slot="footer" className="mb-8" />
      </div>
    </>
  );
};

export default Index;
