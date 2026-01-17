import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Music, ShoppingBasket, MapPin, ChevronDown, ExternalLink } from "lucide-react";
import { triggerAiGuide } from "@/utils/aiGuide";

const WeeklyEventsHero = () => {
  const featureCards = [
    {
      title: "Live Music @ Townsville RSL",
      icon: Music,
      details: "Saturday, Jan 17 @ 7:30 PM | Townsville RSL",
      description: "Enjoy live entertainment from \"The Bar Trippers\". Great atmosphere for a Saturday night.",
      badge: "Free Entry",
      badgeColor: "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400",
    },
    {
      title: "Willows Rotary Markets",
      icon: ShoppingBasket,
      details: "Sunday, Jan 18 @ 7:30 AM | Willows Shopping Centre",
      description: "The locals' choice for fresh fruit, veg, and Sunday bargains.",
      badge: "Shop Local",
      badgeColor: "bg-primary/10 text-primary",
    },
    {
      title: "Cotters Market",
      icon: MapPin,
      details: "Sunday, Jan 18 @ 8:00 AM | Flinders Street, CBD",
      description: "Townsville's largest market with arts, crafts, and food stalls.",
      badge: "Family Friendly",
      badgeColor: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400",
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
          Last Updated: Jan 17, 2026
        </Badge>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-foreground">
          What's On: Weekend of Jan 17–18
        </h1>
        <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          A great weekend for live music and local markets. <span className="italic">(Note: Townsville Fire are playing away in Perth this Sunday, so no home game at the stadium).</span>
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
          Ask our AI guide for the latest events and activities happening right now.
        </p>
        <Button 
          size="lg"
          onClick={() => triggerAiGuide("What events and activities are happening in Townsville this week?")}
          className="gap-2 text-base font-semibold px-6 py-3 h-auto shadow-md hover:shadow-lg transition-shadow"
        >
          <span>🤖</span>
          Ask What's On
        </Button>
        <div className="mt-4">
          <a 
            href="https://www.townsvilleentertainment.com.au/events" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            Official Event Calendar
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
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
