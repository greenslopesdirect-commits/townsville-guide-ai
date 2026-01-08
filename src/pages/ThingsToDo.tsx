import { Helmet } from "react-helmet";
import SEOHead from "@/components/SEOHead";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Mountain, Compass, Camera, Users, MapPin, Palmtree, Building2, Dog, Plane, UtensilsCrossed, ShoppingBag, BookOpen, Sun, Clock, Calendar } from "lucide-react";
import ListingCard from "@/components/ListingCard";
import HeatSafetyAlert from "@/components/HeatSafetyAlert";

import LocalInsightCard from "@/components/LocalInsightCard";

// Import images
import castleHillImage from "@/assets/castle-hill-townsville.webp";
import magneticIslandImage from "@/assets/magnetic-island-townsville.webp";
import billabongImage from "@/assets/billabong-sanctuary-townsville.webp";
import jezzineImage from "@/assets/jezzine-barracks-townsville.webp";
import strandImage from "@/assets/the-strand-townsville.webp";
import reefAquariumImage from "@/assets/great-barrier-reef-aquarium-townsville.webp";

const ThingsToDo = () => {
  const attractions = [
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
      aiPrompt: "How much time should I spend at Castle Hill and what is the best time to visit?",
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
      aiPrompt: "How much time should I spend at The Strand and what is the best time to visit?",
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
      aiPrompt: "How much time should I spend at Magnetic Island and what is the best time to visit?",
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
      aiPrompt: "How much time should I spend at Billabong Sanctuary and what is the best time to visit?",
      subtitle: "Wildlife Experience"
    },
    {
      title: "Jezzine Barracks",
      description: "Beautifully restored heritage site with a 1.4km elevated coastal boardwalk, military history displays, and stunning ocean views. Perfect for a peaceful walk.",
      image: jezzineImage,
      tags: ["Free Entry", "History", "Scenic Walk"],
      features: [
        "1.4km elevated boardwalk",
        "Kissing Point Fort ruins",
        "Playgrounds and BBQ areas",
        "Free entry and parking"
      ],
      mapUrl: "https://www.google.com/maps/search/?api=1&query=Jezzine+Barracks+Townsville",
      aiPrompt: "How much time should I spend at Jezzine Barracks and what is the best time to visit?",
      subtitle: "Heritage & Coastal Walk"
    },
    {
      title: "The Great Barrier Reef Aquarium",
      description: "Australia's National Education Centre for the Great Barrier Reef. The Great Barrier Reef Aquarium is currently closed and is a planned future attraction, with a target opening year of 2029.",
      image: reefAquariumImage,
      tags: ["Coming 2029", "Future Attraction", "Educational"],
      features: [
        "National Education Centre for the Reef",
        "Currently closed for redevelopment",
        "Target opening: 2029",
        "Located at Townsville waterfront"
      ],
      mapUrl: "https://www.google.com/maps/search/?api=1&query=Reef+HQ+Aquarium+Townsville",
      aiPrompt: "What is the Great Barrier Reef Aquarium and when will it reopen?",
      subtitle: "Future Attraction"
    },
    {
      title: "Museum of Tropical Queensland",
      description: "Explore the Pandora shipwreck gallery, dinosaur fossils, and tropical Queensland history. Perfect for history buffs and families.",
      tags: ["Indoor", "History", "Family Friendly"],
      features: [
        "HMS Pandora shipwreck exhibit",
        "Dinosaur and fossil galleries",
        "Indigenous heritage displays",
        "Interactive exhibits for kids"
      ],
      mapUrl: "https://www.google.com/maps/search/?api=1&query=Museum+of+Tropical+Queensland",
      aiPrompt: "How much time should I spend at the Museum of Tropical Queensland and what is the best time to visit?",
      subtitle: "History & Discovery"
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
      aiPrompt: "How much time should I spend at Riverway Parklands and what is the best time to visit?",
      subtitle: "Parks & Recreation"
    },
    {
      title: "Anderson Park Botanic Gardens",
      description: "A peaceful 19-hectare botanic garden showcasing North Queensland's tropical plants, shaded walking paths, and river views. A favourite for locals, photographers, and anyone wanting a slower-paced outdoor experience.",
      tags: ["Free Entry", "Nature", "Relaxing"],
      features: [
        "19 hectares of tropical gardens",
        "Shaded walking paths",
        "River views and picnic spots",
        "Great for photography and birdlife"
      ],
      mapUrl: "https://www.google.com/maps/search/?api=1&query=Anderson+Park+Botanic+Gardens+Townsville",
      aiPrompt: "What can I see at Anderson Park Botanic Gardens and how long should I spend there?",
      subtitle: "Tropical Gardens & River Walks"
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
            "itemListElement": attractions.map((item, index) => ({
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

            {/* SEO Introduction Section */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                Why Townsville Is One of North Queensland's Best Bases
              </h2>
              <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
                <p>
                  Townsville is one of the easiest places in Australia to explore without stress. You've got a tropical waterfront, a mountain lookout in the middle of the city, island day trips, wildlife parks, river lagoons, and historic sites — all within a short drive of each other.
                </p>
                <p>
                  What makes Townsville special is how simple it is to enjoy. You can start your day with a sunrise walk up Castle Hill, cool off at The Strand or Riverway by midday, take a ferry to Magnetic Island, and still be back in time for a sunset stroll along the waterfront.
                </p>
                <p>
                  This guide focuses on the best things to do in Townsville for first-time visitors, families, and anyone who wants to experience the area without rushing or overplanning.
                </p>
              </div>
            </section>

            {/* Attractions Grid */}
            <section className="mb-16">
              <div className="flex items-center gap-3 mb-8">
                <div className="p-2 rounded-lg bg-primary/10">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                    Top Attractions & Experiences
                  </h2>
                  <p className="text-muted-foreground">Must-see spots for visitors</p>
                </div>
              </div>

              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {attractions.map((attraction, index) => (
                  <ListingCard key={index} {...attraction} />
                ))}
              </div>
            </section>

            {/* How to Plan Your Time Section */}
            <section className="mb-16">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                  How to Plan Your Time in Townsville
                </h2>
              </div>
              
              <div className="prose prose-lg max-w-none text-muted-foreground mb-8">
                <p>
                  If you're visiting Townsville for the first time, the key is to work with the heat, not against it.
                </p>
              </div>

              {/* Daily Rhythm */}
              <div className="bg-card rounded-2xl border-2 p-6 mb-8">
                <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                  <Sun className="w-5 h-5 text-primary" />
                  A simple daily rhythm that works:
                </h3>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {[
                    { time: "Morning", activity: "Castle Hill, walks, outdoor exploring" },
                    { time: "Midday", activity: "Museum, lunch, Riverway lagoons, shade activities" },
                    { time: "Afternoon", activity: "Magnetic Island or The Strand" },
                    { time: "Evening", activity: "Sunset at The Strand or Castle Hill" }
                  ].map((item, index) => (
                    <div key={index} className="p-4 rounded-xl bg-background border">
                      <p className="font-semibold text-primary text-sm mb-1">{item.time}</p>
                      <p className="text-sm text-muted-foreground">{item.activity}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Itineraries */}
              <div className="grid md:grid-cols-2 gap-6">
                {/* One Day */}
                <div className="bg-card rounded-2xl border-2 p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-primary" />
                    If You Only Have One Day
                  </h3>
                  <ul className="space-y-3">
                    {[
                      { time: "Morning", activity: "Castle Hill + The Strand" },
                      { time: "Midday", activity: "Museum of Tropical Queensland or Riverway" },
                      { time: "Afternoon", activity: "Lunch, shade, rest" },
                      { time: "Evening", activity: "Sunset walk or lookout" }
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded-full whitespace-nowrap">{item.time}</span>
                        <span className="text-sm text-muted-foreground">{item.activity}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* 2-3 Days */}
                <div className="bg-card rounded-2xl border-2 p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-primary" />
                    If You Have 2–3 Days
                  </h3>
                  <ul className="space-y-3">
                    {[
                      { day: "Day 1", activity: "City + Strand + Castle Hill" },
                      { day: "Day 2", activity: "Magnetic Island day trip" },
                      { day: "Day 3", activity: "Riverway, gardens, wildlife or museum" }
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded-full whitespace-nowrap">{item.day}</span>
                        <span className="text-sm text-muted-foreground">{item.activity}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            {/* Plan the Rest of Your Trip */}
            <section className="mb-16">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                Plan the Rest of Your Townsville Trip
              </h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                <Link to="/townsville/flights" className="block">
                  <div className="p-6 rounded-xl border-2 hover:border-primary/30 transition-colors bg-card h-full">
                    <Plane className="w-8 h-8 text-primary mb-3" />
                    <h3 className="font-semibold text-foreground mb-1">Flights to Townsville</h3>
                    <p className="text-sm text-muted-foreground">Find the best flight options</p>
                  </div>
                </Link>
                <Link to="/townsville/food" className="block">
                  <div className="p-6 rounded-xl border-2 hover:border-primary/30 transition-colors bg-card h-full">
                    <UtensilsCrossed className="w-8 h-8 text-primary mb-3" />
                    <h3 className="font-semibold text-foreground mb-1">Townsville Food Guide</h3>
                    <p className="text-sm text-muted-foreground">Best restaurants and cafés</p>
                  </div>
                </Link>
                <Link to="/townsville/shopping" className="block">
                  <div className="p-6 rounded-xl border-2 hover:border-primary/30 transition-colors bg-card h-full">
                    <ShoppingBag className="w-8 h-8 text-primary mb-3" />
                    <h3 className="font-semibold text-foreground mb-1">Townsville Shopping</h3>
                    <p className="text-sm text-muted-foreground">Markets, malls and local stores</p>
                  </div>
                </Link>
                <Link to="/townsville/history" className="block">
                  <div className="p-6 rounded-xl border-2 hover:border-primary/30 transition-colors bg-card h-full">
                    <BookOpen className="w-8 h-8 text-primary mb-3" />
                    <h3 className="font-semibold text-foreground mb-1">Townsville History</h3>
                    <p className="text-sm text-muted-foreground">Heritage and culture</p>
                  </div>
                </Link>
              </div>
            </section>

            {/* Explore More Section */}
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

          </div>
        </main>
      </div>
    </>
  );
};

export default ThingsToDo;
