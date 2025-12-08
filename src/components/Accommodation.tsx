import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Building, ExternalLink, ArrowRight } from "lucide-react";
import { triggerAiGuide, AI_PRESETS } from "@/utils/aiGuide";
import { Link } from "react-router-dom";
import villeResortImage from "@/assets/the-ville-resort-casino-townsville.webp";
import aquariusImage from "@/assets/aquarius-on-the-beach-townsville.webp";
import grandChancellorImage from "@/assets/grand-chancellor-hotel-townsville.webp";
import questImage from "@/assets/quest-serviced-apartments-townsville.webp";
import oaksImage from "@/assets/oaks-gateway-suites-townsville.webp";
import big4Image from "@/assets/big4-rowes-bay-holiday-park-townsville.webp";

const Accommodation = () => {
  const hotels = [
    {
      name: "The Ville Resort–Casino",
      description: "Luxury resort with ocean views, lagoon-style pools, casino facilities, and premium restaurants.",
      bookingLink: "https://www.booking.com/hotel/au/the-ville-resort-casino-townsville.html",
      image: villeResortImage,
    },
    {
      name: "Aquarius on the Beach",
      description: "Affordable beachfront hotel right on The Strand, offering ocean views and excellent value.",
      bookingLink: "https://www.booking.com/hotel/au/aquarius-on-the-beach-townsville.html",
      image: aquariusImage,
    },
    {
      name: "Hotel Grand Chancellor",
      description: "Modern hotel in the heart of the CBD with rooftop views and easy access to shopping.",
      bookingLink: "https://www.booking.com/hotel/au/hotel-grand-chancellor-townsville.html",
      image: grandChancellorImage,
    },
    {
      name: "Quest Townsville",
      description: "Serviced apartments near the marina — ideal for families, longer stays, and business travellers.",
      bookingLink: "https://www.booking.com/hotel/au/quest-townsville.html",
      image: questImage,
    },
    {
      name: "Oaks Townsville Gateway Suites",
      description: "Stylish, comfortable hotel suites with river and city views, perfect for a relaxing stay.",
      bookingLink: "https://www.booking.com/hotel/au/oaks-townsville-gateway-suites.html",
      image: oaksImage,
    },
    {
      name: "BIG4 Rowes Bay Holiday Park",
      description: "Beachfront caravan park with cabins, pools, playgrounds, and family-friendly facilities.",
      bookingLink: "https://www.booking.com/hotel/au/big4-rowes-bay-beachfront-holiday-park-townsville.html",
      image: big4Image,
    },
  ];

  return (
    <section className="py-16 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            <Building className="w-4 h-4" />
            Accommodation
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Where to Stay in Townsville
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From beachfront resorts to modern city hotels, Townsville offers a wide range of stays for families, couples, and solo travellers.
          </p>
        </div>

        {/* Hotels Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {hotels.map((hotel, index) => (
            <Card 
              key={index}
              className="overflow-hidden hover:shadow-lg transition-all duration-300 animate-fade-in border-2 border-border/40 hover:border-primary/30"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="aspect-video w-full overflow-hidden">
                <img 
                  src={hotel.image} 
                  alt={`${hotel.name} accommodation in Townsville`}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <CardContent className="p-5">
                <h3 className="text-lg font-semibold mb-2 text-foreground">{hotel.name}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">{hotel.description}</p>
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
                    aria-label={`Check availability for ${hotel.name}`}
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Check availability
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTAs */}
        <div className="flex flex-wrap gap-4 justify-center">
          <Link to="/townsville/accommodation">
            <Button variant="default" size="lg" className="group">
              View all accommodation
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
          <Button
            onClick={() => triggerAiGuide(AI_PRESETS.accommodation)}
            variant="outline"
            size="lg"
            aria-label="Ask AI guide for accommodation recommendations"
          >
            Ask AI for recommendations
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Accommodation;
