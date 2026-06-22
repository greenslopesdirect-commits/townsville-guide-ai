import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Music, ShoppingBasket, MapPin, ChevronDown, ExternalLink } from "lucide-react";
import { triggerAiGuide } from "@/utils/aiGuide";

const WeeklyEventsHero = () => {
  const featureCards = [
    {
      title: "Cowboys vs Penrith Panthers — Round 17",
      icon: MapPin,
      details: "Saturday, June 27 | Queensland Country Bank Stadium",
      description: "A massive Saturday night NRL clash in the heart of the city. Use the free Park & Ride at Lou Litster Park to skip CBD traffic.",
      badge: "Footy Drawcard",
      badgeColor: "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400",
    },
    {
      title: "Cotters Market",
      icon: ShoppingBasket,
      details: "Sunday, June 28 | 8:00 AM – 1:00 PM",
      description: "Every Sunday morning on Flinders Street. The cool dry-season breeze makes the morning stroll even better.",
      badge: "Sunday Markets",
      badgeColor: "bg-primary/10 text-primary",
    },
    {
      title: "Paluma Bush Dance",
      icon: Music,
      details: "Saturday night, June 27 | Paluma Village",
      description: "Head up the mountain to the cool rainforest for live music, dancing, and a community supper.",
      badge: "Regional Treat",
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
          Last Updated: June 26, 2026
        </Badge>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-foreground">
          What's On in Townsville: June 26 – 28
        </h1>
        <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Earlier this June delivered some of the biggest festival crowds of the dry season, with Country Fest QLD and the 35th Townsville Folk Festival wrapping to massive turnouts. This weekend brings footy, markets, rugby and a rainforest bush dance under crystal-clear winter skies.
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
