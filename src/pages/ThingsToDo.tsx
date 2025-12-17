import { Helmet } from "react-helmet";
import SEOHead from "@/components/SEOHead";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Mountain, Compass, Camera, Users, MapPin, Palmtree, Building2, Dog, Clock } from "lucide-react";
import ListingCard from "@/components/ListingCard";
import HeatSafetyAlert from "@/components/HeatSafetyAlert";
import NewsletterCTA from "@/components/NewsletterCTA";
import LocalInsightCard from "@/components/LocalInsightCard";

// Import images
import castleHillImage from "@/assets/castle-hill-townsville.webp";
import magneticIslandImage from "@/assets/magnetic-island-townsville.webp";
import billabongImage from "@/assets/billabong-sanctuary-townsville.webp";
import jezzineImage from "@/assets/jezzine-barracks-townsville.webp";
import strandImage from "@/assets/the-strand-townsville.webp";

const ThingsToDo = () => {
  // Primary attractions - the top 5 must-do experiences
  const primaryAttractions = [
    {
      title: "Castle Hill Lookout",
      description: "Townsville's iconic 286m granite monolith with 360-degree views over the city, harbour, and Magnetic Island. Multiple walking tracks or drive to the summit.",
      image: castleHillImage,
      tags: ["Free Entry", "Sunrise/Sunset", "Exercise"],
      features: [
        "Multiple walking tracks (30 mins – 2 hours)",
        "Sealed road to summit for drivers",
        "Best at sunrise or sunset",
        "Bring water — it gets hot!"
      ],
      mapUrl: "https://www.google.com/maps/search/?api=1&query=Castle+Hill+Townsville",
      aiPrompt: "What's the best time to climb Castle Hill and how long does it take?",
      aiButtonText: "Plan This Visit",
      subtitle: "Must-Do Experience"
    },
    {
      title: "The Strand",
      description: "Townsville's 2.2km beachfront promenade with a free saltwater rock pool, water park, cafés, and stunning ocean views. Perfect for walking, swimming, or sunset drinks.",
      image: strandImage,
      tags: ["Family Friendly", "Free", "Swimming"],
      features: [
        "Free saltwater rock pool",
        "Water park and playgrounds",
        "Cafés and restaurants",
        "Dog-friendly zones at certain times"
      ],
      mapUrl: "https://www.google.com/maps/search/?api=1&query=The+Strand+Townsville",
      aiPrompt: "What's the best time to visit The Strand and where should I eat nearby?",
      aiButtonText: "Ask the Local AI",
      subtitle: "Beachfront Promenade"
    },
    {
      title: "Magnetic Island",
      description: "Just 20 minutes by ferry, 'Maggie' offers 23 beaches, bushwalks, koalas, and a laid-back island vibe. The Forts Walk is a must for wildlife spotting.",
      image: magneticIslandImage,
      tags: ["Day Trip", "Wildlife", "Beaches"],
      features: [
        "23 beaches and bays to explore",
        "Forts Walk for koala spotting",
        "Hire a Jeep or scooter",
        "Snorkelling at Alma Bay"
      ],
      mapUrl: "https://www.google.com/maps/search/?api=1&query=Magnetic+Island+Ferry+Terminal",
      aiPrompt: "How should I plan a day trip to Magnetic Island? What's the ferry schedule?",
      aiButtonText: "Plan This Visit",
      subtitle: "20 Min Ferry Ride"
    },
    {
      title: "Billabong Sanctuary",
      description: "Family-owned wildlife park where you can hold koalas, feed kangaroos, watch croc feeding shows, and see wombats, dingoes, and cassowaries up close.",
      image: billabongImage,
      tags: ["Family Friendly", "Wildlife", "Educational"],
      features: [
        "Hold a koala experience",
        "Crocodile feeding shows",
        "Kangaroo feeding included",
        "BBQ and picnic areas"
      ],
      mapUrl: "https://www.google.com/maps/search/?api=1&query=Billabong+Sanctuary+Townsville",
      aiPrompt: "What time should I arrive at Billabong Sanctuary to see all the shows?",
      aiButtonText: "Ask the Local AI",
      subtitle: "Wildlife Experience"
    },
    {
      title: "Riverway Parklands",
      description: "Sprawling parklands along Ross River with lagoons, playgrounds, walking tracks, and the Pinnacles Gallery. A local favourite for families.",
      tags: ["Free Entry", "Family Friendly", "Swimming"],
      features: [
        "Two lagoon swimming pools",
        "Adventure playgrounds",
        "10km walking/cycling tracks",
        "Art gallery and café"
      ],
      mapUrl: "https://www.google.com/maps/search/?api=1&query=Riverway+Townsville",
      aiPrompt: "What facilities are at Riverway and is it good for kids?",
      aiButtonText: "Plan This Visit",
      subtitle: "Parks & Recreation"
    }
  ];

  // Secondary attractions - still worth visiting
  const secondaryAttractions = [
    {
      title: "Jezzine Barracks",
      description: "Heritage site with a coastal boardwalk and military history. A pleasant spot for a quiet walk.",
      image: jezzineImage,
      tags: ["Free Entry", "History"],
      features: [
        "1.4km elevated boardwalk",
        "Kissing Point Fort ruins",
        "Free entry and parking"
      ],
      mapUrl: "https://www.google.com/maps/search/?api=1&query=Jezzine+Barracks+Townsville",
      aiPrompt: "Tell me about the history at Jezzine Barracks",
      aiButtonText: "Learn More",
      subtitle: "Heritage Walk"
    },
    {
      title: "Museum of Tropical Queensland",
      description: "Home to the Pandora shipwreck gallery and regional history exhibits. Good for a rainy day.",
      tags: ["Indoor", "History"],
      features: [
        "HMS Pandora shipwreck exhibit",
        "Dinosaur and fossil galleries",
        "Interactive exhibits for kids"
      ],
      mapUrl: "https://www.google.com/maps/search/?api=1&query=Museum+of+Tropical+Queensland",
      aiPrompt: "What are the highlights at the Museum of Tropical Queensland?",
      aiButtonText: "Learn More",
      subtitle: "History & Discovery"
    },
    {
      title: "Reef HQ Aquarium",
      description: "Living coral reef aquarium with turtles, sharks, and reef fish. Great for families and air-conditioned.",
      tags: ["Family Friendly", "Indoor"],
      features: [
        "Living coral reef exhibits",
        "Turtle hospital tours",
        "Air-conditioned"
      ],
      mapUrl: "https://www.google.com/maps/search/?api=1&query=Reef+HQ+Aquarium+Townsville",
      aiPrompt: "What can I see at Reef HQ Aquarium?",
      aiButtonText: "Learn More",
      subtitle: "Indoor Attraction"
    }
  ];

  return (
    <>
      <SEOHead
        title="Things to Do in Townsville – Local Highlights & Must-See Spots"
        description="Discover the best things to do in Townsville — Castle Hill, Magnetic Island, The Strand, wildlife, walks, beaches and more. Your complete local guide."
        canonical="https://www.myaussieguide.com.au/townsville/things-to-do"
      />
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            "name": "Things to Do in Townsville",
            "description": "Top attractions and activities in Townsville",
            "itemListElement": [...primaryAttractions, ...secondaryAttractions].map((item, index) => ({
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
            <Link to="/townsville">
              <Button variant="ghost" className="mb-6 group" aria-label="Back to home">
                <ArrowLeft className="mr-2 w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                Back to Home
              </Button>
            </Link>

            {/* Hero Header */}
            <header className="mb-12 text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                <Compass className="w-4 h-4" />
                Activities Guide
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
                Things to Do in Townsville
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                From hiking Castle Hill at sunrise to exploring Magnetic Island's hidden bays, Townsville offers unforgettable experiences for every type of traveller.
              </p>
            </header>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
              {[
                { icon: <Mountain className="w-5 h-5" />, label: "Castle Hill", sublabel: "Iconic landmark" },
                { icon: <Camera className="w-5 h-5" />, label: "Wildlife", sublabel: "Koalas & crocs" },
                { icon: <Building2 className="w-5 h-5" />, label: "History", sublabel: "WWII heritage" },
                { icon: <Users className="w-5 h-5" />, label: "Family Fun", sublabel: "Kid-friendly" }
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

            {/* Heat Safety Alert */}
            <HeatSafetyAlert className="mb-8" />

            {/* Go Local Suggestion */}
            <LocalInsightCard title="Go Local" variant="location" className="mb-12">
              <p>
                Done The Strand? It's time to go local. Head out to the <strong>Riverway Lagoons</strong> in Thuringowa—it's 
                our favourite freshwater alternative to the beach (and totally free!).
              </p>
              <p className="font-medium text-blue-700 dark:text-blue-300">
                🗺️ If you want to see where the locals really hang out, take a walk through the Palmetum or drive up Castle Hill at sunset.
              </p>
            </LocalInsightCard>

            {/* Primary Attractions Grid */}
            <section className="mb-12">
              <div className="flex items-center gap-3 mb-8">
                <div className="p-2 rounded-lg bg-primary/10">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                    Top 5 Attractions
                  </h2>
                  <p className="text-muted-foreground">The must-see experiences in Townsville</p>
                </div>
              </div>

              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {primaryAttractions.map((attraction, index) => (
                  <ListingCard key={index} {...attraction} />
                ))}
              </div>
            </section>

            {/* Secondary Attractions */}
            <section className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-muted">
                  <Building2 className="w-5 h-5 text-muted-foreground" />
                </div>
                <div>
                  <h2 className="text-xl md:text-2xl font-semibold text-foreground">
                    More to Explore
                  </h2>
                  <p className="text-sm text-muted-foreground">Worth a visit if you have extra time</p>
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-3">
                {secondaryAttractions.map((attraction, index) => (
                  <ListingCard key={index} {...attraction} />
                ))}
              </div>
            </section>

            {/* Future Attraction - Great Barrier Reef Aquarium */}
            <section className="mb-16">
              <div className="p-6 rounded-xl border-2 border-dashed border-muted-foreground/30 bg-muted/30">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-amber-100 dark:bg-amber-900/30">
                    <Clock className="w-5 h-5 text-amber-600 dark:text-amber-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-1">
                      Great Barrier Reef Aquarium <span className="text-sm font-normal text-muted-foreground">(Planned – 2029)</span>
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Australia's proposed National Education Centre for the Great Barrier Reef. According to the official project website, 
                      the aquarium is a planned future attraction for Townsville with a target opening year of 2029. 
                      It is not currently open to visitors.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* More Sections */}
            <section className="mb-16">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                Explore More
              </h2>
              <div className="grid md:grid-cols-3 gap-4">
                <Link to="/townsville/beaches" className="block">
                  <div className="p-6 rounded-xl border-2 hover:border-primary/30 transition-colors bg-card">
                    <Palmtree className="w-8 h-8 text-primary mb-3" />
                    <h3 className="font-semibold text-foreground mb-1">Beaches</h3>
                    <p className="text-sm text-muted-foreground">Explore Townsville's best coastal spots</p>
                  </div>
                </Link>
                <Link to="/townsville/dog-friendly" className="block">
                  <div className="p-6 rounded-xl border-2 hover:border-primary/30 transition-colors bg-card">
                    <Dog className="w-8 h-8 text-primary mb-3" />
                    <h3 className="font-semibold text-foreground mb-1">Dog-Friendly</h3>
                    <p className="text-sm text-muted-foreground">Parks and beaches for your furry friend</p>
                  </div>
                </Link>
                <Link to="/townsville/nature" className="block">
                  <div className="p-6 rounded-xl border-2 hover:border-primary/30 transition-colors bg-card">
                    <Compass className="w-8 h-8 text-primary mb-3" />
                    <h3 className="font-semibold text-foreground mb-1">Nature & Walks</h3>
                    <p className="text-sm text-muted-foreground">Bushwalks and outdoor adventures</p>
                  </div>
                </Link>
              </div>
            </section>

            {/* Newsletter CTA */}
            <NewsletterCTA className="mb-12" />
          </div>
        </main>
      </div>
    </>
  );
};

export default ThingsToDo;
