import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { MapPin } from "lucide-react";

const Events = () => {
  const handleAskAI = () => {
    const input = document.getElementById("townsville-ai-input");
    if (input) {
      input.scrollIntoView({ behavior: "smooth", block: "center" });
      setTimeout(() => {
        input.classList.add("ring-2", "ring-primary");
        setTimeout(() => {
          input.classList.remove("ring-2", "ring-primary");
        }, 2000);
      }, 500);
    }
  };

  return (
    <>
      <Helmet>
        <title>Townsville Events & What's On - Festivals, Markets & Activities</title>
        <meta 
          name="description" 
          content="Discover events, festivals and activities in Townsville. From Strand Ephemera and NAFA to weekly markets, live music and family events." 
        />
      </Helmet>

      <div className="min-h-screen flex flex-col bg-background">
        <Header />
        
        <main className="flex-grow pt-20">
          <div className="container mx-auto px-4 py-12 max-w-4xl">
            
            {/* Intro */}
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Townsville Events & What's On – Festivals, Markets & Annual Celebrations
            </h1>
            
            <p className="text-lg text-muted-foreground mb-12 leading-relaxed">
              Townsville hosts major festivals, cultural celebrations and weekly markets all year round. Whether you're here for a weekend or planning ahead for a future trip, this guide gives you the major events, their typical dates, and the best regular happenings across the city.
            </p>

            {/* Section 1: Strand Ephemera */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-4 text-foreground">
                ⭐ Strand Ephemera (Biennial – July/August, Every 2 Years)
              </h2>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Strand Ephemera is Australia's leading outdoor sculpture exhibition, held every two years along The Strand foreshore. Expect large-scale artworks, light installations, and interactive coastal pieces.
              </p>
              <div className="bg-muted/30 p-4 rounded-lg mb-4">
                <p className="font-semibold text-foreground mb-2">Typical Dates:</p>
                <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                  <li>Every 2 years (biennial)</li>
                  <li>Late July or early August</li>
                  <li>Next expected: 2026</li>
                </ul>
              </div>
              <Button variant="outline" size="sm" asChild>
                <a 
                  href="https://www.google.com/maps/search/?api=1&query=The+Strand+Townsville" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2"
                >
                  <MapPin className="w-4 h-4" />
                  View on Map
                </a>
              </Button>
            </section>

            {/* Section 2: NAFA */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-4 text-foreground">
                ⭐ North Australian Festival of Arts – NAFA (June–July)
              </h2>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Townsville's biggest arts and cultural festival, featuring theatre, music, comedy, circus, visual arts and community showcases across the city.
              </p>
              <div className="bg-muted/30 p-4 rounded-lg mb-4">
                <p className="font-semibold text-foreground mb-2">Typical Dates:</p>
                <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                  <li>Late June to mid-July</li>
                  <li>Annual event</li>
                </ul>
              </div>
              <Button variant="outline" size="sm" asChild>
                <a 
                  href="https://www.google.com/maps/search/?api=1&query=Townsville+Civic+Theatre" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2"
                >
                  <MapPin className="w-4 h-4" />
                  View on Map
                </a>
              </Button>
            </section>

            {/* Section 3: Cultural Festival */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-4 text-foreground">
                ⭐ Townsville Cultural Festival (August)
              </h2>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                A multicultural celebration of global food, dance, live music, art and community. A long-running local favourite.
              </p>
              <div className="bg-muted/30 p-4 rounded-lg mb-4">
                <p className="font-semibold text-foreground mb-2">Typical Dates:</p>
                <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                  <li>August</li>
                  <li>Annual</li>
                </ul>
              </div>
              <Button variant="outline" size="sm" asChild>
                <a 
                  href="https://www.google.com/maps/search/?api=1&query=Townsville+Cricket+Grounds" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2"
                >
                  <MapPin className="w-4 h-4" />
                  View on Map
                </a>
              </Button>
            </section>

            {/* Section 4: Magnetic Island Race Week */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-4 text-foreground">
                ⭐ Magnetic Island Race Week (Late August–Early September)
              </h2>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                One of Australia's most scenic sailing events, drawing racing crews from around the world for a week of on-water competition and sunset celebrations.
              </p>
              <div className="bg-muted/30 p-4 rounded-lg mb-4">
                <p className="font-semibold text-foreground mb-2">Typical Dates:</p>
                <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                  <li>Late August to early September</li>
                  <li>Annual event</li>
                </ul>
              </div>
              <Button variant="outline" size="sm" asChild>
                <a 
                  href="https://www.google.com/maps/search/?api=1&query=Magnetic+Island+Ferry+Terminal" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2"
                >
                  <MapPin className="w-4 h-4" />
                  View on Map
                </a>
              </Button>
            </section>

            {/* Section 5: Christmas Festival */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-4 text-foreground">
                ⭐ Townsville Christmas Festival (December)
              </h2>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Townsville lights up in December with Christmas markets, concerts, food stalls, kids' entertainment and festive light displays.
              </p>
              <div className="bg-muted/30 p-4 rounded-lg mb-4">
                <p className="font-semibold text-foreground mb-2">Typical Dates:</p>
                <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                  <li>Early December</li>
                  <li>Annual</li>
                </ul>
              </div>
              <Button variant="outline" size="sm" asChild>
                <a 
                  href="https://www.google.com/maps/search/?api=1&query=Townsville+CBD" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2"
                >
                  <MapPin className="w-4 h-4" />
                  View on Map
                </a>
              </Button>
            </section>

            {/* Section 6: Weekly & Monthly Markets */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-4 text-foreground">
                Weekly & Monthly Markets (Year-Round)
              </h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    Cotters Market – Sundays (Flinders Street)
                  </h3>
                  <p className="text-muted-foreground mb-3">
                    Townsville's longest-running local market, with food stalls, crafts and fresh produce.
                  </p>
                  <Button variant="outline" size="sm" asChild>
                    <a 
                      href="https://www.google.com/maps/search/?api=1&query=Flinders+Street+Market" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2"
                    >
                      <MapPin className="w-4 h-4" />
                      View on Map
                    </a>
                  </Button>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    Willows Rotary Market – Sundays (Kirwan)
                  </h3>
                  <p className="text-muted-foreground mb-3">
                    Huge open-air market with food trucks, clothing, plants, and family activities.
                  </p>
                  <Button variant="outline" size="sm" asChild>
                    <a 
                      href="https://www.google.com/maps/search/?api=1&query=Willows+Shopping+Centre+Townsville" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2"
                    >
                      <MapPin className="w-4 h-4" />
                      View on Map
                    </a>
                  </Button>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    Strand Night Markets – Usually 1st Friday of every month
                  </h3>
                  <p className="text-muted-foreground mb-3">
                    Street food, jewellery, workshops, live entertainment and local crafts.
                  </p>
                  <Button variant="outline" size="sm" asChild>
                    <a 
                      href="https://www.google.com/maps/search/?api=1&query=The+Strand+Townsville" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2"
                    >
                      <MapPin className="w-4 h-4" />
                      View on Map
                    </a>
                  </Button>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    Riverway Movie Nights (Dry Season: May–October)
                  </h3>
                  <p className="text-muted-foreground mb-3">
                    Free outdoor movies hosted at Riverway's lagoons and grass areas.
                  </p>
                  <Button variant="outline" size="sm" asChild>
                    <a 
                      href="https://www.google.com/maps/search/?api=1&query=Riverway+Townsville" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2"
                    >
                      <MapPin className="w-4 h-4" />
                      View on Map
                    </a>
                  </Button>
                </div>
              </div>
            </section>

            {/* Section 7: Ask the AI */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-4 text-foreground">
                Day-by-Day Events – Ask the AI Guide
              </h2>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Because exact dates change from year to year, Duncan's AI Guide can give real-time suggestions.
              </p>
              <div className="mb-6">
                <p className="font-semibold text-foreground mb-2">Try asking:</p>
                <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                  <li>"What events are on this weekend in Townsville?"</li>
                  <li>"Is there live music tonight?"</li>
                  <li>"Are there any markets on Sunday?"</li>
                  <li>"Is anything happening at The Strand today?"</li>
                  <li>"What festivals will be on in July?"</li>
                </ul>
              </div>
              <p className="text-muted-foreground mb-6">
                Your AI will answer instantly with fresh, location-specific options.
              </p>
              <div className="text-center">
                <Button onClick={handleAskAI} size="lg" className="gap-2">
                  Ask the AI Guide
                </Button>
              </div>
            </section>

            {/* Back to Home */}
            <div className="text-center mt-12">
              <Button variant="outline" size="lg" asChild>
                <Link to="/">← Back to Home</Link>
              </Button>
            </div>

          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Events;
