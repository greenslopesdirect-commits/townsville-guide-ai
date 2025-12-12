import { Helmet } from "react-helmet";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { triggerAiGuide, AI_PRESETS } from "@/utils/aiGuide";

const LocalTips = () => {
  return (
    <>
      <SEOHead
        title="Local Tips for Visiting Townsville - Insider Travel Guide"
        description="Essential local tips for visiting Townsville. Learn about weather patterns, stinger safety, getting around, dog-friendly spots and the best time to visit North Queensland."
        canonical="https://www.myaussieguide.com.au/townsville/local-tips"
      />
      <Helmet>

  {/* WebPage Schema */}
  <script type="application/ld+json">
    {`
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Townsville Local Tips",
      "url": "https://www.myaussieguide.com.au/townsville/local-tips",
      "description": "Local advice for visiting Townsville including weather, safety, transport, dog-friendly areas, stinger season and practical travel guidance.",
      "breadcrumb": {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://www.myaussieguide.com.au"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Local Tips",
            "item": "https://www.myaussieguide.com.au/townsville/local-tips"
          }
        ]
      }
    }
    `}
  </script>

  {/* FAQ Schema */}
  <script type="application/ld+json">
    {`
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "When is the best time to visit Townsville?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The best time to visit Townsville is during the dry season from May to October, when humidity is low and temperatures range from 20–28°C."
          }
        },
        {
          "@type": "Question",
          "name": "Is Townsville safe for swimming during stinger season?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, but only in designated netted swimming enclosures. Stinger season runs from November to April, and it is recommended to wear stinger suits at beaches and when snorkeling on Magnetic Island."
          }
        },
        {
          "@type": "Question",
          "name": "Is Townsville dog-friendly?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Townsville is extremely dog-friendly with multiple off-leash parks, dog-friendly beaches at certain times of the day, and several cafés that welcome pets."
          }
        },
        {
          "@type": "Question",
          "name": "How do I get around Townsville?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Townsville is easy to navigate with a car, and parking is generally convenient. Local buses cover most areas, and rideshare services operate throughout the city."
          }
        },
        {
          "@type": "Question",
          "name": "What should I know about Townsville weather?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Townsville has a tropical climate with warm temperatures year-round. Expect dry, sunny days May–October and tropical showers November–April."
          }
        }
      ]
    }
    `}
  </script>

</Helmet>


      <div className="min-h-screen flex flex-col bg-background">
        
        <main className="flex-grow pt-20">
          <div className="container mx-auto px-4 py-12 max-w-4xl">
            
            {/* Intro */}
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Local Tips for Visiting Townsville
            </h1>
            
            <p className="text-lg text-muted-foreground mb-12 leading-relaxed">
              Townsville has its own rhythm, weather patterns and local quirks. These simple tips will help you enjoy your visit like a local — staying safe, keeping cool and making the most of North Queensland's tropical lifestyle.
            </p>

            {/* Section 1: Best Time of Year */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-4 text-foreground">
                Best Time of Year to Visit
              </h2>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Townsville has two main seasons:
              </p>
              <div className="mb-4">
                <p className="font-semibold text-foreground mb-2">Dry Season (May–October):</p>
                <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4 mb-4">
                  <li>Sunny days, low humidity</li>
                  <li>Best for outdoor activities, hiking and beaches</li>
                </ul>
                <p className="font-semibold text-foreground mb-2">Wet Season (November–April):</p>
                <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                  <li>Tropical showers and storms</li>
                  <li>Lush green landscapes</li>
                  <li>Higher humidity</li>
                </ul>
              </div>
              <div className="bg-muted/30 p-4 rounded-lg">
                <p className="font-semibold text-foreground mb-1">Local Tip:</p>
                <p className="text-muted-foreground">The shoulder months (April–May and September–October) often give the best mix of warmth and comfort.</p>
              </div>
            </section>

            {/* Section 2: Staying Safe in the Heat */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-4 text-foreground">
                Staying Safe in the Heat
              </h2>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Townsville is warm year-round, but it can get very hot in summer.
              </p>
              <div className="mb-4">
                <p className="font-semibold text-foreground mb-2">Tips:</p>
                <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                  <li>Walk early morning or late afternoon</li>
                  <li>Bring water for all outdoor activities</li>
                  <li>Wear a hat, sunglasses and sunscreen</li>
                  <li>Avoid the sun between 11am and 3pm in summer</li>
                </ul>
              </div>
              <div className="bg-muted/30 p-4 rounded-lg">
                <p className="font-semibold text-foreground mb-1">Local Tip:</p>
                <p className="text-muted-foreground">If you're walking Castle Hill, aim for sunrise or sunset.</p>
              </div>
            </section>

            {/* Section 3: Stinger Season */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-4 text-foreground">
                Stinger Season Advice
              </h2>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                North Queensland has marine stingers between November and April.
              </p>
              <div className="mb-4">
                <p className="font-semibold text-foreground mb-2">Tips:</p>
                <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                  <li>Swim inside stinger enclosures</li>
                  <li>Follow beach signage</li>
                  <li>Use vinegar stations if needed</li>
                  <li>Avoid snorkelling outside stinger season unless wearing a suit</li>
                </ul>
              </div>
              <div className="bg-muted/30 p-4 rounded-lg">
                <p className="font-semibold text-foreground mb-1">Local Tip:</p>
                <p className="text-muted-foreground">The Rockpool on The Strand is safe year-round.</p>
              </div>
            </section>

            {/* Section 4: Getting Around */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-4 text-foreground">
                Getting Around Townsville
              </h2>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Townsville is spread out, but easy to navigate.
              </p>
              <div className="mb-4">
                <p className="font-semibold text-foreground mb-2">Transport options:</p>
                <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                  <li>Driving is the fastest and easiest</li>
                  <li>Parking is generally easy outside CBD</li>
                  <li>Ferries run regularly to Magnetic Island</li>
                  <li>Walking is great on The Strand and foreshore areas</li>
                </ul>
              </div>
              <div className="bg-muted/30 p-4 rounded-lg">
                <p className="font-semibold text-foreground mb-1">Local Tip:</p>
                <p className="text-muted-foreground">You can drive to the top of Castle Hill — many visitors don't realise this.</p>
              </div>
            </section>

            {/* Section 5: Dog-Friendly Tips */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-4 text-foreground">
                Dog-Friendly Townsville Tips
              </h2>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Townsville is extremely dog-friendly, especially along the coast.
              </p>
              <div className="mb-4">
                <p className="font-semibold text-foreground mb-2">Tips:</p>
                <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                  <li>Check signage for off-leash zones</li>
                  <li>Paws can burn — touch the pavement first</li>
                  <li>Always bring water for your dog</li>
                  <li>Many cafés have water bowls — just ask</li>
                </ul>
              </div>
              <div className="bg-muted/30 p-4 rounded-lg">
                <p className="font-semibold text-foreground mb-1">Local Tip:</p>
                <p className="text-muted-foreground">Rowes Bay and Pallarenda have some of the best dog-friendly spaces.</p>
              </div>
            </section>

            {/* Section 6: Weather & Cyclone Season */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-4 text-foreground">
                Weather & Cyclone Season
              </h2>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Cyclones are part of life in North Queensland, though direct hits are rare.
              </p>
              <div className="mb-4">
                <p className="font-semibold text-foreground mb-2">Tips:</p>
                <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                  <li>Cyclone season runs November–April</li>
                  <li>Follow local updates if travelling in summer</li>
                  <li>Most heavy rain passes quickly</li>
                </ul>
              </div>
              <div className="bg-muted/30 p-4 rounded-lg">
                <p className="font-semibold text-foreground mb-1">Local Tip:</p>
                <p className="text-muted-foreground">Townsville locals don't panic at every warning — but they do prepare.</p>
              </div>
            </section>

            {/* Section 7: Ask the AI */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-4 text-foreground">
                Ask the AI for Personalised Advice
              </h2>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Your AI guide can give real-time tips based on weather, time of day and your preferences.
              </p>
              <div className="mb-6">
                <p className="font-semibold text-foreground mb-2">Try asking:</p>
                <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                  <li>"Is today a good day for the beach?"</li>
                  <li>"Where should I walk with my dog this afternoon?"</li>
                  <li>"What can I do this evening near The Strand?"</li>
                  <li>"What's safe during stinger season?"</li>
                </ul>
              </div>
              <div className="text-center">
                <Button onClick={() => triggerAiGuide(AI_PRESETS.planDay)} size="lg" className="gap-2">
                  Ask the AI Guide
                </Button>
              </div>
            </section>

            {/* Back to Home */}
            <div className="text-center mt-12">
              <Button variant="outline" size="lg" asChild>
                <Link to="/townsville">← Back to Home</Link>
              </Button>
            </div>

          </div>
        </main>

      </div>
    </>
  );
};

export default LocalTips;
