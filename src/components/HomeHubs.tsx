import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calculator, CalendarDays, Compass } from "lucide-react";

export const ThingsToDoCta = () => (
  <section className="py-14 px-4 bg-background">
    <div className="container mx-auto max-w-4xl">
      <div className="rounded-2xl border-2 border-primary/25 bg-primary/5 p-6 sm:p-8 text-center space-y-4">
        <Compass className="w-8 h-8 text-primary mx-auto" aria-hidden />
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">
          Not Sure Where to Start?
        </h2>
        <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
          Our Things to Do hub brings together attractions, lookouts, water activities, family
          options and wet-weather ideas in one place, sorted by the kind of trip you are having.
        </p>
        <Button asChild size="lg" className="gap-2 rounded-full px-7">
          <Link to="/things-to-do">
            Explore All Things to Do
            <ArrowRight className="w-4 h-4" />
          </Link>
        </Button>
      </div>
    </div>
  </section>
);

export const WeekendCalculatorCta = () => (
  <section className="py-12 px-4 bg-gradient-to-br from-[hsl(195,75%,92%)] to-[hsl(45,90%,90%)] dark:from-[hsl(195,40%,18%)] dark:to-[hsl(45,40%,15%)]">
    <div className="container mx-auto max-w-3xl text-center space-y-4">
      <Calculator className="w-8 h-8 text-primary mx-auto" aria-hidden />
      <h2 className="text-2xl md:text-3xl font-bold text-foreground">Weekend Cost Calculator</h2>
      <p className="text-muted-foreground max-w-xl mx-auto leading-relaxed">
        Get a rough estimate of what a Townsville weekend will cost for your group, covering transport,
        eating out and paid activities.
      </p>
      <Button asChild size="lg" className="gap-2 rounded-full px-7">
        <Link to="/weekend-cost-calculator">
          Estimate My Weekend Cost
          <ArrowRight className="w-4 h-4" />
        </Link>
      </Button>
    </div>
  </section>
);

export const WhereToStay = () => (
  <section className="py-16 px-4 bg-muted/30">
    <div className="container mx-auto max-w-4xl text-center space-y-5">
      <h2 className="text-3xl md:text-4xl font-bold text-foreground">Where Should You Stay?</h2>
      <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
        The best area depends on the kind of trip you are planning. The Strand and North Ward
        suit beachfront walking and family days, the CBD works for events, transport and getting
        around on foot, and Palmer Street is the main dining strip near the stadium and marina.
      </p>
      <div className="flex flex-col sm:flex-row gap-3 justify-center items-stretch sm:items-center">
        <Button asChild size="lg" className="gap-2 rounded-full px-7">
          <Link to="/accommodation">
            Compare Places to Stay
            <ArrowRight className="w-4 h-4" />
          </Link>
        </Button>
        <Button asChild size="lg" variant="outline" className="gap-2 rounded-full px-7">
          <Link to="/suburbs">Understand Townsville's Areas</Link>
        </Button>
      </div>
    </div>
  </section>
);

export const DayTrips = () => (
  <section className="py-16 px-4 bg-background">
    <div className="container mx-auto max-w-6xl">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-3 text-foreground">
        Major Day Trips
      </h2>
      <p className="text-center text-muted-foreground mb-10 text-lg max-w-2xl mx-auto">
        Two trips stand out from Townsville — the island and the rainforest range.
      </p>

      <div className="grid md:grid-cols-2 gap-6">
        <Card className="border border-border/60 overflow-hidden">
          <div className="aspect-[4/3] w-full overflow-hidden bg-muted">
            <img
              src="/images/homepage/magnetic-island-beach-townsville.webp"
              alt="Rocky beach and coastline on Magnetic Island near Townsville"
              loading="lazy"
              width={1200}
              height={900}
              className="h-full w-full object-cover object-top"
            />
          </div>
          <CardContent className="p-6 space-y-3">
            <h3 className="text-xl font-bold text-foreground">Magnetic Island</h3>
            <p className="text-muted-foreground leading-relaxed">
              The strongest day trip from Townsville: a short passenger ferry across to bays,
              beaches, walking tracks and wildlife. Plan the ferry first, then the island day.
            </p>
            <div className="flex flex-wrap gap-3 pt-1">
              <Button asChild size="sm" className="gap-1.5">
                <Link to="/guides/magnetic-island-day-trip">Day Trip Guide</Link>
              </Button>
              <Button asChild size="sm" variant="outline">
                <Link to="/guides/magnetic-island-ferry">Ferry Guide</Link>
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card className="border border-border/60">
          <CardContent className="p-6 space-y-3">
            <h3 className="text-xl font-bold text-foreground">Paluma Range</h3>
            <p className="text-muted-foreground leading-relaxed">
              The main rainforest and mountain day trip north of the city, with cooler air and
              range scenery. Access along the range road and to Little Crystal Creek can change,
              so check the current position in the guide before you drive up.
            </p>
            <div className="pt-1">
              <Button asChild size="sm" className="gap-1.5">
                <Link to="/guides/paluma-day-trip">Paluma Day Trip Guide</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      <p className="text-sm text-muted-foreground text-center mt-6">
        Shorter options closer to town include{" "}
        <Link to="/pallarenda-beach" className="text-primary hover:underline">Pallarenda</Link>,{" "}
        <Link to="/beaches" className="text-primary hover:underline">the northern beaches</Link>{" "}
        and{" "}
        <Link to="/billabong-sanctuary" className="text-primary hover:underline">Billabong Sanctuary</Link>.
      </p>
    </div>
  </section>
);

export const WhatsOn = () => (
  <section className="py-14 px-4 bg-background">
    <div className="container mx-auto max-w-4xl">
      <div className="rounded-2xl border border-border/60 p-6 sm:p-8 text-center space-y-4">
        <CalendarDays className="w-8 h-8 text-primary mx-auto" aria-hidden />
        <h2 className="text-2xl sm:text-3xl font-bold text-foreground">What's On in Townsville</h2>
        <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto">
          Townsville hosts sport, festivals, markets and community events throughout the year. Our
          events guide explains the seasonal pattern and links to the official What's On calendar
          so you can check dates while you are here.
        </p>
        <Button asChild size="lg" variant="outline" className="gap-2 rounded-full px-7">
          <Link to="/events">
            See the Events Guide
            <ArrowRight className="w-4 h-4" />
          </Link>
        </Button>
      </div>
    </div>
  </section>
);
