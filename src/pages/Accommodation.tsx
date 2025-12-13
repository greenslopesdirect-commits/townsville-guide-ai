import { Helmet } from "react-helmet";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { MapPin } from "lucide-react";
import { triggerAiGuide } from "@/utils/aiGuide";
import FlightsButton from "@/components/FlightsButton";
import AdvertiserAdBlock from "@/components/AdvertiserAdBlock";
import AdSensePlaceholder from "@/components/AdSensePlaceholder";
import AccommodationCard from "@/components/AccommodationCard";

// Hotel images
import theVilleImage from "@/assets/the-ville-resort-casino-townsville.webp";
import aquariusImage from "@/assets/aquarius-beachfront-townsville.png";
import grandChancellorImage from "@/assets/hotel-grand-chancellor-townsville.png";

const Accommodation = () => {
  const handleAskAI = () => {
    triggerAiGuide("Recommend accommodation near The Strand in Townsville");
  };

  return (
    <>
      <SEOHead
        title="Townsville Accommodation Guide - Hotels, Resorts & Holiday Parks"
        description="Find the best places to stay in Townsville. From beachfront hotels and luxury resorts to serviced apartments and family-friendly holiday parks."
        canonical="https://www.myaussieguide.com.au/townsville/accommodation"
      />
      <Helmet>

  {/* WebPage Schema */}
  <script type="application/ld+json">
    {`
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Townsville Accommodation Guide",
      "url": "https://www.myaussieguide.com.au/townsville/accommodation",
      "description": "Guide to Townsville's best accommodation including hotels, resorts, holiday parks, apartments and budget-friendly stays.",
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
            "name": "Accommodation",
            "item": "https://www.myaussieguide.com.au/townsville/accommodation"
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
          "name": "Where should I stay in Townsville?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Townsville offers a range of accommodation options including beachfront hotels on The Strand, luxury resorts, family-friendly holiday parks, and serviced apartments close to the CBD."
          }
        },
        {
          "@type": "Question",
          "name": "What is the best area to stay in Townsville for families?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Families often stay near The Strand or in family-friendly holiday parks with pools, playgrounds and cabins offering more space."
          }
        },
        {
          "@type": "Question",
          "name": "Are there dog-friendly accommodation options in Townsville?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, several holiday parks, Airbnb properties and some boutique hotels in Townsville offer pet-friendly accommodation. Always check individual pet policies."
          }
        },
        {
          "@type": "Question",
          "name": "What is the best luxury accommodation in Townsville?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Luxury travellers often choose resorts and premium hotels along The Strand or riverfront apartment hotels near the CBD, offering ocean views and modern facilities."
          }
        },
        {
          "@type": "Question",
          "name": "Are there budget-friendly places to stay in Townsville?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, Townsville has many affordable motels, backpacker hostels and budget hotels located close to the city centre and transport options."
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
              Townsville Accommodation Guide
            </h1>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Townsville offers a wide range of accommodation, from beachfront hotels to serviced apartments, budget options and family-friendly holiday parks. This guide highlights the best places to stay depending on your budget, travel style and preferred location.
            </p>

            {/* Featured Accommodation Cards */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6 text-foreground">Featured Stays</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <AccommodationCard
                  title="The Ville Resort–Casino"
                  description="Luxury oceanfront resort with lagoon pool, casino, and on-site dining near The Strand."
                  image={theVilleImage}
                  priceFrom="From $189/night"
                  facilities={["wifi", "pool", "parking"]}
                />
                <AccommodationCard
                  title="Aquarius on the Beach"
                  description="Budget-friendly beachfront hotel with uninterrupted ocean views and kitchenettes."
                  image={aquariusImage}
                  priceFrom="From $129/night"
                  facilities={["wifi", "parking"]}
                />
                <AccommodationCard
                  title="Hotel Grand Chancellor"
                  description="Modern CBD high-rise with rooftop pool and stunning city views. Walk to everything."
                  image={grandChancellorImage}
                  priceFrom="From $159/night"
                  facilities={["wifi", "pool", "breakfast"]}
                />
              </div>
            </section>

            {/* Section 1: The Ville Resort-Casino */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-4 text-foreground">
                The Ville Resort–Casino (Luxury & Ocean Views)
              </h2>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Townsville's most premium accommodation option, featuring ocean views, lagoon pool and on-site dining.
              </p>
              <div className="mb-4">
                <p className="font-semibold text-foreground mb-2">Highlights:</p>
                <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                  <li>Oceanfront rooms</li>
                  <li>Resort pool with swim-up bar</li>
                  <li>On-site restaurants and casino</li>
                  <li>Near The Strand and Breakwater</li>
                </ul>
              </div>
              <div className="bg-muted/30 p-4 rounded-lg mb-4">
                <p className="font-semibold text-foreground mb-1">Local Tip:</p>
                <p className="text-muted-foreground">Great for couples, special occasions and relaxation-focused stays.</p>
              </div>
              <Button variant="outline" size="sm" asChild>
                <a 
                  href="https://www.google.com/maps/search/?api=1&query=The+Ville+Resort+Casino+Townsville" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2"
                >
                  <MapPin className="w-4 h-4" />
                  View on Map
                </a>
              </Button>
            </section>

            {/* Section 2: Aquarius on the Beach */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-4 text-foreground">
                Aquarius on the Beach (Best Value for Beachfront)
              </h2>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                A popular budget-friendly beachfront hotel offering uninterrupted ocean views.
              </p>
              <div className="mb-4">
                <p className="font-semibold text-foreground mb-2">Highlights:</p>
                <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                  <li>All rooms face the ocean</li>
                  <li>Directly opposite The Strand</li>
                  <li>Some rooms include kitchenettes</li>
                  <li>Good value year-round</li>
                </ul>
              </div>
              <Button variant="outline" size="sm" asChild>
                <a 
                  href="https://www.google.com/maps/search/?api=1&query=Aquarius+on+the+Beach+Townsville" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2"
                >
                  <MapPin className="w-4 h-4" />
                  View on Map
                </a>
              </Button>
            </section>

            {/* Section 3: Hotel Grand Chancellor */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-4 text-foreground">
                Hotel Grand Chancellor (City Centre Convenience)
              </h2>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                A modern high-rise hotel in the CBD with excellent rooftop views.
              </p>
              <div className="mb-4">
                <p className="font-semibold text-foreground mb-2">Highlights:</p>
                <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                  <li>Rooftop pool with city views</li>
                  <li>Close to restaurants and shops</li>
                  <li>Modern rooms and facilities</li>
                </ul>
              </div>
              <div className="bg-muted/30 p-4 rounded-lg mb-4">
                <p className="font-semibold text-foreground mb-1">Local Tip:</p>
                <p className="text-muted-foreground">Ideal if you want to walk everywhere in the city.</p>
              </div>
              <Button variant="outline" size="sm" asChild>
                <a 
                  href="https://www.google.com/maps/search/?api=1&query=Hotel+Grand+Chancellor+Townsville" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2"
                >
                  <MapPin className="w-4 h-4" />
                  View on Map
                </a>
              </Button>
            </section>

            {/* Section 4: Quest Townsville */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-4 text-foreground">
                Quest Townsville (Serviced Apartments)
              </h2>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Great for families, longer stays or business travellers needing space and kitchen facilities.
              </p>
              <div className="mb-4">
                <p className="font-semibold text-foreground mb-2">Highlights:</p>
                <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                  <li>Marina views</li>
                  <li>Kitchenettes</li>
                  <li>Laundry facilities</li>
                  <li>Spacious rooms</li>
                </ul>
              </div>
              <Button variant="outline" size="sm" asChild>
                <a 
                  href="https://www.google.com/maps/search/?api=1&query=Quest+Townsville" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2"
                >
                  <MapPin className="w-4 h-4" />
                  View on Map
                </a>
              </Button>
            </section>

            {/* Section 5: Oaks Townsville */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-4 text-foreground">
                Oaks Townsville Gateway Suites (City & River Views)
              </h2>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Stylish serviced apartments located near the river and CBD.
              </p>
              <div className="mb-4">
                <p className="font-semibold text-foreground mb-2">Highlights:</p>
                <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                  <li>Large rooms and suites</li>
                  <li>River or city views</li>
                  <li>Pool and modern amenities</li>
                </ul>
              </div>
              <Button variant="outline" size="sm" asChild>
                <a 
                  href="https://www.google.com/maps/search/?api=1&query=Oaks+Townsville+Gateway+Suites" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2"
                >
                  <MapPin className="w-4 h-4" />
                  View on Map
                </a>
              </Button>
            </section>

            {/* Section 6: BIG4 Rowes Bay */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-4 text-foreground">
                BIG4 Rowes Bay Holiday Park (Family-Friendly & Budget)
              </h2>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                A great option for families, campers and those wanting a relaxed beachfront location.
              </p>
              <div className="mb-4">
                <p className="font-semibold text-foreground mb-2">Highlights:</p>
                <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                  <li>Cabins and caravan sites</li>
                  <li>Swimming pool</li>
                  <li>Opposite the beach</li>
                  <li>Playground and family facilities</li>
                </ul>
              </div>
              <Button variant="outline" size="sm" asChild>
                <a 
                  href="https://www.google.com/maps/search/?api=1&query=BIG4+Rowes+Bay+Holiday+Park+Townsville" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2"
                >
                  <MapPin className="w-4 h-4" />
                  View on Map
                </a>
              </Button>
            </section>

            {/* Section 7: Best Areas to Stay */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-4 text-foreground">
                Best Areas to Stay in Townsville
              </h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">The Strand</h3>
                  <p className="text-muted-foreground">Best for ocean views, walking, beaches, cafés.</p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">CBD / Palmer Street</h3>
                  <p className="text-muted-foreground">Best for restaurants, events and convenience.</p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Magnetic Island</h3>
                  <p className="text-muted-foreground">Best for nature, beaches and relaxation.</p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Suburbs (Riverside, Douglas, Annandale)</h3>
                  <p className="text-muted-foreground">Best for longer stays and families.</p>
                </div>
              </div>
            </section>

            {/* Section 8: Ask the AI */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-4 text-foreground">
                Ask the AI for Accommodation Suggestions
              </h2>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Your AI guide can recommend the best places to stay based on:
              </p>
              <div className="mb-6">
                <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4 mb-4">
                  <li>Budget</li>
                  <li>Family size</li>
                  <li>Preferred location</li>
                  <li>Transport needs</li>
                  <li>Accessibility</li>
                </ul>
                <p className="font-semibold text-foreground mb-2">Try asking:</p>
                <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                  <li>"Where should I stay in Townsville with kids?"</li>
                  <li>"What's the best hotel near The Strand?"</li>
                  <li>"Which hotels have the best ocean views?"</li>
                </ul>
              </div>
              <div className="text-center space-y-4">
                <Button onClick={handleAskAI} size="lg" className="gap-2">
                  Ask the AI Guide
                </Button>
                <div>
                  <FlightsButton size="lg" />
                </div>
              </div>
            </section>

            {/* Advertiser Ad Block */}
            <div className="my-12">
              <AdvertiserAdBlock />
            </div>

            {/* Google AdSense footer slot (pending approval) */}
            <AdSensePlaceholder slot="footer" className="mb-8" />

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

export default Accommodation;
