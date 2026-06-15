import { Helmet } from "react-helmet";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Plane, Calendar, DollarSign, MapPin, ArrowRight } from "lucide-react";
import FlightsButton from "@/components/FlightsButton";

const FlightsToTownsville = () => {
  return (
    <>
      <SEOHead
        title="Townsville Airport (TSV) Arrival & Flight Guide (June 2026)"
        description="Updated June 15, 2026. Your local guide to Townsville Airport (TSV) flights, arrivals, taxi ranks, and transfer logistics."
        canonical="https://www.myaussieguide.com.au/flights"
      />
      <Helmet>
        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Flights to Townsville",
            "url": "https://www.myaussieguide.com.au/flights",
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
                Townsville Airport (TSV) Arrival & Flight Guide (June 2026)
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
                Welcome to North Queensland. Whether you are flying into Townsville Airport (TSV) for business, a tropical holiday on Magnetic Island, or a massive weekend at Queensland Country Bank Stadium, this practical arrival guide covers your transit, taxi, and airport transfer logistics.
              </p>
              <FlightsButton size="lg" className="text-lg px-8 py-6" />
              <div className="mt-4">
                <Button asChild variant="outline" className="gap-2">
                  <Link to="/moving-to-townsville">
                    Moving to Townsville? Check out our 2026 Relocation Guide
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
              </div>
            </header>

            {/* Content Sections */}
            <div className="space-y-12">

              {/* TSV to City & Stadium Transit */}
              <section>
                <div className="flex items-center gap-3 mb-4">
                  <MapPin className="w-6 h-6 text-primary" />
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                    Getting from Townsville Airport to the City & Strand
                  </h2>
                </div>
                <div className="bg-muted/30 p-6 rounded-lg space-y-4">
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Taxi Rank & Ride-Share</h3>
                    <p className="text-muted-foreground">
                      A fully maintained taxi rank is located directly outside the arrivals terminal, alongside designated pickup zones for ride-sharing apps (Uber and DiDi). A trip to the CBD or The Strand takes approximately 10–15 minutes depending on traffic.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Private Transfers</h3>
                    <p className="text-muted-foreground">
                      Pre-booking a private airport transfer is highly recommended for families and groups looking to bypass the taxi queues during peak event arrival windows.
                    </p>
                  </div>
                </div>
              </section>

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
                    <strong>Winter Event Peak:</strong> Late June through July brings a massive influx of travelers to Townsville. Flight demand spikes heavily for major event weekends, including the Cowboys vs. Penrith Panthers blockbuster on Saturday, June 27, and the NTI Townsville 500 supercar street circuit on July 10–12. If you are flying in for the footy or motorsport, ensure your airport transfers and accommodation are locked in early.
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
                    <Link to="/">← Back to Home</Link>
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
