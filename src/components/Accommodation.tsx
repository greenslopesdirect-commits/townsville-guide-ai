import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import villeResortImage from "@/assets/the-ville-resort-casino-townsville.webp";
import aquariusImage from "@/assets/aquarius-on-the-beach-townsville.webp";
import grandChancellorImage from "@/assets/grand-chancellor-hotel-townsville.webp";
import questImage from "@/assets/quest-serviced-apartments-townsville.webp";
import oaksImage from "@/assets/oaks-gateway-suites-townsville.webp";
import big4Image from "@/assets/big4-rowes-bay-holiday-park-townsville.webp";

const Accommodation = () => {
  const hotels = [
    {
      name: "🏝 The Ville Resort–Casino",
      description: "Luxury resort with ocean views — premium beachfront accommodation with casino, pools, and fine dining.",
      bookingLink: "https://www.booking.com/hotel/au/the-ville-resort-casino-townsville.html",
      image: villeResortImage,
    },
    {
      name: "🌇 Aquarius on the Beach",
      description: "Affordable beachfront hotel — great value accommodation right on The Strand waterfront.",
      bookingLink: "https://www.booking.com/hotel/au/aquarius-on-the-beach-townsville.html",
      image: aquariusImage,
    },
    {
      name: "🏙 Hotel Grand Chancellor",
      description: "Modern city hotel with rooftop views — contemporary accommodation in the heart of the CBD.",
      bookingLink: "https://www.booking.com/hotel/au/hotel-grand-chancellor-townsville.html",
      image: grandChancellorImage,
    },
    {
      name: "🏡 Quest Townsville",
      description: "Serviced apartments near the marina — perfect for longer stays and families.",
      bookingLink: "https://www.booking.com/hotel/au/quest-townsville.html",
      image: questImage,
    },
    {
      name: "🏢 Oaks Townsville Gateway Suites",
      description: "Stylish and spacious hotel suites — modern comfort with great city and river views.",
      bookingLink: "https://www.booking.com/hotel/au/oaks-townsville-gateway-suites.html",
      image: oaksImage,
    },
    {
      name: "🏕 BIG4 Rowes Bay Holiday Park",
      description: "Beachfront caravan park with cabins, pools, and family facilities.",
      bookingLink: "https://www.booking.com/hotel/au/big4-rowes-bay-beachfront-holiday-park-townsville.html",
      image: big4Image,
    },
  ];

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
                  alt={`${hotel.name} accommodation in Townsville, North Queensland`}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader className="pb-3">
                <CardTitle className="text-xl">{hotel.name}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-sm text-muted-foreground">{hotel.description}</p>
                <Button 
                  asChild
                  variant="default"
                  size="sm"
                  className="w-full"
                >
                  <a 
                    href={hotel.bookingLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Check availability
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div 
          className="flex justify-center mt-12 animate-fade-in"
          style={{ animationDelay: '600ms' }}
        >
          <button
            onClick={() => {
              const queries = [
                "Show me hotels near The Strand.",
                "Find affordable accommodation in Townsville.",
                "Which hotels have ocean views in Townsville?"
              ];
              const randomQuery = queries[Math.floor(Math.random() * queries.length)];
              
              if (typeof window !== 'undefined' && (window as any).setAiInputValue) {
                (window as any).setAiInputValue(randomQuery);
              }
              
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="group relative px-6 py-4 bg-gradient-to-r from-primary/10 to-accent/10 hover:from-primary/20 hover:to-accent/20 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 border border-primary/20"
          >
            <div className="flex items-center gap-2 text-sm md:text-base">
              <span className="text-2xl">🏨</span>
              <span className="font-medium text-foreground">
                Ask our AI guide for the best nearby stays.
              </span>
            </div>
            <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full blur opacity-30 group-hover:opacity-50 transition-opacity -z-10" />
          </button>
        </div>

      </div>
    </section>
  );
};

export default Accommodation;
