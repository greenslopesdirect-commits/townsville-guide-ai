import { Helmet } from "react-helmet";
import SEOHead from "@/components/SEOHead";
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
      <SEOHead
        title="Townsville Events & What's On - Festivals, Markets & Activities"
        description="Discover events, festivals and activities in Townsville. From Strand Ephemera and NAFA to weekly markets, live music and family events."
        canonical="https://duncansguide.com/townsville/events"
      />
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "EventSeries",
            "name": "Townsville Annual Events",
            "location": {
              "@type": "Place",
              "name": "Townsville, Queensland",
              "address": "Townsville QLD, Australia"
            },
            "eventSchedule": [
              {
                "@type": "Schedule",
                "name": "North Australian Festival of Arts",
                "repeatFrequency": "P1Y",
                "startDate": "2025-06-20",
                "endDate": "2025-07-21"
              },
              {
                "@type": "Schedule",
                "name": "Magnetic Island Race Week",
                "repeatFrequency": "P1Y",
                "startDate": "2025-08-31",
                "endDate": "2025-09-06"
              },
              {
                "@type": "Schedule",
                "name": "Australian Festival of Chamber Music",
                "repeatFrequency": "P1Y",
                "startDate": "2025-07-25",
                "endDate": "2025-08-03"
              },
              {
                "@type": "Schedule",
                "name": "Strand Ephemera",
                "repeatFrequency": "P2Y",
                "startDate": "2025-08-01",
                "endDate": "2025-08-09"
              }
            ]
          })}
        </script>
      </Helmet>

      <div className="min-h-screen flex flex-col bg-background">
        
        <main className="flex-grow pt-20">
          <div className="container mx-auto px-4 py-12 max-w-4xl">
            
            {/* Intro */}
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              🎟️ Events in Townsville – Festivals, Markets & What's On
            </h1>
            
            <p className="text-lg text-muted-foreground mb-12 leading-relaxed">
              Townsville is one of North Queensland's busiest cities for festivals, culture, sport and community events. From beachfront art to sailing regattas, concerts to night markets, there's always something happening — especially during the dry season.
            </p>

            <p className="text-lg text-muted-foreground mb-12 leading-relaxed">
              This page gives you a full local guide to the big annual events, a month-by-month calendar, and a "What's On This Week" AI section so you never miss anything.
            </p>

            {/* This Week Section */}
            <section className="mb-12 bg-primary/5 p-6 rounded-lg border border-primary/20">
              <h2 className="text-3xl font-bold mb-4 text-foreground">
                ⭐ This Week in Townsville
              </h2>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Wondering what's happening right now?
              </p>
              <div className="mb-6">
                <p className="font-semibold text-foreground mb-2">Ask the AI:</p>
                <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                  <li>"What events are on this week in Townsville?"</li>
                  <li>"What can I do tonight?"</li>
                  <li>"What markets are on this Sunday?"</li>
                </ul>
              </div>
              <p className="text-muted-foreground mb-4">
                Your AI guide checks the latest known events and gives personalised suggestions.
              </p>
              <Button onClick={handleAskAI} size="lg" className="gap-2">
                Ask the AI Guide
              </Button>
            </section>

            {/* Major Annual Events */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-foreground">
                🎨 Major Annual Events
              </h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                These are the biggest and most iconic events in Townsville — worth planning trips around.
              </p>

              {/* NAFA */}
              <div className="mb-10 pb-10 border-b border-border/40">
                <h3 className="text-2xl font-bold mb-3 text-foreground">
                  North Australian Festival of Arts (NAFA)
                </h3>
                <p className="text-sm font-semibold text-primary mb-3">June–July</p>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Townsville's flagship arts festival with theatre, music, circus, comedy, light shows and outdoor performances.
                </p>
                <div className="flex flex-wrap gap-3 items-center">
                  <span className="text-sm text-muted-foreground">📌 Queens Gardens, Strand Park, CBD</span>
                  <Button variant="outline" size="sm" asChild>
                    <a 
                      href="https://www.google.com/maps/search/?api=1&query=Queens+Gardens+Townsville" 
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

              {/* AFCM */}
              <div className="mb-10 pb-10 border-b border-border/40">
                <h3 className="text-2xl font-bold mb-3 text-foreground">
                  Australian Festival of Chamber Music (AFCM)
                </h3>
                <p className="text-sm font-semibold text-primary mb-3">Late July – Early August</p>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  World-class chamber music performed across stunning venues including St James' Cathedral and The Civic Theatre.
                </p>
                <div className="flex flex-wrap gap-3 items-center">
                  <span className="text-sm text-muted-foreground">📌 CBD & Castle Hill precinct</span>
                  <Button variant="outline" size="sm" asChild>
                    <a 
                      href="https://www.google.com/maps/search/?api=1&query=St+James+Cathedral+Townsville" 
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

              {/* Strand Ephemera */}
              <div className="mb-10 pb-10 border-b border-border/40">
                <h3 className="text-2xl font-bold mb-3 text-foreground">
                  Strand Ephemera (Biennial)
                </h3>
                <p className="text-sm font-semibold text-primary mb-3">August (every 2 years)</p>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Australia's leading outdoor sculpture festival transforming The Strand into an open-air art gallery.
                </p>
                <div className="flex flex-wrap gap-3 items-center">
                  <span className="text-sm text-muted-foreground">📌 The Strand Foreshore</span>
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
              </div>

              {/* Magnetic Island Race Week */}
              <div className="mb-10 pb-10 border-b border-border/40">
                <h3 className="text-2xl font-bold mb-3 text-foreground">
                  Magnetic Island Race Week
                </h3>
                <p className="text-sm font-semibold text-primary mb-3">Late August – Early September</p>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Sailing yachts compete around Magnetic Island's bays — an unmissable event for boat lovers.
                </p>
                <div className="flex flex-wrap gap-3 items-center">
                  <span className="text-sm text-muted-foreground">📌 Nelly Bay Harbour, Magnetic Island</span>
                  <Button variant="outline" size="sm" asChild>
                    <a 
                      href="https://www.google.com/maps/search/?api=1&query=Nelly+Bay+Harbour+Magnetic+Island" 
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

              {/* Christmas Festival */}
              <div className="mb-10 pb-10 border-b border-border/40">
                <h3 className="text-2xl font-bold mb-3 text-foreground">
                  Townsville Christmas Festival
                </h3>
                <p className="text-sm font-semibold text-primary mb-3">December</p>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Lights, markets, food stalls and festive entertainment for families.
                </p>
                <div className="flex flex-wrap gap-3 items-center">
                  <span className="text-sm text-muted-foreground">📌 CBD & Strand foreshore</span>
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
                </div>
              </div>

              {/* Cotters Market */}
              <div className="mb-10">
                <h3 className="text-2xl font-bold mb-3 text-foreground">
                  Cotters Market (Weekly)
                </h3>
                <p className="text-sm font-semibold text-primary mb-3">Every Sunday Morning</p>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Townsville's biggest weekly market: crafts, plants, local foods, gifts and entertainment.
                </p>
                <div className="flex flex-wrap gap-3 items-center">
                  <span className="text-sm text-muted-foreground">📌 Flinders Street, CBD</span>
                  <Button variant="outline" size="sm" asChild>
                    <a 
                      href="https://www.google.com/maps/search/?api=1&query=Flinders+Street+Market+Townsville" 
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

            {/* Month-by-Month Calendar */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-foreground">
                📅 Month-by-Month Events Calendar
              </h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                A simple guide to what happens throughout the year in Townsville.
              </p>

              <div className="space-y-6">
                {/* January */}
                <div className="bg-muted/20 p-5 rounded-lg">
                  <h3 className="text-xl font-bold text-foreground mb-2">January</h3>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                    <li>New Year's Eve & New Year's Day events</li>
                    <li>School holiday activities</li>
                    <li>Indoor attractions (wet season)</li>
                  </ul>
                </div>

                {/* February */}
                <div className="bg-muted/20 p-5 rounded-lg">
                  <h3 className="text-xl font-bold text-foreground mb-2">February</h3>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                    <li>Strand Night Markets</li>
                    <li>Valentine's events across local venues</li>
                  </ul>
                </div>

                {/* March */}
                <div className="bg-muted/20 p-5 rounded-lg">
                  <h3 className="text-xl font-bold text-foreground mb-2">March</h3>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                    <li>Cruise ship visit days (varies)</li>
                    <li>Cultural Centre performances</li>
                    <li>Early sporting events begin</li>
                  </ul>
                </div>

                {/* April */}
                <div className="bg-muted/20 p-5 rounded-lg">
                  <h3 className="text-xl font-bold text-foreground mb-2">April</h3>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                    <li>ANZAC Day Dawn Service at The Strand</li>
                    <li>Easter weekend markets</li>
                    <li>Charters Towers Country Music Festival (nearby)</li>
                  </ul>
                </div>

                {/* May */}
                <div className="bg-muted/20 p-5 rounded-lg">
                  <h3 className="text-xl font-bold text-foreground mb-2">May</h3>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                    <li>Townsville Eco Fiesta</li>
                    <li>Heritage Day</li>
                    <li>Dry season begins — ideal outdoor weather</li>
                  </ul>
                </div>

                {/* June */}
                <div className="bg-muted/20 p-5 rounded-lg">
                  <h3 className="text-xl font-bold text-foreground mb-2">June</h3>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                    <li>NAFA begins</li>
                    <li>Townsville Show (public holiday carnival)</li>
                    <li>Running events and outdoor concerts</li>
                  </ul>
                </div>

                {/* July */}
                <div className="bg-muted/20 p-5 rounded-lg">
                  <h3 className="text-xl font-bold text-foreground mb-2">July</h3>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                    <li>NAFA continues</li>
                    <li>Australian Festival of Chamber Music</li>
                    <li>NAIDOC Week celebrations</li>
                    <li>Cowboys home games</li>
                  </ul>
                </div>

                {/* August */}
                <div className="bg-muted/20 p-5 rounded-lg">
                  <h3 className="text-xl font-bold text-foreground mb-2">August</h3>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                    <li>Strand Ephemera (biennial)</li>
                    <li>Townsville Running Festival</li>
                    <li>Magnetic Island Race Week warm-ups</li>
                  </ul>
                </div>

                {/* September */}
                <div className="bg-muted/20 p-5 rounded-lg">
                  <h3 className="text-xl font-bold text-foreground mb-2">September</h3>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                    <li>Magnetic Island Race Week</li>
                    <li>Spring markets</li>
                    <li>School holiday shows & activities</li>
                  </ul>
                </div>

                {/* October */}
                <div className="bg-muted/20 p-5 rounded-lg">
                  <h3 className="text-xl font-bold text-foreground mb-2">October</h3>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                    <li>Greek Festival</li>
                    <li>Halloween markets & themed events</li>
                  </ul>
                </div>

                {/* November */}
                <div className="bg-muted/20 p-5 rounded-lg">
                  <h3 className="text-xl font-bold text-foreground mb-2">November</h3>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                    <li>Christmas craft markets</li>
                    <li>School holiday season begins</li>
                    <li>Start of wet season sunsets</li>
                  </ul>
                </div>

                {/* December */}
                <div className="bg-muted/20 p-5 rounded-lg">
                  <h3 className="text-xl font-bold text-foreground mb-2">December</h3>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                    <li>Townsville Christmas Festival</li>
                    <li>Carols by Candlelight</li>
                    <li>Strand Christmas Night Markets</li>
                    <li>New Year's Eve fireworks</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* View Event Locations */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-foreground">
                🗺️ View Event Locations
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Each major event links to a map location:
              </p>
              <div className="flex flex-wrap gap-3">
                <Button variant="outline" size="sm" asChild>
                  <a 
                    href="https://www.google.com/maps/search/?api=1&query=The+Strand+Townsville" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2"
                  >
                    <MapPin className="w-4 h-4" />
                    The Strand
                  </a>
                </Button>
                <Button variant="outline" size="sm" asChild>
                  <a 
                    href="https://www.google.com/maps/search/?api=1&query=Queens+Gardens+Townsville" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2"
                  >
                    <MapPin className="w-4 h-4" />
                    Queens Gardens
                  </a>
                </Button>
                <Button variant="outline" size="sm" asChild>
                  <a 
                    href="https://www.google.com/maps/search/?api=1&query=Nelly+Bay+Harbour+Magnetic+Island" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2"
                  >
                    <MapPin className="w-4 h-4" />
                    Nelly Bay Harbour
                  </a>
                </Button>
                <Button variant="outline" size="sm" asChild>
                  <a 
                    href="https://www.google.com/maps/search/?api=1&query=St+James+Cathedral+Townsville" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2"
                  >
                    <MapPin className="w-4 h-4" />
                    St James Cathedral
                  </a>
                </Button>
                <Button variant="outline" size="sm" asChild>
                  <a 
                    href="https://www.google.com/maps/search/?api=1&query=Flinders+Street+Market+Townsville" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2"
                  >
                    <MapPin className="w-4 h-4" />
                    Flinders Street Markets
                  </a>
                </Button>
              </div>
            </section>

            {/* AI Recommendations */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-foreground">
                🤖 Ask the AI for Personal Recommendations
              </h2>
              <div className="mb-6">
                <p className="font-semibold text-foreground mb-2">Try these:</p>
                <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                  <li>"Plan a 2-day trip to Townsville with events."</li>
                  <li>"What markets are on this weekend?"</li>
                  <li>"What events can I take my dog to?"</li>
                  <li>"What live music is on in Townsville this month?"</li>
                </ul>
              </div>
              <p className="text-muted-foreground mb-6">
                Your AI turns this page into a live, personalised event planner.
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
                <Link to="/townsville">🔙 Back to Home</Link>
              </Button>
            </div>

          </div>
        </main>

      </div>
    </>
  );
};

export default Events;
