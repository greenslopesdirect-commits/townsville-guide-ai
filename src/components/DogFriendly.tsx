import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { PawPrint } from "lucide-react";

const DogFriendly = () => {
  const dogParks = [
    {
      name: "Rowes Bay Dog Park",
      description: "Large open grassy area near the beach with plenty of room to run.",
      query: "Tell me about Rowes Bay Dog Park in Townsville.",
    },
    {
      name: "The Strand Foreshore",
      description: "Beautiful coastal walk with water access, shade, and dog-friendly stretches.",
      query: "Tell me about dog-friendly areas on The Strand Townsville.",
    },
    {
      name: "Murray Sporting Complex",
      description: "Spacious, fully fenced off-leash area with great visibility and room to play.",
      query: "Tell me about Murray Sporting Complex dog park in Townsville.",
    },
  ];

  const petFriendlyCafes = [
    {
      name: "Juliette's Gelateria",
      description: "Outdoor seating with water bowls, dog treats, and a great beachfront location.",
      query: "Is Juliette's Gelateria in Townsville dog-friendly?",
    },
    {
      name: "The Courtyard",
      description: "Trendy café with plenty of shaded outdoor tables for you and your dog.",
      query: "Is The Courtyard in Townsville dog-friendly?",
    },
    {
      name: "Hoi Polloi Café",
      description: "Relaxed atmosphere with a dog-friendly patio and cold water always available.",
      query: "Tell me about Hoi Polloi Café dog-friendly policy in Townsville.",
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
    <section className="py-16 px-4 bg-gradient-to-b from-muted/20 to-background">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-foreground">
          Dog-Friendly Townsville 🐾
        </h2>
        
        <p className="text-center text-lg md:text-xl text-muted-foreground mb-12 max-w-3xl mx-auto">
          Townsville is one of Queensland's most dog-friendly cities, with beaches, parks, cafés, and walking paths that welcome four-legged friends. Whether you're local or visiting, there are plenty of places to enjoy with your dog.
        </p>

        {/* Dog Parks Section */}
        <div className="mb-12">
          <h3 className="text-2xl md:text-3xl font-semibold mb-6 text-foreground flex items-center justify-center gap-2">
            <PawPrint className="w-6 h-6" />
            Dog Parks
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {dogParks.map((park, index) => (
              <Card 
                key={index}
                className="hover:shadow-lg transition-all duration-300 animate-fade-in border-border/40"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg">{park.name}</CardTitle>
                  <CardDescription>{park.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button 
                    onClick={() => handleAskAbout(park.query)}
                    variant="outline"
                    size="sm"
                    className="w-full"
                    aria-label={`Ask about ${park.name}`}
                  >
                    Ask about this park
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Pet-Friendly Cafés Section */}
        <div className="mb-12">
          <h3 className="text-2xl md:text-3xl font-semibold mb-6 text-foreground flex items-center justify-center gap-2">
            <PawPrint className="w-6 h-6" />
            Pet-Friendly Cafés
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {petFriendlyCafes.map((cafe, index) => (
              <Card 
                key={index}
                className="hover:shadow-lg transition-all duration-300 animate-fade-in border-border/40"
                style={{ animationDelay: `${(index + 3) * 100}ms` }}
              >
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg">{cafe.name}</CardTitle>
                  <CardDescription>{cafe.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button 
                    onClick={() => handleAskAbout(cafe.query)}
                    variant="outline"
                    size="sm"
                    className="w-full"
                    aria-label={`Ask about ${cafe.name}`}
                  >
                    Ask about this place
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Local Tip */}
        <Alert className="max-w-3xl mx-auto bg-primary/10 border-primary/20 animate-fade-in" style={{ animationDelay: '600ms' }}>
          <PawPrint className="h-5 w-5" />
          <AlertDescription className="ml-2">
            <strong className="text-foreground">Local Tip from Duncan 🐕:</strong>
            <span className="text-muted-foreground ml-2">
              Townsville pavements can get very hot during the day — always touch the ground with your hand first to check it's safe for your dog's paws.
            </span>
          </AlertDescription>
        </Alert>
      </div>
    </section>
  );
};

export default DogFriendly;
