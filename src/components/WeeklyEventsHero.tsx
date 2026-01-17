import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, ShoppingBasket, LifeBuoy, ChevronDown } from "lucide-react";

const WeeklyEventsHero = () => {
  const featureCards = [
    {
      title: "Cotters Market",
      icon: MapPin,
      details: "Sunday, 8am – 1pm | Flinders Street, CBD",
      description: "Fresh produce, arts, crafts, and live music in the heart of the city.",
      badge: "Free Entry",
      badgeColor: "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400",
    },
    {
      title: "Willows Rotary Markets",
      icon: ShoppingBasket,
      details: "Sunday, 7:30am – 11:30am | Willows Shopping Centre",
      description: "The go-to spot for fresh fruit, veg, and trash & treasure bargains.",
      badge: "Family Friendly",
      badgeColor: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400",
    },
    {
      title: "Safe Swimming (Stinger Season)",
      icon: LifeBuoy,
      details: "All Weekend | The Strand & Pallarenda",
      description: "Tides are high. Please swim ONLY inside the stinger nets for safety.",
      badge: "Safety Alert",
      badgeColor: "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400",
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
          A quiet weekend in Townsville before the Australia Day rush. Perfect for local markets and a swim.
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

      {/* Bottom Action */}
      <div className="text-center">
        <button 
          onClick={() => {
            const section = document.getElementById('annual-festivals');
            section?.scrollIntoView({ behavior: 'smooth' });
          }}
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors group"
        >
          Scroll down for Annual Festivals & AI Guide
          <ChevronDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
        </button>
      </div>
    </section>
  );
};

export default WeeklyEventsHero;
