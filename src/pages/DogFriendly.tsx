import { Helmet } from "react-helmet";
import SEOHead from "@/components/SEOHead";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { 
  ArrowLeft, 
  MapPin, 
  Dog,
  Check,
  Waves,
  TreePine,
  PawPrint
} from "lucide-react";

interface DogSpotCardProps {
  title: string;
  description: string;
  features: string[];
  mapUrl: string;
  icon: React.ReactNode;
  type: string;
}

const DogSpotCard = ({ title, description, features, mapUrl, icon, type }: DogSpotCardProps) => (
  <Card className="overflow-hidden hover:shadow-[var(--shadow-tropical)] transition-all duration-300 border-2 hover:border-primary/30">
    <CardHeader className="bg-gradient-to-br from-primary/5 to-transparent pb-4">
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-3">
          <div className="p-3 rounded-xl bg-primary/10 text-primary">
            {icon}
          </div>
          <div>
            <CardTitle className="text-xl">{title}</CardTitle>
            <CardDescription className="text-sm mt-1">{type}</CardDescription>
          </div>
        </div>
        <div className="flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400">
          <Dog className="w-3 h-3" />
          Dog-friendly
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

const DogFriendly = () => {
  const dogSpots: DogSpotCardProps[] = [
    {
      title: "The Strand (Dog-Friendly Areas)",
      description: "A beautiful beachfront promenade with designated dog-friendly walking areas. Perfect for sunrise and evening walks with your furry companion along Townsville's iconic coastal strip.",
      features: [
        "Designated off-leash times (before 8am and after 5pm)",
        "Beautiful ocean views for walks",
        "Water fountains and shaded areas",
        "Close to cafés and restaurants"
      ],
      mapUrl: "https://www.google.com/maps/search/?api=1&query=The+Strand+Townsville",
      icon: <Waves className="w-6 h-6" />,
      type: "Beach & Promenade"
    },
    {
      title: "Pallarenda Dog Beach",
      description: "One of Townsville's best off-leash beaches. Long stretches of sand, shallow water, and plenty of space for energetic dogs to run and play in the water.",
      features: [
        "Off-leash beach access",
        "Long sandy stretches for running",
        "Shallow, calm waters for swimming dogs",
        "Natural setting with mangroves nearby"
      ],
      mapUrl: "https://www.google.com/maps/search/?api=1&query=Pallarenda+Beach+Townsville",
      icon: <Dog className="w-6 h-6" />,
      type: "Off-Leash Beach"
    },
    {
      title: "Bushland Beach Off-Leash Area",
      description: "A relaxed local beach with a peaceful vibe. Dogs love exploring the shallow tidal flats and wide sandy areas in this quieter northern suburb location.",
      features: [
        "Designated off-leash zones",
        "Quiet, less crowded beach",
        "Shallow tidal flats to explore",
        "Great for morning walks"
      ],
      mapUrl: "https://www.google.com/maps/search/?api=1&query=Bushland+Beach+Townsville",
      icon: <PawPrint className="w-6 h-6" />,
      type: "Off-Leash Beach"
    },
    {
      title: "Mount Louisa Dog Park",
      description: "A fenced, secure dog park with shaded areas and water bowls. The perfect spot for socialising your pup with other dogs in a safe, enclosed environment.",
      features: [
        "Fully fenced and secure",
        "Shaded areas for hot days",
        "Water bowls provided",
        "Separate areas for small and large dogs"
      ],
      mapUrl: "https://www.google.com/maps/search/?api=1&query=Mount+Louisa+Dog+Park",
      icon: <TreePine className="w-6 h-6" />,
      type: "Fenced Dog Park"
    },
    {
      title: "Ross River Walking Paths",
      description: "Scenic riverside walking trails with great shade and open grassy areas. Perfect for longer walks with your dog along the tranquil river setting.",
      features: [
        "Shaded walking paths",
        "Open grassy areas for play",
        "Scenic river views",
        "Multiple access points along the river"
      ],
      mapUrl: "https://www.google.com/maps/search/?api=1&query=Ross+River+Townsville",
      icon: <TreePine className="w-6 h-6" />,
      type: "Walking Trail"
    }
  ];

  return (
    <>
      <SEOHead
        title="Dog-Friendly Spots in Townsville – Parks, Beaches & Cafés | MyAussieGuide"
        description="Discover the best dog-friendly spots in Townsville including off-leash beaches, dog parks, and walking trails. A complete guide for pet owners."
        canonical="https://www.myaussieguide.com.au/townsville/dog-friendly"
      />
      <Helmet>
        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@type": "ItemList",
            "name": "Dog-Friendly Spots in Townsville",
            "description": "Complete guide to dog-friendly locations in Townsville",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "The Strand Dog-Friendly Areas",
                "url": "https://www.myaussieguide.com.au/townsville/dog-friendly"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Pallarenda Dog Beach",
                "url": "https://www.myaussieguide.com.au/townsville/dog-friendly"
              },
              {
                "@type": "ListItem",
                "position": 3,
                "name": "Mount Louisa Dog Park",
                "url": "https://www.myaussieguide.com.au/townsville/dog-friendly"
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
                <Dog className="w-4 h-4" />
                Pet-Friendly Guide
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
                Dog-Friendly Spots in Townsville
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                From off-leash beaches to fenced dog parks and scenic walking trails, Townsville is a fantastic destination for pet owners. Discover the best spots to explore with your furry friend.
              </p>
            </header>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
              {[
                { icon: <Dog className="w-5 h-5" />, label: "5+ Dog Parks", sublabel: "Fenced & open" },
                { icon: <Waves className="w-5 h-5" />, label: "3 Dog Beaches", sublabel: "Off-leash access" },
                { icon: <TreePine className="w-5 h-5" />, label: "10+ Walking Trails", sublabel: "Pet-friendly" },
                { icon: <PawPrint className="w-5 h-5" />, label: "Year-Round", sublabel: "Outdoor fun" }
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

            {/* Dog Spots Section */}
            <section className="mb-16">
              <div className="flex items-center gap-3 mb-8">
                <div className="p-2 rounded-lg bg-primary/10">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                    Top Dog-Friendly Locations
                  </h2>
                  <p className="text-muted-foreground">Parks, beaches, and trails for you and your pup</p>
                </div>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                {dogSpots.map((spot, index) => (
                  <DogSpotCard key={index} {...spot} />
                ))}
              </div>
            </section>

            {/* Tips Section */}
            <section className="mb-16">
              <Card className="border-2 border-amber-200 bg-gradient-to-br from-amber-50 to-transparent dark:from-amber-900/10 dark:border-amber-800">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <PawPrint className="w-8 h-8 text-amber-600 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Local Tips for Dog Owners</h3>
                      <ul className="space-y-2 text-muted-foreground text-sm">
                        <li className="flex items-start gap-2">
                          <Check className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" />
                          <span>Always check hot pavement before walks — if it's too hot for your hand, it's too hot for paws</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" />
                          <span>Bring plenty of water — Townsville's tropical climate means dogs dehydrate quickly</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" />
                          <span>Morning and evening walks are best to avoid the midday heat</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" />
                          <span>Be aware of cane toads, especially during wet season — they're toxic to dogs</span>
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
                Discover beaches, nature walks, and local tips for your Townsville adventure.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button asChild>
                  <Link to="/townsville/beaches">Explore Beaches</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link to="/townsville/nature">Nature & Walks</Link>
                </Button>
              </div>
            </section>
          </div>
        </main>
      </div>
    </>
  );
};

export default DogFriendly;
