import { Helmet } from "react-helmet";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Plane, Calendar, DollarSign, MapPin } from "lucide-react";
import FlightsButton from "@/components/FlightsButton";

const FlightsToTownsville = () => {
  return (
    <>
      <SEOHead
        title="Flights to Townsville (TSV) - Compare & Book Cheap Flights"
        description="Compare flights to Townsville Airport (TSV). Find the best deals on flights from Sydney, Melbourne, Brisbane and more. Tips for cheap flights to North Queensland."
        canonical="https://www.myaussieguide.com.au/townsville/flights"
      />
      <Helmet>
        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Flights to Townsville",
            "url": "https://www.myaussieguide.com.au/townsville/flights",
            "description": "Compare and book flights to Townsville Airport (TSV)"
          }
          `}
        </script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <main className="pt-24 pb-16">
          <div className="container mx-auto px-4 max-w-4xl">
            
            {/* Hero Section */}
            <header className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
                <Plane className="w-8 h-8 text-primary" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
                Flights to Townsville (TSV)
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
                Compare flights to and from Townsville — coming soon.
              </p>
              <FlightsButton size="lg" className="text-lg px-8 py-6" />
            </header>

            {/* Content Sections */}
            <div className="space-y-12">
              
              {/* Best Times to Fly */}
              <section>
                <div className="flex items-center gap-3 mb-4">
                  <Calendar className="w-6 h-6 text-primary" />
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                    Best Times to Fly
                  </h2>
                </div>
                <div className="bg-muted/30 p-6 rounded-lg">
                  <p className="text-muted-foreground mb-4">
                    The best time to find cheap flights to Townsville is typically during the shoulder seasons — April to June and September to November. Avoid school holidays and peak tourist periods for the best deals.
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                    <li>Dry season (April–November): Best weather, higher demand</li>
                    <li>Wet season (December–March): Lower prices, occasional storms</li>
                    <li>Book 6–8 weeks ahead for best prices</li>
                    <li>Tuesday and Wednesday flights often cheaper</li>
                  </ul>
                </div>
              </section>

              {/* Airlines Serving Townsville */}
              <section>
                <div className="flex items-center gap-3 mb-4">
                  <Plane className="w-6 h-6 text-primary" />
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                    Airlines Serving Townsville Airport
                  </h2>
                </div>
                <div className="bg-muted/30 p-6 rounded-lg">
                  <p className="text-muted-foreground mb-4">
                    Townsville Airport (TSV) is serviced by major Australian carriers with regular flights to capital cities and regional destinations.
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                    <li>Qantas — Direct flights from Brisbane, Sydney, Melbourne</li>
                    <li>Virgin Australia — Brisbane and Sydney connections</li>
                    <li>Jetstar — Budget-friendly options from major cities</li>
                    <li>Rex Airlines — Regional Queensland routes</li>
                  </ul>
                </div>
              </section>

              {/* Flying to Magnetic Island */}
              <section>
                <div className="flex items-center gap-3 mb-4">
                  <MapPin className="w-6 h-6 text-primary" />
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                    Flying to Magnetic Island
                  </h2>
                </div>
                <div className="bg-muted/30 p-6 rounded-lg">
                  <p className="text-muted-foreground mb-4">
                    There's no airport on Magnetic Island, but getting there from Townsville is easy. After landing at TSV, take a short taxi or shuttle to the ferry terminal.
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                    <li>Airport to ferry terminal: ~20 minutes by taxi</li>
                    <li>Ferry crossing: 20 minutes (passenger) or 40 minutes (car)</li>
                    <li>Multiple ferry departures daily</li>
                    <li>Pre-book ferry tickets in peak season</li>
                  </ul>
                </div>
              </section>

              {/* Tips for Cheap Flights */}
              <section>
                <div className="flex items-center gap-3 mb-4">
                  <DollarSign className="w-6 h-6 text-primary" />
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                    Tips for Cheap Flights
                  </h2>
                </div>
                <div className="bg-muted/30 p-6 rounded-lg">
                  <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                    <li>Use flight comparison tools like Skyscanner</li>
                    <li>Set price alerts for your preferred dates</li>
                    <li>Be flexible with travel dates (+/- 3 days)</li>
                    <li>Consider flying midweek for lower fares</li>
                    <li>Book directly with airlines after comparing prices</li>
                    <li>Check for sales during major retail events</li>
                  </ul>
                </div>
              </section>

              {/* CTA */}
              <div className="text-center pt-8 border-t border-border">
                <h3 className="text-xl font-bold mb-4 text-foreground">Ready to Search?</h3>
                <FlightsButton size="lg" className="mb-6" />
                <div className="mt-6">
                  <Button variant="outline" size="lg" asChild>
                    <Link to="/townsville">← Back to Home</Link>
                  </Button>
                </div>
              </div>

            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default FlightsToTownsville;
