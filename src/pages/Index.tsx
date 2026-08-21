import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import SEOHead from "@/components/SEOHead";
import Hero from "@/components/Hero";
import WorthVisiting from "@/components/WorthVisiting";
import LocalTrustIntro from "@/components/LocalTrustIntro";
import CurrentTownsvilleWeather from "@/components/CurrentTownsvilleWeather";
import StartPlanning from "@/components/StartPlanning";
import EssentialExperiences from "@/components/EssentialExperiences";
import NewsletterSection from "@/components/NewsletterSection";
import {
  ThingsToDoCta,
  PlanYourVisit,
  ExploreByInterest,
  WhereToStay,
  DayTrips,
  WeatherAndWater,
  WhatsOn,
  PracticalResources,
  ForLocals,
} from "@/components/HomeHubs";
import VideoSection from "@/components/VideoSection";
import AboutSection from "@/components/AboutSection";
import FaqSection from "@/components/FaqSection";
import AdSensePlaceholder from "@/components/AdSensePlaceholder";
import CommunityTrustSection from "@/components/TestimonialSection";

const Index = () => {
  return (
    <>
      <SEOHead
        title="Townsville Guide | Things to Do, Attractions & Local Travel Tips"
        description="Plan your Townsville visit with a local guide to things to do, The Strand, Castle Hill, Magnetic Island, beaches, food, accommodation, family activities and day trips."
        canonical="https://www.townsvilleguide.com.au/"
      />
      <Helmet>
        {/* WebSite Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "Townsville Guide",
            url: "https://www.townsvilleguide.com.au",
          })}
        </script>

        {/* WebPage Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Townsville Guide | Things to Do, Attractions & Local Travel Tips",
            description:
              "An independent local visitor guide to Townsville: things to do, The Strand, Castle Hill, Magnetic Island day trips, beaches, food, accommodation and practical planning.",
            url: "https://www.townsvilleguide.com.au",
          })}
        </script>

        {/* FAQPage Schema — matches the visible FAQ section below */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "What's the best time to visit Townsville?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Dry season May–October is ideal for sunny days and comfortable temperatures, but Townsville's tropical climate means the city is warm and welcoming year-round.",
                },
              },
              {
                "@type": "Question",
                name: "Is Townsville family-friendly?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes — Townsville is extremely family-friendly. Riverway Lagoons, Castle Hill, The Strand waterpark, and Billabong Sanctuary are all great for families with kids of all ages.",
                },
              },
              {
                "@type": "Question",
                name: "What's the best free thing to do in Townsville?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Watching sunset from The Strand beachfront or heading up to the Castle Hill lookout for panoramic views are both free and easy to fit into a visit.",
                },
              },
              {
                "@type": "Question",
                name: "Is Townsville dog-friendly?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Very — Townsville has several off-leash dog parks including Rowes Bay, dog-friendly beach zones along The Strand, and many pet-friendly cafés and restaurants.",
                },
              },
              {
                "@type": "Question",
                name: "How do I get to Magnetic Island from Townsville?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Passenger ferries run daily from the Breakwater Terminal in Townsville and the crossing is short, with several departures through the day. Check current timetables and fares before you travel.",
                },
              },
              {
                "@type": "Question",
                name: "Is Townsville worth visiting?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, if you want a relaxed, less-touristy alternative to Cairns or the Whitsundays. The Strand, Castle Hill and Magnetic Island cover the essentials, and Townsville works best as an unhurried two-to-four-day stop rather than a packed week.",
                },
              },
              {
                "@type": "Question",
                name: "How many days do I need in Townsville?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "One focused day covers the essentials. Two days lets you add Magnetic Island properly. Three or more gives room for Paluma, the northern beaches or a slower pace.",
                },
              },
              {
                "@type": "Question",
                name: "Can I see Townsville in one day?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, if you pick a handful of highlights rather than trying to cover everything — The Strand, Castle Hill and a relaxed lunch make a realistic day. Our Townsville in One Day itinerary sets out an hour-by-hour plan.",
                },
              },
              {
                "@type": "Question",
                name: "Can I visit Townsville without a car?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, particularly if you stay around The Strand, North Ward or the CBD — most first-time experiences and the Magnetic Island ferry are walkable from there. Regional day trips like Paluma are much harder without one.",
                },
              },
            ],
          })}
        </script>
      </Helmet>

      {/* DO NOT render Header/Footer here — TownsvilleLayout handles them */}
      <div className="min-h-screen pt-0">
        <AdSensePlaceholder slot="header" />

        {/* Hero — includes the Townsville Guide AI search */}
        <Hero />

        <WorthVisiting />

        <LocalTrustIntro />

        <section className="px-4 pb-6 md:pb-8">
          <div className="container mx-auto max-w-5xl">
            <CurrentTownsvilleWeather variant="compact" />
          </div>
        </section>

        {/* Primary visitor pathways */}
        <StartPlanning />

        <EssentialExperiences />

        <ThingsToDoCta />

        {/* Weekend cost calculator */}
        <NewsletterSection />

        <PlanYourVisit />

        <ExploreByInterest />

        <ForLocals />

        <WhereToStay />

        <DayTrips />

        <WeatherAndWater />

        <WhatsOn />

        <AdSensePlaceholder slot="content" className="my-8" />

        <PracticalResources />


        {/* Attraction status note */}
        <div className="container mx-auto px-4 max-w-4xl pb-4">
          <p className="text-sm text-muted-foreground text-center">
            Planning around the aquarium? The Great Barrier Reef Aquarium, formerly known as Reef
            HQ, is closed for redevelopment —{" "}
            <Link to="/reef-hq-townsville" className="text-primary hover:underline">
              see the current status
            </Link>
            .
          </p>
        </div>

        <section id="video">
          <VideoSection />
        </section>

        <section id="about">
          <AboutSection />
        </section>

        <section id="faq">
          <FaqSection />
        </section>

        <CommunityTrustSection />

        <AdSensePlaceholder slot="footer" className="mb-8" />
      </div>
    </>
  );
};

export default Index;
