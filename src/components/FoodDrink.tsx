import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Utensils, ArrowRight } from "lucide-react";
import { triggerAiGuide } from "@/utils/aiGuide";
import { Link } from "react-router-dom";
import cactusJacksImage from "@/assets/cactus-jacks-restaurant-townsville.webp";
import longboardImage from "@/assets/longboard-bar-and-grill-restaurant-townsville.webp";
import JamImage from "@/assets/jam-corner-townsville.webp";
import JuliettesImage from "@/assets/Juliette's-Gelateria-townsville.webp";
import CookingImage from "@/assets/coo-king-bbq-hotpot-restaurant-townsville.webp";
import SaltImage from "@/assets/a-touch-of-salt-restaurant-townsville.webp";

const FoodDrink = () => {
  const restaurants = [
    {
      name: "JAM Restaurant",
      description: "Award-winning modern Australian dining on Palmer Street with creative dishes and a relaxed, upscale vibe.",
      image: JamImage,
      query: "Tell me about JAM Restaurant Townsville.",
    },
    {
      name: "Cactus Jack's",
      description: "Fun and lively Mexican bar & grill — great for nachos, cocktails, and group dinners.",
      image: cactusJacksImage,
      query: "Tell me about Cactus Jack's in Townsville.",
    },
    {
      name: "Longboard Bar & Grill",
      description: "Beachfront dining on The Strand with burgers, tacos, cocktails, and unbeatable ocean views.",
      image: longboardImage,
      query: "Tell me about Longboard Bar & Grill Townsville.",
    },
    {
      name: "Coo.King BBQ & Hotpot",
      description: "Korean BBQ and Shabu-Shabu (hotpot) with plenty of fresh ingredients and a popular buffet-style setup.",
      image: CookingImage,
      query: "Tell me about Coo.King BBQ & Hotpot in Townsville.",
    },
    {
      name: "Juliette's Gelateria",
      description: "Locally loved for gelato, coffee, and desserts — perfect for a sunset treat along The Strand.",
      image: JuliettesImage,
      query: "Tell me about Juliette's Gelateria Townsville.",
    },
    {
      name: "A Touch of Salt",
      description: "Fine dining with an elegant menu, riverfront location, and one of Townsville's top-rated restaurants.",
      image: SaltImage,
      query: "Tell me about A Touch of Salt Townsville.",
    },
  ];

  return (
    <section className="py-16 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            <Utensils className="w-4 h-4" />
            Food & Drink
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Where to Eat & Drink in Townsville
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From waterfront dining to casual pubs and café culture, Townsville's food scene blends tropical flavours, fresh seafood, and relaxed Queensland atmosphere.
          </p>
        </div>

        {/* Restaurant Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {restaurants.map((restaurant, index) => (
            <Card
              key={index}
              className="overflow-hidden hover:shadow-lg transition-all duration-300 animate-fade-in border-2 border-border/40 hover:border-primary/30"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="aspect-video w-full overflow-hidden">
                <img
                  src={restaurant.image}
                  alt={`${restaurant.name} restaurant in Townsville`}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  loading="lazy"
                />
              </div>
              <CardContent className="p-5">
                <h3 className="text-lg font-semibold mb-2 text-foreground">{restaurant.name}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">{restaurant.description}</p>
                <Button 
                  onClick={() => triggerAiGuide(restaurant.query)} 
                  variant="outline" 
                  size="sm" 
                  className="w-full" 
                  aria-label={`Ask about ${restaurant.name}`}
                >
                  Ask about this place
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link to="/townsville/food">
            <Button variant="default" size="lg" className="group">
              View all restaurants
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FoodDrink;
