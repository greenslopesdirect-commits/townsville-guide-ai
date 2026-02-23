import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Music, ShoppingBasket, MapPin, ChevronDown, ExternalLink } from "lucide-react";
import { triggerAiGuide } from "@/utils/aiGuide";

const WeeklyEventsHero = () => {
  const featureCards = [
    {
      title: "NRL Season Opener: Cowboys vs Knights",
      icon: MapPin,
      details: "Sunday, March 1 | 1:15 PM AEST",
      description: "The season kicks off in Las Vegas! Join the local crowd at Leagues Club or North Shore Tavern for a midday watch party.",
      badge: "Big Event",
      badgeColor: "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400",
    },
    {
      title: "Cotters Market",
      icon: ShoppingBasket,
      details: "Sunday, March 1 | 8:00 AM – 1:00 PM",
      description: "Perfect for a Sunday stroll before the footy starts. Local arts, crafts, and coffee on Flinders Street.",
      badge: "Markets",
      badgeColor: "bg-primary/10 text-primary",
    },
    {
      title: "Clean Up Australia Day",
      icon: Music,
      details: "Sunday, March 1 | Various Locations",
      description: "Join the local teams at Pallarenda or the Ross River to keep our backyard beautiful.",
      badge: "Nature",
      badgeColor: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400",
    },
  ];

  return (
    <section className="mb-12">
      {/* Main Header */}
      <header className="text-center mb-8">
        <Badge 
          variant="outline" 
          className="mb-4 px-3 py-1 text-xs font-medium border-primary/30 text-muted-foreground"
        >
          Last Updated: Feb 23, 2026
        </Badge>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-foreground">
          What's On: Feb 23 – March 1
        </h1>
        <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Late February and early March in Townsville brings the excitement of the NRL season launch alongside our beautiful tropical mornings. Plan your outdoor activities early.
        </p>
      </header>

      {/* Feature Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-8">
        {featureCards.map((card, index) => {
          const IconComponent = card.icon;
          return (
            <Card 
              key={index} 
              className="overflow-hidden border-2 border-border/40 hover:border-primary/30 hover:shadow-lg transition-all duration-300"
            >
              <CardContent className="p-5">
                {/* Icon & Badge Row */}
                <div className="flex items-start justify-between mb-3">
                  <div className="p-2.5 rounded-xl bg-primary/10">
                    <IconComponent className="w-5 h-5 text-primary" />
                  </div>
                  <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${card.badgeColor}`}>
                    {card.badge}
                  </span>
                </div>

                {/* Title */}
                <h2 className="text-lg font-bold text-foreground mb-1.5">
                  {card.title}
                </h2>

                {/* Details */}
                <p className="text-xs text-primary font-medium mb-2">
                  {card.details}
                </p>

                {/* Description */}
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {card.description}
                </p>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Ask AI Section */}
      <div className="py-10 px-6 bg-muted/30 rounded-2xl border border-border/40 text-center">
        <h2 className="text-xl md:text-2xl font-bold text-foreground mb-2">
          What's On This Week?
        </h2>
        <p className="text-muted-foreground mb-6 max-w-md mx-auto">
          Ask me: 'What are the best waterfalls near Townsville?' or 'What can I see at Jezzine Barracks?'
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Button 
            size="lg"
            onClick={() => triggerAiGuide("What events and activities are happening in Townsville this week?")}
            className="gap-2 text-base font-semibold px-6 py-3 h-auto shadow-md hover:shadow-lg transition-shadow"
          >
            <span>🤖</span>
            Ask What's On
          </Button>
          <Button 
            variant="outline"
            size="lg"
            asChild
            className="gap-2 text-base font-semibold px-6 py-3 h-auto"
          >
            <a 
              href="https://whatson.townsville.qld.gov.au/" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Official Event Calendar
              <ExternalLink className="w-4 h-4" />
            </a>
          </Button>
        </div>
      </div>

      {/* Bottom Action */}
      <div className="text-center mt-8">
        <button 
          onClick={() => {
            const section = document.getElementById('annual-festivals');
            section?.scrollIntoView({ behavior: 'smooth' });
          }}
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors group"
        >
          Scroll down for Annual Festivals
          <ChevronDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
        </button>
      </div>
    </section>
  );
};

export default WeeklyEventsHero;
