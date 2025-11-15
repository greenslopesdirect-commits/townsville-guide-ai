import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const Accommodation = () => {
  const hotels = [
    {
      name: "🏝 The Ville Resort–Casino",
      tagline: "Luxury resort with ocean views",
      description: "Premium beachfront accommodation with casino, pools, and fine dining.",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&auto=format&fit=crop",
      query: "Tell me more about The Ville Resort–Casino in Townsville.",
    },
    {
      name: "🌇 Aquarius on the Beach",
      tagline: "Affordable beachfront hotel",
      description: "Great value accommodation right on The Strand waterfront.",
      image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&auto=format&fit=crop",
      query: "Tell me about Aquarius on the Beach Townsville.",
    },
    {
      name: "🏙 Hotel Grand Chancellor",
      tagline: "Modern city hotel with rooftop views",
      description: "Contemporary accommodation in the heart of the CBD with stunning vistas.",
      image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800&auto=format&fit=crop",
      query: "What's Hotel Grand Chancellor Townsville like?",
    },
    {
      name: "🏡 Quest Townsville",
      tagline: "Serviced apartments near the marina",
      description: "Self-contained apartments perfect for longer stays and families.",
      image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&auto=format&fit=crop",
      query: "Tell me about Quest Townsville apartments.",
    },
    {
      name: "🏕 BIG4 Rowes Bay Holiday Park",
      tagline: "Great for families and caravans",
      description: "Beachfront caravan park with cabins, pools, and family facilities.",
      image: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=800&auto=format&fit=crop",
      query: "Tell me about BIG4 Rowes Bay Holiday Park in Townsville.",
    },
    {
      name: "🏖 Beach House Motel",
      tagline: "Comfortable rooms right on The Strand",
      description: "A locally owned motel offering sea views, friendly service, and great value for families and couples.",
      image: "https://images.unsplash.com/photo-1559599238-b2c64d8a1d79?w=800&auto=format&fit=crop",
      query: "Tell me about Beach House Motel on The Strand.",
    },
  ];

  const handleAskAbout = (query: string) => {
    if ((window as any).setAiInputValue) {
      (window as any).setAiInputValue(query);
    }
    
    const input = document.getElementById('townsville-ai-input');
    if (input) {
      input.scrollIntoView({ behavior: 'smooth', block: 'center' });
      setTimeout(() => {
        input.classList.add('ring-2', 'ring-primary');
        setTimeout(() => {
          input.classList.remove('ring-2', 'ring-primary');
        }, 2000);
      }, 500);
    }
  };

  return (
    <section className="py-16 px-4 bg-gradient-to-b from-amber-50/20 dark:from-amber-950/10 to-background">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-foreground">
          Where to Stay in Townsville 🏨
        </h2>
        
        <p className="text-center text-lg md:text-xl text-muted-foreground mb-12 max-w-3xl mx-auto">
          Whether you're after beachfront views, inner-city convenience, or a peaceful retreat, Townsville has something for every traveller.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {hotels.map((hotel, index) => (
            <Card 
              key={index}
              className="overflow-hidden hover:scale-105 transition-transform duration-300 shadow-md hover:shadow-lg animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="aspect-video w-full overflow-hidden">
                <img 
                  src={hotel.image} 
                  alt={`${hotel.name} - ${hotel.tagline} in Townsville, North Queensland`}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader className="pb-3">
                <CardTitle className="text-xl">{hotel.name}</CardTitle>
                <CardDescription className="font-semibold text-primary">
                  {hotel.tagline}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-sm text-muted-foreground">{hotel.description}</p>
                <div className="flex gap-2">
                  <Button 
                    variant="default"
                    size="sm"
                    className="flex-1"
                    disabled
                  >
                    <ExternalLink className="w-4 h-4 mr-1" />
                    Check availability
                  </Button>
                  <Button 
                    onClick={() => handleAskAbout(hotel.query)}
                    variant="outline"
                    size="sm"
                    className="flex-1"
                  >
                    Ask AI
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <p className="text-center text-muted-foreground italic">
          Tip: Ask our AI guide for the best places to stay near The Strand.
        </p>
      </div>
    </section>
  );
};

export default Accommodation;
