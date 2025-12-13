import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Dog, ArrowRight } from "lucide-react";
import { triggerAiGuide } from "@/utils/aiGuide";
import { Link } from "react-router-dom";

const DogFriendly = () => {
  const dogSpots = [
    {
      name: "Rowes Bay Dog Park",
      description: "Large open grassy area near the beach with plenty of room to run and socialise.",
      query: "Tell me about Rowes Bay Dog Park in Townsville.",
      schnauzerapproved: true,
    },
    {
      name: "The Strand Foreshore",
      description: "Beautiful coastal walk with water access, shade, and dog-friendly stretches.",
      query: "Tell me about dog-friendly areas on The Strand Townsville.",
      schnauzerapproved: false,
    },
    {
      name: "Murray Sporting Complex",
      description: "Spacious, fully fenced off-leash area with great visibility and room to play.",
      query: "Tell me about Murray Sporting Complex dog park in Townsville.",
      schnauzerapproved: true,
    },
    {
      name: "Juliette's Gelateria",
      description: "Outdoor seating with water bowls, dog treats, and a great beachfront location.",
      query: "Is Juliette's Gelateria in Townsville dog-friendly?",
      schnauzerapproved: false,
    },
    {
      name: "The Courtyard",
      description: "Trendy café with plenty of shaded outdoor tables for you and your dog.",
      query: "Is The Courtyard in Townsville dog-friendly?",
      schnauzerapproved: false,
    },
    {
      name: "Hoi Polloi Café",
      description: "Relaxed atmosphere with a dog-friendly patio and cold water always available.",
      query: "Tell me about Hoi Polloi Café dog-friendly policy in Townsville.",
      schnauzerapproved: false,
    },
  ];

  return (
    <section className="py-16 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            <Dog className="w-4 h-4" />
            Pet-Friendly
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Dog-Friendly Townsville
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Townsville is one of Queensland's most dog-friendly cities, with beaches, parks, cafés, and walking paths that welcome four-legged friends.
          </p>
        </div>

        {/* Dog Spots Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {dogSpots.map((spot, index) => (
            <Card 
              key={index}
              className="hover:shadow-lg transition-all duration-300 animate-fade-in border-2 border-border/40 hover:border-primary/30 relative overflow-hidden"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Schnauzer Approved Badge */}
              {spot.schnauzerapproved && (
                <div className="absolute -top-1 right-2 z-10">
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-amber-100 dark:bg-amber-900/40 text-amber-700 dark:text-amber-300 text-xs font-medium border border-amber-200 dark:border-amber-700">
                    🐾 Schnauzer Approved
                  </span>
                </div>
              )}
              <CardContent className={`p-5 ${spot.schnauzerapproved ? 'pt-6' : ''}`}>
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-primary/10 text-primary flex-shrink-0">
                    <Dog className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold mb-2 text-foreground">{spot.name}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">{spot.description}</p>
                    <Button 
                      onClick={() => triggerAiGuide(spot.query)}
                      variant="outline"
                      size="sm"
                      className="w-full"
                      aria-label={`Ask about ${spot.name}`}
                    >
                      Ask about this place
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Local Tip */}
        <Alert className="max-w-3xl mx-auto bg-amber-50 dark:bg-amber-950/20 border-amber-200 dark:border-amber-800 mb-8">
          <Dog className="h-5 w-5 text-amber-600" />
          <AlertDescription className="ml-2">
            <strong className="text-foreground">Local Tip:</strong>
            <span className="text-muted-foreground ml-2">
              Townsville pavements can get very hot during the day — always touch the ground with your hand first to check it's safe for your dog's paws.
            </span>
          </AlertDescription>
        </Alert>

        {/* CTA */}
        <div className="text-center">
          <Link to="/townsville/dog-friendly">
            <Button variant="default" size="lg" className="group">
              View all dog-friendly spots
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default DogFriendly;
