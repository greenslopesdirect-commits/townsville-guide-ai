import type { ReactNode } from "react";
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
  PawPrint,
  Info
} from "lucide-react";

interface DogSpotCardProps {
  title: string;
  description: string;
  features: string[];
  mapUrl: string;
  icon: ReactNode;
  type: string;
  schnauzerapproved?: boolean;
}

const DogSpotCard = ({ title, description, features, mapUrl, icon, type, schnauzerapproved }: DogSpotCardProps) => (
  <Card className="overflow-hidden hover:shadow-[var(--shadow-tropical)] transition-all duration-300 border-2 hover:border-primary/30 relative">
    {schnauzerapproved && (
      <div className="absolute -top-1 right-2 z-10">
        <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold bg-amber-100 text-amber-800 dark:bg-amber-900/50 dark:text-amber-300 border-2 border-amber-300 shadow-sm">
          🐾 Schnauzer Approved
        </span>
      </div>
    )}
    <CardHeader className={`bg-gradient-to-br from-primary/5 to-transparent pb-4 ${schnauzerapproved ? 'pt-8' : ''}`}>
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
  const beaches: DogSpotCardProps[] = [
    {
      title: "The Strand (Dog-Friendly Areas)",
      description: "Townsville’s iconic beachfront promenade with designated dog-friendly walking areas. Ideal for sunrise and evening walks with ocean views.",
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
      description: "One of Townsville's best off-leash beaches with long sandy stretches, shallow water, and plenty of space for energetic dogs.",
      features: [
        "Off-leash beach access",
        "Long sandy stretches for running",
        "Shallow, calm waters for swimming dogs",
        "Natural setting with mangroves nearby"
      ],
      mapUrl: "https://www.google.com/maps/search/?api=1&query=Pallarenda+Beach+Townsville",
      icon: <Dog className="w-6 h-6" />,
      type: "Off-Leash Beach",
      schnauzerapproved: true
    },
    {
      title: "Bushland Beach Off-Leash Area",
      description: "A quieter northern beach with wide sandy areas and shallow tidal flats that dogs love to explore.",
      features: [
        "Designated off-leash zones",
        "Quiet, less crowded beach",
        "Shallow tidal flats to explore",
        "Great for morning walks"
      ],
      mapUrl: "https://www.google.com/maps/search/?api=1&query=Bushland+Beach+Townsville",
      icon: <PawPrint className="w-6 h-6" />,
      type: "Off-Leash Beach"
    }
  ];

  const parks: DogSpotCardProps[] = [
  {
    title: "Mount Louisa Dog Park",
    description: "A fenced, secure dog park with shaded areas and water bowls. Perfect for safe off-leash play and socialising.",
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
    title: "Murray Dog Park (Annandale)",
    description: "A popular fenced dog park in Annandale with shaded seating and plenty of space for off-leash running and socialising.",
    features: [
      "Fully fenced off-leash area",
      "Shaded seating",
      "Large grassy play area",
      "Good for social dogs"
    ],
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Murray+Dog+Park+Townsville",
    icon: <TreePine className="w-6 h-6" />,
    type: "Fenced Dog Park"
  },
  {
    title: "Mannikin Park Dog Areas (Bohle Plains)",
    description: "A well-known dog park with two fenced areas (small dogs and all dogs), shaded seating, and exercise space.",
    features: [
      "Two separate fenced areas",
      "Sheltered seating",
      "Good space for training and play",
      "Popular with local dog owners"
    ],
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Mannikin+Park+Dog+Park+Bohle+Plains",
    icon: <TreePine className="w-6 h-6" />,
    type: "Fenced Dog Park"
  },
  {
    title: "Bamford Lane Dog Park (Kirwan)",
    description: "A popular fully fenced park with large grassy runs, agility equipment, and plenty of shade trees. A local favourite.",
    features: [
      "Fully fenced and secure",
      "Agility equipment for training",
      "Large grassy play areas",
      "Plenty of shade trees"
    ],
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Bamford+Lane+Dog+Park+Kirwan+Townsville",
    icon: <TreePine className="w-6 h-6" />,
    type: "Fenced Dog Park",
    schnauzerapproved: true
  }
];

  const walks: DogSpotCardProps[] = [
  {
    title: "Ross River Walking Paths",
    description: "Scenic riverside walking trails with great shade and open grassy areas. Ideal for longer, relaxed walks with your dog.",
    features: [
      "Shaded walking paths",
      "Open grassy areas for play",
      "Scenic river views",
      "Multiple access points along the river"
    ],
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Ross+River+Townsville",
    icon: <TreePine className="w-6 h-6" />,
    type: "Walking Trail"
  },
  {
    title: "Jezzine Barracks Foreshore Walk",
    description: "A beautiful coastal and parkland walk along Jezzine Barracks with wide paths, sea views, and plenty of space for relaxed dog walks.",
    features: [
      "Wide paved walking paths",
      "Ocean and parkland views",
      "Good shade in parts",
      "Great for morning and evening walks"
    ],
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Jezzine+Barracks+Townsville",
    icon: <TreePine className="w-6 h-6" />,
    type: "Walking Trail"
  },
  {
    title: "Cape Pallarenda Walking Tracks",
    description: "A network of bush and coastal walking tracks near Pallarenda, offering a more natural setting for longer dog walks and exploration.",
    features: [
      "Bush and coastal scenery",
      "Multiple track options",
      "Quieter, natural environment",
      "Good for longer walks"
    ],
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Cape+Pallarenda+Conservation+Park",
    icon: <TreePine className="w-6 h-6" />,
    type: "Walking Trail"
  }
];


  return (
    <>
      <SEOHead
        title="Dog-Friendly Townsville: Beaches, Parks & Walks You Can Take Your Dog"
        description="A complete local guide to dog-friendly Townsville including off-leash beaches, dog parks, walking tracks, and important local tips for dog owners."
        canonical="https://www.myaussieguide.com.au/townsville/dog-friendly"
      />
      <Helmet>
        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@type": "ItemList",
            "name": "Dog-Friendly Townsville Guide",
            "description": "Complete guide to dog-friendly beaches, parks, and walking tracks in Townsville",
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
                aria-label="Back to Townsville"
              >
                <ArrowLeft className="mr-2 w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                Back to Townsville
              </Button>
            </Link>

            {/* Hero Header */}
            <header className="mb-12 text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                <Dog className="w-4 h-4" />
                Local Dog Owner Guide
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
                Dog-Friendly Townsville: Beaches, Parks & Walks
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                Living in Townsville means sunshine, beaches, and outdoor life — and luckily, it's a great place to own a dog too. This local guide covers the best dog-friendly places in Townsville, featuring <strong>Schnauzer-Approved recommendations</strong>, off-leash beaches, fenced dog parks, and scenic walking tracks, plus important local tips to keep your dog safe in our tropical climate.
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

            {/* Beaches Section */}
            <section className="mb-16">
              <div className="flex items-center gap-3 mb-8">
                <Waves className="w-7 h-7 text-primary" />
                <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                  Dog-Friendly Beaches in Townsville
                </h2>
              </div>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {beaches.map((spot, index) => (
                  <DogSpotCard key={index} {...spot} />
                ))}
              </div>
            </section>

            {/* Parks Section */}
            <section className="mb-16">
              <div className="flex items-center gap-3 mb-8">
                <TreePine className="w-7 h-7 text-primary" />
                <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                  Dog Parks in Townsville
                </h2>
              </div>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {parks.map((spot, index) => (
                  <DogSpotCard key={index} {...spot} />
                ))}
              </div>
            </section>

            {/* Walks Section */}
            <section className="mb-16">
              <div className="flex items-center gap-3 mb-8">
                <MapPin className="w-7 h-7 text-primary" />
                <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                  Dog Walking Tracks & Trails
                </h2>
              </div>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {walks.map((spot, index) => (
                  <DogSpotCard key={index} {...spot} />
                ))}
              </div>
            </section>

            {/* Rules Section */}
            <section className="mb-16">
              <Card className="border-2">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <Info className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h2 className="font-semibold text-foreground mb-2 text-xl">
                        Dog Rules in Townsville (What You Need to Know)
                      </h2>
                      <p className="text-muted-foreground mb-4">
                        In Townsville, dogs must be on leash in most public areas unless you are in a designated off-leash zone. Always clean up after your dog, respect wildlife, and follow local council signage. Fines can apply for dogs not under effective control.
                      </p>
                      <p className="text-muted-foreground">
                        Check local council rules before visiting new areas, as off-leash times and zones can change.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Tips Section */}
            <section className="mb-16">
              <Card className="border-2 border-amber-200 bg-gradient-to-br from-amber-50 to-transparent dark:from-amber-900/10 dark:border-amber-800">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <PawPrint className="w-8 h-8 text-amber-600 flex-shrink-0 mt-1" />
                    <div>
                      <h2 className="font-semibold text-foreground mb-2 text-xl">
                        Local Tips for Dog Owners in Townsville
                      </h2>
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
                          <span>Be aware of cane toads, especially during wet season — they are highly toxic to dogs in North Queensland</span>
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
