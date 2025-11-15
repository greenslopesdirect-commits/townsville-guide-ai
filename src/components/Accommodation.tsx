import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const Accommodation = () => {
  const hotels = [
    {
      name: "🏝 The Ville Resort–Casino",
      description: "Luxury resort with ocean views — premium beachfront accommodation with casino, pools, and fine dining.",
      bookingLink: "https://www.booking.com/hotel/au/the-ville-resort-casino-townsville.html",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&auto=format&fit=crop",
    },
    {
      name: "🌇 Aquarius on the Beach",
      description: "Affordable beachfront hotel — great value accommodation right on The Strand waterfront.",
      bookingLink: "https://www.booking.com/hotel/au/aquarius-on-the-beach-townsville.html",
      image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&auto=format&fit=crop",
    },
    {
      name: "🏙 Hotel Grand Chancellor",
      description: "Modern city hotel with rooftop views — contemporary accommodation in the heart of the CBD.",
      bookingLink: "https://www.booking.com/hotel/au/hotel-grand-chancellor-townsville.html",
      image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800&auto=format&fit=crop",
    },
    {
      name: "🏡 Quest Townsville",
      description: "Serviced apartments near the marina — perfect for longer stays and families.",
      bookingLink: "https://www.booking.com/hotel/au/quest-townsville.html",
      image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&auto=format&fit=crop",
    },
    {
      name: "🏢 Oaks Townsville Gateway Suites",
      description: "Stylish and spacious hotel suites — modern comfort with great city and river views.",
      bookingLink: "https://www.booking.com/hotel/au/oaks-townsville-gateway-suites.html",
      image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800&auto=format&fit=crop",
    },
    {
      name: "🏕 BIG4 Rowes Bay Holiday Park",
      description: "Beachfront caravan park with cabins, pools, and family facilities.",
      bookingLink: "https://www.booking.com/hotel/au/big4-rowes-bay-beachfront-holiday-park-townsville.html",
      image: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=800&auto=format&fit=crop",
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

      </div>
    </section>
  );
};

export default Accommodation;
