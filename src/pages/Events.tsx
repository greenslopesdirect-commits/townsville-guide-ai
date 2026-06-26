import { Calendar, MapPin, Music, Info, ArrowRight, ExternalLink, Dog, Footprints, Trophy, Leaf, Sun, Thermometer, Laugh, Star, ShoppingBasket } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import SEOHead from "@/components/SEOHead";

const Events = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <SEOHead
        title="What's On In Townsville This Weekend | June 26–28, 2026"
        description="Updated June 26, 2026: Late-June dry season weekend — Cowboys vs Panthers Round 17, Cotters Market, Paluma Bush Dance, Queensland Country Rugby Championships, and the Soroptimist Park community planting at Rowes Bay."
        canonical="https://www.myaussieguide.com.au/events/"
      />

      {/* Header Section */}
      <div className="bg-white border-b sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="text-gray-600 hover:text-primary flex items-center gap-2 text-sm font-medium transition-colors">
            <ArrowRight className="w-4 h-4 rotate-180" />
            Back to Home
          </Link>
          <span className="text-xs font-medium text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full" data-last-updated="2026-06-26">
            <time dateTime="2026-06-26">Updated: June 26, 2026</time>
          </span>
        </div>
      </div>

      <main className="flex-grow container mx-auto px-4 py-8 max-w-4xl space-y-8">
        
        {/* Hero Section — SEO-enhanced H1 */}
        <div className="space-y-4 text-center sm:text-left">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-primary">
             What's On in Townsville This Weekend: Dry Season & Local Event Calendar
           </h1>
           <p className="text-sm text-gray-500">
               Updated weekly by a local Townsville guide to help you discover events, markets, festivals, and seasonal highlights.
             </p>
               <p className="text-lg text-gray-600 max-w-2xl">
                 The beautiful, low-humidity "Perfect Dry" season has officially arrived. Clear sunny days and cool mornings make June ideal for markets, coastal walks, and outdoor adventures.
               </p>
          </div>

         {/* SEO Intro Paragraph */}
         <p className="text-gray-600 max-w-3xl">
           Searching for <strong>what's on in Townsville this weekend</strong> or planning the week ahead? This regularly updated <strong>Townsville events calendar</strong> highlights what's happening around the city — from NRL home games and community markets to festivals and seasonal experiences across North Queensland. Visiting Townsville for an event? Check our <Link to="/townsville-airport" className="text-primary font-medium hover:underline">Townsville Airport Guide</Link> for transport, arrival tips, and local travel advice.
         </p>

        {/* This Week's Highlights Quick Summary */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-900">What's On in Townsville Today (Late June 2026)</h2>
          <p className="text-gray-600 max-w-3xl">
            As we move through the final weekend of June and into the first week of July, the dry season energy is still in full swing. Here is the latest lineup of what's on in Townsville now through July 6, 2026:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li><strong>Footy Drawcard:</strong> <strong>Cowboys NRL Home Games</strong> — Round 17 vs Penrith Panthers, Saturday June 27 at Queensland Country Bank Stadium. A massive Saturday night clash in the heart of the city marking Jason Taumalolo's historic 300th NRL game. (Note: The Cowboys have a Round 18 Bye next weekend July 3–5, so this is the last home game for a fortnight).</li>
            <li><strong>School Holidays Feature:</strong> <strong>Free Family Fun</strong> — With school holidays now in full swing across Queensland, local hotspots like the Riverway Lagoons, The Strand Water Park, and Jezzine Barracks are running daily. Perfect for keeping the kids entertained in the low-humidity winter weather.</li>
            <li><strong>Sunday Markets:</strong> <strong>Cotters Market</strong> — Every Sunday morning (June 28 and July 5) on Flinders Street from 8:00 AM to 1:00 PM. Fresh coffee, local food stalls, and North Queensland crafts in the cool dry-season breeze.</li>
            <li><strong>The Next Big Hype:</strong> <strong>NTI Townsville 500 Build-Up</strong> — The city is already buzzing as track preparations ramp up at Reid Park for the Supercars street circuit (July 10–12). Accommodation is booking out fast across the CBD this week.</li>
            <li><strong>Outdoors:</strong> <strong>Clear Winter Skies</strong> — Exceptional conditions all week for the Castle Hill Goat Track, sunset walks along the Ross River Parkway, or a day trip to Magnetic Island with zero summer humidity.</li>
          </ul>
        </section>

        {/* AI Call to Action + Official Calendar */}
        <Card className="bg-primary/5 border-primary/20 shadow-sm">
          <CardContent className="flex flex-col md:flex-row items-center gap-6 p-6">
            <div className="flex-grow space-y-2 text-center md:text-left">
              <h3 className="font-semibold text-lg text-primary">What's On This Week?</h3>
              <p className="text-sm text-gray-600">
                Ask me: "What's the best sunrise walk in Townsville?" or "Is it safe to swim this weekend?"
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
              <Button asChild className="w-full sm:w-auto">
                <Link to="/">Ask AI Agent</Link>
              </Button>
              <Button asChild variant="outline" className="w-full sm:w-auto gap-2">
                <a href="https://whatson.townsville.qld.gov.au/" target="_blank" rel="noopener noreferrer">
                  Official Event Calendar
                  <ExternalLink className="w-4 h-4" />
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Featured Events */}
        <section className="space-y-6">
          <div className="flex items-center gap-2">
            <h2 className="text-2xl font-bold text-gray-900">Featured Events</h2>
             <Badge variant="secondary" className="bg-amber-100 text-amber-800 hover:bg-amber-100">
                Dry Season & Beyond 2026
              </Badge>
          </div>

          <div className="grid gap-6 md:grid-cols-1">

            {/* Card 1 — Crisp Winter Season */}
            <Card className="border-l-4 border-l-teal-500 shadow-md hover:shadow-lg transition-shadow">
              <CardHeader className="pb-3">
                <div className="flex justify-between items-start">
                  <Badge className="bg-teal-100 text-teal-700 hover:bg-teal-100 border-none">
                    Seasonal Highlight
                  </Badge>
                  <Sun className="w-5 h-5 text-gray-400" />
                </div>
                <CardTitle className="text-xl mt-2">Perfect Dry Season Days in Townsville</CardTitle>
                <div className="flex flex-col gap-1 text-sm text-gray-600 mt-1">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>May – August 2026</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    <span>Across Townsville & North Queensland</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">
                  The "Perfect Dry" is here. Morning temperatures are comfortably cool, humidity has dropped, and the skies are postcard-clear. It's the best window of the year for sunrise hikes up <Link to="/castle-hill" className="text-primary font-medium hover:underline">Castle Hill</Link>, beach walks along The Strand, and open-air markets without the summer heat.
                </p>
              </CardContent>
            </Card>

            {/* Card 2 — North Australian Festival of Arts */}
            <Card className="border-l-4 border-l-green-500 shadow-md hover:shadow-lg transition-shadow">
              <CardHeader className="pb-3">
                <div className="flex justify-between items-start">
                  <Badge className="bg-green-100 text-green-700 hover:bg-green-100 border-none">
                    Spring Festival — Locked In
                  </Badge>
                  <Star className="w-5 h-5 text-gray-400" />
                </div>
                <CardTitle className="text-xl mt-2">North Australian Festival of Arts (NAFA)</CardTitle>
                <div className="flex flex-col gap-1 text-sm text-gray-600 mt-1">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>25 September – 11 October 2026</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    <span>Strand Park & Venues Across Townsville</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">
                  Townsville's flagship arts festival is locked in for spring 2026, bringing theatre, comedy, circus, live music, and stunning open-air light installations to Strand Park and venues across the CBD.
                </p>
              </CardContent>
            </Card>

            {/* Card 3 — Cotters Market */}
            <Card className="border-l-4 border-l-orange-500 shadow-md hover:shadow-lg transition-shadow">
              <CardHeader className="pb-3">
                <div className="flex justify-between items-start">
                  <Badge className="bg-orange-100 text-orange-700 hover:bg-orange-100 border-none">
                    Every Sunday — Markets
                  </Badge>
                  <ShoppingBasket className="w-5 h-5 text-gray-400" />
                </div>
                <CardTitle className="text-xl mt-2">Cotters Market</CardTitle>
                <div className="flex flex-col gap-1 text-sm text-gray-600 mt-1">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>Sunday Mornings</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    <span>Flinders Street, Townsville CBD</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">
                  Townsville's premier Sunday market. Fresh coffee, local North Queensland crafts, and live street music in the fresh morning air. The perfect start to a Sunday before exploring the Strand or Riverway.
                </p>
              </CardContent>
            </Card>

          </div>
        </section>

        {/* Local Climate Tip */}
        <div className="bg-amber-50 border border-amber-100 rounded-lg p-5 flex gap-4 items-start">
          <Thermometer className="w-5 h-5 text-amber-600 mt-0.5 shrink-0" />
          <div>
            <h3 className="font-semibold text-amber-900 text-sm">Local Tip</h3>
            <p className="text-amber-800 text-sm mt-1">
              The dry season has officially arrived in Townsville. The humidity has dropped, the nights are cool, and the days are crystal clear — perfect for the <Link to="/castle-hill" className="text-primary font-medium hover:underline">Castle Hill Goat Track</Link> or a sunset walk along the Ross River Parkway.
            </p>
          </div>
        </div>

        {/* Rowes Bay Promo Block */}
        <div className="bg-blue-50 border border-blue-100 rounded-lg p-6 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center sm:text-left">
            <h3 className="font-semibold text-lg text-blue-900">Looking for a quiet sunset spot?</h3>
            <p className="text-blue-700 text-sm max-w-md">
              For a quieter coastal escape, head to the secret northern beaches like Saunders Beach or Toolakea. Easy parking, fewer crowds, and a steady sea breeze.
            </p>
          </div>
          <Button asChild variant="outline" className="bg-white hover:bg-blue-50 text-blue-700 border-blue-200 shrink-0">
            <Link to="/rowes-bay">View Rowes Bay Guide</Link>
          </Button>
        </div>

        {/* Top 10 Free Things to Do */}
        <section className="pt-8 border-t">
          <div className="flex items-center gap-2 mb-2">
            <Sun className="w-6 h-6 text-primary" />
            <h2 className="text-2xl font-bold text-gray-900">Top 10 Free Things to Do in Townsville This Weekend</h2>
          </div>
          <p className="text-gray-600 mb-6">You don't need to spend a cent to keep the family entertained. Here are our top free picks across Townsville.</p>

          <div className="grid gap-4 md:grid-cols-2">
            {[
              { num: "1", title: "The Strand Water Park", desc: "A local favourite. Open daily (check the Council site for any maintenance closures).", link: "/the-strand", linkText: "Strand Guide →" },
              { num: "2", title: "Riverway Lagoons", desc: "The ultimate free swimming alternative to the beach, perfect for families." },
              { num: "3", title: "Castle Hill Goat Track", desc: "Challenge the kids to a sunrise hike for the best 360-degree views of the city.", link: "/castle-hill", linkText: "Castle Hill Guide →" },
              { num: "4", title: "Jezzine Barracks Coastal Walk", desc: "Explore the public art, military history, and the scenic boardwalk toward Rowes Bay.", link: "/guides/jezzine-barracks", linkText: "Jezzine Guide →" },
              { num: "5", title: "Townsville Bulletin Square Water Feature", desc: "A great (and free) way to cool down right in the heart of the CBD." },
              { num: "6", title: "Anderson Park Botanical Gardens", desc: "Perfect for a shaded picnic or letting the kids explore the world-class tropical plant collection." },
              { num: "7", title: "Pallarenda Beach Beachcombing", desc: "Head to the northern end for a quieter beach day and low-tide exploration.", link: "/pallarenda-beach", linkText: "Pallarenda Guide →" },
              { num: "8", title: "Townsville City Libraries", desc: "Check the library website for free workshops, LEGO clubs, and storytime sessions." },
              { num: "9", title: "Ross River Parkway", desc: "Miles of shared paths for a family bike ride or a sunset walk near the weirs." },
              { num: "10", title: "Cotters Market (Sunday Mornings)", desc: "While the stalls cost money, the atmosphere, live music, and street performance are free to enjoy in Flinders Street." },
            ].map((item) => (
              <Card key={item.num} className="hover:shadow-md transition-shadow">
                <CardContent className="p-4 flex gap-4 items-start">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 text-primary font-bold text-sm flex items-center justify-center">
                    {item.num}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{item.title}</h4>
                    <p className="text-sm text-gray-600 mt-1">{item.desc}</p>
                    {item.link && (
                      <Link to={item.link} className="text-primary text-sm font-medium hover:underline mt-1 inline-block">
                        {item.linkText}
                      </Link>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Local Tip */}
          <div className="bg-amber-50 border border-amber-100 rounded-lg p-5 flex gap-4 items-start mt-6">
            <Leaf className="w-5 h-5 text-amber-600 mt-0.5 shrink-0" />
            <div>
              <h3 className="font-semibold text-amber-900 text-sm">Local Tip</h3>
              <p className="text-amber-800 text-sm mt-1">
                Late May into June is an absolute spectacle across North Queensland. The landscape is still lush and green from the earlier wet season, but the crisp, low-humidity air has settled in. This is the ultimate window for afternoon photography at our secret northern beaches like Saunders Beach and Toolakea Beach, where clear winter skies create perfect glass-like reflections on the expansive low-tide sand flats with zero crowds.
              </p>
            </div>
          </div>
        </section>

        <section className="pt-8 border-t">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Recurring Events</h2>
          <div className="grid gap-6 md:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Strand Night Markets</CardTitle>
                <p className="text-sm text-gray-500">First Friday of Month</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-gray-600">Check seasonality (Dry Season only). A popular evening out along <Link to="/the-strand" className="text-primary font-medium hover:underline">The Strand</Link> with live music, food, and local crafts.</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Cowboys NRL Games</CardTitle>
                <p className="text-sm text-gray-500">March–September</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-gray-600">NRL home games run all through the dry season at QCB Stadium. Check the draw for upcoming Sunday fixtures and plan your visit with our stadium guide.</p>
                <Button asChild variant="outline" size="sm" className="w-full gap-2">
                  <Link to="/cowboys-stadium-guide">View Cowboys Guide <ArrowRight className="w-3 h-3" /></Link>
                </Button>
                <Button asChild variant="outline" size="sm" className="w-full gap-2">
                  <a href="https://www.cowboys.com.au/draw/" target="_blank" rel="noopener noreferrer">
                    Find next game <ExternalLink className="w-3 h-3" />
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Wet Season Planning</CardTitle>
                <p className="text-sm text-gray-500">Jan – March</p>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">Peak waterfall flow at Wallaman Falls and Crystal Creek. Check road conditions after heavy rain. Browse our <Link to="/things-to-do" className="text-primary font-medium hover:underline">Things to Do guide</Link> for wet-season ideas.</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Major Annual Events Timeline — Remainder of 2026 */}
        <section className="pt-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Major Annual Events — Remainder of 2026</h2>
          <p className="text-gray-600 mb-8">Your chronological dry season &amp; spring calendar of Townsville's flagship events. Need a place to stay? Check our <Link to="/accommodation" className="text-primary font-medium hover:underline">Accommodation guide</Link>.</p>

          <ol className="relative border-l-2 border-primary/30 ml-3 space-y-8">
            {[
              {
                date: "10 – 12 July 2026",
                title: "NTI Townsville 500",
                body: "We are now less than two weeks away from the annual supercar street circuit. Expect high CBD buzz, trackside action, plus the return of the Summernats car show and rock concerts."
              },
              {
                date: "2 August 2026",
                title: "McDonald's Townsville Running Festival",
                body: "The iconic community running festival featuring a marathon course over the weirs and along The Strand, with shorter distances for families and first-timers."
              },
              {
                date: "14 – 16 August 2026",
                title: "North Queensland Elite Rodeo (Hervey Range)",
                body: "Three nights of bull riding, barrel racing, and country entertainment under lights at Hervey Range — one of the dry season's biggest community drawcards."
              },
              {
                date: "Late August 2026",
                title: "Magnetic Island Race Week",
                body: "The ultimate social regatta with yachts racing across Cleveland Bay and lively community events around Maggie Island."
              },
              {
                date: "25 September – 11 October 2026",
                title: "NAFA Festival (North Australian Festival of Arts)",
                body: "Townsville's flagship arts festival is locked in for spring 2026, bringing comedy, circus, theatre, and light installations to Strand Park."
              },
              {
                date: "December 2026",
                title: "Townsville Christmas Festival",
                body: "Festive lights, markets, and family-friendly entertainment across the CBD and waterfront."
              },
            ].map((event) => (
              <li key={event.title} className="ml-6">
                <span className="absolute -left-[9px] flex h-4 w-4 items-center justify-center rounded-full bg-primary ring-4 ring-background" aria-hidden="true" />
                <div className="text-xs font-bold uppercase tracking-wide text-primary mb-1">{event.date}</div>
                <h3 className="font-semibold text-gray-900">{event.title}</h3>
                <p className="text-sm text-gray-600 mt-1">{event.body}</p>
              </li>
            ))}
          </ol>
        </section>



        {/* FAQ Section */}
        <section className="pt-8 border-t">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked About Townsville Events</h2>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="faq-1">
              <AccordionTrigger className="text-left font-semibold text-gray-900">What is happening in Townsville this weekend?</AccordionTrigger>
              <AccordionContent className="text-gray-600">
                Markets, sports events, seasonal festivals, and outdoor activities typically feature each week. This page is updated regularly with current highlights. You can also check the <a href="https://whatson.townsville.qld.gov.au/" target="_blank" rel="noopener noreferrer" className="text-primary font-medium hover:underline">official Townsville events calendar</a> for additional listings.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="faq-2">
              <AccordionTrigger className="text-left font-semibold text-gray-900">Where can I find live music in Townsville?</AccordionTrigger>
              <AccordionContent className="text-gray-600">
                Popular spots include Palmer Street venues, Cowboys Leagues Club, Strand Night Markets, and seasonal festival stages. Browse our <Link to="/food" className="text-primary font-medium hover:underline">Food & Drink guide</Link> for dining spots with live entertainment.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="faq-3">
              <AccordionTrigger className="text-left font-semibold text-gray-900">Are Townsville events family friendly?</AccordionTrigger>
              <AccordionContent className="text-gray-600">
                Most community markets, festivals, lagoon activities, and outdoor events welcome families. Always check venue-specific details. For family activity ideas, see our <Link to="/things-to-do" className="text-primary font-medium hover:underline">Things to Do</Link> and <Link to="/dog-friendly" className="text-primary font-medium hover:underline">Dog-Friendly</Link> guides.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>

        {/* Footer CTA Section */}
        <section className="pt-8 pb-8 border-t">
          <div className="bg-primary/5 rounded-2xl p-8 text-center space-y-6">
            <h2 className="text-2xl font-bold text-gray-900">Have specific questions about the weekend?</h2>
            <p className="text-gray-600 max-w-xl mx-auto">
              Not sure where to park or if your dog is allowed? Ask our AI agent on the homepage.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild size="lg">
                <Link to="/">Ask the Local AI</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="gap-2">
                <Link to="/dog-friendly">
                  <Dog className="w-4 h-4" />
                  View Dog Beach Guide
                </Link>
              </Button>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
};

export default Events;
