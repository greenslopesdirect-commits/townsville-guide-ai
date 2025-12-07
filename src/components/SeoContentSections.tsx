import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const SeoContentSections = () => {
  const sections = [
    {
      id: "beaches",
      title: "Best Beaches in Townsville",
      content:
        "Townsville boasts some of Queensland's most stunning beaches. The Strand is the city's iconic 2.2km waterfront promenade, perfect for swimming, walking, and sunset views. Pallarenda Beach offers a quieter escape with rock pools and fishing spots, while Rowes Bay provides calm waters ideal for families. Bushland Beach delivers a relaxed coastal lifestyle with long stretches of sand, and Magnetic Island features pristine tropical bays like Alma Bay, Horseshoe Bay, and Florence Bay — perfect for snorkelling and swimming year-round.",
      linkText: "See all beaches",
      linkTo: "/townsville/beaches"
    },
    {
      id: "things-to-do",
      title: "Things To Do in Townsville",
      content:
        "Townsville offers endless activities for visitors and locals alike. Climb or drive Castle Hill for panoramic views of the city and coastline. Take the ferry to Magnetic Island for hiking, wildlife, and secluded beaches. Cool off at Riverway Lagoons, a free tropical swimming complex with BBQ areas and playgrounds. Walk the scenic Jezzine Barracks boardwalk, rich in military history and ocean views. Visit Billabong Sanctuary to meet koalas, kangaroos, and crocodiles up close in a natural bush setting.",
      linkText: "See all things to do",
      linkTo: "/townsville/things-to-do"
    },
    {
      id: "dog-friendly",
      title: "Dog-Friendly Townsville",
      content:
        "Townsville is one of Queensland's most dog-friendly cities. Rowes Bay Dog Park offers a large fenced off-leash area near the beach, perfect for running and socialising. The Strand has designated dog-friendly zones along the foreshore, ideal for sunrise and sunset walks. Popular pet-friendly cafés include Juliette's Gelateria on The Strand, which provides water bowls and outdoor seating, and The Courtyard, a trendy spot with shaded tables welcoming four-legged friends.",
      linkText: "See all dog-friendly spots",
      linkTo: "/townsville/dog-friendly"
    },
    {
      id: "walks-lookouts",
      title: "Best Walks & Lookouts",
      content:
        "Townsville's tropical landscape offers spectacular walking trails and lookout points. Castle Hill features several walking tracks leading to 360-degree views over the city, harbour, and Magnetic Island. The Jezzine Barracks boardwalk winds along the coastline with interpretive displays about local history. Mount Stuart offers a scenic drive or challenging hike to a lookout with sweeping views across Cleveland Bay. Cape Pallarenda trails combine beach walks, historic quarantine station ruins, and birdwatching opportunities.",
      linkText: "Explore walking trails",
      linkTo: "/townsville/things-to-do"
    },
    {
      id: "restaurants",
      title: "Best Restaurants & Cafés in Townsville",
      content:
        "Townsville's dining scene blends tropical flavours, fresh seafood, and relaxed Queensland atmosphere. JAM Corner on Palmer Street serves award-winning modern Australian cuisine with creative dishes and a sophisticated vibe. A Touch of Salt offers elegant fine dining with riverfront views and seasonal menus. Longboard Bar & Grill delivers beachfront dining on The Strand with burgers, tacos, and cocktails. Shorehouse combines coastal dining with ocean views, while Coffee Dominion is a local favourite for specialty coffee and breakfast.",
      linkText: "Find places to eat",
      linkTo: "/townsville/food"
    },
    {
      id: "magnetic-island",
      title: "Magnetic Island Guide",
      content:
        "Just 20 minutes by ferry from Townsville, Magnetic Island is a tropical paradise with 23 beaches and bays. Horseshoe Bay is the island's most popular beach, offering calm waters, watersports, and beachfront dining. Alma Bay provides excellent swimming and snorkelling with fringing coral reefs. The historic Forts Walk winds through eucalyptus forest to WWII-era fortifications with stunning coastal views. Rocky Bay is a secluded spot perfect for snorkelling, kayaking, and spotting marine life in crystal-clear waters.",
      linkText: "View Magnetic Island guide",
      linkTo: "/townsville/things-to-do"
    }
  ];

  return (
    <section className="py-16 px-4 bg-gradient-to-b from-muted/20 to-background">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {sections.map((section, index) => (
            <Card
              key={section.id}
              className="overflow-hidden animate-fade-in shadow-md hover:shadow-lg transition-all duration-300 border-border/40"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-8">
                <h2 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
                  {section.title}
                </h2>
                <p className="text-base text-muted-foreground leading-relaxed mb-6">
                  {section.content}
                </p>
                <a href={section.linkTo}>
                  <Button
                    variant="outline"
                    className="group"
                    aria-label={section.linkText}
                  >
                    {section.linkText}
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SeoContentSections;
