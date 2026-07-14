import { Helmet } from "react-helmet";
import SEOHead from "@/components/SEOHead";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  ArrowLeft,
  ArrowRight,
  Home,
  MapPin,
  Users,
  HelpCircle,
  Quote,
  Building2,
  Waves,
  GraduationCap,
  Plane,
  ShoppingBag,
  TreePine,
  HeartPulse,
} from "lucide-react";

interface SuburbCard {
  name: string;
  tagline: string;
  vibe: string;
  suits: string;
  near: string;
  icon: React.ReactNode;
}

const suburbs: SuburbCard[] = [
  {
    name: "North Ward",
    tagline: "The Strand's home suburb",
    vibe: "Coastal and walkable, sitting right on The Strand foreshore. A mix of heritage Queenslanders, low-rise apartments and a strong café scene — one of the most sought-after postcodes in the city.",
    suits: "Professionals, downsizers and anyone who wants beach walks, coffee and the CBD all within strolling distance.",
    near: "The Strand, Jezzine Barracks, Castle Hill, Townsville CBD.",
    icon: <Waves className="w-6 h-6" />,
  },
  {
    name: "Kirwan",
    tagline: "The big family heartland",
    vibe: "Townsville's large, established western suburb. Detached homes, family blocks, and one of the biggest school and sport catchments in the region.",
    suits: "Families wanting space, a backyard and easy access to schools, junior sport and a big regional shopping centre.",
    near: "Willows Shopping Centre, western sports precincts; roughly 15–20 minutes from the CBD.",
    icon: <Users className="w-6 h-6" />,
  },
  {
    name: "Idalia",
    tagline: "New-build living across the river",
    vibe: "A newer masterplanned suburb just south of the CBD across the Ross River. Modern homes, wide streets, walking paths and a growing local retail strip.",
    suits: "Professionals and young families who want a new build close to the Hospital, the stadium and the city.",
    near: "Townsville University Hospital, Queensland Country Bank Stadium, Townsville CBD.",
    icon: <Building2 className="w-6 h-6" />,
  },
  {
    name: "Douglas",
    tagline: "University & Hospital precinct",
    vibe: "The city's education and healthcare hub, built around James Cook University and Townsville University Hospital. A mix of student rentals, staff housing and quieter established streets.",
    suits: "University students, JCU staff, medical professionals and anyone whose life revolves around the Hospital or the University.",
    near: "James Cook University, Townsville University Hospital, Willows Shopping Centre.",
    icon: <GraduationCap className="w-6 h-6" />,
  },
  {
    name: "Aitkenvale",
    tagline: "Central retail & services hub",
    vibe: "Townsville's mid-city service belt. Home to the largest shopping centre in the region, plus medical, dining and transport all in one strip. Older housing stock with a strong rental market.",
    suits: "Renters, first-home buyers and anyone who wants Stockland, medical services and public transport within a few minutes' drive.",
    near: "Stockland Townsville, Ross River Parkway; roughly 10 minutes south of the CBD.",
    icon: <ShoppingBag className="w-6 h-6" />,
  },
  {
    name: "Annandale",
    tagline: "Leafy south-side family suburb",
    vibe: "A quieter, greener family suburb south of the Ross River. Established streets, local parks, and a small neighbourhood shopping centre that keeps day-to-day errands short.",
    suits: "Families with school-age kids who want a settled, leafy street and a short run to the Hospital, JCU or the stadium.",
    near: "Annandale Central shops, Ross River, Townsville University Hospital corridor.",
    icon: <TreePine className="w-6 h-6" />,
  },
  {
    name: "Garbutt",
    tagline: "Airport-close & redeveloping",
    vibe: "The suburb wrapping the airport, currently going through a genuine transformation — newer developments like The Haven are bringing modern homes and community spaces to a formerly light-industrial pocket.",
    suits: "FIFO workers, frequent flyers, remote workers and first-home buyers wanting quick airport and CBD access at an entry-level price point.",
    near: "Townsville Airport, Townsville CBD, Castle Hill.",
    icon: <Plane className="w-6 h-6" />,
  },
  {
    name: "Bushland Beach",
    tagline: "Coastal community on the northern fringe",
    vibe: "A relaxed beachside community on the northern edge of the city. Family homes, a long esplanade, and a genuine local-swim beach without having to drive all the way out to Saunders.",
    suits: "Retirees, sea-changers and families who want a beach on the doorstep and are happy to drive into town for work or shopping.",
    near: "Bushland Beach Esplanade, northern beach corridor; roughly 20–25 minutes north of the CBD.",
    icon: <Waves className="w-6 h-6" />,
  },
];

interface FeaturedGuide {
  name: string;
  teaser: string;
  href: string;
}

const featuredGuides: FeaturedGuide[] = [
  {
    name: "Rowes Bay",
    teaser:
      "Beachfront living minutes from the CBD, The Strand and Jezzine Barracks. Popular with Defence families and anyone who wants a sunset walk after work.",
    href: "/rowes-bay",
  },
  {
    name: "North Shore",
    teaser:
      "The northern growth heart — modern homes, 42km of walking trails, and the best community leisure centre in the city.",
    href: "/north-shore-townsville",
  },
  {
    name: "Pallarenda",
    teaser:
      "A quiet peninsula suburb wrapped around a national park, an off-leash dog beach, and long low-tide flats.",
    href: "/pallarenda-beach",
  },
  {
    name: "Saunders Beach",
    teaser:
      "The quiet northern escape — 6km of unspoilt sand, about 30 minutes from the CBD, and a true locals-only feel.",
    href: "/beaches/saunders-beach",
  },
];

const faqs = [
  {
    question: "What's the best suburb for families in Townsville?",
    answer:
      "There's no single answer — it depends on schools, commute and how much yard you want. Kirwan is the classic big-family suburb (established, huge school catchment, close to Willows). Annandale is a leafier, quieter choice on the south side and handy to the Hospital and JCU. If you want the beach in the mix, North Shore and Bushland Beach are both popular with families. The best test is our local rule: drive the commute at peak hour before you sign a lease.",
  },
  {
    question: "Which Townsville suburb is closest to the beach?",
    answer:
      "North Ward sits right on The Strand — you can walk to the water. Rowes Bay is beachfront and only minutes from the CBD. Further out, Pallarenda, Bushland Beach and Saunders Beach are all genuine beachside suburbs. Each has a different feel: North Ward is walkable and busy, Rowes Bay is Defence-family friendly, Pallarenda is quiet with a national-park edge, and Saunders Beach is the quiet locals-only escape.",
  },
  {
    question: "Is Kirwan a good suburb?",
    answer:
      "Kirwan is one of Townsville's largest and most established family suburbs — it works well if you want a house with a yard, a good school catchment and easy access to a major shopping centre (Willows). The main trade-off is commute: you're 15–20 minutes from the CBD, more in peak hour, so it's a better fit for families than for CBD-based professionals who want to walk to work.",
  },
  {
    question: "Which suburb is best for JCU students or Hospital staff?",
    answer:
      "Douglas is the obvious answer — it's built around James Cook University and Townsville University Hospital. Annandale and Idalia are strong runners-up if you'd rather live a few minutes away in a quieter, more residential street.",
  },
  {
    question: "Where should I look if I want a modern new-build home?",
    answer:
      "Idalia and North Shore are Townsville's two big newer masterplanned areas, both with modern homes, wide streets and walking paths. Garbutt has newer developments too (The Haven), with the added bonus of being minutes from the airport.",
  },
  {
    question: "What's the difference between the suburbs on the north side and the south side of the river?",
    answer:
      "Broadly: the north side of the Ross River (North Ward, Rowes Bay, Belgian Gardens, Pallarenda) is closer to The Strand, the CBD and Castle Hill and tends to feel more coastal. The south side (Idalia, Annandale, Douglas, Aitkenvale) is closer to the Hospital, the stadium, JCU and Stockland, and tends to have more new-build and family stock. Bridge traffic on a Friday afternoon or Cowboys game day is real — it's worth factoring in.",
  },
];

const Suburbs = () => {
  return (
    <>
      <SEOHead
        title="Townsville Suburbs Guide: Where to Live | My Aussie Guide"
        description="A local's guide to Townsville's suburbs — North Ward, Kirwan, Idalia, Douglas, Aitkenvale, Annandale, Garbutt, Bushland Beach and more. Vibe, who each suits, and where they sit."
        canonical="https://www.myaussieguide.com.au/suburbs"
        ogType="article"
      />
      <Helmet>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "BreadcrumbList",
              "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.myaussieguide.com.au/" },
                { "@type": "ListItem", "position": 2, "name": "Suburbs Guide", "item": "https://www.myaussieguide.com.au/suburbs" },
              ],
            },
            {
              "@type": "ItemList",
              "name": "Townsville Suburbs",
              "itemListElement": [
                ...suburbs.map((s, i) => ({
                  "@type": "ListItem",
                  "position": i + 1,
                  "name": s.name,
                  "url": `https://www.myaussieguide.com.au/suburbs#${s.name.toLowerCase().replace(/\s+/g, "-")}`,
                })),
                ...featuredGuides.map((g, i) => ({
                  "@type": "ListItem",
                  "position": suburbs.length + i + 1,
                  "name": g.name,
                  "url": `https://www.myaussieguide.com.au${g.href}`,
                })),
              ],
            },
            {
              "@type": "FAQPage",
              "mainEntity": faqs.map((f) => ({
                "@type": "Question",
                "name": f.question,
                "acceptedAnswer": { "@type": "Answer", "text": f.answer },
              })),
            },
          ],
        })}</script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <main className="pt-24 pb-16">
          <div className="container mx-auto px-4 max-w-5xl">
            {/* Back */}
            <Link to="/">
              <Button variant="ghost" className="mb-6 group" aria-label="Back to home">
                <ArrowLeft className="mr-2 w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                Back to Home
              </Button>
            </Link>

            {/* Hero */}
            <header className="mb-12 text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                <Home className="w-4 h-4" />
                Suburbs Guide
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
                Townsville Suburbs Guide
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                Townsville is small enough to know well, but big enough that suburb choice really matters. Coastal or inland, new-build or established, close to the CBD or out toward the northern beaches — each pocket has its own feel. This guide is the plain-English rundown of where each suburb sits and who it tends to suit.
              </p>
            </header>

            {/* Intro / why it matters */}
            <section className="mb-12">
              <div className="rounded-2xl border-2 border-border bg-card p-6 md:p-8">
                <p className="text-muted-foreground leading-relaxed">
                  For most people moving to Townsville, the choice comes down to four things: <strong className="text-foreground">commute</strong> (where do you actually work?), <strong className="text-foreground">schools</strong> (which catchment matters?), <strong className="text-foreground">coastal vs inland</strong> (do you want the beach on your doorstep or a bigger block further from the water?), and <strong className="text-foreground">vibe</strong> (family-quiet, café-walkable, student-lively, or brand-new estate?). Below is a snapshot of eight of the suburbs newcomers ask about most, plus links to the four suburb guides we've written up in full.
                </p>
              </div>
            </section>

            {/* Suburb cards */}
            <section className="mb-16">
              <div className="flex items-center gap-3 mb-8">
                <div className="p-2 rounded-lg bg-primary/10">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                    Suburb Snapshots
                  </h2>
                  <p className="text-muted-foreground">Eight suburbs newcomers ask about most</p>
                </div>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                {suburbs.map((s) => (
                  <Card
                    key={s.name}
                    id={s.name.toLowerCase().replace(/\s+/g, "-")}
                    className="overflow-hidden hover:shadow-[var(--shadow-tropical)] transition-all duration-300 border-2 hover:border-primary/30 scroll-mt-24"
                  >
                    <CardHeader className="bg-gradient-to-br from-primary/5 to-transparent pb-4">
                      <div className="flex items-start gap-3">
                        <div className="p-3 rounded-xl bg-primary/10 text-primary flex-shrink-0">
                          {s.icon}
                        </div>
                        <div>
                          <CardTitle className="text-xl">{s.name}</CardTitle>
                          <CardDescription className="text-sm mt-1">{s.tagline}</CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="pt-4 space-y-3">
                      <p className="text-muted-foreground leading-relaxed">{s.vibe}</p>
                      <div className="rounded-lg bg-primary/5 border border-primary/10 px-3 py-2 text-sm">
                        <span className="font-semibold text-foreground">Best for: </span>
                        <span className="text-muted-foreground">{s.suits}</span>
                      </div>
                      <div className="text-sm text-muted-foreground flex items-start gap-2">
                        <MapPin className="w-4 h-4 mt-0.5 text-primary flex-shrink-0" />
                        <span><span className="font-semibold text-foreground">Near:</span> {s.near}</span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            {/* Duncan Local Tip */}
            <section className="mb-16">
              <div className="rounded-2xl border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-transparent p-6 md:p-8">
                <div className="flex gap-4">
                  <Quote className="w-8 h-8 text-primary flex-shrink-0" />
                  <div>
                    <p className="text-base md:text-lg text-foreground leading-relaxed italic mb-3">
                      "Pick the commute, not just the postcode. Townsville is small, but Friday-afternoon traffic across Lowths Bridge on a Cowboys game day is real. If you're working in the CBD or at the Hospital, test-drive the route at peak hour before you sign a lease — half the suburb regret I hear about is really commute regret in disguise."
                    </p>
                    <p className="text-sm font-semibold text-foreground">— Duncan, MyAussieGuide</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Already have a full guide */}
            <section className="mb-16">
              <div className="flex items-center gap-3 mb-8">
                <div className="p-2 rounded-lg bg-primary/10">
                  <HeartPulse className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                    Already Have a Full Guide
                  </h2>
                  <p className="text-muted-foreground">Four suburbs we've written up in detail</p>
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                {featuredGuides.map((g) => (
                  <Card key={g.href} className="border-l-4 border-l-primary">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">{g.name}</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <p className="text-sm text-muted-foreground leading-relaxed">{g.teaser}</p>
                      <Button asChild variant="outline" size="sm">
                        <Link to={g.href}>
                          View {g.name} Guide <ArrowRight className="w-3 h-3 ml-1" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            {/* FAQ */}
            <section className="mb-16">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-primary/10">
                  <HelpCircle className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                    Suburbs FAQs
                  </h2>
                  <p className="text-muted-foreground">The questions we get asked most about where to live</p>
                </div>
              </div>

              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, i) => (
                  <AccordionItem key={i} value={`item-${i}`}>
                    <AccordionTrigger className="text-left font-semibold">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </section>

            {/* CTA */}
            <section className="text-center bg-gradient-to-br from-primary/5 to-transparent rounded-2xl p-8 border-2">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Thinking Bigger Than a Suburb?
              </h2>
              <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
                Our full relocation guide covers jobs, schools, healthcare, the airport and the $40B infrastructure boom driving Townsville right now.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button asChild>
                  <Link to="/moving-to-townsville">Moving to Townsville Guide</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link to="/beaches">Beaches Guide</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link to="/shopping">Shopping & Markets</Link>
                </Button>
              </div>
            </section>
          </div>
        </main>
      </div>
    </>
  );
};

export default Suburbs;
