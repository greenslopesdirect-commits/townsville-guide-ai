import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Star } from "lucide-react";

const picks = [
  {
    title: "The Strand",
    description: "2.2km beachfront promenade perfect for walks, swimming, and picnics",
    category: "Beach",
  },
  {
    title: "Reef HQ Great Barrier Reef Aquarium",
    description: "World's largest living coral reef aquarium - a must-see attraction",
    category: "Attraction",
  },
  {
    title: "Castle Hill",
    description: "Iconic pink granite monolith with panoramic city and ocean views",
    category: "Landmark",
  },
  {
    title: "Magnetic Island",
    description: "20-minute ferry ride to paradise - beaches, wildlife, and bushwalking",
    category: "Day Trip",
  },
  {
    title: "Palmer Street",
    description: "Historic precinct with cafes, restaurants, and weekend markets",
    category: "Dining & Shopping",
  },
];

const TopPicks = () => {
  return (
    <section className="py-16 px-4 bg-muted/30">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
          Top 5 Local Picks
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {picks.map((pick, index) => (
            <Card 
              key={pick.title}
              className="rounded-3xl shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-tropical)] transition-all hover:-translate-y-1 border-2"
            >
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-semibold px-3 py-1 rounded-full bg-primary/10 text-primary">
                    {pick.category}
                  </span>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-[hsl(var(--accent))] text-[hsl(var(--accent))]" />
                    <span className="text-sm font-semibold">#{index + 1}</span>
                  </div>
                </div>
                <CardTitle className="text-xl">{pick.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  {pick.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopPicks;
