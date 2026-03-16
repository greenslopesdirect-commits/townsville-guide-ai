import { Helmet } from "react-helmet";
import SEOHead from "@/components/SEOHead";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Building, Waves, Home, TreePalm, MapPin } from "lucide-react";
import ListingCard from "@/components/ListingCard";

import FlightsButton from "@/components/FlightsButton";
import LocalInsightCard from "@/components/LocalInsightCard";

// Import images
import theVilleImage from "@/assets/the-ville-resort-casino-townsville.webp";
import aquariusImage from "@/assets/aquarius-on-the-beach-townsville.webp";
import grandChancellorImage from "@/assets/grand-chancellor-hotel-townsville.webp";
import oaksImage from "@/assets/oaks-gateway-suites-townsville.webp";
import questImage from "@/assets/quest-serviced-apartments-townsville.webp";
import big4Image from "@/assets/big4-rowes-bay-holiday-park-townsville.webp";

const Accommodation = () => {
  const hotels = [
    {
      title: "The Ville Resort–Casino",
      description: "Townsville's premier oceanfront resort featuring lagoon pool, casino, multiple restaurants and stunning ocean views. Perfect for luxury getaways. Hosting the Green Energy Forum this week (March 16–18)—expect a buzzing atmosphere around the pool and restaurants.",
      image: theVilleImage,
      tags: ["Luxury", "Waterfront", "Pool"],
      features: [
        "Oceanfront rooms",
        "Resort pool with swim-up bar",
        "On-site restaurants & casino",
        "Near The Strand"
      ],
      mapUrl: "https://www.google.com/maps/search/?api=1&query=The+Ville+Resort+Casino+Townsville",
      aiPrompt: "Tell me about the amenities, pool, and location of The Ville Resort–Casino.",
      subtitle: "From $189/night"
    },
    {
      title: "Aquarius on the Beach",
      description: "Budget-friendly beachfront hotel with uninterrupted ocean views from every room. Directly opposite The Strand with kitchenettes available.",
      image: aquariusImage,
      tags: ["Budget Friendly", "Waterfront", "Value"],
      features: [
        "All rooms face the ocean",
        "Directly opposite The Strand",
        "Kitchenettes available",
        "Great value year-round"
      ],
      mapUrl: "https://www.google.com/maps/search/?api=1&query=Aquarius+on+the+Beach+Townsville",
      aiPrompt: "Tell me about the amenities, pool, and location of Aquarius on the Beach.",
      subtitle: "From $129/night"
    },
    {
      title: "Hotel Grand Chancellor",
      description: "Modern CBD high-rise with rooftop pool offering stunning city and Castle Hill views. Walk to everything — restaurants, shops, and attractions.",
      image: grandChancellorImage,
      tags: ["City Centre", "Pool", "Modern"],
      features: [
        "Rooftop pool with city views",
        "Walk to restaurants & shops",
        "Modern rooms and facilities",
        "On-site restaurant"
      ],
      mapUrl: "https://www.google.com/maps/search/?api=1&query=Hotel+Grand+Chancellor+Townsville",
      aiPrompt: "Tell me about the amenities, pool, and location of Hotel Grand Chancellor.",
      subtitle: "From $159/night"
    },
    {
      title: "Oaks Gateway Suites",
      description: "Stylish serviced apartments near the river and CBD with spacious rooms, modern amenities and beautiful views.",
      image: oaksImage,
      tags: ["Apartments", "Families", "Pool"],
      features: [
        "Large rooms and suites",
        "River or city views",
        "Pool and gym",
        "Full kitchen facilities"
      ],
      mapUrl: "https://www.google.com/maps/search/?api=1&query=Oaks+Townsville+Gateway+Suites",
      aiPrompt: "Tell me about the amenities, pool, and location of Oaks Gateway Suites.",
      subtitle: "From $169/night"
    },
    {
      title: "Quest Townsville",
      description: "Serviced apartments perfect for families, business travellers or longer stays. Marina views and full kitchen facilities.",
      image: questImage,
      tags: ["Apartments", "Business", "Families"],
      features: [
        "Marina views",
        "Full kitchenettes",
        "Laundry facilities",
        "Spacious living areas"
      ],
      mapUrl: "https://www.google.com/maps/search/?api=1&query=Quest+Townsville",
      aiPrompt: "Tell me about the amenities, pool, and location of Quest Townsville.",
      subtitle: "From $149/night",
      badge: "🐾 Schnauzer Approved",
      badgeNote: "Pet-friendly apartments are available (subject to booking)—perfect for families traveling with four-legged mates."
    },
    {
      title: "BIG4 Rowes Bay Holiday Park",
      description: "Family-friendly beachfront holiday park with cabins, caravan sites, pool and playground. Great for budget travellers and families. Note: Council camping spots at Saunders and Balgal Beach for Easter are booking out now—get in early!",
      image: big4Image,
      tags: ["Family Friendly", "Budget", "Beachfront"],
      features: [
        "Cabins and caravan sites",
        "Swimming pool",
        "Opposite the beach",
        "Playground facilities"
      ],
      mapUrl: "https://www.google.com/maps/search/?api=1&query=BIG4+Rowes+Bay+Holiday+Park+Townsville",
      aiPrompt: "Tell me about the amenities, pool, and location of BIG4 Rowes Bay Holiday Park.",
      subtitle: "From $45/night (sites)",
      badge: "🐾 Schnauzer Approved",
      badgeNote: "One of the best pet-friendly stays in Townsville with direct access to Rowes Bay walks."
    }
  ];

  return (
    <>
      <SEOHead
        title="Where to Stay in Townsville: Best Hotels & Resorts 2026"
        description="Compare the best Townsville accommodation, from luxury hotels on The Strand to family-friendly resorts and pet-friendly stays. Updated for March 2026."
        canonical="https://www.myaussieguide.com.au/accommodation"
      />
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            "name": "Townsville Accommodation",
            "description": "Best places to stay in Townsville",
            "itemListElement": hotels.map((item, index) => ({
              "@type": "ListItem",
              "position": index + 1,
              "name": item.title
            }))
          })}
        </script>
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <main className="pt-24 pb-16">
          <div className="container mx-auto px-4 max-w-6xl">
            {/* Back Button */}
            <Link to="/">
              <Button variant="ghost" className="mb-6 group" aria-label="Back to home">
                <ArrowLeft className="mr-2 w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                Back to Home
              </Button>
            </Link>

            {/* Hero Header */}
            <header className="mb-12 text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                <Building className="w-4 h-4" />
                Accommodation Guide
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
                Where to Stay in Townsville
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                From luxury oceanfront resorts to budget-friendly holiday parks, find the perfect place to stay for your Townsville adventure.
              </p>
              <p className="text-muted-foreground mt-4 max-w-3xl mx-auto">
                Flying into Townsville? See our <Link to="/townsville-airport" className="text-primary font-medium hover:underline">Townsville Airport Guide</Link> for transport options, parking tips, and arrival advice.
              </p>
            </header>

            {/* Seasonal Alert */}
            <div className="bg-amber-50 dark:bg-amber-950/30 border-2 border-amber-400 dark:border-amber-600 rounded-xl p-6 mb-12">
              <p className="text-amber-800 dark:text-amber-300 leading-relaxed">
                🗓️ <strong>March 16 Update:</strong> With only 2 weeks until the Easter break, local accommodation is filling up fast! ⚠️ <strong>Pro-Tip:</strong> If you're coming for the Cowboys game this Sunday (March 22), check for late availability in the CBD or South Townsville to be within walking distance of the stadium.
              </p>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
              {[
                { icon: <Building className="w-5 h-5" />, label: "Luxury Resorts", sublabel: "5-star options" },
                { icon: <Home className="w-5 h-5" />, label: "Family Cabins", sublabel: "Holiday parks" },
                { icon: <TreePalm className="w-5 h-5" />, label: "Budget Hostels", sublabel: "Backpacker friendly" },
                { icon: <Waves className="w-5 h-5" />, label: "Ocean Views", sublabel: "Beachfront stays" }
              ].map((stat, index) => (
                <div key={index} className="text-center p-4 rounded-2xl bg-card border-2 hover:border-primary/30 transition-colors">
                  <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary mb-2">
                    {stat.icon}
                  </div>
                  <p className="font-semibold text-foreground">{stat.label}</p>
                  <p className="text-sm text-muted-foreground">{stat.sublabel}</p>
                </div>
              ))}
            </div>

            {/* Insider Knowledge */}
            <LocalInsightCard title="Insider Knowledge" variant="insight" className="mb-12">
              <p>
                <strong>Where to Stay:</strong> Looking for that iconic skyline view? Book the <strong>Hotel Grand Chancellor</strong> 
                (locals call it the "Sugar Shaker"). For a younger vibe, check out <strong>Rambutan</strong>.
              </p>
              <p className="font-medium text-amber-700 dark:text-amber-300">
                💰 <strong>Budget Tip:</strong> Prices are dynamic! Rates can double during the V8 Supercars (July), 
                so book months in advance if travelling then.
              </p>
            </LocalInsightCard>

            {/* Hotels Grid */}
            <section className="mb-16">
              <div className="flex items-center gap-3 mb-8">
                <div className="p-2 rounded-lg bg-primary/10">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                    Featured Accommodation
                  </h2>
                  <p className="text-muted-foreground">Top-rated places to stay</p>
                </div>
              </div>

              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {hotels.map((hotel, index) => (
                  <ListingCard key={index} {...hotel} />
                ))}
              </div>
            </section>

            {/* Best Areas Section */}
            <section className="mb-16">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                Best Areas to Stay
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-6 rounded-xl border-2 bg-card">
                  <h3 className="font-semibold text-foreground mb-2">The Strand</h3>
                  <p className="text-muted-foreground text-sm">Best for ocean views, walking, beaches, and cafés. Most popular with tourists.</p>
                </div>
                <div className="p-6 rounded-xl border-2 bg-card">
                  <h3 className="font-semibold text-foreground mb-2">CBD / Palmer Street</h3>
                  <p className="text-muted-foreground text-sm">Best for restaurants, events, and convenience. Walk everywhere.</p>
                </div>
                <div className="p-6 rounded-xl border-2 bg-card">
                  <h3 className="font-semibold text-foreground mb-2">Magnetic Island</h3>
                  <p className="text-muted-foreground text-sm">Best for nature, beaches, and island relaxation. 20 min ferry.</p>
                </div>
                <div className="p-6 rounded-xl border-2 bg-card">
                  <h3 className="font-semibold text-foreground mb-2">Northern Suburbs</h3>
                  <p className="text-muted-foreground text-sm">Best for longer stays and families. Quieter, more space.</p>
                </div>
              </div>
            </section>

            {/* Flights CTA */}
            <section className="mb-12 text-center">
              <p className="text-muted-foreground mb-4">Planning your trip?</p>
              <FlightsButton size="lg" />
            </section>

          </div>
        </main>
      </div>
    </>
  );
};

export default Accommodation;
