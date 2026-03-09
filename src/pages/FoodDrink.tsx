import { Helmet } from "react-helmet";
import SEOHead from "@/components/SEOHead";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, UtensilsCrossed, Fish, Coffee, Wine, MapPin, Music } from "lucide-react";
import ListingCard from "@/components/ListingCard";

import LocalInsightCard from "@/components/LocalInsightCard";

// Import images
import jamImage from "@/assets/jam-corner-townsville.webp";
import saltImage from "@/assets/a-touch-of-salt-restaurant-townsville.webp";
import longboardImage from "@/assets/longboard-bar-and-grill-restaurant-townsville.webp";
import cactusImage from "@/assets/cactus-jacks-restaurant-townsville.webp";
import juliettesImage from "@/assets/Juliette's-Gelateria-townsville.webp";


const FoodDrink = () => {
  const restaurants = [
    {
      title: "JAM Restaurant",
      description: "One of Townsville's most awarded restaurants, known for creative dishes, local ingredients and a relaxed yet refined atmosphere on Palmer Street.",
      image: jamImage,
      tags: ["Fine Dining", "Breakfast", "Dinner"],
      features: [
        "Modern Australian menu",
        "Seasonal local produce",
        "Award-winning chef",
        "Riverside location"
      ],
      mapUrl: "https://www.google.com/maps/search/?api=1&query=JAM+Restaurant+Townsville",
      aiPrompt: "Tell me about the menu, price range, and vibe at JAM Restaurant.",
      subtitle: "Modern Australian"
    },
    {
      title: "A Touch of Salt",
      description: "High-end modern dining on the riverfront with premium steaks, seafood and refined flavours. Perfect for special occasions.",
      image: saltImage,
      tags: ["Fine Dining", "Waterfront", "Date Night"],
      features: [
        "Multi-award-winning",
        "River views outdoor seating",
        "Premium steaks & seafood",
        "Extensive wine list"
      ],
      mapUrl: "https://www.google.com/maps/search/?api=1&query=A+Touch+of+Salt+Townsville",
      aiPrompt: "Tell me about the menu, price range, and vibe at A Touch of Salt.",
      subtitle: "Award-Winning Dining"
    },
    {
      title: "Longboard Bar & Grill",
      description: "Laid-back beachfront dining right on The Strand with burgers, pizzas, cocktails and live music. Best for Sunday Sessions and acoustic Friday nights.",
      image: longboardImage,
      tags: ["Casual", "Waterfront", "Bar", "🎸 Live Music"],
      features: [
        "Direct beachfront location",
        "Burgers and pizzas",
        "Live acoustic music Fridays",
        "Great sunset views & Sunday Sessions"
      ],
      mapUrl: "https://www.google.com/maps/search/?api=1&query=Longboard+Bar+Grill+Townsville",
      aiPrompt: "Tell me about the menu, price range, and vibe at Longboard Bar & Grill.",
      subtitle: "Beachfront Casual"
    },
    {
      title: "Cactus Jack's",
      description: "A Townsville institution — colourful Tex-Mex with big portions, great margaritas and a fun family atmosphere.",
      image: cactusImage,
      tags: ["Casual", "Family Friendly", "Bar"],
      features: [
        "Famous enchiladas",
        "Great margaritas",
        "Lively themed décor",
        "Good value portions"
      ],
      mapUrl: "https://www.google.com/maps/search/?api=1&query=Cactus+Jack's+Townsville",
      aiPrompt: "Tell me about the menu, price range, and vibe at Cactus Jack's.",
      subtitle: "Tex-Mex Favourite"
    },
    {
      title: "Juliette's Gelateria",
      description: "Iconic Strand spot for homemade gelato, coffee and light breakfast. Outdoor seating with ocean views — perfect after a beach walk.",
      image: juliettesImage,
      tags: ["Breakfast", "Dessert", "Coffee"],
      features: [
        "Homemade gelato",
        "Beachfront location",
        "Great coffee",
        "Outdoor seating"
      ],
      mapUrl: "https://www.google.com/maps/search/?api=1&query=Juliette's+The+Strand+Townsville",
      aiPrompt: "Tell me about the menu, price range, and vibe at Juliette's Gelateria.",
      subtitle: "Gelato & Coffee"
    },
    {
      title: "Copper Bar & Grill",
      description: "The newest addition to Palmer Street. Perfect for sophisticated sips and locally sourced seasonal plates in a modern contemporary setting.",
      tags: ["Palmer Street", "New", "Cocktails"],
      features: [
        "Modern contemporary vibe",
        "Locally sourced seasonal menu",
        "Craft cocktails",
        "Palmer Street location"
      ],
      mapUrl: "https://www.google.com/maps/search/?api=1&query=Copper+Bar+Grill+Palmer+Street+Townsville",
      aiPrompt: "Tell me about the menu, price range, and vibe at Copper Bar & Grill.",
      subtitle: "Modern Contemporary"
    },
    {
      title: "Watermark Restaurant",
      description: "Stylish Strand restaurant with seafood platters, steaks and modern Australian dishes. Check for local soloists on weekends.",
      tags: ["Fine Dining", "Waterfront", "Seafood", "🎸 Live Music"],
      features: [
        "The Strand location",
        "Seafood platters",
        "Live soloists on weekends",
        "Great for groups"
      ],
      mapUrl: "https://www.google.com/maps/search/?api=1&query=Watermark+Restaurant+Townsville",
      aiPrompt: "Tell me about the menu, price range, and vibe at Watermark Restaurant.",
      subtitle: "Seafood & Views"
    },
    {
      title: "Rambutan Rooftop Bar",
      description: "Rooftop dining in the CBD with wood-fired pizzas, cocktails and views of the stadium and Castle Hill. Great pre-game spot.",
      tags: ["Bar", "Casual", "Rooftop"],
      features: [
        "Rooftop location",
        "Wood-fired pizza",
        "Castle Hill views",
        "Pre-game favourite"
      ],
      mapUrl: "https://www.google.com/maps/search/?api=1&query=Rambutan+Townsville",
      aiPrompt: "Tell me about the menu, price range, and vibe at Rambutan Rooftop Bar.",
      subtitle: "Rooftop Dining"
    },
    {
      title: "Hoi Polloi Café",
      description: "Creative brunch spot with excellent coffee, inventive dishes and a hip atmosphere. A favourite among Townsville's café crowd.",
      tags: ["Breakfast", "Coffee", "Brunch"],
      features: [
        "Creative brunch menu",
        "Specialty coffee",
        "Trendy atmosphere",
        "Vegetarian options"
      ],
      mapUrl: "https://www.google.com/maps/search/?api=1&query=Hoi+Polloi+Cafe+Townsville",
      aiPrompt: "Tell me about the menu, price range, and vibe at Hoi Polloi Café.",
      subtitle: "Specialty Brunch"
    }
  ];

  return (
    <>
      <SEOHead
        title="Best Restaurants in Townsville 2026: Where Locals Eat & Drink"
        description="Discover Townsville's best coffee, award-winning Palmer Street dining, and hidden waterfront gems. Updated March 2026 with local tips on opening hours and must-visit markets."
        canonical="https://www.myaussieguide.com.au/food"
      />
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            "name": "Townsville Restaurants & Cafés",
            "description": "Best dining spots in Townsville",
            "itemListElement": restaurants.map((item, index) => ({
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
                <UtensilsCrossed className="w-4 h-4" />
                Dining Guide
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
                Food & Drink in Townsville
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                From waterfront dining on The Strand to award-winning restaurants on Palmer Street, discover where locals eat and drink in Townsville.
              </p>
            </header>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
              {[
                { icon: <UtensilsCrossed className="w-5 h-5" />, label: "50+ Eateries", sublabel: "To explore" },
                { icon: <Fish className="w-5 h-5" />, label: "Fresh Seafood", sublabel: "Local catch" },
                { icon: <Coffee className="w-5 h-5" />, label: "Coffee Culture", sublabel: "Great cafés" },
                { icon: <Wine className="w-5 h-5" />, label: "Waterfront Dining", sublabel: "Ocean views" }
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

            {/* Must-Visit & Monday/Sunday Warning */}
            <LocalInsightCard title="Must-Visit & Opening Hours" variant="tip" className="mb-12">
              <p>
                <strong>Must-Visit:</strong> If you consider yourself a foodie, you cannot miss <strong>Otto's Market</strong>. 
                It's the culinary soul of the city. <em>Monday Special: Check out the Gourmet Grocer for fresh artisan bread and the city's best deli selection.</em>
              </p>
              <p className="font-medium text-amber-700 dark:text-amber-300">
                ⚠️ <strong>The Monday & Sunday Check:</strong> While Townsville is waking up, remember that many boutique CBD cafes close early today (Monday) and Sunday. For a guaranteed Monday caffeine hit, Tide Cafe and Hoi Polloi are local favorites that open early to keep the city moving.
              </p>
            </LocalInsightCard>

            {/* Coffee Culture */}
            <LocalInsightCard title="☕ Coffee Culture" variant="insight" className="mb-12">
              <p>
                Looking for specialty beans? <strong>The Quarters</strong> and <strong>Pedlar Project</strong> are currently serving the best Melbourne-style roasts in the North.
              </p>
            </LocalInsightCard>

            {/* Restaurants Grid */}
            <section className="mb-16">
              <div className="flex items-center gap-3 mb-8">
                <div className="p-2 rounded-lg bg-primary/10">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                    Top Restaurants & Cafés
                  </h2>
                  <p className="text-muted-foreground">Local favourites and hidden gems</p>
                </div>
              </div>

              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {restaurants.map((restaurant, index) => (
                  <ListingCard key={index} {...restaurant} />
                ))}
              </div>
            </section>

            {/* Best Areas Section */}
            <section className="mb-16">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                Best Dining Areas
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-6 rounded-xl border-2 bg-card">
                  <h3 className="font-semibold text-foreground mb-2">The Strand</h3>
                  <p className="text-muted-foreground text-sm">Beachfront cafés, gelato, casual dining with ocean views.</p>
                </div>
                <div className="p-6 rounded-xl border-2 bg-card">
                  <h3 className="font-semibold text-foreground mb-2">Palmer Street</h3>
                  <p className="text-muted-foreground text-sm">Fine dining, cocktail bars, and upscale restaurants.</p>
                </div>
                <div className="p-6 rounded-xl border-2 bg-card">
                  <h3 className="font-semibold text-foreground mb-2">Flinders Street</h3>
                  <p className="text-muted-foreground text-sm">Cafés, pubs, and casual eateries in the CBD.</p>
                </div>
                <div className="p-6 rounded-xl border-2 bg-card">
                  <h3 className="font-semibold text-foreground mb-2">Magnetic Island</h3>
                  <p className="text-muted-foreground text-sm">Island cafés, beach bars, and relaxed dining.</p>
                </div>
              </div>
            </section>

          </div>
        </main>
      </div>
    </>
  );
};

export default FoodDrink;
