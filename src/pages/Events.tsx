import { Helmet } from "react-helmet";
import SEOHead from "@/components/SEOHead";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Calendar, Music, ShoppingBag, Trophy, MapPin, Repeat, Star, AlertTriangle, Clock, Info } from "lucide-react";
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
        title="Townsville Events & Australia Day 2026 Guide"
        description="Your complete guide to Australia Day long weekend in Townsville, plus annual festivals and weekly markets."
        canonical="https://www.myaussieguide.com.au/events"
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
            <Link to="/">
              <Button variant="ghost" className="mb-6 group" aria-label="Back to home">
                <ArrowLeft className="mr-2 w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                Back to Home
              </Button>
            </Link>

            <WeeklyEventsHero />
            
            {/* === NEW AUSTRALIA DAY SECTION === */}
            <section className="mb-16 mt-8">
                <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-3xl p-8 text-white shadow-xl relative overflow-hidden">
                    {/* Decorative Background */}
                    <div className="absolute top-0 right-0 p-32 bg-white/10 rounded-full blur-3xl -mr-16 -mt-16"></div>
                    
                    <div className="relative z-10">
                        <div className="flex items-center gap-3 mb-4">
                            <span className="bg-yellow-400 text-blue-900 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                                Long Weekend Guide
                            </span>
                            <span className="flex items-center gap-1 text-blue-100 text-sm font-medium">
                                <Calendar className="w-4 h-4" /> Jan 24–26, 2026
                            </span>
                        </div>
                        
                        <h1 className="text-3xl md:text-5xl font-bold mb-6">Australia Day in Townsville</h1>
                        
                        {/* Alert Box Inside Hero */}
                        <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4 mb-8 max-w-3xl">
                            <div className="flex gap-3">
                                <AlertTriangle className="w-5 h-5 text-yellow-300 flex-shrink-0" />
                                <div>
                                    <h3 className="font-bold text-white text-sm">Local Tip: Gun Salute Warning</h3>
                                    <p className="text-sm text-blue-100 mt-1">
                                        The 21-Gun Salute (approx 12:00 PM on Monday) is extremely loud. Please keep anxious dogs at home during the ceremony.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Event Cards Grid */}
                        <div className="grid md:grid-cols-3 gap-4 text-slate-900">
                            {/* Card 1 */}
                            <div className="bg-white rounded-xl p-5 shadow-sm">
                                <div className="text-sm font-bold text-green-600 mb-1">6:30 AM • Jezzine Barracks</div>
                                <h3 className="font-bold text-lg mb-2">Aussie Fun Run</h3>
                                <p className="text-sm text-slate-500 mb-3">5km community run. Gold coin donation.</p>
                                <div className="flex items-center gap-1 text-xs text-slate-400">
                                    <Info className="w-3 h-3" /> Family friendly
                                </div>
                            </div>
                            
                            {/* Card 2 */}
                            <div className="bg-white rounded-xl p-5 shadow-sm">
                                <div className="text-sm font-bold text-blue-600 mb-1">9:00 AM • Jezzine Barracks</div>
                                <h3 className="font-bold text-lg mb-2">Flag Raising & Salute</h3>
                                <p className="text-sm text-slate-500 mb-3">Flyover and traditional ceremony.</p>
                                <div className="flex items-center gap-1 text-xs text-slate-400">
                                    <AlertTriangle className="w-3 h-3 text-orange-400" /> Loud noise warning
                                </div>
                            </div>

                            {/* Card 3 */}
                            <div className="bg-white rounded-xl p-5 shadow-sm">
                                <div className="text-sm font-bold text-orange-600 mb-1">Dawn (5:30 AM) • The Strand</div>
                                <h3 className="font-bold text-lg mb-2">Survival Day</h3>
                                <p className="text-sm text-slate-500 mb-3">Dawn Service & Walk of Solidarity.</p>
                                <div className="flex items-center gap-1 text-xs text-slate-400">
                                    <Info className="w-3 h-3" /> Cultural observance
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* === END AUSTRALIA DAY SECTION === */}

            {/* === PARKING & GETTING THERE SECTION === */}
            <section className="mb-12">
              <div className="bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 rounded-2xl p-6 md:p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2.5 rounded-xl bg-blue-100 dark:bg-blue-900/40">
                    <MapPin className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                    🅿️ Parking & Getting There
                  </h2>
                </div>

                <div className="grid lg:grid-cols-2 gap-6">
                  {/* Map Embed */}
                  <div className="rounded-xl overflow-hidden shadow-md border border-slate-200 dark:border-slate-700">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7547.848915774574!2d146.8075!3d-19.2550!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6bd5f8c1b6d5d7c1%3A0x5e8d8c9f9a9e9f9c!2sJezzine%20Barracks!5e0!3m2!1sen!2sau!4v1700000000000"
                      width="100%"
                      height="280"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Jezzine Barracks and The Strand parking map"
                      aria-label="Map showing Jezzine Barracks, The Strand, and nearby parking areas"
                      className="w-full"
                    />
                    <div className="bg-white dark:bg-slate-800 p-3 text-center">
                      <a 
                        href="https://www.google.com/maps/search/?api=1&query=Jezzine+Barracks+Townsville" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-sm text-blue-600 dark:text-blue-400 hover:underline font-medium"
                      >
                        Open full map in Google Maps →
                      </a>
                    </div>
                  </div>

                  {/* Parking Tips */}
                  <div className="space-y-4">
                    <h3 className="font-bold text-lg text-foreground">Practical Parking & Traffic Advice</h3>
                    
                    <ul className="space-y-3 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span className="text-blue-500 font-bold mt-0.5">•</span>
                        <span><strong className="text-foreground">Main parking areas:</strong> Jezzine Barracks car park (entry via Mitchell Street) and The Strand foreshore parking bays.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-orange-500 font-bold mt-0.5">•</span>
                        <span><strong className="text-foreground">Road closures:</strong> Expect closures and heavy traffic on the morning of Jan 26 around Jezzine Barracks and The Strand.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-500 font-bold mt-0.5">•</span>
                        <span><strong className="text-foreground">Arrive early:</strong> Get there by 6:00 AM for the Flag Raising and Aussie Fun Run to secure parking.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-purple-500 font-bold mt-0.5">•</span>
                        <span><strong className="text-foreground">Walk or drop-off:</strong> If staying nearby, consider walking or being dropped off to avoid parking hassles.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-amber-500 font-bold mt-0.5">•</span>
                        <span><strong className="text-foreground">Allow extra time:</strong> On Monday (public holiday), expect higher crowds and limited spots — leave earlier than usual.</span>
                      </li>
                    </ul>

                    {/* Disclaimer Note */}
                    <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-700 rounded-lg p-3 mt-4">
                      <p className="text-xs text-amber-800 dark:text-amber-300">
                        <strong>Note:</strong> Exact road closures and traffic conditions may change — check local council or police updates on the day.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* === END PARKING SECTION === */}

            {/* Local Insight */}
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

            {/* Major 2026 Events to Plan For */}
            <section className="mb-16">
              <div className="flex items-center gap-3 mb-8">
                <div className="p-2 rounded-lg bg-amber-100 dark:bg-amber-900/30">
                  <Calendar className="w-6 h-6 text-amber-600 dark:text-amber-400" />
                </div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                    Major 2026 Events to Plan For
                  </h2>
                  <p className="text-muted-foreground">Mark your calendar for these highlights</p>
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-3">
                <Card className="border-2 border-amber-200 bg-gradient-to-br from-amber-50 to-transparent dark:from-amber-900/10 dark:border-amber-800">
                  <CardContent className="p-5">
                    <h3 className="font-bold text-lg text-foreground mb-2">Strand Ephemera</h3>
                    <p className="text-sm text-muted-foreground">Australia's leading outdoor sculpture festival. Biennial event transforming The Strand into an open-air gallery.</p>
                  </CardContent>
                </Card>
                <Card className="border-2 border-amber-200 bg-gradient-to-br from-amber-50 to-transparent dark:from-amber-900/10 dark:border-amber-800">
                  <CardContent className="p-5">
                    <h3 className="font-bold text-lg text-foreground mb-2">Magnetic Island Race Week</h3>
                    <p className="text-sm text-muted-foreground">Late August – early September. Sailing yachts compete around Magnetic Island's stunning bays.</p>
                  </CardContent>
                </Card>
                <Card className="border-2 border-amber-200 bg-gradient-to-br from-amber-50 to-transparent dark:from-amber-900/10 dark:border-amber-800">
                  <CardContent className="p-5">
                    <h3 className="font-bold text-lg text-foreground mb-2">North Australian Festival of Arts</h3>
                    <p className="text-sm text-muted-foreground">June–July. Townsville's flagship arts festival featuring theatre, music, circus, comedy, and outdoor performances.</p>
                  </CardContent>
                </Card>
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

             {/* FINAL CTA - Fixed to point to AI and Dog Beach */}
             <section className="mb-8">
                <div className="bg-slate-900 rounded-2xl p-8 text-center text-white relative overflow-hidden">
                    <div className="relative z-10">
                        <h2 className="text-2xl font-bold mb-4">Have specific questions about the weekend?</h2>
                        <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
                            Not sure where to park or if your dog is allowed? Ask our AI agent on the homepage.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link to="/">
                                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white w-full sm:w-auto">
                                    Ask the Local AI
                                </Button>
                            </Link>
                            <Link to="/townsville/pallarenda-dog-beach-guide">
                                <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white/10 w-full sm:w-auto">
                                    🐕 View Dog Beach Guide
                                </Button>
                            </Link>
                        </div>
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
