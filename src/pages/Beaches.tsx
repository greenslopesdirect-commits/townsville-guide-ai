import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, MapPin, Waves, Sunset, Dog, AlertTriangle, Bot } from "lucide-react";

const Beaches = () => {
  return (
    <>
      <Helmet>
  <title>Best Beaches in Townsville – Local Coastal Guide | Duncan's Guide</title>
  <meta 
    name="description" 
    content="Discover Townsville's best beaches including The Strand, Pallarenda, Rowes Bay, Bushland Beach, Saunders Beach, and Magnetic Island. Your complete guide to coastal spots, dog-friendly areas, and sunset locations." 
  />

  {/* WebPage Schema */}
  <script type="application/ld+json">
    {`
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Beaches in Townsville",
      "url": "https://duncansguide.com/beaches",
      "description": "Local guide to the best beaches in Townsville including The Strand, Pallarenda, Rowes Bay, Bushland Beach and Magnetic Island.",
      "breadcrumb": {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://duncansguide.com"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Beaches",
            "item": "https://duncansguide.com/beaches"
          }
        ]
      }
    }
    `}
  </script>

  {/* ItemList Schema */}
  <script type="application/ld+json">
    {`
    {
      "@context": "https://schema.org",
      "@type": "ItemList",
      "name": "Townsville Beaches",
      "itemListOrder": "Ascending",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "url": "https://duncansguide.com/beaches#the-strand",
          "name": "The Strand"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "url": "https://duncansguide.com/beaches#pallarenda",
          "name": "Pallarenda Beach"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "url": "https://duncansguide.com/beaches#rowes-bay",
          "name": "Rowes Bay"
        },
        {
          "@type": "ListItem",
          "position": 4,
          "url": "https://duncansguide.com/beaches#bushland-beach",
          "name": "Bushland Beach"
        },
        {
          "@type": "ListItem",
          "position": 5,
          "url": "https://duncansguide.com/beaches#saunders",
          "name": "Saunders Beach"
        },
        {
          "@type": "ListItem",
          "position": 6,
          "url": "https://duncansguide.com/beaches#toolakea",
          "name": "Toolakea Beach"
        },
        {
          "@type": "ListItem",
          "position": 7,
          "url": "https://duncansguide.com/beaches#magnetic-island",
          "name": "Magnetic Island Beaches"
        }
      ]
    }
    `}
  </script>

  {/* TouristAttraction Schema */}
  <script type="application/ld+json">
    {`
    {
      "@context": "https://schema.org",
      "@type": "TouristDestination",
      "name": "Townsville Beaches",
      "description": "Guide to Townsville's beaches including The Strand, Pallarenda, Rowes Bay, Bushland Beach, Saunders and Toolakea.",
      "touristType": "Beach visitors, families, dog owners, swimmers, travellers",
      "includesAttraction": [
        {
          "@type": "TouristAttraction",
          "name": "The Strand",
          "url": "https://duncansguide.com/beaches#the-strand",
          "address": "The Strand, Townsville QLD 4810"
        },
        {
          "@type": "TouristAttraction",
          "name": "Pallarenda Beach",
          "url": "https://duncansguide.com/beaches#pallarenda",
          "address": "Pallarenda QLD 4810"
        },
        {
          "@type": "TouristAttraction",
          "name": "Rowes Bay",
          "url": "https://duncansguide.com/beaches#rowes-bay",
          "address": "Rowes Bay, Townsville QLD 4810"
        },
        {
          "@type": "TouristAttraction",
          "name": "Bushland Beach",
          "url": "https://duncansguide.com/beaches#bushland-beach",
          "address": "Bushland Beach, Townsville QLD 4818"
        },
        {
          "@type": "TouristAttraction",
          "name": "Saunders Beach",
          "url": "https://duncansguide.com/beaches#saunders",
          "address": "Saunders Beach QLD 4818"
        },
        {
          "@type": "TouristAttraction",
          "name": "Toolakea Beach",
          "url": "https://duncansguide.com/beaches#toolakea",
          "address": "Toolakea Beach QLD 4818"
        },
        {
          "@type": "TouristAttraction",
          "name": "Magnetic Island Beaches",
          "url": "https://duncansguide.com/beaches#magnetic-island",
          "address": "Magnetic Island QLD 4819"
        }
      ]
    }
    `}
  </script>

</Helmet>

      
      <div className="min-h-screen bg-background">
        <Header />
        
        <main className="pt-24 pb-16">
          <div className="container mx-auto px-4 max-w-4xl">
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

            {/* Page Header */}
            <header className="mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
                Best Beaches in Townsville – Local Coastal Guide
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Townsville has a relaxed coastal lifestyle with calm swimming spots, long foreshore walks and easy access to Magnetic Island. Whether you're looking for a family-friendly swimming area, a quiet beach for sunset, or dog-friendly coastal walks, this guide covers the best beaches in and around Townsville.
              </p>
            </header>

            {/* Content Sections */}
            <div className="space-y-12">
              {/* The Strand Beach */}
              <section>
                <div className="flex items-center gap-3 mb-4">
                  <Waves className="w-6 h-6 text-primary" />
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                    The Strand Beach
                  </h2>
                </div>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  The Strand is Townsville's most popular beachfront, stretching 2.2 km along the coast with views over Magnetic Island. It is ideal for walking, swimming, relaxing, or enjoying the nearby cafés and restaurants.
                </p>
                <div className="mb-4">
                  <p className="font-semibold text-foreground mb-2">Highlights:</p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                    <li>Patrolled swimming enclosure</li>
                    <li>Saltwater Rockpool</li>
                    <li>Playgrounds and shaded picnic areas</li>
                    <li>Restaurants and cafés along the foreshore</li>
                    <li>Walking and jogging paths</li>
                  </ul>
                </div>
                <div className="bg-muted/50 p-4 rounded-lg mb-4">
                  <p className="font-semibold text-foreground mb-1">Local Tip:</p>
                  <p className="text-muted-foreground">Visit early morning or late afternoon for cooler weather and fewer crowds.</p>
                </div>
                <Button 
                  variant="outline" 
                  size="sm" 
                  asChild
                  className="gap-2"
                >
                  <a 
                    href="https://www.google.com/maps/place/The+Strand,+Townsville+QLD+4810" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label="View The Strand on Google Maps"
                  >
                    <MapPin className="w-4 h-4" />
                    View on Map
                  </a>
                </Button>
              </section>

              {/* Pallarenda Beach */}
              <section>
                <div className="flex items-center gap-3 mb-4">
                  <Waves className="w-6 h-6 text-primary" />
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                    Pallarenda Beach
                  </h2>
                </div>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Pallarenda is a peaceful, scenic beach located north of the city. It offers long sandy stretches, coastal views, and access to the Town Common walking tracks.
                </p>
                <div className="mb-4">
                  <p className="font-semibold text-foreground mb-2">Highlights:</p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                    <li>Quiet, relaxed atmosphere</li>
                    <li>Long beach ideal for walking</li>
                    <li>Excellent sunset views</li>
                    <li>Rock pools and fishing spots</li>
                  </ul>
                </div>
                <div className="bg-muted/50 p-4 rounded-lg mb-4">
                  <p className="font-semibold text-foreground mb-1">Local Tip:</p>
                  <p className="text-muted-foreground">Walk towards Shelly Cove for the best views of the rocky headlands.</p>
                </div>
                <Button 
                  variant="outline" 
                  size="sm" 
                  asChild
                  className="gap-2"
                >
                  <a 
                    href="https://www.google.com/maps/search/?api=1&query=Pallarenda+Beach+Townsville" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label="View Pallarenda Beach on Google Maps"
                  >
                    <MapPin className="w-4 h-4" />
                    View on Map
                  </a>
                </Button>
              </section>

              {/* Rowes Bay */}
              <section>
                <div className="flex items-center gap-3 mb-4">
                  <Waves className="w-6 h-6 text-primary" />
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                    Rowes Bay
                  </h2>
                </div>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Rowes Bay is a calm, scenic foreshore connecting The Strand and Pallarenda. It is perfect for walking, cycling, or enjoying views across Cleveland Bay.
                </p>
                <div className="mb-4">
                  <p className="font-semibold text-foreground mb-2">Highlights:</p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                    <li>Coastal walking and cycling path</li>
                    <li>Dog-friendly zones</li>
                    <li>Views of Magnetic Island</li>
                    <li>Close to Jezzine Barracks and Kissing Point</li>
                  </ul>
                </div>
                <div className="bg-muted/50 p-4 rounded-lg mb-4">
                  <p className="font-semibold text-foreground mb-1">Local Tip:</p>
                  <p className="text-muted-foreground">A great spot for relaxed sunset walks.</p>
                </div>
                <Button 
                  variant="outline" 
                  size="sm" 
                  asChild
                  className="gap-2"
                >
                  <a 
                    href="https://www.google.com/maps/search/?api=1&query=Rowes+Bay+Townsville" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label="View Rowes Bay on Google Maps"
                  >
                    <MapPin className="w-4 h-4" />
                    View on Map
                  </a>
                </Button>
              </section>

              {/* Magnetic Island Beaches */}
              <section>
                <div className="flex items-center gap-3 mb-4">
                  <Waves className="w-6 h-6 text-primary" />
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                    Magnetic Island Beaches
                  </h2>
                </div>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Just a 20-minute ferry ride from Townsville, Magnetic Island offers some of the best beaches in North Queensland. The island has 23 bays and beaches, each with its own character.
                </p>
                <div className="mb-4">
                  <p className="font-semibold text-foreground mb-2">Top Beaches:</p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                    <li>Alma Bay – Family-friendly and patrolled</li>
                    <li>Horseshoe Bay – Watersports and cafés</li>
                    <li>Florence Bay – Great for snorkelling</li>
                    <li>Radical Bay – Secluded and scenic</li>
                  </ul>
                </div>
                <div className="bg-muted/50 p-4 rounded-lg mb-4">
                  <p className="font-semibold text-foreground mb-1">Local Tip:</p>
                  <p className="text-muted-foreground">Bring reef-safe sunscreen and plenty of water.</p>
                </div>
                <Button 
                  variant="outline" 
                  size="sm" 
                  asChild
                  className="gap-2"
                >
                  <a 
                    href="https://www.google.com/maps/search/?api=1&query=Magnetic+Island+Ferry+Terminal+Townsville" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label="View Magnetic Island Ferry Terminal on Google Maps"
                  >
                    <MapPin className="w-4 h-4" />
                    View Ferry Terminal on Map
                  </a>
                </Button>
              </section>

              {/* Dog-Friendly Beaches */}
              <section>
                <div className="flex items-center gap-3 mb-4">
                  <Dog className="w-6 h-6 text-primary" />
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                    Dog-Friendly Beaches
                  </h2>
                </div>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Townsville is one of Queensland's most dog-friendly cities. Several beaches and foreshore areas allow dogs, either leashed or off-leash.
                </p>
                <div className="mb-4">
                  <p className="font-semibold text-foreground mb-2">Best Spots:</p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                    <li>Bushland Beach – Off-leash areas and sunsets</li>
                    <li>Pallarenda Beach – Dog exercise areas</li>
                    <li>Rowes Bay – Dog-friendly foreshore sections</li>
                  </ul>
                </div>
                <div className="bg-muted/50 p-4 rounded-lg mb-4">
                  <p className="font-semibold text-foreground mb-1">Local Tip:</p>
                  <p className="text-muted-foreground">Always check signage, as off-leash zones change seasonally.</p>
                </div>
                <Button 
                  variant="outline" 
                  size="sm" 
                  asChild
                  className="gap-2"
                >
                  <a 
                    href="https://www.google.com/maps/search/?api=1&query=Bushland+Beach+Townsville" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label="View Bushland Beach on Google Maps"
                  >
                    <MapPin className="w-4 h-4" />
                    View Bushland Beach on Map
                  </a>
                </Button>
              </section>

              {/* Best Beaches for Sunset */}
              <section>
                <div className="flex items-center gap-3 mb-4">
                  <Sunset className="w-6 h-6 text-primary" />
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                    Best Beaches for Sunset
                  </h2>
                </div>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Townsville faces west across Cleveland Bay, making it ideal for sunsets.
                </p>
                <div className="mb-4">
                  <p className="font-semibold text-foreground mb-2">Top Sunset Locations:</p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                    <li>Pallarenda Beach</li>
                    <li>Rowes Bay</li>
                    <li>Bushland Beach</li>
                    <li>Jezzine Headlands</li>
                  </ul>
                </div>
                <div className="bg-muted/50 p-4 rounded-lg">
                  <p className="font-semibold text-foreground mb-1">Local Tip:</p>
                  <p className="text-muted-foreground">Bring a camera — the light over Magnetic Island can be spectacular.</p>
                </div>
              </section>

              {/* Safety Tips */}
              <section>
                <div className="flex items-center gap-3 mb-4">
                  <AlertTriangle className="w-6 h-6 text-primary" />
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                    Safety Tips
                  </h2>
                </div>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>Stinger season runs November to April</li>
                  <li>Swim inside stinger enclosures where available</li>
                  <li>Check beach signage at all times</li>
                  <li>Bring water, sunscreen, and avoid midday heat</li>
                </ul>
              </section>

              {/* Ask the AI for Recommendations */}
              <section>
                <div className="flex items-center gap-3 mb-4">
                  <Bot className="w-6 h-6 text-primary" />
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                    Ask the AI for Recommendations
                  </h2>
                </div>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Not sure which beach suits your plans today? Ask the AI on this site questions such as:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4 mb-6">
                  <li>"Which beach is best for swimming today?"</li>
                  <li>"Where should I take my dog near the beach?"</li>
                  <li>"Which beach is best for sunset?"</li>
                  <li>"Which beach is calm when it's windy?"</li>
                </ul>
                <Link to="/">
                  <Button className="gap-2" aria-label="Open AI chat assistant">
                    <Bot className="w-5 h-5" />
                    Ask the AI Guide
                  </Button>
                </Link>
              </section>
            </div>

            {/* Back to Home CTA */}
            <div className="mt-16 pt-8 border-t border-border text-center">
              <Link to="/">
                <Button variant="outline" size="lg" className="group" aria-label="Return to Duncan's Guide home page">
                  Return to Home
                  <ArrowLeft className="ml-2 w-4 h-4 rotate-180 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Beaches;
