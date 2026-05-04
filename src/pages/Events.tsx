import { Calendar, MapPin, Music, Info, ArrowRight, ExternalLink, Dog, Footprints, Trophy, Leaf, Sun, Thermometer, Laugh, Star } from "lucide-react";
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
        title="What's On in Townsville This Weekend | May 2026 Event Calendar"
        description="Updated May 4: Cowboys vs Eels, World Science Festival QLD, and Mother's Day events. Your local guide to Townsville events."
        canonical="https://www.myaussieguide.com.au/events/"
      />

      {/* Header Section */}
      <div className="bg-white border-b sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="text-gray-600 hover:text-primary flex items-center gap-2 text-sm font-medium transition-colors">
            <ArrowRight className="w-4 h-4 rotate-180" />
            Back to Home
          </Link>
          <span className="text-xs font-medium text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full" data-last-updated="2026-04-27">
            <time dateTime="2026-04-27">Updated: April 27, 2026</time>
          </span>
        </div>
      </div>

      <main className="flex-grow container mx-auto px-4 py-8 max-w-4xl space-y-8">
        
        {/* Hero Section — SEO-enhanced H1 */}
        <div className="space-y-4 text-center sm:text-left">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-primary">
             What's On in Townsville: May 2026 & Jimmy Carr Live
           </h1>
           <p className="text-sm text-gray-500">
             Updated weekly by a local Townsville guide to help you discover events, markets, festivals, and seasonal highlights.
           </p>
           <p className="text-lg text-gray-600 max-w-2xl">
              Coming up: <strong>Jimmy Carr</strong> live (Tomorrow!), the <strong>Strand Night Markets</strong> (Friday), the <strong>Cowboys vs Eels</strong> blockbuster (May 8), and the <strong>Dream Fields Festival</strong> on May 23!
            </p>
        </div>

        {/* SEO Intro Paragraph */}
        <p className="text-gray-600 max-w-3xl">
          Looking for events in Townsville this weekend or planning the week ahead? This regularly updated local guide highlights what's happening around Townsville — from ANZAC Day commemorations and community markets to NRL home games, festivals, and seasonal experiences across North Queensland. Visiting Townsville for an event? Check our <Link to="/townsville-airport" className="text-primary font-medium hover:underline">Townsville Airport Guide</Link> for transport, arrival tips, and local travel advice.
        </p>

        {/* This Week's Highlights Quick Summary */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-900">What's On This Week (April 27 – May 3)</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li>Comedy: <strong>Jimmy Carr — Laughs Funny Tour</strong> (TECC) — Tuesday, April 28 (Tomorrow!). 7:00 PM show <strong>Sold Out</strong>; 9:30 PM tickets remain.</li>
            <li>Markets: <strong>Strand Night Markets</strong> — Friday, May 1 (First Friday of the month). Strand Park, 5:00 PM – 9:30 PM.</li>
            <li>Community: <strong>Mother's Day Market</strong> — Sunday, May 3. A great chance to grab a local gift early.</li>
            <li>Footy (Away): <strong>Cowboys vs Bulldogs</strong> — Friday, May 1. Catch it live at the Cowboys Leagues Club!</li>
            <li>May Preview: <strong>Dream Fields Festival</strong> — Sat, May 23 at Central Park feat. Galantis, Peking Duk, Mallrat & Skegss</li>
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
               April–May 2026
             </Badge>
          </div>

          <div className="grid gap-6 md:grid-cols-1">

            {/* Jimmy Carr — TOP HIGHLIGHT */}
            <Card className="border-l-4 border-l-orange-500 shadow-md hover:shadow-lg transition-shadow">
              <CardHeader className="pb-3">
                <div className="flex justify-between items-start">
                  <Badge className="bg-orange-100 text-orange-700 hover:bg-orange-100 border-none">
                    Comedy — Top Highlight (Tomorrow!)
                  </Badge>
                  <Laugh className="w-5 h-5 text-gray-400" />
                </div>
                <CardTitle className="text-xl mt-2">Jimmy Carr: Laughs Funny Tour</CardTitle>
                <div className="flex flex-col gap-1 text-sm text-gray-600 mt-1">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>Tuesday, April 28, 2026 — Tomorrow!</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    <span>TECC (Townsville Entertainment Centre)</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">
                  The king of one-liners brings his sharp wit to North Queensland. <strong>The 7:00 PM show is Sold Out</strong> — limited <strong>9:30 PM tickets</strong> still remain. Don't miss your chance to catch one of the world's biggest comics live in Townsville.
                </p>
              </CardContent>
            </Card>

            {/* Cowboys vs Eels — Round 10 */}
            <Card className="border-l-4 border-l-blue-500 shadow-md hover:shadow-lg transition-shadow">
              <CardHeader className="pb-3">
                <div className="flex justify-between items-start">
                  <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-100 border-none">
                    Footy — Round 10 Home Game
                  </Badge>
                  <Trophy className="w-5 h-5 text-gray-400" />
                </div>
                <CardTitle className="text-xl mt-2">Round 10: Cowboys vs Parramatta Eels (Home)</CardTitle>
                <div className="flex flex-col gap-1 text-sm text-gray-600 mt-1">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>Friday, May 8 | Kick-off: 6:00 PM (Another early Friday start!)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    <span>QLD Country Bank Stadium</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">
                  The Cowboys host Parramatta in a Round 10 blockbuster with another <strong>early 6:00 PM Friday kick-off</strong> — plan your march across Lowths Bridge from around 5:00 PM to beat the rush. <Link to="/cowboys-stadium-guide" className="text-primary font-medium hover:underline">View our Stadium Guide →</Link>
                </p>
              </CardContent>
            </Card>

            {/* Dream Fields Festival — May Preview */}
            <Card className="border-l-4 border-l-green-500 shadow-md hover:shadow-lg transition-shadow">
              <CardHeader className="pb-3">
                <div className="flex justify-between items-start">
                  <Badge className="bg-green-100 text-green-700 hover:bg-green-100 border-none">
                    May Preview — Festival
                  </Badge>
                  <Star className="w-5 h-5 text-gray-400" />
                </div>
                <CardTitle className="text-xl mt-2">Dream Fields Festival</CardTitle>
                <div className="flex flex-col gap-1 text-sm text-gray-600 mt-1">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>Saturday, May 23</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    <span>Central Park, Townsville</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">
                  Townsville's premier outdoor music and arts festival returns to Central Park with a massive 2026 lineup: <strong>Galantis, Peking Duk, Mallrat</strong> and <strong>Skegss</strong>. Tickets selling fast — mark this one in the calendar.
                </p>
              </CardContent>
            </Card>

          </div>
        </section>

        {/* Mother's Day in Townsville */}
        <section className="space-y-6">
          <div className="flex items-center gap-2">
            <h2 className="text-2xl font-bold text-gray-900">Mother's Day in Townsville (Sunday, May 10)</h2>
            <Badge variant="secondary" className="bg-pink-100 text-pink-800 hover:bg-pink-100">
              Family
            </Badge>
          </div>
          <p className="text-gray-600 max-w-3xl">
            Celebrate Mum with a Townsville morning out — from charity fun runs at sunrise to a colourful family-friendly run at Riverway, plus an early Mother's Day Market for local gifts.
          </p>

          <div className="grid gap-6 md:grid-cols-2">
            {/* Colour Frenzy */}
            <Card className="hover:shadow-md transition-shadow border-l-4 border-l-pink-500">
              <CardHeader className="pb-3">
                <Badge className="bg-pink-100 text-pink-700 hover:bg-pink-100 border-none w-fit">
                  Sunday, May 10 — Family Run
                </Badge>
                <CardTitle className="text-lg mt-2">Mother's Day Colour Frenzy</CardTitle>
                <div className="flex flex-col gap-1 text-sm text-gray-600 mt-1">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>Sunday, May 10 | Start: 8:30 AM</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    <span>Riverway Stadium, Thuringowa</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">
                  A fun, non-competitive colour run for all ages. Bring the family, get covered in colour, and celebrate Mum in style.
                </p>
              </CardContent>
            </Card>

            {/* Charity Fun Run/Walk */}
            <Card className="hover:shadow-md transition-shadow border-l-4 border-l-rose-500">
              <CardHeader className="pb-3">
                <Badge className="bg-rose-100 text-rose-700 hover:bg-rose-100 border-none w-fit">
                  Sunday, May 10 — Charity
                </Badge>
                <CardTitle className="text-lg mt-2">Mother's Day Charity Fun Run / Walk</CardTitle>
                <div className="flex flex-col gap-1 text-sm text-gray-600 mt-1">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>Sunday, May 10 | Start: 7:00 AM</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    <span>Rossiter Park, Mundingburra</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">
                  A long-standing local tradition supporting <strong>Safe Nights Townsville</strong>. Lace up before sunrise for a great cause and a beautiful start to Mother's Day.
                </p>
              </CardContent>
            </Card>

            {/* Mother's Day Market */}
            <Card className="hover:shadow-md transition-shadow border-l-4 border-l-fuchsia-500 md:col-span-2">
              <CardHeader className="pb-3">
                <Badge className="bg-fuchsia-100 text-fuchsia-700 hover:bg-fuchsia-100 border-none w-fit">
                  Sunday, May 3 — Market
                </Badge>
                <CardTitle className="text-lg mt-2">Mother's Day Market</CardTitle>
                <div className="flex flex-col gap-1 text-sm text-gray-600 mt-1">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>Sunday, May 3</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    <span>Townsville (local market — check official listings for venue)</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">
                  The perfect spot for early local gifts — handmade crafts, fresh flowers, and Townsville-made treats from local stallholders.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Community & Nature Highlights */}
        <section className="space-y-6">
          <div className="flex items-center gap-2">
            <Leaf className="w-6 h-6 text-emerald-600" />
            <h2 className="text-2xl font-bold text-gray-900">Community & Nature Highlights</h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {/* Woodstock Nationals */}
            <Card className="hover:shadow-md transition-shadow border-l-4 border-l-yellow-500">
              <CardHeader className="pb-3">
                <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100 border-none w-fit">
                  Sunday, May 3 — Motorsport
                </Badge>
                <CardTitle className="text-lg mt-2">Woodstock Nationals — No Prep Drag Racing</CardTitle>
                <div className="flex flex-col gap-1 text-sm text-gray-600 mt-1">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>Sunday, May 3 | Racing from 11:00 AM</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    <span>Drive It NQ, Woodstock</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">
                  A high-octane Sunday out for the family. Watch local and visiting cars take on the No Prep surface in one of North Queensland's biggest grassroots motorsport events.
                </p>
              </CardContent>
            </Card>

            {/* Born or Built Last Chance */}
            <Card className="hover:shadow-md transition-shadow border-l-4 border-l-red-500 bg-red-50/30">
              <CardHeader className="pb-3">
                <Badge className="bg-red-100 text-red-700 hover:bg-red-100 border-none w-fit">
                  Last Chance — Closes May 17
                </Badge>
                <CardTitle className="text-lg mt-2">"Born or Built? Our Robotic Future" Exhibition</CardTitle>
                <div className="flex flex-col gap-1 text-sm text-gray-600 mt-1">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>Closing Sunday, May 17, 2026</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    <span>Museum of Tropical Queensland, Townsville</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">
                  Final weeks to explore this hands-on robotics and AI exhibition — perfect for a shaded family afternoon. Don't leave it until closing weekend.
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
              Townsville's tropical climate means outdoor events are usually best early morning or late afternoon. Locals often avoid midday heat, especially during the warmer months. Check out our <Link to="/guides/beat-the-heat" className="text-primary font-medium hover:underline">Beat the Heat guide</Link> for more tips.
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
            <h2 className="text-2xl font-bold text-gray-900">Top 10 Free Things to Do in Townsville</h2>
          </div>
          <p className="text-gray-600 mb-6">You don't need to spend a cent to keep the family entertained. Here are our top free picks across Townsville.</p>

          <div className="grid gap-4 md:grid-cols-2">
            {[
              { num: "1", title: "The Strand Water Park", desc: "A local favourite. Open daily (check the Council site for any maintenance closures).", link: "/the-strand", linkText: "Strand Guide →" },
              { num: "2", title: "Riverway Lagoons", desc: "The ultimate free swimming alternative to the beach, perfect for families." },
              { num: "3", title: "Castle Hill Goat Track", desc: "Challenge the kids to a sunrise hike for the best 360-degree views of the city.", link: "/castle-hill", linkText: "Castle Hill Guide →" },
              { num: "4", title: "Jezzine Barracks Coastal Walk", desc: "Explore the public art, military history, and the scenic boardwalk toward Rowes Bay.", link: "/jezzine-barracks", linkText: "Jezzine Guide →" },
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
                April in Townsville is the sweet spot — the heavy rains are easing, but the landscape is still vibrant and green. It's the best time of year for outdoor photography at our secret northern beaches like Saunders and Toolakea.
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
                <p className="text-sm text-gray-600">Next home game: <strong>Round 10 — Cowboys vs Parramatta Eels, Friday May 8</strong> — early 6:00 PM kick-off at QCB Stadium.</p>
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

        {/* Major 2026 Events to Plan For */}
        <section className="pt-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Major 2026 Events to Plan For</h2>
          <p className="text-gray-600 mb-6">Mark your calendar for these highlights. Need a place to stay? Check our <Link to="/accommodation" className="text-primary font-medium hover:underline">Accommodation guide</Link>.</p>
          
          <div className="space-y-4">
            <Card>
              <CardContent className="p-4">
                <h3 className="font-semibold text-gray-900">Strand Ephemera</h3>
                <p className="text-sm text-gray-600 mt-1">Australia's leading outdoor sculpture festival. Biennial event transforming The Strand into an open-air gallery with installations from local and international artists.</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-4">
                <h3 className="font-semibold text-gray-900">Magnetic Island Race Week</h3>
                <p className="text-sm text-gray-600 mt-1">Late August. Sailing yachts compete around Magnetic Island's stunning bays in one of North Queensland's biggest sailing spectacles and a major regional tourism draw.</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-4">
                <h3 className="font-semibold text-gray-900">North Australian Festival of Arts</h3>
                <p className="text-sm text-gray-600 mt-1">June–July. Flagship arts festival featuring theatre, music, and circus, plus comedy nights, outdoor installations, and light shows across multiple Townsville venues.</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Annual Festivals - Detailed List */}
        <section className="pt-8">
           <h2 className="text-2xl font-bold text-gray-900 mb-6">Annual Festivals Calendar</h2>
           <div className="space-y-4">
              <Card>
                <CardContent className="p-4 flex gap-4">
                  <div className="text-xs font-bold text-gray-500 w-16 pt-1">JUN-JUL</div>
                  <div>
                    <h3 className="font-semibold text-gray-900">North Australian Festival of Arts (NAFA)</h3>
                    <p className="text-sm text-gray-600 mt-1">Townsville's flagship arts festival featuring theatre, music, circus, comedy, light shows and outdoor performances. It's the largest multi-arts festival in Northern Australia, drawing performers from across the country.</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-4 flex gap-4">
                  <div className="text-xs font-bold text-gray-500 w-16 pt-1">JUL-AUG</div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Australian Festival of Chamber Music</h3>
                    <p className="text-sm text-gray-600 mt-1">World-class chamber music performed across stunning venues including St James' Cathedral. The festival attracts internationally acclaimed musicians and is one of Australia's premier classical music events.</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-4 flex gap-4">
                  <div className="text-xs font-bold text-gray-500 w-16 pt-1">AUGUST</div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Townsville Running Festival</h3>
                    <p className="text-sm text-gray-600 mt-1">Marathon, half-marathon and fun run options through scenic streets and waterfront. A fantastic community event with courses winding past <Link to="/the-strand" className="text-primary font-medium hover:underline">The Strand</Link> and Castle Hill.</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-4 flex gap-4">
                  <div className="text-xs font-bold text-gray-500 w-16 pt-1">DECEMBER</div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Townsville Christmas Festival</h3>
                    <p className="text-sm text-gray-600 mt-1">Festive lights, markets, food stalls and entertainment to celebrate the holiday season. A family-friendly atmosphere with spectacular light displays across the CBD and waterfront.</p>
                  </div>
                </CardContent>
              </Card>
           </div>
        </section>

        {/* April School Holiday Archive */}
        <section className="pt-8 border-t">
          <div className="flex items-center gap-2 mb-2">
            <Calendar className="w-6 h-6 text-primary" />
            <h2 className="text-2xl font-bold text-gray-900">April Archive: School Holidays 2026 (April 3–19)</h2>
          </div>
          <p className="text-gray-600 mb-4">The school holiday period wraps up on April 19. Here's a recap of key dates and what happened during the break.</p>

          {/* Key Dates */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            <div className="bg-primary/5 border border-primary/20 rounded-lg p-4 text-center">
              <p className="text-xs font-bold text-primary uppercase tracking-wider">Easter Long Weekend</p>
              <p className="text-lg font-bold text-gray-900 mt-1">April 3–6 ✅</p>
            </div>
            <div className="bg-primary/5 border border-primary/20 rounded-lg p-4 text-center">
              <p className="text-xs font-bold text-primary uppercase tracking-wider">School Holidays</p>
              <p className="text-lg font-bold text-gray-900 mt-1">April 3–19</p>
            </div>
          </div>

          {/* Holiday Highlights */}
          <h3 className="font-bold text-lg text-gray-800 mb-4">Holiday Highlights</h3>
          <div className="grid gap-4 md:grid-cols-2 mb-6">
            <Card>
              <CardContent className="p-4">
                <Badge variant="outline" className="mb-2">ANZAC Day — Recap</Badge>
                <h4 className="font-semibold text-gray-900">ANZAC Day Commemorations (April 25)</h4>
                <p className="text-sm text-gray-600 mt-2">
                  Lest We Forget. The Dawn Service kicked off at 5:20 AM at Anzac Memorial Park, followed by the ANZAC Day Parade marching down The Strand from 9:00 AM. <Link to="/the-strand" className="text-primary font-medium hover:underline">View Strand Guide →</Link>
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-4">
                <Badge variant="outline" className="mb-2">Footy — Recap</Badge>
                <h4 className="font-semibold text-gray-900">Cowboys vs Sharks (April 24)</h4>
                <p className="text-sm text-gray-600 mt-2">
                  The Cowboys hosted Cronulla under Friday night lights at QLD Country Bank Stadium with an early 6:00 PM kick-off. <Link to="/cowboys-stadium-guide" className="text-primary font-medium hover:underline">Stadium Guide →</Link>
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-4">
                <Badge variant="outline" className="mb-2">Music — Recap</Badge>
                <h4 className="font-semibold text-gray-900">Guy Sebastian: 100 Times Around the Sun (April 22)</h4>
                <p className="text-sm text-gray-600 mt-2">
                  Guy Sebastian brought his national tour to TECC for a packed midweek night of hits.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-4">
                <Badge variant="outline" className="mb-2">Footy — Recap</Badge>
                <h4 className="font-semibold text-gray-900">Cowboys vs Manly Sea Eagles (April 16)</h4>
                <p className="text-sm text-gray-600 mt-2">
                  The Cowboys hosted Manly under Thursday night lights at QLD Country Bank Stadium (kick-off 7:50 PM) — a packed house and the traditional march across Lowths Bridge. <Link to="/cowboys-stadium-guide" className="text-primary font-medium hover:underline">Stadium Guide →</Link>
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-4">
                <Badge variant="outline" className="mb-2">Wildlife</Badge>
                <h4 className="font-semibold text-gray-900">Billabong Sanctuary — Easter Bilbies</h4>
                <p className="text-sm text-gray-600 mt-2">
                  Spot the 'Easter Bilbies' and join their school holiday wildlife programs. A fantastic outing for families. <Link to="/billabong-sanctuary" className="text-primary font-medium hover:underline">View guide →</Link>
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-4">
                <Badge variant="outline" className="mb-2">Book Early</Badge>
                <h4 className="font-semibold text-gray-900">Great Barrier Reef & Magnetic Island Trips</h4>
                <p className="text-sm text-gray-600 mt-2">
                  Boats to the reef and <Link to="/guides/magnetic-island-day-trip" className="text-primary font-medium hover:underline">Magnetic Island</Link> fill up weeks in advance for the holiday break. Book ahead to secure your spot.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Local Tip */}
          <div className="bg-amber-50 border border-amber-100 rounded-lg p-5 flex gap-4 items-start">
            <Footprints className="w-5 h-5 text-amber-600 mt-0.5 shrink-0" />
            <div>
              <h3 className="font-semibold text-amber-900 text-sm">Local Tip</h3>
               <p className="text-amber-800 text-sm mt-1">
                 April in Townsville is the sweet spot — the heavy rains are easing, but the landscape is still vibrant and green. It's the best time of year for outdoor photography at our secret northern beaches like Saunders and Toolakea.
               </p>
            </div>
          </div>
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
