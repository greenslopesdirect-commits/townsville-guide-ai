import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Waves, Mountain, Dog, TreePine, Utensils, Compass } from "lucide-react";
import { Link } from "react-router-dom";

const SeoContentSections = () => {
  const sections = [
    {
      id: "beaches",
      icon: Waves,
      title: "Best Beaches in Townsville",
      content:
        "Townsville boasts some of Queensland's most stunning beaches. The Strand is the city's iconic 2.2km waterfront promenade, perfect for swimming, walking, and sunset views. Pallarenda Beach offers a quieter escape with rock pools and fishing spots, while Rowes Bay provides calm waters ideal for families.",
      linkText: "See all beaches",
      linkTo: "/beaches"
    },
    {
      id: "things-to-do",
      icon: Mountain,
      title: "Things To Do in Townsville",
      content:
        "Townsville offers endless activities for visitors and locals alike. Climb or drive Castle Hill for panoramic views of the city and coastline. Take the ferry to Magnetic Island for hiking, wildlife, and secluded beaches. Cool off at Riverway Lagoons, a free tropical swimming complex.",
      linkText: "See all things to do",
      linkTo: "/things-to-do"
    },
    {
      id: "dog-friendly",
      icon: Dog,
      title: "Dog-Friendly Townsville",
      content:
        "Townsville is one of Queensland's most dog-friendly cities. Rowes Bay Dog Park offers a large fenced off-leash area near the beach. The Strand has designated dog-friendly zones along the foreshore, ideal for sunrise and sunset walks with your furry companion.",
      linkText: "See all dog-friendly spots",
      linkTo: "/dog-friendly"
    },
    {
      id: "walks-lookouts",
      icon: TreePine,
      title: "Best Walks & Lookouts",
      content:
        "Townsville's tropical landscape offers spectacular walking trails and lookout points. Castle Hill features several walking tracks leading to 360-degree views over the city, harbour, and Magnetic Island. The Jezzine Barracks boardwalk winds along the coastline with interpretive displays.",
      linkText: "Explore walking trails",
      linkTo: "/nature"
    },
    {
      id: "restaurants",
      icon: Utensils,
      title: "Best Restaurants & Cafés",
      content:
        "Townsville's dining scene blends tropical flavours, fresh seafood, and relaxed Queensland atmosphere. JAM Corner on Palmer Street serves award-winning modern Australian cuisine. A Touch of Salt offers elegant fine dining with riverfront views and seasonal menus.",
      linkText: "Find places to eat",
      linkTo: "/food"
    },
    {
      id: "magnetic-island",
      icon: Compass,
      title: "Magnetic Island Guide",
      content:
        "Just 20 minutes by ferry from Townsville, Magnetic Island is a tropical paradise with 23 beaches and bays. Horseshoe Bay is the island's most popular beach, offering calm waters, watersports, and beachfront dining. The historic Forts Walk offers stunning coastal views.",
      linkText: "Plan a Family-Friendly Day Trip",
      linkTo: "/guides/magnetic-island-day-trip"
    }
  ];

  return (
    <section className="py-10 sm:py-16 px-3 sm:px-4 bg-gradient-to-b from-muted/20 to-background">
      <div className="container mx-auto max-w-6xl">
        {/* Single column on mobile, 2 columns on tablet+ */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {sections.map((section, index) => {
            const IconComponent = section.icon;
            return (
              <Card
                key={section.id}
                className="animate-fade-in shadow-sm hover:shadow-lg transition-all duration-300 border-2 border-border/40 hover:border-primary/30"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-4 sm:p-6">
                  {/* Stack vertically on very small screens, side-by-side on larger */}
                  <div className="flex flex-col xs:flex-row items-start gap-3 sm:gap-4">
                    <div className="p-2 sm:p-3 rounded-xl bg-primary/10 text-primary flex-shrink-0">
                      <IconComponent className="w-5 h-5 sm:w-6 sm:h-6" />
                    </div>
                    <div className="flex-1 min-w-0 w-full">
                      <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3 text-foreground leading-tight">
                        {section.title}
                      </h2>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-3 sm:mb-4">
                        {section.content}
                      </p>
                      <Link to={section.linkTo}>
                        <Button
                          variant="outline"
                          size="sm"
                          className="group w-full xs:w-auto text-sm"
                          aria-label={section.linkText}
                        >
                          <span className="truncate">{section.linkText}</span>
                          <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform flex-shrink-0" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SeoContentSections;
