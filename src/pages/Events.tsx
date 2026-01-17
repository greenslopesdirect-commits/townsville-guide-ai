import { Helmet } from "react-helmet";
import SEOHead from "@/components/SEOHead";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Calendar, Music, ShoppingBag, Trophy, MapPin, Repeat, Star } from "lucide-react";
import { triggerAiGuide } from "@/utils/aiGuide";

import LocalInsightCard from "@/components/LocalInsightCard";
import WeeklyEventsHero from "@/components/WeeklyEventsHero";

const Events = () => {
  const recurringEvents = [
    {
      title: "Cotters Market",
      description: "Townsville's biggest weekly market with crafts, plants, local foods, gifts and live entertainment every Sunday morning.",
      when: "Every Sunday, 8am–1pm",
      location: "Flinders Street, CBD",
      tags: ["Weekly", "Family Friendly", "Free Entry"],
      mapUrl: "https://www.google.com/maps/search/?api=1&query=Flinders+Street+Market+Townsville",
      aiPrompt: "When is Cotters Market held and is it suitable for families?"
    },
    {
      title: "Strand Night Markets",
      description: "Evening markets on The Strand featuring food stalls, live music, and a relaxed beachfront atmosphere.",
      when: "First Friday of month (dry season)",
      location: "The Strand",
      tags: ["Monthly", "Food", "Live Music"],
      mapUrl: "https://www.google.com/maps/search/?api=1&query=The+Strand+Townsville",
      aiPrompt: "When is Strand Night Markets held and is it suitable for families?"
    },
    {
      title: "Cowboys NRL Games",
      description: "North Queensland Cowboys home games at Queensland Country Bank Stadium. Electric atmosphere for NRL fans.",
      when: "March–September (home games)",
      location: "QCB Stadium",
      tags: ["Sports", "Seasonal", "Entertainment"],
      mapUrl: "https://www.google.com/maps/search/?api=1&query=Queensland+Country+Bank+Stadium",
      aiPrompt: "When is Cowboys NRL Games held and is it suitable for families?"
    }
  ];

  const annualFestivals = [
    {
      title: "North Australian Festival of Arts (NAFA)",
      description: "Townsville's flagship arts festival featuring theatre, music, circus, comedy, light shows and outdoor performances across multiple venues.",
      when: "June–July (annually)",
      location: "Queens Gardens, Strand Park, CBD",
      tags: ["Arts", "Major Festival", "Family Friendly"],
      mapUrl: "https://www.google.com/maps/search/?api=1&query=Queens+Gardens+Townsville",
      aiPrompt: "When is North Australian Festival of Arts held and is it suitable for families?"
    },
    {
      title: "Australian Festival of Chamber Music",
      description: "World-class chamber music performed across stunning venues including St James' Cathedral. One of Australia's premier classical music events.",
      when: "Late July – Early August",
      location: "CBD & Castle Hill precinct",
      tags: ["Music", "World-Class", "Indoor"],
      mapUrl: "https://www.google.com/maps/search/?api=1&query=St+James+Cathedral+Townsville",
      aiPrompt: "When is Australian Festival of Chamber Music held and is it suitable for families?"
    },
    {
      title: "Strand Ephemera",
      description: "Australia's leading outdoor sculpture festival transforming The Strand into an open-air gallery. Held every two years.",
      when: "August (biennial – every 2 years)",
      location: "The Strand Foreshore",
      tags: ["Art", "Free", "Biennial"],
      mapUrl: "https://www.google.com/maps/search/?api=1&query=The+Strand+Townsville",
      aiPrompt: "When is Strand Ephemera held and is it suitable for families?"
    },
    {
      title: "Magnetic Island Race Week",
      description: "Sailing yachts compete around Magnetic Island's stunning bays. A week of racing, parties and island celebrations.",
      when: "Late August – Early September",
      location: "Nelly Bay Harbour, Magnetic Island",
      tags: ["Sailing", "Sports", "Island Event"],
      mapUrl: "https://www.google.com/maps/search/?api=1&query=Nelly+Bay+Harbour+Magnetic+Island",
      aiPrompt: "When is Magnetic Island Race Week held and is it suitable for families?"
    },
    {
      title: "Townsville Running Festival",
      description: "Annual running event with marathon, half-marathon and fun run options through Townsville's scenic streets and waterfront.",
      when: "August",
      location: "The Strand & CBD",
      tags: ["Sports", "Community", "Health"],
      mapUrl: "https://www.google.com/maps/search/?api=1&query=The+Strand+Townsville",
      aiPrompt: "When is Townsville Running Festival held and is it suitable for families?"
    },
    {
      title: "Townsville Christmas Festival",
      description: "Festive lights, markets, food stalls and entertainment to celebrate the holiday season in tropical North Queensland.",
      when: "December",
      location: "CBD & Strand foreshore",
      tags: ["Christmas", "Family Friendly", "Free"],
      mapUrl: "https://www.google.com/maps/search/?api=1&query=Townsville+CBD",
      aiPrompt: "When is Townsville Christmas Festival held and is it suitable for families?"
    }
  ];

  const EventCard = ({ event, isRecurring = false }: { event: typeof recurringEvents[0], isRecurring?: boolean }) => (
    <Card className="overflow-hidden hover:shadow-[var(--shadow-tropical)] transition-all duration-300 border-2 hover:border-primary/30">
      <CardHeader className="pb-3">
        <div className="flex items-start gap-3">
          <div className={`p-2 rounded-xl ${isRecurring ? 'bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400' : 'bg-primary/10 text-primary'} flex-shrink-0`}>
            {isRecurring ? <Repeat className="w-5 h-5" /> : <Star className="w-5 h-5" />}
          </div>
          <div className="flex-1">
            <CardTitle className="text-lg leading-tight">{event.title}</CardTitle>
            <p className="text-sm text-primary font-medium mt-1">{event.when}</p>
          </div>
        </div>
      </CardHeader>
      <CardContent className="pt-0 space-y-3">
        <p className="text-sm text-muted-foreground leading-relaxed">{event.description}</p>
        
        <div className="flex flex-wrap gap-1.5">
          {event.tags.map((tag, index) => (
            <span 
              key={index} 
              className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary font-medium"
            >
              {tag}
            </span>
          ))}
        </div>
        
        <p className="text-xs text-muted-foreground flex items-center gap-1">
          <MapPin className="w-3 h-3" />
          {event.location}
        </p>
        
        <div className="flex flex-col sm:flex-row gap-2 pt-2">
          <Button variant="outline" size="sm" asChild className="gap-2 flex-1">
            <a href={event.mapUrl} target="_blank" rel="noopener noreferrer">
              <MapPin className="w-4 h-4" />
              View on Map
            </a>
          </Button>
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={() => triggerAiGuide(event.aiPrompt)}
            className="gap-2 flex-1"
          >
            <span>🤖</span>
            Ask AI
          </Button>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <>
      <SEOHead
        title="Townsville Events & What's On - Festivals, Markets & Activities"
        description="Discover events, festivals and activities in Townsville. From Strand Ephemera and NAFA to weekly markets, live music and family events."
        canonical="https://www.myaussieguide.com.au/townsville/events"
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
            }
          })}
        </script>
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <main className="pt-24 pb-16">
          <div className="container mx-auto px-4 max-w-6xl">
            {/* Back Button */}
            <Link to="/townsville">
              <Button variant="ghost" className="mb-6 group" aria-label="Back to home">
                <ArrowLeft className="mr-2 w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                Back to Home
              </Button>
            </Link>

            {/* Weekly Events Hero */}
            <WeeklyEventsHero />

            {/* Major Events Highlight */}
            <LocalInsightCard title="The Big Ones You Can't Miss" variant="insight" className="mb-12">
              <p>
                <strong>🏎️ NTI Townsville 500 (Supercars):</strong> Every July, the Reid Park precinct shuts down 
                for a weekend of street racing and massive concerts.
              </p>
              <p>
                <strong>🥕 Market Watch:</strong> Locals go to <strong>Willows Rotary Markets</strong> (Sundays in Kirwan) 
                for the best fresh fruit and veg.
              </p>
              <p className="font-medium text-amber-700 dark:text-amber-300">
                🌅 <strong>Lest We Forget:</strong> The Anzac Day Dawn Service (April 25) at The Strand is a deeply moving experience.
              </p>
            </LocalInsightCard>

            {/* Recurring Events */}
            <section className="mb-16">
              <div className="flex items-center gap-3 mb-8">
                <div className="p-2 rounded-lg bg-green-100 dark:bg-green-900/30">
                  <Repeat className="w-6 h-6 text-green-600 dark:text-green-400" />
                </div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                    Recurring Events
                  </h2>
                  <p className="text-muted-foreground">Weekly, monthly and seasonal</p>
                </div>
              </div>

              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {recurringEvents.map((event, index) => (
                  <EventCard key={index} event={event} isRecurring={true} />
                ))}
              </div>
            </section>

            {/* Annual Festivals */}
            <section id="annual-festivals" className="mb-16">
              <div className="flex items-center gap-3 mb-8">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Star className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                    Annual Festivals
                  </h2>
                  <p className="text-muted-foreground">Major events worth planning around</p>
                </div>
              </div>

              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {annualFestivals.map((event, index) => (
                  <EventCard key={index} event={event} isRecurring={false} />
                ))}
              </div>
            </section>

            {/* Month-by-Month Quick Reference */}
            <section className="mb-16">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                Quick Calendar
              </h2>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="p-4 rounded-xl border-2 bg-card">
                  <h3 className="font-semibold text-foreground mb-2">Dry Season (May–Oct)</h3>
                  <p className="text-sm text-muted-foreground">Peak event season. NAFA, AFCM, Race Week, outdoor festivals and perfect weather.</p>
                </div>
                <div className="p-4 rounded-xl border-2 bg-card">
                  <h3 className="font-semibold text-foreground mb-2">Build-Up (Nov–Dec)</h3>
                  <p className="text-sm text-muted-foreground">Christmas markets, end-of-year celebrations and warmer weather.</p>
                </div>
                <div className="p-4 rounded-xl border-2 bg-card">
                  <h3 className="font-semibold text-foreground mb-2">Wet Season (Jan–Apr)</h3>
                  <p className="text-sm text-muted-foreground">Indoor events, school holiday activities and quieter event calendar.</p>
                </div>
              </div>
            </section>

          </div>
        </main>
      </div>
    </>
  );
};

export default Events;
