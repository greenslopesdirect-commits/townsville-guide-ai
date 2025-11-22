import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, ExternalLink } from "lucide-react";

const EventsOn = () => {
  const events = [
    {
      icon: "🎭",
      title: "Strand Ephemera",
      date: "Biennial",
      description: "Australia's leading outdoor sculpture festival held along The Strand — featuring large-scale artworks, sunset displays, and community activities.",
      query: "Tell me about Strand Ephemera festival in Townsville.",
    },
    {
      icon: "🎨",
      title: "Townsville Cultural Festival",
      date: "Annual",
      description: "A colourful celebration of world cultures with food stalls, live music, performances, and art from local and international communities.",
      query: "When is the Townsville Cultural Festival and what's on?",
    },
    {
      icon: "⛵",
      title: "Magnetic Island Race Week",
      date: "September",
      description: "One of Australia's premier sailing events, bringing yachts, competitions, and waterfront festivities to Magnetic Island.",
      query: "Tell me about Magnetic Island Race Week.",
    },
    {
      icon: "🎶",
      title: "North Australian Festival of Arts",
      date: "Various Dates",
      description: "Townsville's major arts festival offering theatre, music, comedy, workshops, and large-scale outdoor performances.",
      query: "What's happening at the North Australian Festival of Arts in Townsville?",
    },
    {
      icon: "🛍",
      title: "Cotters Market",
      date: "Every Sunday",
      description: "Townsville's iconic Sunday market in the CBD — local produce, handmade goods, crafts, food stalls, and entertainment.",
      query: "Tell me about Cotters Market in Townsville.",
    },
    {
      icon: "🎄",
      title: "Townsville Christmas Festival",
      date: "December",
      description: "A festive celebration with lights, markets, live entertainment, kids' activities, and seasonal food stalls.",
      query: "Tell me about the Townsville Christmas Festival.",
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
    <section className="py-16 px-4 bg-gradient-to-b from-background to-amber-50/20 dark:to-amber-950/10">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-foreground">
          What's On in Townsville 🎟️
        </h2>
        
        <p className="text-center text-lg md:text-xl text-muted-foreground mb-12 max-w-3xl mx-auto">
          Townsville hosts festivals, concerts, arts events, and community markets all year round. Here are some of the city's biggest highlights.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {events.map((event, index) => (
            <Card 
              key={index}
              className="hover:scale-105 transition-all duration-300 animate-fade-in shadow-md hover:shadow-lg border-border/40"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader className="pb-3">
                <div className="flex items-center gap-2 text-primary mb-2">
                  <Calendar className="w-4 h-4" />
                  <span className="text-sm font-semibold">{event.date}</span>
                </div>
                <CardTitle className="text-xl flex items-center gap-2">
                  <span className="text-2xl">{event.icon}</span>
                  {event.title}
                </CardTitle>
                <CardDescription>{event.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Button 
                  onClick={() => handleAskAbout(event.query)}
                  variant="outline"
                  size="sm"
                  className="w-full"
                >
                  Ask about this event
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center animate-fade-in" style={{ animationDelay: '500ms' }}>
          <Button 
            asChild
            size="lg"
            className="shadow-lg"
          >
            <a 
              href="https://whatson.townsville.qld.gov.au" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2"
            >
              See full event calendar
              <ExternalLink className="w-4 h-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default EventsOn;
