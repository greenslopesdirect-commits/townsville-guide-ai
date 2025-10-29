import { Utensils, Waves, Palmtree, Dog, Hotel, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";

const categories = [
  { name: "Restaurants", icon: Utensils },
  { name: "Beaches", icon: Waves },
  { name: "Things to Do", icon: Palmtree },
  { name: "Dog Parks", icon: Dog },
  { name: "Accommodation", icon: Hotel },
  { name: "Shopping", icon: ShoppingBag },
];

const QuickAccess = () => {
  return (
    <section className="py-16 px-4 bg-background">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
          Quick Access
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 max-w-4xl mx-auto">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <Button
                key={category.name}
                variant="outline"
                size="lg"
                className="h-32 md:h-40 flex-col gap-3 rounded-3xl border-2 hover:border-primary hover:bg-primary/5 transition-all shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-tropical)] group"
              >
                <Icon className="w-8 h-8 md:w-10 md:h-10 text-primary group-hover:scale-110 transition-transform" />
                <span className="text-base md:text-lg font-semibold">{category.name}</span>
              </Button>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default QuickAccess;
