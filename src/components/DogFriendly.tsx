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
    <section className="py-10 sm:py-16 px-3 sm:px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header - responsive text */}
        <div className="text-center mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-3 sm:mb-4">
            <Dog className="w-4 h-4 flex-shrink-0" />
            <span>Pet-Friendly</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 text-foreground leading-tight">
            Dog-Friendly Townsville
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Townsville is one of Queensland's most dog-friendly cities, with beaches, parks, cafés, and walking paths that welcome four-legged friends.
          </p>
        </div>

        {/* Dog Spots Grid - single column on mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
          {dogSpots.map((spot, index) => (
            <Card 
              key={index}
              className="hover:shadow-lg transition-all duration-300 animate-fade-in border-2 border-border/40 hover:border-primary/30 relative"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Schnauzer Approved Badge - repositioned for mobile */}
              {spot.schnauzerapproved && (
                <div className="absolute top-2 right-2 z-10">
                  <span className="inline-flex items-center gap-1 px-2 sm:px-3 py-1 rounded-full bg-gradient-to-r from-amber-400 to-orange-400 dark:from-amber-500 dark:to-orange-500 text-white text-xs font-bold shadow-lg border-2 border-white dark:border-amber-300">
                    <span className="text-sm sm:text-base">🐕</span>
                    <span className="hidden xs:inline">Schnauzer Approved</span>
                    <span className="xs:hidden">Approved</span>
                  </span>
                </div>
              )}
              <CardContent className={`p-4 sm:p-5 ${spot.schnauzerapproved ? 'pt-10 sm:pt-12' : ''}`}>
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="p-2 sm:p-3 rounded-xl bg-primary/10 text-primary flex-shrink-0">
                    <Dog className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-base sm:text-lg font-semibold mb-2 text-foreground leading-tight break-words">
                      {spot.name}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-3 sm:mb-4">
                      {spot.description}
                    </p>
                    <Button 
                      onClick={() => triggerAiGuide(`Tell me about the menu, vibe, and booking info for ${spot.name}.`)}
                      variant="outline"
                      size="sm"
                      className="w-full group text-sm"
                      aria-label={`Ask AI about ${spot.name}`}
                    >
                      <span className="mr-2">🤖</span>
                      <span className="truncate">Ask AI about this place</span>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Local Tip - improved mobile layout */}
        <Alert className="max-w-3xl mx-auto bg-amber-50 dark:bg-amber-950/20 border-amber-200 dark:border-amber-800 mb-6 sm:mb-8">
          <Dog className="h-5 w-5 text-amber-600 flex-shrink-0" />
          <AlertDescription className="ml-2">
              <strong className="text-foreground block sm:inline">☀️ Current Vibe:</strong>
             <span className="text-muted-foreground sm:ml-2 block sm:inline mt-1 sm:mt-0">
                The "Perfect Dry" is spectacular! Humidity has bottomed out. Morning UV is still high, but those <strong>5:30 PM sunsets at Castle Hill</strong> are world-class right now. <strong>Pallarenda Beach</strong> is our top pick for low-tide runs with the dog on the firm sand. Stinger nets remain <strong>ACTIVE</strong> — stay safe in the water!
              </span>
          </AlertDescription>
        </Alert>

        {/* CTA */}
        <div className="text-center space-y-2">
          <Link to="/dog-friendly">
            <Button variant="default" size="lg" className="group text-sm sm:text-base px-4 sm:px-6">
              View all dog-friendly spots
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform flex-shrink-0" />
            </Button>
          </Link>
          <p className="text-xs text-muted-foreground">
            Featuring the{" "}
            <a href="https://www.aussiedogguide.com.au/" target="_blank" rel="noopener noreferrer" className="font-medium text-primary hover:underline">
              Aussie Dog Guide
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default DogFriendly;
