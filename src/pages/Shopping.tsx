import { Helmet } from "react-helmet";
import SEOHead from "@/components/SEOHead";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { 
  ArrowLeft, 
  MapPin, 
  ShoppingBag,
  Check,
  Store,
  Coffee,
  Calendar
} from "lucide-react";

interface ShoppingCardProps {
  title: string;
  description: string;
  features: string[];
  mapUrl: string;
  icon: React.ReactNode;
  type: string;
}

const ShoppingCard = ({ title, description, features, mapUrl, icon, type }: ShoppingCardProps) => (
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

const Shopping = () => {
  const shoppingCentres: ShoppingCardProps[] = [
    {
      title: "Castletown Shopping Centre",
      description: "Indoor shopping centre with a great mix of retail, dining, and essential stores. Located in the heart of Townsville's northern suburbs with easy parking and air-conditioned comfort.",
      features: [
        "Major supermarkets (Coles, Woolworths)",
        "Fashion and retail stores",
        "Food court with diverse options",
        "Ample free parking"
      ],
      mapUrl: "https://www.google.com/maps/search/?api=1&query=Castletown+Townsville",
      icon: <Store className="w-6 h-6" />,
      type: "Shopping Centre"
    },
    {
      title: "Willows Shopping Centre",
      description: "Large shopping hub featuring supermarkets, big brand stores, and regular weekend markets. A favourite for families with a cinema and kids' play areas.",
      features: [
        "Birch Carroll & Coyle Cinema",
        "Big W and Target",
        "Weekend markets in the car park",
        "Kids' play areas"
      ],
      mapUrl: "https://www.google.com/maps/search/?api=1&query=Willows+Townsville",
      icon: <ShoppingBag className="w-6 h-6" />,
      type: "Shopping Centre"
    },
    {
      title: "Stockland Townsville",
      description: "Townsville's biggest shopping centre with over 180 stores including fashion, tech, homewares, and a fantastic food precinct. The go-to destination for serious shopping.",
      features: [
        "180+ specialty stores",
        "Myer and Kmart anchor stores",
        "Event Cinemas",
        "Extensive dining precinct"
      ],
      mapUrl: "https://www.google.com/maps/search/?api=1&query=Stockland+Townsville",
      icon: <ShoppingBag className="w-6 h-6" />,
      type: "Major Shopping Centre"
    }
  ];

  const markets: ShoppingCardProps[] = [
    {
      title: "Cotters Market",
      description: "Popular Sunday market featuring fresh produce, handmade crafts, artisan food stalls, and live entertainment. A true Townsville institution running for over 20 years.",
      features: [
        "Fresh local produce",
        "Handmade crafts and art",
        "Street food and coffee",
        "Live music entertainment"
      ],
      mapUrl: "https://www.google.com/maps/search/?api=1&query=Cotters+Market+Townsville",
      icon: <Coffee className="w-6 h-6" />,
      type: "Sunday Market"
    },
    {
      title: "North Shore Market",
      description: "A family-friendly weekend market with local stalls, food vendors, and a relaxed community atmosphere. Great for breakfast and a morning browse.",
      features: [
        "Local artisan stalls",
        "Fresh food vendors",
        "Family-friendly atmosphere",
        "Saturday morning trading"
      ],
      mapUrl: "https://www.google.com/maps/search/?api=1&query=North+Shore+Market+Townsville",
      icon: <Calendar className="w-6 h-6" />,
      type: "Weekend Market"
    }
  ];

  return (
    <>
      <SEOHead
        title="Shopping & Markets in Townsville – Complete Guide | Duncan's Guide"
        description="Discover the best shopping centres and local markets in Townsville. From Stockland to Cotters Market, find where to shop for retail, produce, and local crafts."
        canonical="https://www.myaussieguide.com.au/townsville/shopping"
      />
      <Helmet>
        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@type": "ItemList",
            "name": "Shopping & Markets in Townsville",
            "description": "Complete guide to shopping in Townsville",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Stockland Townsville",
                "url": "https://www.myaussieguide.com.au/townsville/shopping"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Cotters Market",
                "url": "https://www.myaussieguide.com.au/townsville/shopping"
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
                <ShoppingBag className="w-4 h-4" />
                Shopping Guide
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
                Shopping & Markets in Townsville
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                From major shopping centres with all the big brands to vibrant weekend markets featuring local produce and crafts, discover where to shop in Townsville.
              </p>
            </header>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
              {[
                { icon: <ShoppingBag className="w-5 h-5" />, label: "3 Major Centres", sublabel: "All brands" },
                { icon: <Coffee className="w-5 h-5" />, label: "5+ Markets", sublabel: "Every weekend" },
                { icon: <Store className="w-5 h-5" />, label: "180+ Stores", sublabel: "At Stockland" },
                { icon: <Calendar className="w-5 h-5" />, label: "Sunday Best", sublabel: "Cotters Market" }
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

            {/* Shopping Centres Section */}
            <section className="mb-16">
              <div className="flex items-center gap-3 mb-8">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Store className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                    Shopping Centres
                  </h2>
                  <p className="text-muted-foreground">Major retail destinations in Townsville</p>
                </div>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                {shoppingCentres.map((centre, index) => (
                  <ShoppingCard key={index} {...centre} />
                ))}
              </div>
            </section>

            {/* Markets Section */}
            <section className="mb-16">
              <div className="flex items-center gap-3 mb-8">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Coffee className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                    Local Markets
                  </h2>
                  <p className="text-muted-foreground">Weekend markets with local produce and crafts</p>
                </div>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                {markets.map((market, index) => (
                  <ShoppingCard key={index} {...market} />
                ))}
              </div>
            </section>

            {/* CTA Section */}
            <section className="text-center bg-gradient-to-br from-primary/5 to-transparent rounded-2xl p-8 border-2">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Explore More of Townsville
              </h2>
              <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
                Discover food and drink, beaches, and local attractions across Townsville.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button asChild>
                  <Link to="/townsville/food">Food & Drink</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link to="/townsville/things-to-do">Things To Do</Link>
                </Button>
              </div>
            </section>
          </div>
        </main>
      </div>
    </>
  );
};

export default Shopping;
