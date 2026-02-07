import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { Mountain, Sunrise, Camera, Car, Footprints, Clock, DollarSign, MapPin, Thermometer, Wind } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import castleHillImage from "@/assets/castle-hill-townsville-2.webp";

const CastleHill = () => {
  return (
    <>
      <Helmet>
        <title>Castle Hill Townsville – Local Guide | MyAussieGuide</title>
        <meta
          name="description"
          content="Castle Hill Townsville local guide — panoramic views, walking tracks, sunrise and sunset tips. Free attraction near the city centre."
        />
        <link rel="canonical" href="https://www.myaussieguide.com.au/castle-hill" />
      </Helmet>

      <div className="min-h-screen bg-background">
        {/* Hero */}
        <section className="relative">
          <div className="w-full h-[400px] md:h-[500px] overflow-hidden">
            <img
              src={castleHillImage}
              alt="Castle Hill Lookout overlooking Townsville and Cleveland Bay"
              className="w-full h-full object-cover"
            />
          </div>
        </section>

        <div className="container mx-auto px-4 py-12 max-w-4xl">
          {/* Intro */}
          <header className="mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Castle Hill Townsville – Local Guide
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Castle Hill is one of Townsville's most recognisable landmarks — a granite monolith rising 286 metres above the city with panoramic views over Cleveland Bay, Magnetic Island, and the Townsville skyline. It's a favourite local lookout for sunrise walks, sunset photos, and relaxed scenic drives.
            </p>
          </header>

          {/* Why Visit */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
              <Mountain className="w-6 h-6 text-primary" />
              Why Visit
            </h2>
            <ul className="space-y-3">
              {[
                "Best panoramic views in Townsville",
                "Free attraction close to the city",
                "Sunrise and sunset viewing",
                "Walking tracks or drive access",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-muted-foreground">
                  <span className="text-primary mt-1">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Walking Options */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
              <Footprints className="w-6 h-6 text-primary" />
              Walking Options
            </h2>
            <div className="grid gap-4 md:grid-cols-3">
              {[
                { name: "Goat Track", desc: "Steeper popular walk — the locals' favourite for a workout." },
                { name: "Castle Hill Road", desc: "Drive or gentle walk along the sealed road to the summit." },
                { name: "Cudmore Track", desc: "Quieter alternative with a more shaded, scenic route." },
              ].map((track) => (
                <Card key={track.name} className="border-2 hover:border-primary/30 transition-colors">
                  <CardContent className="p-5">
                    <h3 className="font-semibold text-foreground mb-2">{track.name}</h3>
                    <p className="text-sm text-muted-foreground">{track.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            <p className="mt-4 text-sm text-muted-foreground flex items-center gap-2">
              <Thermometer className="w-4 h-4 text-primary" />
              Bring water — it gets hot quickly in North Queensland.
            </p>
          </section>

          {/* Local Tips */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-6">🗺️ Local Tips</h2>
            <Card className="border-2 bg-primary/5">
              <CardContent className="p-6 space-y-3">
                {[
                  "Parking fills at sunset — arrive a bit early for the best spot.",
                  "Sea breeze is usually cooler at the summit.",
                  "Combine with a Strand visit or Magnetic Island day trip.",
                  "Early morning or evening is most comfortable.",
                ].map((tip, i) => (
                  <p key={i} className="text-muted-foreground flex items-start gap-3">
                    <span className="text-primary font-bold">•</span>
                    <span>{tip}</span>
                  </p>
                ))}
              </CardContent>
            </Card>
          </section>

          {/* Quick Summary */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-6">Quick Summary</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { icon: <Camera className="w-5 h-5" />, label: "Best for", value: "Views & photos" },
                { icon: <Clock className="w-5 h-5" />, label: "Time needed", value: "20–60 minutes" },
                { icon: <DollarSign className="w-5 h-5" />, label: "Cost", value: "Free" },
                { icon: <Car className="w-5 h-5" />, label: "Access", value: "Drive or walk" },
              ].map((item) => (
                <Card key={item.label} className="border-2 text-center">
                  <CardContent className="p-4 space-y-2">
                    <div className="mx-auto w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                      {item.icon}
                    </div>
                    <p className="text-xs text-muted-foreground">{item.label}</p>
                    <p className="font-semibold text-foreground text-sm">{item.value}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Internal Links */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-6">Explore More of Townsville</h2>
            <div className="flex flex-wrap gap-3">
              <Button asChild variant="outline">
                <Link to="/things-to-do">Things to Do</Link>
              </Button>
              <Button asChild variant="outline">
                <Link to="/guides/magnetic-island-day-trip">Magnetic Island Guide</Link>
              </Button>
              <Button asChild variant="outline">
                <Link to="/the-strand">The Strand Guide</Link>
              </Button>
              <Button asChild variant="outline">
                <Link to="/local-tips">Local Tips</Link>
              </Button>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default CastleHill;
