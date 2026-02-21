import { MapPin, ArrowRight, Umbrella, Waves, Dog, Sun, Anchor, ShieldCheck, Thermometer } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import SEOHead from "@/components/SEOHead";
import LocalInsightCard from "@/components/LocalInsightCard";
import StingerSeasonAlert from "@/components/StingerSeasonAlert";

const Beaches = () => {

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SEOHead
        title="Best Beaches in Townsville — Swimming, Safety & Local Tips"
        description="Local guide to the best beaches in Townsville. Find stinger net locations, safe swimming spots, quiet beaches, and dog-friendly areas across North Queensland."
        canonical="https://www.myaussieguide.com.au/beaches"
      />

      <main className="flex-grow container mx-auto px-4 py-8 max-w-4xl space-y-10">

        {/* Intro Section */}
        <section className="space-y-4 text-center sm:text-left">
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground">
            Best Beaches in Townsville — Swimming, Safety & Local Tips
          </h1>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl">
            Townsville offers a variety of beaches for swimming, walking, relaxing, and exploring. This guide covers the safest swimming spots, stinger-net beaches, quieter locations, and dedicated dog-friendly areas across North Queensland.
          </p>
          <div className="h-px bg-border w-full mt-4" />
        </section>

        {/* Local Tip */}
        <LocalInsightCard variant="tip" title="☀️ Beach Timing Tip">
          <p>
            Early mornings and evenings are best for beach walks in Townsville. Sand temperatures can become very hot during the day, and dogs can overheat quickly in tropical conditions.
          </p>
        </LocalInsightCard>

        {/* Stinger Alert */}
        <StingerSeasonAlert />

        {/* NEW: Stinger Safety Authority Block */}
        <Card className="border-2 border-amber-200 bg-amber-50">
          <CardContent className="p-5 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div className="p-3 rounded-xl bg-amber-100 text-amber-700 flex-shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div className="flex-1 min-w-0">
              <h2 className="text-lg font-semibold text-foreground mb-1">
                2026 Stinger Safety Guide
              </h2>
              <p className="text-sm text-muted-foreground">
                Swimming in summer? See our dedicated guide covering stinger nets, safe beaches, Magnetic Island advice, and what to do if stung.
              </p>
            </div>
            <Button asChild className="w-full sm:w-auto flex-shrink-0">
              <Link to="/guides/stinger-safety">
                View Stinger Safety Guide
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </CardContent>
        </Card>

        {/* Beach Safety Section */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-foreground">Beach Safety in Townsville</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="flex items-start gap-3 p-4 rounded-lg bg-muted/40 border">
              <ShieldCheck className="w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-medium text-sm text-foreground">Stinger Season</p>
                <p className="text-xs text-muted-foreground mt-1">
                  Marine stingers are present November to May. Always swim within stinger nets during this period.
                </p>
              </div>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
};

export default Beaches;
