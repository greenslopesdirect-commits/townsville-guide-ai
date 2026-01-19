import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, ExternalLink, ArrowRight } from "lucide-react";
import { triggerAiGuide } from "@/utils/aiGuide";
import { Link } from "react-router-dom";

const EventsOn = () => {
  const events = [
    {
      icon: "🎭",
      title: "Strand Ephemera",
      date: "Biennial",
      description: "Australia's leading outdoor sculpture festival held along The Strand — featuring large-scale artworks and sunset displays.",
      query: "Tell me about Strand Ephemera festival in Townsville.",
    },
    {
      icon: "🎨",
      title: "Townsville Cultural Festival",
      date: "Annual",
      description: "A colourful celebration of world cultures with food stalls, live music, performances, and art from local communities.",
      query: "When is the Townsville Cultural Festival and what's on?",
    },
    {
      icon: "⛵",
      title: "Magnetic Island Race Week",
      date: "September",
      description: "One of Australia's premier sailing events, bringing yachts, competitions, and waterfront festivities.",
      query: "Tell me about Magnetic Island Race Week.",
    },
    {
      icon: "🎶",
      title: "North Australian Festival of Arts",
      date: "Various Dates",
      description: "Townsville's major arts festival offering theatre, music, comedy, workshops, and outdoor performances.",
      query: "What's happening at the North Australian Festival of Arts in Townsville?",
    },
    {
      icon: "🛍",
      title: "Cotters Market",
      date: "Every Sunday",
      description: "Townsville's iconic Sunday market — local produce, handmade goods, crafts, food stalls, and entertainment.",
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

  return (
    <section className="py-16 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            <Calendar className="w-4 h-4" />
            Events
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            What's On in Townsville
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Townsville hosts festivals, concerts, arts events, and community markets all year round. Here are some of the city's biggest highlights.
          </p>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {events.map((event, index) => (
            <Card 
              key={index}
              className="hover:shadow-lg transition-all duration-300 animate-fade-in border-2 border-border/40 hover:border-primary/30"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-5">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-primary/10 text-primary flex-shrink-0 text-2xl">
                    {event.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 text-primary mb-1">
                      <Calendar className="w-3 h-3" />
                      <span className="text-xs font-medium">{event.date}</span>
                    </div>
                    <h3 className="text-lg font-semibold mb-2 text-foreground">{event.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">{event.description}</p>
                    <Button 
                      onClick={() => triggerAiGuide(event.query)}
                      variant="outline"
                      size="sm"
                      className="w-full"
                      aria-label={`Ask about ${event.title}`}
                    >
                      Ask about this event
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTAs */}
        <div className="flex flex-wrap gap-4 justify-center">
          <Link to="/events">
            <Button variant="default" size="lg" className="group">
              View all events
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
          <Button 
            asChild
            variant="outline"
            size="lg"
          >
            <a 
              href="https://whatson.townsville.qld.gov.au" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2"
              aria-label="View the full events calendar for Townsville"
            >
              Official event calendar
              <ExternalLink className="w-4 h-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default EventsOn;
