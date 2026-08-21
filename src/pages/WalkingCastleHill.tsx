import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import GuideQuickFacts from "@/components/GuideQuickFacts";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  AlertTriangle,
  Footprints,
  Mountain,
  Route as RouteIcon,
  Clock,
  Thermometer,
  Backpack,
  Car,
  Siren,
  Baby,
  Accessibility,
  Sunrise,
  Construction,
  ArrowRight,
  HelpCircle,
} from "lucide-react";
import heroImage from "@/assets/castle-hill-townsville.webp";

const SITE = "https://www.townsvilleguide.com.au";

const COUNCIL_CASTLE_HILL =
  "https://www.townsville.qld.gov.au/facilities-and-recreation/parks-and-playgrounds/castle-hill";
const COUNCIL_TRAILS =
  "https://www.townsville.qld.gov.au/facilities-and-recreation/sport-and-recreation/walking-and-cycling";

const TAKE_LIST = [
  "Water — more than you think you need",
  "Suitable walking shoes with grip",
  "A hat",
  "Sunscreen",
  "A charged phone",
  "Weather-appropriate clothing",
  "Insect repellent if you are walking early or late",
  "A light source for pre-dawn or post-sunset walking",
  "Dog waste bags if you are walking a dog",
];

const FAQS = [
  {
    q: "Which Castle Hill walking route is easiest?",
    a: "If you want the least technically demanding walking surface, Castle Hill Road is generally the gentler option — it's sealed rather than stepped or uneven, though it's shared with vehicles and cyclists and still climbs steadily. If you'd rather skip the walk altogether, driving to the summit is the easiest way up. Between the Goat Track and the Cudtheringa Track specifically, there isn't a verified basis for calling one easier than the other.",
  },
  {
    q: "Which Castle Hill walking route is hardest?",
    a: "The dedicated walking tracks — the Goat Track and the Cudtheringa Track — are the more demanding options. Both involve sustained steep climbing on uneven or stepped surfaces with limited shade, which is harder underfoot than the sealed Castle Hill Road. We don't have a reliable basis for ranking the two named tracks against each other, so treat both as a genuine climb and check current conditions before you go.",
  },
  {
    q: "How long does it take to walk Castle Hill?",
    a: "There's no single figure — it depends on your fitness, the route, heat and humidity, how many stops you take, and whether you're walking one way or return. Allow more time than you expect, and don't rely on the 20–60 minute figure quoted for a summit visit by car on our main Castle Hill guide — that's a driving time, not a walking time.",
  },
  {
    q: "Is it safe to walk Castle Hill in hot weather?",
    a: "It needs care. The routes are exposed with limited shade, and Townsville's heat and humidity make the climb harder than the distance alone suggests. Carry water, use sun protection, start early and turn back if conditions feel unsuitable — see our Beat the Heat guide.",
  },
  {
    q: "What should I carry?",
    a: "Sensible basics rather than specialist gear: water, suitable walking shoes, a hat, sunscreen, a charged phone, and a light if you're walking before sunrise or after sunset.",
  },
  {
    q: "Can children walk Castle Hill?",
    a: "It depends on the child's age, fitness and the conditions on the day — the tracks are steep, exposed and tiring, and younger children need close supervision. For many families, driving to the summit is the more practical option; let the heat make the final call.",
  },
  {
    q: "Is sunrise or sunset better for walking Castle Hill?",
    a: "Both have advantages, and neither is objectively better. These are the coolest, most comfortable times to walk, but low light adds visibility risk on shared routes, and sunset walkers need enough time to descend safely afterwards.",
  },
  {
    q: "Can I drive instead of walking?",
    a: "Yes — Castle Hill Road runs to the summit and is shared with pedestrians and cyclists, so you can drive to the lookout without walking at all. See our Castle Hill guide for the drive-up option.",
  },
  {
    q: "Where can I park?",
    a: "Parking depends on which starting point you use and current restrictions at the time, so check before you go. If you're driving to the summit instead of walking, parking is available there too — see our Castle Hill guide, though demand is high around sunrise and sunset.",
  },
];

const RELATED = [
  { name: "Castle Hill Guide", to: "/castle-hill" },
  { name: "Townsville in One Day", to: "/townsville-in-one-day" },
  { name: "First Time in Townsville", to: "/first-time-in-townsville" },
  { name: "Free Things to Do", to: "/guides/free-things" },
  { name: "Townsville with Kids", to: "/townsville-with-kids" },
  { name: "Beat the Heat", to: "/guides/beat-the-heat" },
  { name: "Accessible Townsville", to: "/accessible-townsville" },
  { name: "Sunset Walks", to: "/guides/sunset-walks" },
  { name: "Rainy Day Activities", to: "/guides/rainy-day-activities" },
];

const WalkingCastleHill = () => {
  return (
    <>
      <SEOHead
        title="Walking Castle Hill Townsville: Tracks and Difficulty"
        description="Planning to walk Castle Hill in Townsville? Compare the walking options, understand the steep terrain, avoid the heat and check current track conditions."
        canonical={`${SITE}/guides/walking-castle-hill`}
        ogType="article"
      />
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Walking Castle Hill: Tracks, Difficulty and What to Expect",
            description:
              "A practical guide to walking Castle Hill in Townsville — track options, difficulty, heat considerations, shared-road safety and current-condition checks.",
            author: { "@type": "Person", name: "Duncan Ross" },
            publisher: { "@type": "Organization", name: "Townsville Guide" },
            mainEntityOfPage: `${SITE}/guides/walking-castle-hill`,
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: `${SITE}/` },
              { "@type": "ListItem", position: 2, name: "Castle Hill", item: `${SITE}/castle-hill` },
              {
                "@type": "ListItem",
                position: 3,
                name: "Walking Castle Hill",
                item: `${SITE}/guides/walking-castle-hill`,
              },
            ],
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: FAQS.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          })}
        </script>
      </Helmet>

      {/* 1. Hero */}
      <section className="relative">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Castle Hill rising above Townsville, with walking routes leading to the summit"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-background/80 backdrop-blur-[1px]" />
        </div>
        <div className="relative container mx-auto max-w-4xl px-4 py-16 md:py-24">
          <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-5">
            Walking Castle Hill
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed mb-4">
            Walking Castle Hill is one of Townsville's most popular outdoor activities, but the
            routes are steep, exposed and very different from driving to the summit. This guide
            explains the main walking options, likely difficulty, heat considerations and what to
            check before setting out.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Conditions can change after severe weather, maintenance or planned works, so check
            current Townsville City Council notices before walking.
          </p>
        </div>
      </section>

      <div className="container mx-auto max-w-4xl px-4 py-12 space-y-12">
        {/* 2. Current track-status notice */}
        <Card className="border-2 border-amber-500/40 bg-amber-500/10">
          <CardContent className="p-5 md:p-6">
            <h2 className="text-lg font-semibold text-foreground mb-2 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-amber-600" aria-hidden="true" />
              Check Current Track Conditions
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Track access can change because of repairs, severe weather, fire-management work or
              local events. Townsville City Council reported that the Goat Track reopened on 20 July
              2026 following step-tread repairs, but visitors should still check the current Castle
              Hill page and Council closure notices before walking.
            </p>
            <a
              href={COUNCIL_CASTLE_HILL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 mt-3 text-primary font-medium hover:underline"
            >
              Townsville City Council — Castle Hill
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </a>
          </CardContent>
        </Card>

        {/* 3. Quick answer */}
        <section aria-labelledby="difficulty">
          <h2 id="difficulty" className="text-2xl md:text-3xl font-bold mb-4 flex items-center gap-2">
            <Mountain className="w-6 h-6 text-primary" aria-hidden="true" />
            Is Walking Castle Hill Difficult?
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            For most people, yes — it is a genuine climb rather than a stroll. Most routes involve
            steep, sustained uphill walking, and the hill is exposed to full sun with limited shade.
            Surfaces and difficulty vary between routes: walking a dedicated track is a very
            different experience from walking the sealed Castle Hill Road.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            How long it takes depends on your fitness, the route you choose and the weather on the
            day. Do not use the 20–60 minute visit estimate on our{" "}
            <Link to="/castle-hill" className="text-primary hover:underline">
              main Castle Hill guide
            </Link>{" "}
            as a walking time — that figure describes a summit visit by car.
          </p>
        </section>

        {/* 4. Quick Facts */}
        <GuideQuickFacts />

        {/* 5. Choosing how to walk */}
        <section aria-labelledby="routes">
          <h2 id="routes" className="text-2xl md:text-3xl font-bold mb-4 flex items-center gap-2">
            <RouteIcon className="w-6 h-6 text-primary" aria-hidden="true" />
            Choose the Right Route
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Visitors generally have two broad options. If you want the gentlest walking surface,
            Castle Hill Road is the easier of the two — it's sealed rather than stepped or uneven,
            though it climbs steadily and is shared with vehicles and cyclists. The dedicated
            tracks are steeper and more technical underfoot, which makes them the harder choice
            overall.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Between the two named dedicated tracks — the Goat Track and the Cudtheringa Track —
            there isn't a verified basis for calling one easier than the other. Both are steep,
            exposed climbs, and current conditions on the day matter more than any general
            difficulty label. Choose based on which is open and your own fitness rather than a
            ranking.
          </p>
          <div className="grid gap-4 md:grid-cols-2">
            <Card className="h-full">
              <CardContent className="p-5">
                <h3 className="font-semibold text-foreground mb-2">Dedicated walking tracks</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Suitable for visitors who want a steeper, more direct outdoor walk.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {[
                    "Uneven or stepped surfaces",
                    "Steep climbing",
                    "Limited shade",
                    "Difficulty varies by route",
                    "Check current track conditions before setting out",
                  ].map((t) => (
                    <li key={t} className="flex gap-2">
                      <span className="text-primary">•</span>
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
            <Card className="h-full">
              <CardContent className="p-5">
                <h3 className="font-semibold text-foreground mb-2">Castle Hill Road</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Suitable for walkers and runners who prefer a sealed surface.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {[
                    "Shared with vehicles and cyclists",
                    "Pedestrians need to stay alert",
                    "Bends and low light reduce visibility",
                    "Access may be affected by events or works",
                    "Still steep and exposed",
                  ].map((t) => (
                    <li key={t} className="flex gap-2">
                      <span className="text-primary">•</span>
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* 6. Goat Track */}
        <section aria-labelledby="goat-track">
          <h2 id="goat-track" className="text-2xl md:text-3xl font-bold mb-4 flex items-center gap-2">
            <Footprints className="w-6 h-6 text-primary" aria-hidden="true" />
            Goat Track
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            The Goat Track is Castle Hill's best-known and most-used walking route. It is steep, and
            it includes constructed step and step-tread sections rather than a consistent gentle
            gradient. Townsville City Council completed step-tread repairs and reopened the track to
            the public on 20 July 2026.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Walk it with appropriate footwear, carry water and set realistic expectations of your own
            fitness. Because Council carries out ongoing maintenance on the hill, check the track's
            current status before you leave rather than relying on this or any other guide.
          </p>
        </section>

        {/* 7. Cudtheringa Track */}
        <section aria-labelledby="cudtheringa">
          <h2 id="cudtheringa" className="text-2xl md:text-3xl font-bold mb-4 flex items-center gap-2">
            <Footprints className="w-6 h-6 text-primary" aria-hidden="true" />
            Cudtheringa Track
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            The Cudtheringa Track is another of Castle Hill's recognised walking routes, providing a
            further steep option on the hill. It has been included in Council track works and in the
            emergency-location marker program.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Route conditions should be checked before walking, and signage on arrival is the most
            reliable guide to current access. Older blog posts and unofficial maps frequently
            describe out-of-date conditions and even misspell the track name.
          </p>
        </section>

        {/* 8. Other tracks */}
        <section aria-labelledby="other-tracks">
          <h2 id="other-tracks" className="text-2xl md:text-3xl font-bold mb-4">
            Other Walking Tracks
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Townsville City Council has referred to eight major tracks on Castle Hill, with track
            lengths ranging from approximately 500 metres to 1.2 kilometres. Beyond the Goat Track
            and the Cudtheringa Track, several shorter routes link the road, car parks and the
            surrounding suburbs.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Some smaller or less familiar routes are better treated as local exercise tracks than
            first-time visitor walks. Check signage on arrival and avoid relying solely on unofficial
            maps. Council's{" "}
            <a
              href={COUNCIL_TRAILS}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              walking and cycling trail information
            </a>{" "}
            is the best place to confirm current route names and access points.
          </p>
        </section>

        {/* 9. How long */}
        <section aria-labelledby="how-long">
          <h2 id="how-long" className="text-2xl md:text-3xl font-bold mb-4 flex items-center gap-2">
            <Clock className="w-6 h-6 text-primary" aria-hidden="true" />
            How Long Should You Allow?
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            No single time applies. Your walking time depends on the route, your fitness, heat and
            humidity, how often you stop, whether you are stopping for photographs, whether you are
            walking one way or returning to your starting point, and the current condition of the
            track.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Allow more time than you initially expect and avoid starting late if daylight, weather or
            return transport may become an issue.
          </p>
        </section>

        {/* 10. Heat */}
        <Card className="border-2 border-primary/30 bg-primary/5">
          <CardContent className="p-5 md:p-6">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <Thermometer className="w-6 h-6 text-primary" aria-hidden="true" />
              Heat Is the Main Consideration
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Castle Hill is exposed and shade can be limited. Townsville's heat and humidity make
              the climb considerably harder than the same distance would be in cooler conditions.
              Carry water, use sun protection and start early where possible — early morning is
              usually the most comfortable time to walk.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Turn back if conditions become unsuitable. Children, older visitors and anyone
              unaccustomed to tropical heat may be better served by a less demanding option, such as
              driving to the summit.
            </p>
            <Link to="/guides/beat-the-heat" className="text-primary font-medium hover:underline">
              Read our Beat the Heat guide →
            </Link>
          </CardContent>
        </Card>

        {/* 11. What to take */}
        <section aria-labelledby="what-to-take">
          <h2 id="what-to-take" className="text-2xl md:text-3xl font-bold mb-4 flex items-center gap-2">
            <Backpack className="w-6 h-6 text-primary" aria-hidden="true" />
            What to Take
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            You do not need specialist hiking equipment — just sensible basics.
          </p>
          <ul className="grid sm:grid-cols-2 gap-2">
            {TAKE_LIST.map((item) => (
              <li key={item} className="flex gap-2 text-muted-foreground">
                <span className="text-primary">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* 12. Shared road */}
        <section aria-labelledby="road-safety">
          <h2 id="road-safety" className="text-2xl md:text-3xl font-bold mb-4 flex items-center gap-2">
            <Car className="w-6 h-6 text-primary" aria-hidden="true" />
            Walking on Castle Hill Road
          </h2>
          <ul className="space-y-2">
            {[
              "Vehicles, cyclists, runners and walkers may all share the route.",
              "Stay alert around bends, where drivers may see you late.",
              "Avoid headphones that completely block surrounding sound.",
              "Wear visible clothing in low light.",
              "Carry a light before sunrise or after sunset.",
              "Follow signs and any temporary traffic controls.",
              "Do not assume the road will remain open during events or maintenance.",
            ].map((t) => (
              <li key={t} className="flex gap-2 text-muted-foreground">
                <span className="text-primary">•</span>
                <span>{t}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* 13. Emergency markers */}
        <section aria-labelledby="markers">
          <h2 id="markers" className="text-2xl md:text-3xl font-bold mb-4 flex items-center gap-2">
            <Siren className="w-6 h-6 text-primary" aria-hidden="true" />
            Emergency Markers
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Townsville City Council has installed location markers along Castle Hill Road and several
            walking tracks, including the Goat Track and the Cudtheringa Track, so that emergency
            services can identify a caller's location quickly.
          </p>
          <ul className="space-y-2">
            {[
              "Note the nearest marker if you need assistance.",
              "Call 000 in an emergency.",
              "Do not rely on the markers as a substitute for preparation.",
              "Stay on recognised routes.",
              "Tell someone where you are going if walking alone or in low light.",
            ].map((t) => (
              <li key={t} className="flex gap-2 text-muted-foreground">
                <span className="text-primary">•</span>
                <span>{t}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* 14. Children */}
        <section aria-labelledby="children">
          <h2 id="children" className="text-2xl md:text-3xl font-bold mb-4 flex items-center gap-2">
            <Baby className="w-6 h-6 text-primary" aria-hidden="true" />
            Walking Castle Hill With Children
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            For many families, driving to the summit is the more suitable option. The tracks can be
            steep, exposed and tiring, and suitability depends on a child's age, fitness and previous
            walking experience. Younger children need close supervision throughout.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Let the heat decide whether the walk goes ahead, and avoid treating it as a quick casual
            stroll.
          </p>
          <Link to="/townsville-with-kids" className="text-primary font-medium hover:underline">
            Townsville with Kids guide →
          </Link>
        </section>

        {/* 15. Accessibility */}
        <section aria-labelledby="accessibility">
          <h2 id="accessibility" className="text-2xl md:text-3xl font-bold mb-4 flex items-center gap-2">
            <Accessibility className="w-6 h-6 text-primary" aria-hidden="true" />
            Accessibility
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            The walking tracks are steep and are not suitable for all mobility levels. Visitors with
            mobility limitations will usually find driving to the summit more practical. Summit
            facilities and lookout access vary, and surfaces differ between lookout points, so check
            current details before visiting.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to="/castle-hill" className="text-primary font-medium hover:underline">
              Castle Hill guide →
            </Link>
            <Link to="/accessible-townsville" className="text-primary font-medium hover:underline">
              Accessible Townsville →
            </Link>
          </div>
        </section>

        {/* 16. Sunrise and sunset */}
        <section aria-labelledby="sunrise-sunset">
          <h2 id="sunrise-sunset" className="text-2xl md:text-3xl font-bold mb-4 flex items-center gap-2">
            <Sunrise className="w-6 h-6 text-primary" aria-hidden="true" />
            Walking Near Sunrise or Sunset
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            These are the coolest and most visually appealing times to walk, but low light adds
            visibility risk on shared routes — carry a light. Sunset walkers need to allow enough
            time to descend safely, parking and road activity are busier around these times, and
            cloud or haze can obscure the views entirely.
          </p>
          <Link to="/guides/sunset-walks" className="text-primary font-medium hover:underline">
            Sunset Walks guide →
          </Link>
        </section>

        {/* 17. Closures */}
        <section aria-labelledby="closures">
          <h2 id="closures" className="text-2xl md:text-3xl font-bold mb-4 flex items-center gap-2">
            <Construction className="w-6 h-6 text-primary" aria-hidden="true" />
            Closures and Changed Access
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Temporary closures may occur because of severe weather, maintenance, track repairs,
            bushfire-mitigation work, public events or road works.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Always follow current signs and closure notices, even when an older online guide says a
            route is open.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href={COUNCIL_CASTLE_HILL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary font-medium hover:underline"
            >
              Council — Castle Hill →
            </a>
            <a
              href={COUNCIL_TRAILS}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary font-medium hover:underline"
            >
              Council — walking and cycling trails →
            </a>
          </div>
        </section>

        {/* FAQ */}
        <section aria-labelledby="walking-castle-hill-faq">
          <h2
            id="walking-castle-hill-faq"
            className="text-2xl md:text-3xl font-bold mb-4 flex items-center gap-2"
          >
            <HelpCircle className="w-6 h-6 text-primary" aria-hidden="true" />
            Walking Castle Hill Questions
          </h2>
          <Accordion type="single" collapsible className="w-full">
            {FAQS.map((faq, i) => (
              <AccordionItem key={faq.q} value={`item-${i}`} className="border-border/40">
                <AccordionTrigger className="text-left text-base font-semibold hover:text-primary">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground leading-relaxed">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>

        {/* Related guides */}
        <section aria-labelledby="related">
          <h2 id="related" className="text-2xl md:text-3xl font-bold mb-6">
            Related Townsville Guides
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {RELATED.map((g) => (
              <Link key={g.to} to={g.to} className="group">
                <Card className="h-full transition-shadow hover:shadow-md">
                  <CardContent className="p-4 flex items-center justify-between gap-3">
                    <span className="font-medium text-foreground group-hover:text-primary">
                      {g.name}
                    </span>
                    <ArrowRight
                      className="w-4 h-4 text-muted-foreground flex-shrink-0"
                      aria-hidden="true"
                    />
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default WalkingCastleHill;
