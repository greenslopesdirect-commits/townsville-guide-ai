import { Helmet } from "react-helmet";
import SEOHead from "@/components/SEOHead";
import { Link } from "react-router-dom";
import { Plane, Car, MapPin, Clock, Sun, Droplets, Coffee, Mountain } from "lucide-react";
import { Button } from "@/components/ui/button";
import LocalInsightCard from "@/components/LocalInsightCard";
import AirportTransferCard from "@/components/AirportTransferCard";

const TownsvilleAirport = () => {
  return (
    <>
      <SEOHead
        title="Townsville Airport Guide (2026) – Cheap Flights to Townsville, TSV Transport & Local Tips"
        description="Your ultimate resource for flights to TSV — cheap flights to Townsville, arrival info, airport transport, parking, and local transfer tips for North Queensland visitors."
        canonical="https://www.myaussieguide.com.au/townsville-airport"
      />
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Townsville Airport Guide",
            "url": "https://www.myaussieguide.com.au/townsville-airport",
            "description": "A local guide to Townsville Airport — transport, parking, arrival tips, and nearby accommodation for North Queensland visitors."
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <main className="pt-8 pb-16">
          <div className="container mx-auto px-4 max-w-4xl">

            {/* Hero */}
            <header className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
                <Plane className="w-8 h-8 text-primary" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
                Townsville Airport Guide & Flights Info
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Townsville Airport (TSV) is the main gateway to North Queensland, serving both visitors and locals. Whether you are looking for cheap flights to Townsville, relocating, or visiting family, here is a practical local guide to transport, facilities, and what to know when you land.
              </p>
            </header>

            <div className="space-y-12">

              {/* Quick Overview */}
              <section>
                <div className="flex items-center gap-3 mb-4">
                  <MapPin className="w-6 h-6 text-primary" />
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground">Quick Airport Overview</h2>
                </div>
                <div className="bg-muted/30 p-6 rounded-lg">
                  <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                    <li>Located about 5 km from Townsville CBD</li>
                    <li>Domestic airport with connections to major Australian cities</li>
                    <li>Close to beaches, accommodation, and the <Link to="/guides/magnetic-island-day-trip" className="text-primary font-medium hover:underline">Magnetic Island</Link> ferry terminal</li>
                    <li>Easy access by car, taxi, or rideshare</li>
                  </ul>
                  <p className="text-muted-foreground mt-4">
                    For official flight schedules, terminal updates, parking details, and current airport information, visit the <a href="https://www.townsvilleairport.com.au/" target="_blank" rel="noopener noreferrer" className="text-primary font-medium hover:underline">official Townsville Airport website</a>.
                  </p>
                </div>
              </section>

              {/* Transport Options */}
              <section>
                <div className="flex items-center gap-3 mb-4">
                  <Car className="w-6 h-6 text-primary" />
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground">Transport Options</h2>
                </div>
                <div className="space-y-6">
                  <div className="bg-muted/30 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-foreground mb-2">Taxi & Rideshare</h3>
                    <p className="text-muted-foreground">Taxis and Uber are available from the terminal. The trip to the CBD or <Link to="/the-strand" className="text-primary font-medium hover:underline">The Strand</Link> takes around 10–15 minutes depending on traffic.</p>
                  </div>
                  <div className="bg-muted/30 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-foreground mb-2">Car Hire</h3>
                    <p className="text-muted-foreground">Major car hire companies operate desks inside the terminal, making it easy to pick up a vehicle on arrival. A car is handy if you're planning to explore <Link to="/beaches" className="text-primary font-medium hover:underline">beaches</Link> or day-trip destinations around the region.</p>
                  </div>
                  <div className="bg-muted/30 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-foreground mb-2">Parking</h3>
                    <p className="text-muted-foreground">Both short-term and long-term parking are available directly at the airport. Rates are reasonable compared to larger capital city airports.</p>
                  </div>
                  <div className="bg-muted/30 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-foreground mb-2">Public Transport</h3>
                    <p className="text-muted-foreground">Public transport options to and from the airport are limited compared with larger cities. Most visitors rely on taxis, rideshare, or car hire for convenience.</p>
                  </div>
                </div>
                <AirportTransferCard className="mt-6" />
              </section>

              {/* Local Arrival Tips */}
              <section>
                <div className="flex items-center gap-3 mb-4">
                  <Sun className="w-6 h-6 text-primary" />
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground">Local Arrival Tips</h2>
                </div>
                <div className="bg-muted/30 p-6 rounded-lg">
                  <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                    <li><strong>Dry Season climate:</strong> June features beautiful low humidity, clear skies, and comfortably cool mornings. It is the perfect outdoor weather window.</li>
                    <li><strong>Hydrate well:</strong> Even with the cooler, fresh dry season breezes, the tropical sun is strong—keep water handy and wear sun protection.</li>
                    <li><strong>Easy orientation:</strong> The Strand, Castle Hill lookouts, and the Magnetic Island ferry terminal are all within a short 10–15 minute drive of the airport.</li>
                  </ul>
                </div>
              </section>

              {/* First Things to Do */}
              <section>
                <div className="flex items-center gap-3 mb-4">
                  <Coffee className="w-6 h-6 text-primary" />
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground">Just Landed? Here's Where Locals Often Head First</h2>
                </div>
                <div className="bg-muted/30 p-6 rounded-lg">
                  <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                    <li>A beachfront walk along <Link to="/the-strand" className="text-primary font-medium hover:underline">The Strand</Link></li>
                    <li>Coffee or a meal at one of the nearby <Link to="/food" className="text-primary font-medium hover:underline">local cafes and restaurants</Link></li>
                    <li>A quick drive up <Link to="/castle-hill" className="text-primary font-medium hover:underline">Castle Hill</Link> for panoramic views</li>
                    <li>Planning a <Link to="/guides/magnetic-island-day-trip" className="text-primary font-medium hover:underline">Magnetic Island day trip</Link> from the nearby ferry terminal</li>
                  </ul>
                  <p className="text-muted-foreground mt-4">
                    For a full overview, check out our <Link to="/things-to-do" className="text-primary font-medium hover:underline">Things to Do</Link> page or see <Link to="/events" className="text-primary font-medium hover:underline">what's on this week</Link>.
                  </p>
                </div>
              </section>

              {/* Accommodation */}
              <section>
                <div className="flex items-center gap-3 mb-4">
                  <Mountain className="w-6 h-6 text-primary" />
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground">Staying Nearby?</h2>
                </div>
                <div className="bg-muted/30 p-6 rounded-lg text-center">
                  <p className="text-muted-foreground mb-6">
                    If you're arriving late or want convenience, staying near the airport or Strand area can make travel easier.
                  </p>
                  <Button size="lg" asChild>
                    <Link to="/accommodation">View Townsville Accommodation Guide</Link>
                  </Button>
                </div>
              </section>

              {/* Local Insight */}
              <LocalInsightCard variant="tip" title="Local Tip">
                <p>Townsville's tropical climate means outdoor activities are usually best early morning or late afternoon. If you're arriving midday, head straight to your accommodation to freshen up before exploring — locals rarely rush in the heat.</p>
              </LocalInsightCard>

              {/* Flights CTA */}
              <section>
                <div className="flex items-center gap-3 mb-4">
                  <Plane className="w-6 h-6 text-primary" />
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground">Townsville Flights & Travel Advice</h2>
                </div>
                <div className="bg-muted/30 p-6 rounded-lg text-center">
                  <p className="text-muted-foreground mb-6">
                    When booking flights to TSV from major Australian cities, comparing seasonal rates early is key to scoring the best value. Check our flight tips for the best deals, airline options, and local travel advice.
                  </p>
                  <Button size="lg" asChild>
                    <Link to="/flights">Compare Flight Prices</Link>
                  </Button>
                </div>
              </section>

              {/* Closing */}
              <div className="text-center pt-8 border-t border-border">
                <p className="text-muted-foreground italic">
                  Townsville Airport is small, easy to navigate, and only minutes from the city — one of the reasons locals love living here.
                </p>
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

export default TownsvilleAirport;
