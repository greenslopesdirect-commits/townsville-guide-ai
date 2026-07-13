import { Helmet } from "react-helmet";
import SEOHead from "@/components/SEOHead";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Lightbulb, Sun, Waves, Car, Dog, CloudRain, MapPin, ThermometerSun, Shield, Calendar, AlertTriangle, Accessibility } from "lucide-react";
import { triggerAiGuide, AI_PRESETS } from "@/utils/aiGuide";

import StingerSeasonAlert from "@/components/StingerSeasonAlert";
import HeatSafetyAlert from "@/components/HeatSafetyAlert";
import LocalInsightCard from "@/components/LocalInsightCard";

const LocalTips = () => {
  const tips = [
    {
      title: "Best Time to Visit",
      icon: <Calendar className="w-6 h-6" />,
      description: "The dry season (May–October) offers sunny days and low humidity — perfect for outdoor activities. The wet season (November–April) brings tropical showers but also lush green landscapes.",
      tips: [
        "Dry season: Best for hiking, beaches, outdoor events",
        "Wet season: Fewer crowds, cheaper accommodation",
        "Shoulder months (April–May, Sept–Oct) are ideal",
        "Check Today's Weather Forecast: July 13, 2026 Update — Cool 17°C mornings warming to sunny 25°C days with very low humidity. Peak dry-season conditions, but the UV index still climbs to High–Very High (8–9) by midday, so sun protection is essential."
      ],
      aiPrompt: "What's the best time of year to visit Townsville based on weather and activities?"
    },
    {
      title: "Staying Safe in the Heat",
      icon: <ThermometerSun className="w-6 h-6" />,
      description: "Townsville's tropical sun is intense year-round. The UV index is extreme in summer, so sun protection is essential for any outdoor activity. May 11 Alert: The air feels cooler, but hydration is still key. If you're hiking the Goat Track, finish before 9:00 AM to avoid the UV spike (11+).",
      tips: [
        "Walk Castle Hill at sunrise or sunset only",
        "Carry at least 1L water per person",
        "Wear SPF 50+, hat, and sunglasses",
        "Avoid outdoor exercise 11am–3pm in summer"
      ],
      aiPrompt: "What should I know about staying safe in Townsville's heat?"
    },
    {
      title: "Stinger Season Swimming",
      icon: <Waves className="w-6 h-6" />,
      description: "Marine stingers (box jellyfish, Irukandji) are present November–May. Always swim within stinger nets or wear a full-body stinger suit when snorkelling.",
      tips: [
        "Swim inside stinger enclosures only",
        "The Strand Rockpool is safe year-round",
        "Wear stinger suits for snorkelling",
        "Follow beach signage and lifeguard advice"
      ],
      aiPrompt: "What do I need to know about stinger season in Townsville?"
    },
    {
      title: "Getting Around",
      icon: <Car className="w-6 h-6" />,
      description: "Townsville is spread out but easy to navigate. A car gives you the most flexibility, though the city centre and Strand are very walkable.",
      tips: [
        "Driving is fastest and easiest option",
        "Free/cheap parking outside CBD",
        "Ferries to Magnetic Island every 30 mins",
        "You can drive to the top of Castle Hill"
      ],
      aiPrompt: "How do I get around Townsville without a car?"
    },
    {
      title: "Dog-Friendly Tips",
      icon: <Dog className="w-6 h-6" />,
      description: "Townsville is extremely dog-friendly with multiple off-leash parks, dog beaches, and pet-friendly cafés throughout the city.",
      tips: [
        "Check signage for off-leash zones",
        "Pavement burns paws — touch it first",
        "Rowes Bay and Pallarenda are best for dogs",
        "Many cafés provide water bowls",
        "🐾 Schnauzer Approved Tip: May 11 Update — With the lower humidity, it's peak season for the Pallarenda sand flats. Aim for a 7:30 AM run to enjoy the best of the morning breeze. Safety Reminder: Stinger season is in its final weeks—keep your pups on the wet sand and out of the deep water outside the nets."
      ],
      aiPrompt: "Where are the best dog-friendly spots in Townsville?"
    },
    {
      title: "Cyclone Season",
      icon: <CloudRain className="w-6 h-6" />,
      description: "Cyclones are part of life in North Queensland (November–April), though direct hits are rare. Locals prepare but don't panic — most heavy rain passes quickly.",
      tips: [
        "Cyclone season has officially concluded for 2025/2026, though we remain prepared for late-season tropical activity until the end of May",
        "Follow Bureau of Meteorology updates",
        "Most storms pass quickly",
        "Indoor attractions are great wet-day options"
      ],
      aiPrompt: "What should I know about cyclone season if visiting Townsville?"
    },
    {
      title: "Accessibility Tip",
      icon: <Accessibility className="w-6 h-6" />,
      description: "Townsville's newer developments like North Shore and the Jezzine Barracks refurbishment have prioritized accessibility. Most local ferries to Magnetic Island are wheelchair accessible, but it's best to check with SeaLink 24 hours ahead for peak-time boarding assistance.",
      tips: [
        "Pre-book SeaLink boarding assistance 24 hours ahead for peak ferry times",
        "North Shore and Jezzine Barracks both feature flat, paved paths and accessible parking",
        "UV/Heat Note: For heat sensitivity, the Museum of Tropical Queensland and Riverway Lagoons offer the best midday climate-controlled or shaded escapes",
        "See our Accessible Townsville Guide for the full hub of wheelchair-friendly spots"
      ],
      aiPrompt: "What accessibility options are there in Townsville for wheelchair users and visitors with sensory needs?"
    }
  ];

  const TipCard = ({ tip }: { tip: typeof tips[0] }) => (
    <Card className="overflow-hidden hover:shadow-[var(--shadow-tropical)] transition-all duration-300 border-2 hover:border-primary/30 h-full flex flex-col">
      <CardHeader className="pb-3">
        <div className="flex items-start gap-3">
          <div className="p-2 rounded-xl bg-primary/10 text-primary flex-shrink-0">
            {tip.icon}
          </div>
          <CardTitle className="text-lg leading-tight">{tip.title}</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="pt-0 space-y-3 flex-1 flex flex-col">
        <p className="text-sm text-muted-foreground leading-relaxed">{tip.description}</p>
        
        <ul className="space-y-1.5 flex-1">
          {tip.tips.map((item, index) => (
            <li key={index} className="flex items-start gap-2 text-xs text-muted-foreground">
              <span className="text-primary font-bold">•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
        
        <Button 
          variant="ghost" 
          size="sm" 
          onClick={() => triggerAiGuide(tip.aiPrompt)}
          className="gap-2 mt-auto"
        >
          <span>🤖</span>
          Ask AI for more tips
        </Button>
      </CardContent>
    </Card>
  );

  return (
    <>
      <SEOHead
        title="Local Townsville Tips 2026 | Safety, Weather & Insider Advice"
        description="Updated May 11, 2026: Essential local-verified tips for Townsville. Includes stinger safety, coconut hazards, May 2026 weather advice, and infrastructure updates."
        canonical="https://www.myaussieguide.com.au/local-tips"
      />
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": tips.map(tip => ({
              "@type": "Question",
              "name": tip.title,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": tip.description
              }
            }))
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

            {/* Hero Header */}
            <header className="mb-12 text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                <Lightbulb className="w-4 h-4" />
                Insider Guide
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
                Local Tips for Townsville
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                Townsville has its own rhythm, weather patterns and local quirks. These insider tips will help you enjoy your visit like a local — staying safe, keeping cool and making the most of tropical North Queensland.
              </p>
            </header>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
              {[
                { icon: <Sun className="w-5 h-5" />, label: "300+ Sunny Days", sublabel: "Per year" },
                { icon: <ThermometerSun className="w-5 h-5" />, label: "24–32°C", sublabel: "Average temps" },
                { icon: <Shield className="w-5 h-5" />, label: "Stinger Nets", sublabel: "Nov–May safety" },
                { icon: <Dog className="w-5 h-5" />, label: "Very Dog-Friendly", sublabel: "Parks & beaches" }
              ].map((stat, index) => (
                <div key={index} className="text-center p-4 rounded-2xl bg-card border-2 hover:border-primary/30 transition-colors">
                  <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary mb-2">
                    {stat.icon}
                  </div>
                  <p className="font-semibold text-foreground">{stat.label}</p>
                  <p className="text-sm text-muted-foreground">{stat.sublabel}</p>
                </div>
              ))}
            </div>

            {/* Navigating Townsville Like a True Local */}
            <section className="mb-12 space-y-4">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                Navigating Townsville Like a True Local
              </h2>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                Understanding the local rhythm of Townsville is the secret to unlocking the best of tropical North Queensland without the usual tourist pitfalls. Life here is dictated by the sun and the seasons. Because our tropical climate delivers high UV levels and distinct seasonal shifts, you will find that the city operates on an "early to bed, early to rise" philosophy. If you want to experience the region comfortably, you need to adjust your clock: locals tackle the heavy outdoor tracks like Castle Hill or the boardwalks at sunrise, retreat to air-conditioned hubs or shaded rockpools during the intense midday heat, and emerge again as the afternoon coastal breezes roll in.
              </p>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                Beyond the weather, navigating Townsville safely means respecting the local environment. Whether it is knowing when it is safe to enter the ocean during marine stinger season, keeping an eye on local infrastructure updates like the Magnetic Island bridge works, or simply checking the tree canopy before setting up a family picnic on The Strand, a little local foresight goes a long way. This insider guide compiles our daily lived experiences, live community updates, and essential safety protocol to ensure your time in Townsville is seamless, safe, and perfectly tailored to the tropical lifestyle.
              </p>
            </section>

            {/* Safety Alerts & Current Status */}

            <div className="space-y-4 mb-8">
              <div className="p-4 rounded-lg border bg-card">
                <p className="text-sm text-muted-foreground">
                  ☀️ Current Status (May 11, 2026): The 'Perfect Dry' is officially here! Stinger nets remain ACTIVE. With crisp 20°C mornings and sunny 26°C days, Townsville is at its absolute best. Humidity is low, making it prime time for outdoor exploration.
                </p>
              </div>
              <StingerSeasonAlert />
              <HeatSafetyAlert />
            </div>

            {/* Local Infrastructure Alert */}
            <section className="mb-8 space-y-3">
              <div className="flex items-center gap-2 mb-2">
                <AlertTriangle className="w-5 h-5 text-amber-500" />
                <h2 className="text-lg font-bold text-foreground">Local Infrastructure Alerts</h2>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-lg bg-destructive/5 border border-destructive/20">
                <AlertTriangle className="w-5 h-5 text-destructive mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-sm text-foreground">Magnetic Island — Sooning Street Bridge CLOSED</p>
                  <p className="text-xs text-muted-foreground mt-1">Piling is now complete! The bridge remains closed to vehicles as construction enters the next phase, but pedestrian access is available. Expect a mid-2026 reopening.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-lg bg-muted/40 border">
                <AlertTriangle className="w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-sm text-foreground">Jezzine Boardwalk — Refurbishment Works</p>
                  <p className="text-xs text-muted-foreground mt-1">Refurbishment is progressing well; the boardwalk is fully accessible but stay alert for maintenance crews between 8am and 3pm.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-lg bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800/50">
                <AlertTriangle className="w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-sm text-foreground">🏟️ May 24 Footy Alert — Sunday Afternoon Clash</p>
                  <p className="text-xs text-muted-foreground mt-1">For the <strong>Cowboys vs Rabbitohs</strong> (4:05 PM kick-off), expect the CBD and Lowths Bridge to be busy from 1:00 PM. Local Tip: Sunday games bring more families—parking at Lou Litster Park and taking the shuttle is your best bet to avoid the pre-game rush.</p>
                </div>
              </div>
            </section>

            {/* Environmental Safety */}
            <section className="mb-8 space-y-3">
              <div className="flex items-center gap-2 mb-2">
                <AlertTriangle className="w-5 h-5 text-amber-500" />
                <h2 className="text-lg font-bold text-foreground">Environmental Safety</h2>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-lg bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800/50">
                <AlertTriangle className="w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-sm text-foreground">Tropical Tip: The 2kg Overhead Hazard</p>
                  <p className="text-xs text-muted-foreground mt-1">
                    While the palms in Anzac Memorial Park and along The Strand provide the best shade, locals know to do a quick "overhead check." A falling coconut weighs around 2kg and can cause serious injury. As the May breezes strengthen, this risk increases. Always look up for heavy coconuts before choosing a palm tree for your Strand picnic!
                  </p>
                </div>
              </div>
            </section>

            {/* Transport & Timing Insight */}
            <LocalInsightCard title="Transport & Timing" variant="tip" className="mb-12">
              <p>
                <strong>Getting Around:</strong> While the Sunbus is reliable, renting a car unlocks the real magic 
                of the region, like the Northern Beaches.
              </p>
              <p className="font-medium text-emerald-700 dark:text-emerald-300">
                🛍️ <strong>Retail Therapy:</strong> Don't leave your shopping for late Saturday afternoon! 
                Most shops close early on weekends. We start our days early to beat the heat.
              </p>
            </LocalInsightCard>

            {/* Tips Grid */}
            <section className="mb-16">
              <div className="flex items-center gap-3 mb-8">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Lightbulb className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                    Essential Local Knowledge
                  </h2>
                  <p className="text-muted-foreground">What every visitor should know</p>
                </div>
              </div>

              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {tips.map((tip, index) => (
                  <TipCard key={index} tip={tip} />
                ))}
              </div>
            </section>

            {/* Ask AI Section */}
            <Card className="mb-12 border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-transparent">
              <CardContent className="p-6 text-center">
                <h2 className="text-xl font-bold text-foreground mb-2">Need Personalised Advice?</h2>
                <p className="text-muted-foreground mb-4">Ask our AI guide for real-time tips based on weather, time of day and your preferences.</p>
                <div className="flex flex-wrap gap-2 justify-center mb-4">
                  <span className="text-xs px-3 py-1 rounded-full bg-muted text-muted-foreground">"Is today a good day for the beach?"</span>
                  <span className="text-xs px-3 py-1 rounded-full bg-muted text-muted-foreground">"Where should I walk with my dog?"</span>
                  <span className="text-xs px-3 py-1 rounded-full bg-muted text-muted-foreground">"What's safe during stinger season?"</span>
                </div>
                <Button 
                  size="lg" 
                  onClick={() => triggerAiGuide(AI_PRESETS.planDay)}
                  className="gap-2"
                >
                  <span>🤖</span>
                  Ask the AI Guide
                </Button>
              </CardContent>
            </Card>

            {/* Explore More */}
            <section className="mb-16">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                Explore More
              </h2>
              <div className="grid md:grid-cols-3 gap-4">
                <Link to="/beaches" className="block">
                  <div className="p-6 rounded-xl border-2 hover:border-primary/30 transition-colors bg-card">
                    <Waves className="w-8 h-8 text-primary mb-3" />
                    <h3 className="font-semibold text-foreground mb-1">Beaches</h3>
                    <p className="text-sm text-muted-foreground">Find the best beaches for your visit</p>
                  </div>
                </Link>
                <Link to="/dog-friendly" className="block">
                  <div className="p-6 rounded-xl border-2 hover:border-primary/30 transition-colors bg-card">
                    <Dog className="w-8 h-8 text-primary mb-3" />
                    <h3 className="font-semibold text-foreground mb-1">Dog-Friendly</h3>
                    <p className="text-sm text-muted-foreground">Parks and beaches for your furry friend</p>
                  </div>
                </Link>
                <Link to="/things-to-do" className="block">
                  <div className="p-6 rounded-xl border-2 hover:border-primary/30 transition-colors bg-card">
                    <MapPin className="w-8 h-8 text-primary mb-3" />
                    <h3 className="font-semibold text-foreground mb-1">Things to Do</h3>
                    <p className="text-sm text-muted-foreground">Top attractions and experiences</p>
                  </div>
                </Link>
              </div>
            </section>

          </div>
        </main>
      </div>
    </>
  );
};

export default LocalTips;
