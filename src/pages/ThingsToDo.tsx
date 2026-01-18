import { Helmet } from "react-helmet";
import SEOHead from "@/components/SEOHead";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Mountain, Compass, Camera, Users, MapPin, Palmtree, Building2, Dog, Plane, UtensilsCrossed, ShoppingBag, BookOpen, Sun, Clock, Calendar, Sunrise, CloudSun, Sunset, Moon } from "lucide-react";
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
import rossRiverDamImage from "@/assets/ross-river-dam-townsville.webp";

const ThingsToDo = () => {

  const attractions = [
    {
      title: "Castle Hill Lookout",
      description: "Townsville's iconic 286m granite monolith with 360-degree views over the city, harbour, and Magnetic Island.",
      image: castleHillImage,
      tags: ["Free Entry", "Sunrise/Sunset", "Exercise"],
      features: [
        "Multiple walking tracks",
        "Sealed road to summit",
        "Best at sunrise or sunset",
        "Bring water — it gets hot!"
      ],
      mapUrl: "https://www.google.com/maps/search/?api=1&query=Castle+Hill+Townsville",
      aiPrompt: "How much time should I spend at Castle Hill?",
      subtitle: "Must-Do Experience"
    },
    {
      title: "Little Crystal Creek",
      description: "A stunning rainforest swimming hole with a historic stone arch bridge, crystal clear water and granite boulders.",
      tags: ["Swimming", "Rainforest", "Day Trip"],
      features: [
        "Historic stone bridge",
        "Crystal clear swimming hole",
        "Granite boulders",
        "About 1.5 hours from Townsville"
      ],
      mapUrl: "https://www.google.com/maps/search/?api=1&query=Little+Crystal+Creek",
      aiPrompt: "Is Little Crystal Creek suitable for families?",
      subtitle: "Rainforest Swimming Hole"
    },
    {
      title: "Ross River Dam (Lake Ross)",
      description: "A huge freshwater lake just outside Townsville, perfect for scenic drives, picnics and sunset views.",
      image: rossRiverDamImage,
      tags: ["Scenic", "Nature", "Picnic"],
      features: [
        "Massive freshwater lake",
        "Lookouts and picnic areas",
        "Walking tracks",
        "Great for sunset photos"
      ],
      mapUrl: "https://www.google.com/maps/search/?api=1&query=Ross+River+Dam+Townsville",
      aiPrompt: "What can you do at Ross River Dam?",
      subtitle: "Scenic Lake & Lookouts"
    },
    {
      title: "The Strand",
      description: "Townsville's 2.2km beachfront promenade with rock pool, water park and cafés.",
      image: strandImage,
      tags: ["Family Friendly", "Free", "Swimming"],
      features: [
        "Free saltwater rock pool",
        "Water park",
        "Cafés and restaurants",
        "Ocean views"
      ],
      mapUrl: "https://www.google.com/maps/search/?api=1&query=The+Strand+Townsville",
      aiPrompt: "What can you do at The Strand?",
      subtitle: "Beachfront Promenade"
    },
    {
      title: "Magnetic Island",
      description: "Just 20 minutes by ferry. Beaches, bushwalks and koalas.",
      image: magneticIslandImage,
      tags: ["Day Trip", "Wildlife", "Beaches"],
      features: [
        "23 beaches",
        "Forts Walk",
        "Snorkelling",
        "Koalas"
      ],
      mapUrl: "https://www.google.com/maps/search/?api=1&query=Magnetic+Island",
      aiPrompt: "What should I do on Magnetic Island?",
      subtitle: "Island Day Trip"
    },
    {
      title: "Billabong Sanctuary",
      description: "Wildlife park where you can hold koalas and feed kangaroos.",
      image: billabongImage,
      tags: ["Wildlife", "Family Friendly"],
      features: [
        "Hold a koala",
        "Croc shows",
        "Kangaroos",
        "Wombats"
      ],
      mapUrl: "https://www.google.com/maps/search/?api=1&query=Billabong+Sanctuary",
      aiPrompt: "Is Billabong Sanctuary good for kids?",
      subtitle: "Wildlife Experience"
    },
    {
      title: "Jezzine Barracks",
      description: "Heritage coastal boardwalk with ocean views.",
      image: jezzineImage,
      tags: ["Free", "History", "Walk"],
      features: [
        "1.4km boardwalk",
        "Military history",
        "Ocean views",
        "Free entry"
      ],
      mapUrl: "https://www.google.com/maps/search/?api=1&query=Jezzine+Barracks",
      aiPrompt: "What can you see at Jezzine Barracks?",
      subtitle: "Heritage Walk"
    },
    {
      title: "Museum of Underwater Art (MOUA)",
      description: "Australia’s only underwater museum on the Great Barrier Reef.",
      tags: ["Reef", "Snorkelling", "Diving"],
      features: [
        "Underwater sculptures",
        "Snorkel or dive",
        "World famous",
        "Boat trip required"
      ],
      mapUrl: "https://www.google.com/maps/search/?api=1&query=Museum+of+Underwater+Art",
      aiPrompt: "Is MOUA better for snorkelling or diving?",
      subtitle: "Underwater Art on the Reef"
    }
  ];

  return (
    <>
      <SEOHead
        title="Things to Do in Townsville – Local Highlights & Must-See Spots"
        description="Discover the best things to do in Townsville — Castle Hill, Magnetic Island, The Strand, reef, waterfalls and more."
        canonical="https://www.myaussieguide.com.au/townsville/things-to-do"
      />

      <div className="min-h-screen bg-background">
        <main className="pt-24 pb-16">
          <div className="container mx-auto px-4 max-w-6xl">

            <Link to="/townsville">
              <Button variant="ghost" className="mb-6">
                <ArrowLeft className="mr-2 w-4 h-4" />
                Back to Home
              </Button>
            </Link>

            <header className="mb-12 text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Things to Do in Townsville</h1>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                From rainforest swimming holes to reef diving and island escapes.
              </p>
            </header>

            <section className="mb-16">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {attractions.map((item, index) => (
                  <ListingCard key={index} {...item} />
                ))}
              </div>
            </section>

          </div>
        </main>
      </div>
    </>
  );
};

export default ThingsToDo;
