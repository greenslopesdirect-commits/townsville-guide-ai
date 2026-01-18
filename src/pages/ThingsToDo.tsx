import { Helmet } from "react-helmet";
import SEOHead from "@/components/SEOHead";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Mountain, Compass, Camera, Users, MapPin, Palmtree, Building2, Dog, Plane, UtensilsCrossed, ShoppingBag, BookOpen, Sun, Clock, Calendar, Sunrise, CloudSun, Sunset, Moon } from "lucide-react";
import ListingCard from "@/components/ListingCard";
import HeatSafetyAlert from "@/components/HeatSafetyAlert";
import LocalInsightCard from "@/components/LocalInsightCard";

// Images
import castleHillImage from "@/assets/castle-hill-townsville.webp";
import magneticIslandImage from "@/assets/magnetic-island-townsville.webp";
import billabongImage from "@/assets/billabong-sanctuary-townsville.webp";
import jezzineImage from "@/assets/jezzine-barracks-townsville.webp";
import strandImage from "@/assets/the-strand-townsville.webp";
import reefAquariumImage from "@/assets/great-barrier-reef-aquarium-townsville.webp";

// Placeholder images for adventure and day trip sections
const mouaImage = "/placeholder.svg";
const yongalaImage = "/placeholder.svg";
const crystalCreekImage = "/placeholder.svg";
const palumaImage = "/placeholder.svg";
const jouramaImage = "/placeholder.svg";

const ThingsToDo = () => {

  // ------------------ CORE ATTRACTIONS ------------------
  const attractions = [
    {
      title: "Castle Hill Lookout",
      description: "Townsville's iconic 286m granite monolith with 360-degree views over the city, harbour, and Magnetic Island.",
      image: castleHillImage,
      tags: ["Free Entry", "Sunrise/Sunset", "Exercise"],
      features: ["Multiple walking tracks", "Drive to summit", "Best at sunrise or sunset", "Bring water"],
      mapUrl: "https://www.google.com/maps/search/?api=1&query=Castle+Hill+Townsville",
      aiPrompt: "How much time should I spend at Castle Hill?",
      subtitle: "Must-Do Experience"
    },
    {
      title: "The Strand",
      description: "Townsville's 2.2km beachfront promenade with rock pool, cafés and ocean views.",
      image: strandImage,
      tags: ["Family Friendly", "Free", "Swimming"],
      features: ["Rock pool", "Water park", "Cafés", "Playgrounds"],
      mapUrl: "https://www.google.com/maps/search/?api=1&query=The+Strand+Townsville",
      aiPrompt: "What should I do at The Strand?",
      subtitle: "Beachfront Promenade"
    },
    {
      title: "Magnetic Island",
      description: "Just 20 minutes by ferry. Beaches, koalas, snorkelling and bushwalks.",
      image: magneticIslandImage,
      tags: ["Day Trip", "Beaches", "Wildlife"],
      features: ["Forts Walk", "Snorkelling", "23 beaches", "Hire a car or scooter"],
      mapUrl: "https://www.google.com/maps/search/?api=1&query=Magnetic+Island",
      aiPrompt: "What is the best way to see Magnetic Island?",
      subtitle: "Island Escape"
    },
    {
      title: "Billabong Sanctuary",
      description: "Family wildlife park where you can hold koalas and see crocs.",
      image: billabongImage,
      tags: ["Wildlife", "Family Friendly"],
      features: ["Hold a koala", "Croc shows", "Feed kangaroos"],
      mapUrl: "https://www.google.com/maps/search/?api=1&query=Billabong+Sanctuary+Townsville",
      aiPrompt: "Is Billabong Sanctuary worth visiting?",
      subtitle: "Wildlife Experience"
    },
    {
      title: "Jezzine Barracks",
      description: "Historic coastal boardwalk with ocean views and military history.",
      image: jezzineImage,
      tags: ["Free", "History", "Scenic Walk"],
      features: ["1.4km boardwalk", "Fort ruins", "Playgrounds"],
      mapUrl: "https://www.google.com/maps/search/?api=1&query=Jezzine+Barracks+Townsville",
      aiPrompt: "What can I see at Jezzine Barracks?",
      subtitle: "Heritage Walk"
    },
    {
      title: "Great Barrier Reef Aquarium",
      description: "Future national reef education centre. Reopening planned for 2029.",
      image: reefAquariumImage,
      tags: ["Future Attraction"],
      features: ["Currently closed", "Reopens 2029"],
      mapUrl: "https://www.google.com/maps/search/?api=1&query=Reef+HQ+Townsville",
      aiPrompt: "When does Reef HQ reopen?",
      subtitle: "Coming Soon"
    }
  ];

  // ------------------ ADVENTURE ------------------
  const adventureExperiences = [
    {
      title: "Museum of Underwater Art (MOUA)",
      description: "Australia’s only underwater museum. Snorkel or dive surreal reef sculptures.",
      image: mouaImage,
      tags: ["Reef", "Snorkelling", "Diving"],
      features: ["Unique underwater museum", "Great Barrier Reef"],
      mapUrl: "https://www.google.com/maps/search/?api=1&query=Museum+of+Underwater+Art",
      aiPrompt: "How do I visit MOUA?",
      subtitle: "Reef Experience"
    },
    {
      title: "SS Yongala Wreck Dive",
      description: "One of the best wreck dives in the world with massive marine life.",
      image: yongalaImage,
      tags: ["Diving", "Bucket List"],
      features: ["For certified divers", "Full day trip"],
      mapUrl: "https://www.google.com/maps/search/?api=1&query=SS+Yongala",
      aiPrompt: "Why is the Yongala famous?",
      subtitle: "World-Class Dive"
    },
    {
      title: "Magnetic Island Snorkelling",
      description: "Snorkel straight from the beach at Alma, Geoffrey and Florence Bay.",
      image: magneticIslandImage,
      tags: ["Snorkelling", "Easy Access"],
      features: ["No boat needed", "Great for beginners"],
      mapUrl: "https://www.google.com/maps/search/?api=1&query=Magnetic+Island",
      aiPrompt: "Where to snorkel on Magnetic Island?",
      subtitle: "Easy Reef Access"
    }
  ];

  // ------------------ DAY TRIPS ------------------
  const dayTrips = [
    {
      title: "Little Crystal Creek",
      description: "Rainforest swimming hole with stone bridge and clear water.",
      image: crystalCreekImage,
      tags: ["Swimming", "Rainforest"],
      features: ["Historic bridge", "Crystal clear water"],
      mapUrl: "https://www.google.com/maps/search/?api=1&query=Little+Crystal+Creek",
      aiPrompt: "Is Little Crystal Creek good for swimming?",
      subtitle: "Rainforest Swimming"
    },
    {
      title: "Paluma Range",
      description: "Cool mountain rainforest village with walks and waterfalls.",
      image: palumaImage,
      tags: ["Rainforest", "Hiking"],
      features: ["Cool climate", "Great in summer"],
      mapUrl: "https://www.google.com/maps/search/?api=1&query=Paluma",
      aiPrompt: "What should I do in Paluma?",
      subtitle: "Mountain Escape"
    },
    {
      title: "Jourama Falls",
      description: "Huge waterfall with scenic walking track near Paluma.",
      image: jouramaImage,
      tags: ["Waterfall", "Hiking"],
      features: ["Impressive cascades", "Great after wet season"],
      mapUrl: "https://www.google.com/maps/search/?api=1&query=Jourama+Falls",
      aiPrompt: "How hard is the walk to Jourama Falls?",
      subtitle: "Epic Waterfall"
    }
  ];

  return (
    <>
      <SEOHead
        title="Things to Do in Townsville – Local Highlights & Must-See Spots"
        description="Discover the best things to do in Townsville including Magnetic Island, Castle Hill, reef adventures, waterfalls and rainforest day trips."
        canonical="https://www.myaussieguide.com.au/townsville/things-to-do"
      />

      <div className="min-h-screen bg-background">
        <main className="pt-24 pb-16">
          <div className="container mx-auto px-4 max-w-6xl">

            {/* HEADER */}
            <header className="mb-12 text-center">
              <h1 className="text-5xl font-bold mb-4">Things to Do in Townsville</h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Beaches, reef adventures, waterfalls, wildlife and island escapes — all in one easy base.
              </p>
            </header>

            {/* TOP ATTRACTIONS */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold mb-8">Top Attractions & Experiences</h2>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {attractions.map((item, i) => <ListingCard key={i} {...item} />)}
              </div>
            </section>

            {/* ADVENTURE */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold mb-8">Adventure & Reef Experiences</h2>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {adventureExperiences.map((item, i) => <ListingCard key={i} {...item} />)}
              </div>
            </section>

            {/* DAY TRIPS */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold mb-8">Day Trips & Hidden Gems</h2>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {dayTrips.map((item, i) => <ListingCard key={i} {...item} />)}
              </div>
            </section>

          </div>
        </main>
      </div>
    </>
  );
};

export default ThingsToDo;
