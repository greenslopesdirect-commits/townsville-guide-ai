import { Helmet } from "react-helmet";
import SEOHead from "@/components/SEOHead";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { 
  ArrowLeft, 
  MapPin, 
  TreePine,
  Check,
  Mountain,
  Bird,
  Compass,
  Waves
} from "lucide-react";

interface NatureSpotCardProps {
  title: string;
  description: string;
  features: string[];
  mapUrl: string;
  icon: React.ReactNode;
  difficulty: string;
}

const NatureSpotCard = ({ title, description, features, mapUrl, icon, difficulty }: NatureSpotCardProps) => (
  <Card className="overflow-hidden hover:shadow-[var(--shadow-tropical)] transition-all duration-300 border-2 hover:border-primary/30">
    <CardHeader className="bg-gradient-to-br from-primary/5 to-transparent pb-4">
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-3">
          <div className="p-3 rounded-xl bg-primary/10 text-primary">
            {icon}
          </div>
          <div>
            <CardTitle className="text-xl">{title}</CardTitle>
            <CardDescription className="text-sm mt-1">Difficulty: {difficulty}</CardDescription>
          </div>
        </div>
        <div className={`flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${
          difficulty === 'Easy' ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' :
          difficulty === 'Moderate' ? 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400' :
          'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400'
        }`}>
          <Mountain className="w-3 h-3" />
          {difficulty}
        </div>
      </div>
    </CardHeader>
    <CardContent className="pt-4 space-y-4">
      <p className="text-muted-foreground leading-relaxed">{description}</p>
      <ul className="space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
            <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <Button variant="outline" size="sm" asChild className="gap-2 w-full sm:w-auto">
        <a 
          href={mapUrl} 
          target="_blank" 
          rel="noopener noreferrer"
          aria-label={`View ${title} on Google Maps`}
        >
          <MapPin className="w-4 h-4" />
          View on Google Maps
        </a>
      </Button>
    </CardContent>
  </Card>
);

const Nature = () => {
  const natureSpots: NatureSpotCardProps[] = [
    {
      title: "Castle Hill Walking Tracks",
      description: "Townsville's iconic landmark offering multiple walking tracks with panoramic views of the city, ocean, and Magnetic Island. The most popular climb in the region with stunning sunrise and sunset viewpoints.",
      features: [
        "Multiple track options (1.2km to 3.7km)",
        "360° panoramic views from the summit",
        "Best at sunrise or sunset",
        "Goat Track is the steepest challenge"
      ],
      mapUrl: "https://www.google.com/maps/search/?api=1&query=Castle+Hill+Townsville",
      icon: <Mountain className="w-6 h-6" />,
      difficulty: "Moderate"
    },
    {
      title: "The Strand Jetty Walk",
      description: "A flat, accessible oceanfront walk along Townsville's iconic beachfront promenade. Perfect for a leisurely stroll with stunning Coral Sea views and plenty of cafés along the way.",
      features: [
        "2.2km flat, paved pathway",
        "Ocean views the entire way",
        "Cafés and restaurants along the route",
        "Shaded sections with palm trees"
      ],
      mapUrl: "https://www.google.com/maps/search/?api=1&query=The+Strand+Townsville",
      icon: <Waves className="w-6 h-6" />,
      difficulty: "Easy"
    },
    {
      title: "Cape Pallarenda Trails",
      description: "Coastal and bushland walking tracks ideal for nature lovers and hiking enthusiasts. Explore mangroves, coastal scrub, and enjoy panoramic views of Cleveland Bay.",
      features: [
        "Multiple trail options",
        "Coastal and bushland scenery",
        "Wildlife spotting opportunities",
        "Historical WWII bunkers"
      ],
      mapUrl: "https://www.google.com/maps/search/?api=1&query=Cape+Pallarenda+Recreation+Park",
      icon: <Compass className="w-6 h-6" />,
      difficulty: "Easy"
    },
    {
      title: "Mount Louisa Lookout Track",
      description: "A moderate climb through bushland ending with stunning 360-degree views over Townsville and the surrounding ranges. A great alternative to Castle Hill with fewer crowds.",
      features: [
        "Scenic bushland trail",
        "360° views from the summit",
        "Less crowded than Castle Hill",
        "Native wildlife sightings"
      ],
      mapUrl: "https://www.google.com/maps/search/?api=1&query=Mount+Louisa+Townsville",
      icon: <Mountain className="w-6 h-6" />,
      difficulty: "Moderate"
    },
    {
      title: "Townsville Town Common",
      description: "A 3,245-hectare wetland conservation park popular for birdwatching and nature walks. Home to over 280 bird species and features shaded walking paths through diverse habitats.",
      features: [
        "280+ bird species to spot",
        "Multiple walking trails",
        "Lookout platforms",
        "Best during dry season (May–November)"
      ],
      mapUrl: "https://www.google.com/maps/search/?api=1&query=Townsville+Town+Common",
      icon: <Bird className="w-6 h-6" />,
      difficulty: "Easy"
    }
  ];

  return (
    <>
      <SEOHead
        title="Nature & Walks in Townsville – Trails & Hiking Guide | Duncan's Guide"
        description="Discover the best nature walks and hiking trails in Townsville. From Castle Hill to Town Common, explore scenic bushland, coastal paths, and wildlife spotting."
        canonical="https://www.myaussieguide.com.au/townsville/nature"
      />
      <Helmet>
        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@type": "ItemList",
            "name": "Nature & Walks in Townsville",
            "description": "Complete guide to nature walks and hiking in Townsville",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Castle Hill Walking Tracks",
                "url": "https://www.myaussieguide.com.au/townsville/nature"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Townsville Town Common",
                "url": "https://www.myaussieguide.com.au/townsville/nature"
              }
            ]
          }
          `}
        </script>
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <main className="pt-24 pb-16">
          <div className="container mx-auto px-4 max-w-5xl">
            {/* Back Button */}
            <Link to="/townsville">
              <Button 
                variant="ghost" 
                className="mb-6 group"
                aria-label="Back to home"
              >
                <ArrowLeft className="mr-2 w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                Back to Home
              </Button>
            </Link>

            {/* Hero Header */}
            <header className="mb-12 text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                <TreePine className="w-4 h-4" />
                Nature Guide
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
                Nature & Walks in Townsville
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                From the iconic Castle Hill climb to peaceful wetland walks, Townsville offers diverse natural landscapes to explore. Discover walking trails, lookouts, and wildlife hotspots.
              </p>
            </header>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
              {[
                { icon: <Mountain className="w-5 h-5" />, label: "Castle Hill", sublabel: "286m summit" },
                { icon: <Bird className="w-5 h-5" />, label: "280+ Bird Species", sublabel: "Town Common" },
                { icon: <TreePine className="w-5 h-5" />, label: "20+ Trails", sublabel: "All skill levels" },
                { icon: <Compass className="w-5 h-5" />, label: "Year-Round", sublabel: "Perfect weather" }
              ].map((stat, index) => (
                <div key={index} className="text-center p-4 rounded-2xl bg-card border-2 hover:border-primary/30 transition-colors">
                  <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary mb-2">
                    {stat.icon}
                  </div>
                  <p className="font-semibold text-foreground">{stat.label}</p>
                  <p className="text-sm text-muted-foreground">{stat.sublabel}</p>
                </div>
              ))}
            </div>

            {/* Nature Spots Section */}
            <section className="mb-16">
              <div className="flex items-center gap-3 mb-8">
                <div className="p-2 rounded-lg bg-primary/10">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                    Top Walking Trails & Nature Spots
                  </h2>
                  <p className="text-muted-foreground">Explore Townsville's natural beauty</p>
                </div>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                {natureSpots.map((spot, index) => (
                  <NatureSpotCard key={index} {...spot} />
                ))}
              </div>
            </section>

            {/* Tips Section */}
            <section className="mb-16">
              <Card className="border-2 border-green-200 bg-gradient-to-br from-green-50 to-transparent dark:from-green-900/10 dark:border-green-800">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <TreePine className="w-8 h-8 text-green-600 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Walking Tips for Townsville</h3>
                      <ul className="space-y-2 text-muted-foreground text-sm">
                        <li className="flex items-start gap-2">
                          <Check className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                          <span>Start early morning or late afternoon to avoid the tropical heat</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                          <span>Carry at least 1 litre of water per hour of walking</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                          <span>Wear sunscreen, a hat, and appropriate footwear</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                          <span>Dry season (May–November) offers the best walking conditions</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* CTA Section */}
            <section className="text-center bg-gradient-to-br from-primary/5 to-transparent rounded-2xl p-8 border-2">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Explore More of Townsville
              </h2>
              <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
                Discover beaches, dog-friendly spots, and local attractions across Townsville.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button asChild>
                  <Link to="/townsville/beaches">Explore Beaches</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link to="/townsville/dog-friendly">Dog-Friendly Spots</Link>
                </Button>
              </div>
            </section>
          </div>
        </main>
      </div>
    </>
  );
};

export default Nature;
