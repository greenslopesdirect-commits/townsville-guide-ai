import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import cactusJacksImage from "@/assets/cactus-jacks-restaurant-townsville.webp";
import longboardImage from "@/assets/longboard-bar-and-grill-restaurant-townsville.webp";
import JamImage from "@/assets/jam-corner-townsville.webp";
import JuliettesImage from "@/assets/Juliette's-Gelateria-townsville.webp";
import CookingImage from "@/assets/coo-king-bbq-hotpot-restaurant-townsville.webp";

const FoodDrink = () => {
  const restaurants = [
    {
      name: "🍽 JAM Restaurant",
      description: "Upscale dining on Palmer Street.",
      image: JamImage, // <-- NEW LOCAL VARIABLE
      query: "Tell me about JAM Restaurant Townsville.",
    },
    {
      name: "🌮 Cactus Jack's",
      description: "Mexican bar & grill with a lively vibe.",
      image: cactusJacksImage, // <-- NEW LOCAL VARIABLE
      query: "Tell me about Cactus Jack's in Townsville.",
    },
    {
      name: "🍹 Longboard Bar & Grill",
      description: "Beachfront spot on The Strand.",
      image: longboardImage, // <-- NEW LOCAL VARIABLE
      query: "Tell me about Longboard Bar & Grill Townsville.",
    },
    {
      name: "🍔 Coo.King BBQ & Hotpot",
      description: "Enjoy Korean BBQ, Shabu-Shabu ( Hotpot )",
      image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&auto=format&fit=crop",
      query: "Tell me about Coo.King BBQ & Hotpot in Townsville.",
    },
    {
      name: "🍨 Juliette's Gelateria",
      description: "Local favourite for dessert & coffee.",
      image: JuliettesImage, // <-- NEW LOCAL VARIABLE
      query: "Tell me about Juliette's Gelateria Townsville.",
    },
    {
      name: "☕ Coffee Dominion",
      description: "Townsville's original artisan café.",
      image: "https://images.unsplash.com/photo-1511920170033-f8396924c348?w=800&auto=format&fit=crop",
      query: "Tell me about Coffee Dominion Townsville.",
    },
  ];

  const handleAskAbout = (query: string) => {
    if ((window as any).setAiInputValue) {
      (window as any).setAiInputValue(query);
    }

    const input = document.getElementById("townsville-ai-input");
    if (input) {
      input.scrollIntoView({ behavior: "smooth", block: "center" });
      setTimeout(() => {
        input.classList.add("ring-2", "ring-primary");
        setTimeout(() => {
          input.classList.remove("ring-2", "ring-primary");
        }, 2000);
      }, 500);
    }
  };

  return (
    <section className="py-16 px-4 bg-background">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-foreground">
          Where to Eat & Drink in Townsville 🍽
        </h2>

        <p className="text-center text-lg md:text-xl text-muted-foreground mb-12 max-w-3xl mx-auto">
          From The Strand to Palmer Street, Townsville's dining scene blends tropical flavours, seafood, and relaxed
          Queensland hospitality. Whether you're after upscale dining or casual beachside bites, there's something for
          every taste.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {restaurants.map((restaurant, index) => (
            <Card
              key={index}
              className="overflow-hidden hover:scale-105 transition-transform duration-300 cursor-pointer animate-fade-in shadow-md hover:shadow-lg"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="aspect-video w-full overflow-hidden">
                <img
                  src={restaurant.image}
                  alt={`${restaurant.name} - ${restaurant.description} in Townsville, North Queensland`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <CardHeader className="pb-3">
                <CardTitle className="text-xl">{restaurant.name}</CardTitle>
                <CardDescription>{restaurant.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Button onClick={() => handleAskAbout(restaurant.query)} variant="outline" size="sm" className="w-full">
                  Ask about this place
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <p className="text-center text-muted-foreground italic">
          Want recommendations? Ask our AI guide where to eat tonight!
        </p>
      </div>
    </section>
  );
};

export default FoodDrink;
