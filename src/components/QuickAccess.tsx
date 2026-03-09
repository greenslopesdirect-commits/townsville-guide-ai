import { Link } from "react-router-dom";
import { 
  Waves, 
  Utensils, 
  Dog, 
  Building, 
  Ticket, 
  Calendar, 
  ShoppingBag, 
  TreePine, 
  Lightbulb,
  Baby
} from "lucide-react";

const QuickAccess = () => {
  const items = [
    {
      icon: Waves,
      title: "Beaches",
      desc: "Explore The Strand, Pallarenda, Rowes Bay & more.",
      link: "/beaches",
    },
    {
      icon: Utensils,
      title: "Restaurants & Cafés",
      desc: "Find the best breakfast, coffee, dinner & waterfront dining.",
      link: "/food",
    },
    {
      icon: Dog,
      title: "Dog-Friendly Spots",
      desc: "Dog beaches, off-leash parks, walking tracks & pet cafés.",
      link: "/dog-friendly",
    },
    {
      icon: Building,
      title: "Accommodation",
      desc: "Hotels, beachfront stays, apartments & budget options.",
      link: "/accommodation",
    },
    {
      icon: Ticket,
      title: "Things to Do",
      desc: "Attractions, lookouts, museums & family-friendly activities.",
      link: "/things-to-do",
    },
    {
      icon: Calendar,
      title: "Events & What's On",
      desc: "Festivals, markets, concerts & local events year-round.",
      link: "/events",
    },
    {
      icon: ShoppingBag,
      title: "Shopping & Markets",
      desc: "Local shops, boutiques & weekend market stalls.",
      link: "/shopping",
    },
    {
      icon: TreePine,
      title: "Nature & Walks",
      desc: "Castle Hill trails, wetlands, creeks & outdoor adventures.",
      link: "/nature",
    },
    {
      icon: Lightbulb,
      title: "Stinger & Safety Guide",
      desc: "⚠️ March 9 Update: Stinger nets are ACTIVE. Weather Alert: Tropical Low 29U is bringing heavy rain and wind this week—check the Disaster Dashboard before travel.",
      link: "/guides/stinger-safety",
    },
    {
      icon: Baby,
      title: "Family-Friendly Townsville",
      desc: "Beaches, activities, day trips & heat tips for kids.",
      link: "/townsville-with-kids",
    },
  ];

  return (
    <section className="py-16 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center text-foreground">
          Quick Access
        </h2>
        <p className="text-center text-muted-foreground text-lg mb-12 max-w-2xl mx-auto">
          Jump straight to what you're looking for — your Townsville AI guide has you covered.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <Link
                key={item.title}
                to={item.link}
                className="group p-6 rounded-2xl bg-card shadow-sm hover:shadow-lg transition-all duration-300 border-2 border-border/40 hover:border-primary/30 animate-fade-in"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold mb-2 text-foreground group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default QuickAccess;
