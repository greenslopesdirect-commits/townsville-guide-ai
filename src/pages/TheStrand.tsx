import { ArrowRight, MapPin, Waves, Umbrella, Info, Coffee, Car, AlertTriangle, Sun, ShieldCheck, Mountain } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import SEOHead from "@/components/SEOHead";

const TheStrand = () => {
  return (
    <>
      <SEOHead
        title="The Strand Townsville — Local Guide"
        description="A local guide to The Strand in Townsville — 2.2km of foreshore, Rockpool, Water Park, dining and how to do it like a local."
        canonical="https://www.myaussieguide.com.au/the-strand"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "Are dogs allowed?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, on the promenade (on-leash). Not on the sand near swimming nets or the Rockpool."
              }
            },
            {
              "@type": "Question",
              "name": "Is there shade?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Plenty. The path is lined with huge Fig and Palm trees. Great for walking even at midday."
              }
            }
          ]
        }) }}
      />

    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <div className="bg-white border-b sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/beaches" className="text-gray-600 hover:text-primary flex items-center gap-2 text-sm font-medium transition-colors">
            <ArrowRight className="w-4 h-4 rotate-180" />
            Back to Beaches
          </Link>
          <span className="text-xs font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
            Local Verified
          </span>
        </div>
      </div>

      <main className="flex-grow container mx-auto px-4 py-8 max-w-4xl space-y-8">
        
        {/* Hero Section */}
        <div className="space-y-4">
          <Badge className="bg-blue-600 hover:bg-blue-700">Townsville's #1 Attraction</Badge>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900">
            The Strand
          </h1>
          <p className="text-sm text-gray-500">Updated: June 1, 2026</p>
          <p className="text-xl text-gray-600 max-w-2xl">
            2.2km of tropical foreshore. It's not just a beach; it's the city's living room.
            From the <strong>Rockpool</strong> to the <strong>Water Park</strong>, here is how to do The Strand like a local.
          </p>
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-sm text-blue-900">
            ☀️ <strong>June 1 Update:</strong> The 'Perfect Dry' is fully underway. With crisp 26°C days and clear water, it's the absolute best time of year for a Strand walk. Note: The Council officially removed the stinger nets on May 28, marking the end of stinger season—open swimming is now safe across the beach!
          </div>
        </div>

        {/* Hero Image */}
        <div className="w-full">
          <img
            src="/the-strand-townsville-2.webp"
            alt="The Strand Townsville foreshore walkway with palm trees and tropical waterfront"
            className="w-full h-[300px] md:h-[500px] object-cover rounded-xl"
            loading="lazy"
          />
        </div>

        {/* Quick Visitor Snapshot */}
        <Card className="bg-muted/30 shadow-sm">
          <CardContent className="p-5 md:p-6">
            <h2 className="text-xl md:text-2xl font-bold text-foreground mb-4">Quick Visitor Snapshot</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { icon: "📍", text: "Townsville foreshore" },
                { icon: "📏", text: "2.2km waterfront promenade" },
                { icon: "💰", text: "Free attraction" },
                { icon: "👨‍👩‍👧", text: "Family friendly" },
                { icon: "🌴", text: "Shade available along most paths" },
                { icon: "🌊", text: "Swim safely year-round in the Rockpool, or enjoy open ocean swimming now that the stinger nets are out for the Dry Season." },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="text-lg flex-shrink-0">{item.icon}</span>
                  <span className="text-sm text-muted-foreground">{item.text}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Current Status - Critical for Tourists */}
        <Alert className="bg-emerald-50 border-emerald-200">
          <Sun className="h-4 w-4 text-emerald-600" />
          <AlertTitle className="text-emerald-800 font-semibold">Dry Season Swimming Freedom!</AlertTitle>
          <AlertDescription className="text-emerald-700 mt-1">
            The 2025/2026 stinger season has officially concluded and the nets have been packed away for the cooler months. Ocean visibility is excellent and marine stinger risks are at their yearly low. While open water swimming is safe right now, we always recommend staying close to patrolled lifeguards or enjoying the completely stinger-free Rockpool at the northern end.
          </AlertDescription>
        </Alert>

        {/* Footy Alert */}
        <Alert className="bg-blue-50 border-blue-200">
          <AlertTriangle className="h-4 w-4 text-blue-600" />
          <AlertTitle className="text-blue-900 font-semibold">🏟️ Footy Alert: Cowboys vs. Dolphins (Saturday, June 6)</AlertTitle>
          <AlertDescription className="text-blue-800 mt-1">
            With the massive QLD blockbuster kicking off at 5:30 PM this Saturday, Strand bars like The Seaview and Longboard will be absolutely buzzing for pre-game drinks. If you are heading down, expect parking along the Strand to fill up early in the afternoon as fans catch the pre-game beach vibe before walking over to the stadium.
          </AlertDescription>
        </Alert>

        {/* Night Markets */}
        <Alert className="bg-emerald-50 border-emerald-200">
          <Info className="h-4 w-4 text-emerald-700" />
          <AlertTitle className="text-emerald-900 font-semibold">🌙 Strand Night Markets</AlertTitle>
          <AlertDescription className="text-emerald-800 mt-1">
            Lock it in: The next Strand Night Markets are happening this Friday, June 5! Strand Park comes alive from 5:00 PM with local North Queensland food trucks, arts, crafts, and live music under the palms. It's the perfect way to spend a fresh Dry Season Friday night.
          </AlertDescription>
        </Alert>

        {/* Best Time to Visit */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
            <Sun className="w-6 h-6 text-primary" />
            Best Time to Visit The Strand
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Early mornings and late afternoons are the most comfortable, especially during warmer months. Sunset is particularly popular with locals for walking, dining, or relaxing by the water.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Midday visits are still enjoyable thanks to tree shade, cafés, and swimming areas like the Rockpool.
          </p>
        </section>

        {/* The 3 Main Zones */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-gray-900">The 3 Zones of The Strand</h2>
          <div className="grid gap-6 md:grid-cols-3">
            
            {/* The Rockpool */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Waves className="w-5 h-5 text-blue-500" />
                  The Rockpool
                </CardTitle>
                <p className="text-sm text-gray-500">North End (Kissing Point)</p>
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="text-sm text-gray-600">
                  A man-made saltwater lagoon. Safe from stingers year-round. Gentle sloping entry makes it perfect for toddlers.
                </p>
                <div className="bg-blue-50 p-3 rounded-md text-xs text-blue-800">
                  <strong>Local Tip:</strong> Closed every <span className="font-bold">Wednesday</span> for cleaning. <em>June Update: The water is refreshing and crystal clear—ideal for morning laps before the midday UV peaks.</em>
                </div>
              </CardContent>
            </Card>

            {/* Rockpool Image - spans full grid width */}
            <div className="md:col-span-3">
              <img
                src="/rock-pool-townsville.webp"
                alt="The Strand Rockpool saltwater lagoon Townsville safe swimming area North Queensland"
                className="w-full h-[250px] md:h-[400px] object-cover object-[center_70%] rounded-xl"
                loading="lazy"
              />
            </div>

            {/* The Water Park */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Umbrella className="w-5 h-5 text-purple-500" />
                  The Water Park
                </CardTitle>
                <p className="text-sm text-gray-500">Central (The Big Bucket)</p>
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="text-sm text-gray-600">
                  Freshwater playground. The "Big Bucket" drops every few minutes. Surrounded by BBQ areas and grass.
                </p>
                <div className="bg-purple-50 p-3 rounded-md text-xs text-purple-800">
                  <strong>Local Tip:</strong> May–October Schedule: <span className="font-bold">8:00 AM – 5:00 PM</span>. Closed every <span className="font-bold">Tuesday</span> for scheduled maintenance.
                </div>
              </CardContent>
            </Card>

            {/* Environmental Safety — Coconut Hazard near Anzac Memorial Park */}
            <div className="flex items-start gap-3 p-4 rounded-lg bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800/50">
              <AlertTriangle className="w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-medium text-sm text-foreground">Tropical Tip: The 2kg Overhead Hazard</p>
                <p className="text-xs text-muted-foreground mt-1">
                  As the Dry Season breezes pick up this week, keep an eye out for falling coconuts near the picnic tables at Strand Park and the palms in Anzac Memorial Park. Those 2kg hazards are no joke when the wind kicks in—do a quick "overhead check" before you set up your picnic rug or beach chair.
                </p>
              </div>
            </div>

            {/* The Pier & Marina */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Coffee className="w-5 h-5 text-orange-500" />
                  The Pier & Marina
                </CardTitle>
                <p className="text-sm text-gray-500">South End</p>
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="text-sm text-gray-600">
                  Best for fishing, sunset walks, and dining. Home to the Tobruk Pool (Olympic size) and the Ferry Terminal.
                </p>
                <div className="bg-orange-50 p-3 rounded-md text-xs text-orange-800">
                  <strong>Local Tip:</strong> Great fish & chips at the Marina end.
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Accessibility Cross-Link */}
        <div className="flex items-start gap-2 p-4 rounded-lg bg-blue-50 border border-blue-100 text-sm text-blue-800">
          <span className="mt-0.5">♿</span>
          <p>
            View our full{" "}
            <Link to="/accessible-townsville" className="font-medium text-blue-700 hover:underline">
              Townsville Accessibility Guide
            </Link>{" "}
            for more mobility-friendly locations.
          </p>
        </div>

        {/* Local Food Tip */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
            <Coffee className="w-6 h-6 text-primary" />
            Local Food Tip
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            The Marina end has some of Townsville's best casual dining and takeaway options. Fish and chips, cafés, and relaxed waterfront restaurants make it an easy place to spend an evening.
          </p>
        </section>

        {/* The Parking Strategy */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <Car className="w-6 h-6 text-gray-700" />
            <h2 className="text-2xl font-bold text-gray-900">The Parking Strategy</h2>
          </div>
          <Card className="bg-gray-50 border-gray-200">
            <CardContent className="p-6">
              <ul className="space-y-4 text-gray-700">
                <li className="flex gap-3">
                  <span className="font-bold text-red-500">The Trap:</span>
                  <span>Driving circles around the Water Park carpark on a Sunday morning. You will not find a spot.</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-green-600">The Fix:</span>
                  <span>Park one street back on <strong>Mitchell Street</strong> or near <strong>Queens Gardens</strong>. It's a 3-minute walk and saves you 20 minutes of stress.</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </section>

        {/* Safety Tips */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
            <ShieldCheck className="w-6 h-6 text-primary" />
            Safety Tips for Visitors
          </h2>
          <ul className="space-y-2">
            {[
              "Always follow stinger season warnings",
              "Drink plenty of water in warmer months",
              "Wear sunscreen — UV levels are strong year-round",
              "Watch for cyclists on the promenade",
            ].map((tip, i) => (
              <li key={i} className="flex items-start gap-3 text-muted-foreground">
                <span className="text-primary mt-1">✔</span>
                <span>{tip}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Quick FAQs */}
        <section className="space-y-4 pt-4 border-t">
          <h3 className="font-semibold text-gray-900">Quick Questions</h3>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="flex gap-3 items-start">
              <Info className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
              <div className="text-sm">
                <strong className="block text-gray-900">Are dogs allowed?</strong>
                <span className="text-gray-600">Yes, on the promenade (on-leash). <strong>Not</strong> on the sand near swimming nets or the Rockpool.</span>
              </div>
            </div>
            <div className="flex gap-3 items-start">
              <Info className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
              <div className="text-sm">
                <strong className="block text-gray-900">Is there shade?</strong>
                <span className="text-gray-600">Plenty. The path is lined with huge Fig and Palm trees. Great for walking even at midday.</span>
              </div>
            </div>
          </div>
        </section>

        {/* Dog-Friendly Strand Tip */}
        <section className="space-y-3">
          <h2 className="text-2xl font-bold text-foreground">🐾 Dog-Friendly Strand Tip (June 2026)</h2>
          <div className="p-4 rounded-lg bg-jade/10 border border-jade/30 text-sm text-foreground">
            The cooler 20°C mornings are perfect for the full 2.2km length of The Strand. Remember: Dogs must be on-leash on the main path. If you're looking for an off-leash run, head to the northern end of <Link to="/pallarenda-beach" className="text-primary hover:underline font-medium">Pallarenda</Link> where the low-tide sand flats are massive this week.
          </div>
        </section>

        {/* Seasonal Photography Tip */}
        <section className="space-y-3">
          <h2 className="text-2xl font-bold text-foreground">📸 June Photography Tip</h2>
          <div className="p-4 rounded-lg bg-amber-50 border border-amber-200 text-sm text-amber-900">
            <strong>Sunset vs. Sunrise:</strong> During the dry season, the sun rises directly over Cleveland Bay, making for incredible silhouette shots of the pier. Sunset is best captured from the Jezzine Barracks end, looking back across the Strand toward the Port.
          </div>
        </section>

        {/* Combine With Nearby Attractions */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
            <Mountain className="w-6 h-6 text-primary" />
            Combine The Strand With These Nearby Attractions
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-2">
            If you're visiting The Strand, consider combining it with:
          </p>
          <ul className="space-y-2">
            {[
              { text: "Castle Hill lookout (best city views)", link: "/castle-hill" },
              { text: "Magnetic Island day trip", link: "/guides/magnetic-island-day-trip" },
              { text: "Townsville CBD dining and shopping", link: "/food-drink" },
              { text: "Queens Gardens park nearby", link: null },
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-muted-foreground">
                <span className="text-primary mt-1">•</span>
                {item.link ? (
                  <Link to={item.link} className="hover:text-primary transition-colors">{item.text}</Link>
                ) : (
                  <span>{item.text}</span>
                )}
              </li>
            ))}
          </ul>

          {/* Jezzine Barracks Link */}
          <div className="mt-6 p-4 bg-primary/5 rounded-lg border border-primary/20">
            <p className="text-sm text-muted-foreground mb-3">
              🚶 Walking North? Explore the history and views at Jezzine Barracks.
            </p>
            <Button asChild variant="outline" size="sm">
              <Link to="/guides/jezzine-barracks">View Jezzine Guide</Link>
            </Button>
          </div>
        </section>

        {/* CTA */}
        <div className="flex justify-center pt-8">
          <Button asChild size="lg" className="w-full sm:w-auto shadow-lg">
            <Link to="/">Ask AI: "Best coffee on The Strand?"</Link>
          </Button>
        </div>

      </main>
    </div>
    </>
  );
};

export default TheStrand;
