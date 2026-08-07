import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import SEOHead from "@/components/SEOHead";
import Hero from "@/components/Hero";
import LocalTrustIntro from "@/components/LocalTrustIntro";
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
            ],
          })}
        </script>
      </Helmet>

      {/* DO NOT render Header/Footer here — TownsvilleLayout handles them */}
      <div className="min-h-screen pt-0">
        <AdSensePlaceholder slot="header" />

        {/* Hero — includes the Townsville Guide AI search */}
        <Hero />

        <LocalTrustIntro />

        {/* Primary visitor pathways */}
        <StartPlanning />

        <EssentialExperiences />

        <ThingsToDoCta />

        {/* Weekend cost calculator */}
        <NewsletterSection />

        <PlanYourVisit />

        <ExploreByInterest />

        <WhereToStay />

        <DayTrips />

        <WeatherAndWater />

        <WhatsOn />

        <AdSensePlaceholder slot="content" className="my-8" />

        <PracticalResources />

        <ForLocals />

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
