import { Helmet } from "react-helmet";
import SEOHead from "@/components/SEOHead";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { 
  ArrowLeft, 
  ArrowRight, // Added this import
  MapPin, 
  Waves, 
  Sunset, 
  Dog, 
  Car, 
  Palmtree, 
  Fish, 
  Users, 
  Shell,
  Compass,
  Camera,
  Ship,
  Check,
  X,
  AlertTriangle
} from "lucide-react";
import { triggerAiGuide } from "@/utils/aiGuide";
import StingerSeasonAlert from "@/components/StingerSeasonAlert";
import LocalInsightCard from "@/components/LocalInsightCard";

interface BeachCardProps {
  title: string;
  description: string;
  features: string[];
  mapUrl: string;
  icon: React.ReactNode;
  dogFriendly?: boolean;
  bestFor: string;
  aiPrompt?: string;
  internalLink?: string; // New optional prop
  linkText?: string;     // New optional prop
}

const BeachCard = ({ title, description, features, mapUrl, icon, dogFriendly, bestFor, aiPrompt, internalLink, linkText }: BeachCardProps) => (
  <Card className="overflow-hidden hover:shadow-[var(--shadow-tropical)] transition-all duration-300 border-2 hover:border-primary/30 flex flex-col h-full">
    <CardHeader className="bg-gradient-to-br from-primary/5 to-transparent pb-4">
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-3">
          <div className="p-3 rounded-xl bg-primary/10 text-primary">
            {icon}
          </div>
          <div>
            <CardTitle className="text-xl">{title}</CardTitle>
            <CardDescription className="text-sm mt-1">Best for: {bestFor}</CardDescription>
          </div>
        </div>
        {dogFriendly !== undefined && (
          <div className={`flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${dogFriendly ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' : 'bg-muted text-muted-foreground'}`}>
            <Dog className="w-3 h-3" />
            {dogFriendly ? 'Dog-friendly' : 'No dogs'}
          </div>
        )}
      </div>
    </CardHeader>
    <CardContent className="pt-4 space-y-4 flex-grow flex flex-col">
      <p className="text-muted-foreground leading-relaxed flex-grow">{description}</p>
      <ul className="space-y-2 mb-4">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
            <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      
      <div className="flex flex-col gap-3 mt-auto">
        {/* NEW: Internal Deep Dive Link (If exists) */}
        {internalLink && (
           <Button asChild className="w-full bg-green-600 hover:bg-green-700 text-white shadow-sm" size="default">
             <Link to={internalLink} className="flex justify-between items-center">
               <span className="font-semibold">{linkText || "View Full Guide"}</span>
               <ArrowRight className="w-4 h-4 ml-2" />
             </Link>
           </Button>
        )}

        <div className="flex flex-col sm:flex-row gap-2">
          <Button variant="outline" size="sm" asChild className="gap-2 flex-1">
            <a 
              href={mapUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label={`View ${title} on Google Maps`}
            >
              <MapPin className="w-4 h-4" />
              View on Map
            </a>
          </Button>
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={() => triggerAiGuide(aiPrompt || `Tell me about the best times to visit, facilities, and local tips for ${title} beach in Townsville.`)}
            className="gap-2 flex-1"
          >
            <span>🤖</span>
            Ask AI
          </Button>
        </div>
      </div>
    </CardContent>
  </Card>
);

const Beaches = () => {
  const townsvilleBeaches: BeachCardProps[] = [
    {
      title: "The Strand",
      description: "Townsville's iconic 2.2km beachfront promenade is the heart of the city's coastal lifestyle. With a free saltwater rock pool, water park, shaded picnic areas, and a string of cafés and restaurants, The Strand is perfect for families and anyone wanting a classic seaside experience.",
      features: [
        "Free saltwater rock pool for safe swimming",
        "Water park and playgrounds for kids",
        "BBQ facilities and shaded picnic areas",
        "Cafés, restaurants, and gelato along the foreshore",
        "Stinger nets during marine stinger season (Nov–May)"
      ],
      mapUrl: "https://www.google.com/maps/search/?api=1&query=The+Strand+Townsville",
      icon: <Waves className="w-6 h-6" />,
      dogFriendly: true,
      bestFor: "Families, swimming, walking"
    },
    {
      title: "Pallarenda Beach",
      description: "A quieter, more natural beach north of the city centre, Pallarenda offers rock pools, calm waters, and excellent fishing spots. It's a local favourite for peaceful mornings, sunset picnics, and low-key coastal exploring away from the crowds.",
      features: [
        "Natural rock pools for exploring at low tide",
        "Great for fishing and kayaking",
        "Quiet picnic areas with shade",
        "Beautiful mangrove boardwalks nearby",
        "Less crowded than The Strand"
      ],
      mapUrl: "https://www.google.com/maps/search/?api=1&query=Pallarenda+Beach+Townsville",
      icon: <Shell className="w-6 h-6" />,
      dogFriendly: true,
      bestFor: "Fishing, rock pools, quiet picnics",
      // === LINK TO YOUR NEW PAGE ===
      internalLink: "/pallarenda-beach",
      linkText: "View Off-Leash Guide"
    },
    {
      title: "Rowes Bay",
      description: "Just around the corner from The Strand, Rowes Bay offers calm, shallow waters ideal for paddleboarding and kayaking. The adjacent park includes a popular off-leash dog area, making it a go-to spot for pet owners looking for a beach day with their furry friends.",
      features: [
        "Large fenced off-leash dog park",
        "Calm, shallow waters for paddling",
        "BBQ and playground facilities",
        "Close to BIG4 Holiday Park",
        "Great for sunrise walks"
      ],
      mapUrl: "https://www.google.com/maps/search/?api=1&query=Rowes+Bay+Beach+Townsville",
      icon: <Dog className="w-6 h-6" />,
      dogFriendly: true,
      bestFor: "Dogs, paddleboarding, families"
    },
    {
      title: "Bushland Beach",
      description: "Located in Townsville's northern suburbs, Bushland Beach offers a long stretch of natural coastline with a relaxed suburban vibe. Popular with locals for morning walks and fishing, it's a great alternative for those seeking space and tranquillity.",
      features: [
        "Long sandy beach for walking",
        "Popular fishing spot",
        "Local cafés and parks nearby",
        "Quieter residential feel",
        "Great for kite surfing when conditions suit"
      ],
      mapUrl: "https://www.google.com/maps/search/?api=1&query=Bushland+Beach+Townsville",
      icon: <Palmtree className="w-6 h-6" />,
      dogFriendly: true,
      bestFor: "Walking, fishing, relaxation"
    },
    {
      title: "Saunders Beach",
      description: "Further north, Saunders Beach is known for its wide sandy stretches and excellent conditions for kitesurfing. It's a popular spot for fishing and offers a more remote, uncrowded beach experience compared to central Townsville beaches.",
      features: [
        "Wide sandy beach with open space",
        "Popular kitesurfing destination",
        "Good fishing along the foreshore",
        "Holiday park with beach access",
        "Beautiful sunset views"
      ],
      mapUrl: "https://www.google.com/maps/search/?api=1&query=Saunders+Beach+Townsville",
      icon: <Sunset className="w-6 h-6" />,
      dogFriendly: true,
      bestFor: "Kitesurfing, fishing, sunsets"
    },
    {
      title: "Balgal Beach",
      description: "Located about 50 minutes north of Townsville, Balgal Beach is a favourite weekend escape for locals. It is one of the few beaches outside The Strand with a permanent stinger net during summer, making it a safe spot for a family dip. The area also features a popular free camping ground and a boat ramp for anglers.",
      features: [
        "Patrolled beach with stinger net (Nov–May)",
        "Designated camping area (permits required)",
        "Boat ramp and excellent estuary fishing",
        "BBQ facilities, playground, and fish & chips nearby",
        "Great for a full day trip out of the city"
      ],
      mapUrl: "https://www.google.com/maps/search/?api=1&query=Balgal+Beach+Queensland",
      icon: <Fish className="w-6 h-6" />,
      dogFriendly: true,
      bestFor: "Day trips, camping, safe swimming",
      aiPrompt: "Tell me about camping rules, the stinger net, and fishing spots at Balgal Beach."
    }
  ];

  const magneticIslandBeaches = [
    {
      name: "Horseshoe Bay",
      description: "The largest and most popular bay on Magnetic Island with restaurants, watersports, and a relaxed beach village atmosphere.",
      features: ["Swimming", "Cafés & restaurants", "Jet ski hire", "Stinger net"],
      mapUrl: "https://www.google.com/maps/search/?api=1&query=Horseshoe+Bay+Magnetic+Island"
    },
    {
      name: "Alma Bay",
      description: "A sheltered, family-friendly bay with calm waters, a grassy foreshore, and excellent snorkelling close to shore.",
      features: ["Snorkelling", "Calm waters", "Picnic area", "Easy access"],
      mapUrl: "https://www.google.com/maps/search/?api=1&query=Alma+Bay+Magnetic+Island"
    },
    {
      name: "Florence Bay",
      description: "A hidden gem accessed via walking track, offering pristine snorkelling and a sense of tropical seclusion.",
      features: ["Snorkelling", "Walking track access", "Uncrowded", "Crystal clear water"],
      mapUrl: "https://www.google.com/maps/search/?api=1&query=Florence+Bay+Magnetic+Island"
    },
    {
      name: "Geoffrey Bay",
      description: "Known for its coral reef right off the beach, Geoffrey Bay is one of the best spots to snorkel with fish and sea turtles.",
      features: ["Reef snorkelling", "Sea turtles", "Rock wallabies", "Sunset views"],
      mapUrl: "https://www.google.com/maps/search/?api=1&query=Geoffrey+Bay+Magnetic+Island"
    },
    {
      name: "Radical Bay",
      description: "A secluded bay reached by a scenic bush walk, offering beautiful swimming and a wild, natural beach experience.",
      features: ["Bush walking", "Secluded beach", "Natural setting", "Photography"],
      mapUrl: "https://www.google.com/maps/search/?api=1&query=Radical+Bay+Magnetic+Island",
      aiPrompt: "Tell me about the walking track and swimming conditions at Radical Bay on Magnetic Island."
    },
    {
      name: "Picnic Bay",
      description: "A peaceful, historic bay featuring an iconic timber jetty, a netted swimming enclosure, and relaxed beachfront dining under the banyan trees.",
      features: ["Iconic Jetty", "Beachfront Dining", "Stinger Net", "Hawkings Point Lookout"],
      mapUrl: "https://www.google.com/maps/search/?api=1&query=Picnic+Bay+Magnetic+Island",
      aiPrompt: "Tell me about the dining options and the history of the Jetty at Picnic Bay."
    }
  ];

  return (
    <>
      <SEOHead
        title="Best Beaches in Townsville – Complete Coastal Guide | MyAussieGuide"
        description="Discover Townsville's best beaches including The Strand, Pallarenda, Rowes Bay, Bushland Beach and Magnetic Island. Swimming, snorkelling, dog-friendly spots and local tips."
        canonical="https://www.myaussieguide.com.au/beaches"
      />
      <Helmet>
        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@type": "ItemList",
            "name": "Best Beaches in Townsville",
            "description": "Complete guide to beaches in Townsville and Magnetic Island",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "The Strand Beach",
                "url": "https://www.myaussieguide.com.au/townsville/beaches#the-strand"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Pallarenda Beach",
                "url": "https://www.myaussieguide.com.au/townsville/beaches#pallarenda"
              },
              {
                "@type": "ListItem",
                "position": 3,
                "name": "Rowes Bay",
                "url": "https://www.myaussieguide.com.au/townsville/beaches#rowes-bay"
              },
              {
                "@type": "ListItem",
                "position": 4,
                "name": "Magnetic Island Beaches",
                "url": "https://www.myaussieguide.com.au/townsville/beaches#magnetic-island"
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
            <Link to="/">
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
                <Waves className="w-4 h-4" />
                Coastal Guide
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
                Best Beaches in Townsville
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                From the iconic Strand promenade to the secluded bays of Magnetic Island, Townsville offers a diverse range of beaches for swimming, snorkelling, fishing, and relaxing. Discover the best coastal spots with this comprehensive local guide.
              </p>
            </header>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
              {[
                { icon: <Waves className="w-5 h-5" />, label: "10+ Beaches", sublabel: "To explore" },
                { icon: <Dog className="w-5 h-5" />, label: "5 Dog-Friendly", sublabel: "Off-leash areas" },
                { icon: <Ship className="w-5 h-5" />, label: "20 Min Ferry", sublabel: "To Magnetic Island" },
                { icon: <Camera className="w-5 h-5" />, label: "300+ Sunny Days", sublabel: "Per year" }
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

            {/* Stinger Safety Tip Box */}
            <Card className="mb-8 border-2 border-blue-200 bg-gradient-to-br from-blue-50 to-transparent dark:from-blue-900/10 dark:border-blue-800">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <AlertTriangle className="w-8 h-8 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-2 text-lg">
                      🦑 Stinger Safety
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      <strong>Stinger Season is generally Nov–May.</strong> You CAN swim safely at The Strand and Pallarenda inside the stinger nets. Always check with lifeguards for current conditions and net locations.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Stinger Season Safety Alert */}
            <StingerSeasonAlert className="mb-8" />

            {/* Safety First Alert */}
            <LocalInsightCard title="Safety First" variant="warning" className="mb-12">
              <p>
                <strong>Stinger Season</strong> runs from November to May, so always swim inside the stinger nets. 
                And a golden rule for the tropics: Be "Croc-Wise."
              </p>
              <p className="font-medium text-red-700 dark:text-red-300">
                🐊 If you're near a river mouth, creek, or estuary and don't see a "Safe to Swim" sign, keep your toes dry!
              </p>
            </LocalInsightCard>

            {/* Townsville Beaches Section */}
            <section className="mb-16">
              <div className="flex items-center gap-3 mb-8">
                <div className="p-2 rounded-lg bg-primary/10">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                    Townsville Mainland Beaches
                  </h2>
                  <p className="text-muted-foreground">Easy access beaches within the city</p>
                </div>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                {townsvilleBeaches.map((beach, index) => (
                  <BeachCard key={index} {...beach} />
                ))}
              </div>
            </section>

            {/* Magnetic Island Section */}
            <section className="mb-16">
              <div className="flex items-center gap-3 mb-8">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Compass className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                    Magnetic Island Beaches
                  </h2>
                  <p className="text-muted-foreground">Just 20 minutes by ferry from Townsville</p>
                </div>
              </div>

              <Card className="mb-6 border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-transparent">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <Ship className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Getting to Magnetic Island</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        Magnetic Island is a 20-minute ferry ride from Townsville's ferry terminal. SeaLink operates regular services throughout the day. Once on the island, you can hire a car, scooter, or use the local bus to explore 23 beaches and bays.
                      </p>
                      <Button variant="outline" size="sm" asChild className="mt-4 gap-2">
                        <a 
                          href="https://www.google.com/maps/search/?api=1&query=Magnetic+Island+Ferry+Terminal+Townsville" 
                          target="_blank" 
                          rel="noopener noreferrer"
                        >
                          <MapPin className="w-4 h-4" />
                          Ferry Terminal Location
                        </a>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {magneticIslandBeaches.map((beach, index) => (
                  <Card key={index} className="hover:shadow-[var(--shadow-tropical)] transition-all duration-300 border-2 hover:border-primary/30">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg flex items-center gap-2">
                        <Palmtree className="w-5 h-5 text-primary" />
                        {beach.name}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <p className="text-sm text-muted-foreground">{beach.description}</p>
                      <div className="flex flex-wrap gap-1">
                        {beach.features.map((feature, i) => (
                          <span key={i} className="text-xs px-2 py-1 rounded-full bg-muted text-muted-foreground">
                            {feature}
                          </span>
                        ))}
                      </div>
                      <div className="flex flex-col sm:flex-row gap-2 pt-1">
                        <Button variant="ghost" size="sm" asChild className="gap-2 p-0 h-auto text-primary hover:text-primary/80">
                          <a href={beach.mapUrl} target="_blank" rel="noopener noreferrer">
                            <MapPin className="w-3 h-3" />
                            View on Map
                          </a>
                        </Button>
                        <Button 
                          variant="ghost" 
                          size="sm" 
                          onClick={() => triggerAiGuide(beach.aiPrompt || `Tell me about the best things to do and local tips for ${beach.name} on Magnetic Island.`)}
                          className="gap-2 p-0 h-auto text-muted-foreground hover:text-primary"
                        >
                          <span>🤖</span>
                          Ask AI
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            {/* Comparison Table */}
            <section className="mb-16">
              <div className="flex items-center gap-3 mb-8">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Fish className="w-6 h-6 text-primary" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                  Beach Comparison Guide
                </h2>
              </div>

              <div className="overflow-x-auto rounded-xl border-2">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-muted/50">
                      <th className="text-left p-4 font-semibold text-foreground">Beach</th>
                      <th className="text-center p-4 font-semibold text-foreground">Swimming</th>
                      <th className="text-center p-4 font-semibold text-foreground">Dog-Friendly</th>
                      <th className="text-center p-4 font-semibold text-foreground">Snorkelling</th>
                      <th className="text-center p-4 font-semibold text-foreground">Facilities</th>
                      <th className="text-center p-4 font-semibold text-foreground">Crowds</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {[
                      { name: "The Strand", swimming: "Excellent (Nets)", dogs: "On-leash", snorkel: "Basic", facilities: "Excellent", crowds: "Busy" },
                      { name: "Pallarenda", swimming: "Good (Nets)", dogs: "Off-leash", snorkel: "Basic", facilities: "Good", crowds: "Moderate" },
                      { name: "Rowes Bay", swimming: "Good (High tide)", dogs: "On-leash", snorkel: "None", facilities: "Good", crowds: "Quiet" },
                      { name: "Bushland Beach", swimming: "Basic (Shallow)", dogs: "On-leash", snorkel: "None", facilities: "Good", crowds: "Quiet" },
                      { name: "Balgal Beach", swimming: "Good (Nets)", dogs: "On-leash", snorkel: "Basic", facilities: "Good (Camping)", crowds: "Moderate" },
                      { name: "Horseshoe Bay (MI)", swimming: "Excellent (Nets)", dogs: "On-leash", snorkel: "Good", facilities: "Excellent", crowds: "Busy" },
                      { name: "Alma Bay (MI)", swimming: "Excellent (Patrolled)", dogs: "On-leash", snorkel: "Excellent", facilities: "Good", crowds: "Busy" },
                      { name: "Picnic Bay (MI)", swimming: "Good (Nets)", dogs: "On-leash", snorkel: "Good (Jetty)", facilities: "Good (Dining)", crowds: "Moderate" },
                      { name: "Geoffrey Bay (MI)", swimming: "Basic (Reef)", dogs: "On-leash", snorkel: "Excellent", facilities: "Basic", crowds: "Quiet" }
                    ].map((row, index) => (
                      <tr key={index} className="hover:bg-muted/30 transition-colors">
                        <td className="p-4 font-medium text-foreground">{row.name}</td>
                        <td className="p-4 text-center text-muted-foreground text-xs">{row.swimming}</td>
                        <td className="p-4 text-center">
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                            row.dogs === 'Off-leash' ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' :
                            'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400'
                          }`}>
                            {row.dogs}
                          </span>
                        </td>
                        <td className="p-4 text-center text-muted-foreground text-xs">{row.snorkel}</td>
                        <td className="p-4 text-center text-muted-foreground text-xs">{row.facilities}</td>
                        <td className="p-4 text-center">
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                            row.crowds === 'Busy' ? 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400' :
                            row.crowds === 'Moderate' ? 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400' :
                            'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400'
                          }`}>
                            {row.crowds}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* Safety Tips */}
            <section className="mb-16">
              <Card className="border-2 border-amber-200 dark:border-amber-800 bg-amber-50/50 dark:bg-amber-950/20">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <AlertTriangle className="w-8 h-8 text-amber-600 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-foreground mb-3">Beach Safety Tips for Townsville</h3>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li className="flex items-start gap-2">
                          <span className="text-amber-600 font-bold">•</span>
                          <span><strong>Marine stingers:</strong> Box jellyfish and Irukandji are present November–May. Swim within stinger nets or wear a full-body stinger suit.</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-amber-600 font-bold">•</span>
                          <span><strong>Crocodiles:</strong> Be croc-wise around estuaries, mangroves, and river mouths. Avoid swimming at dawn and dusk in these areas.</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-amber-600 font-bold">•</span>
                          <span><strong>Sun protection:</strong> North Queensland sun is intense. Wear sunscreen (SPF 50+), a hat, and seek shade during peak UV hours (10am–2pm).</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-amber-600 font-bold">•</span>
                          <span><strong>Hydration:</strong> Drink plenty of water, especially during the hot, humid wet season (December–April).</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* SEO Conclusion */}
            <section className="mb-16 prose prose-lg max-w-none">
              <Card className="border-2">
                <CardContent className="p-6 md:p-8">
                  <h2 className="text-2xl font-bold text-foreground mb-4">
                    Planning Your Townsville Beach Day
                  </h2>
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      Townsville's beaches offer something for everyone, from the lively atmosphere of The Strand with its rock pool and foreshore cafés, to the peaceful natural beauty of Pallarenda and Bushland Beach. Dog owners will appreciate the dedicated off-leash areas at Rowes Bay, while adventurers can easily hop on the ferry to explore Magnetic Island's stunning bays.
                    </p>
                    <p>
                      Whether you're looking for a quick morning swim, a family day out, or a snorkelling adventure among coral and sea turtles, the Townsville region has you covered. With over 300 days of sunshine per year and a relaxed tropical lifestyle, it's no wonder locals and visitors alike love spending time on these beautiful North Queensland beaches.
                    </p>
                    <p>
                      For personalised beach recommendations based on your interests, ask our AI-powered guide or explore more of what Townsville has to offer.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* CTA Section */}
            <div className="text-center space-y-6">
              <h3 className="text-2xl font-bold text-foreground">
                Ready to Explore More of Townsville?
              </h3>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Discover walks, wildlife, restaurants, and more things to do in Townsville with our complete local guides.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/things-to-do">
                  <Button size="lg" className="gap-2 w-full sm:w-auto">
                    <Compass className="w-5 h-5" />
                    Explore Things to Do
                  </Button>
                </Link>
                <Link to="/dog-friendly">
                  <Button variant="outline" size="lg" className="gap-2 w-full sm:w-auto">
                    <Dog className="w-5 h-5" />
                    Dog-Friendly Guide
                  </Button>
                </Link>
              </div>
            </div>

            {/* Back to Home */}
            <div className="mt-12 pt-8 border-t border-border text-center">
              <Link to="/">
                <Button variant="ghost" size="lg" className="group">
                  <ArrowLeft className="mr-2 w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                  Return to Home
                </Button>
              </Link>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default Beaches;
