import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Compass,
  TreePine,
  Utensils,
  ShoppingBag,
  CalendarDays,
  Waves,
  Accessibility,
  Dog,
  Sun,
  CloudRain,
  Plane,
  Phone,
  Bus,
  Map,
  ShieldAlert,
  Store,
} from "lucide-react";

type LinkItem = {
  title: string;
  description: string;
  link: string;
  icon?: React.ComponentType<{ className?: string }>;
};

const planning: LinkItem[] = [
  {
    title: "First Visit",
    description: "How long to stay, where to base yourself and what to prioritise.",
    link: "/first-time-in-townsville",
  },
  {
    title: "One Day",
    description: "A realistic single-day plan that does not try to fit in too much.",
    link: "/townsville-in-one-day",
  },
  {
    title: "Without a Car",
    description: "Which areas work on foot, by bus, taxi or rideshare.",
    link: "/townsville-without-a-car",
  },
  {
    title: "With Kids",
    description: "Family-friendly places, free activities and heat-aware planning.",
    link: "/townsville-with-kids",
  },
  {
    title: "On a Budget",
    description: "Free lookouts, waterfront areas, parks and walks.",
    link: "/guides/free-things",
  },
  {
    title: "Local Tips",
    description: "Local habits, timing advice and mistakes visitors often make.",
    link: "/local-tips",
  },
];

const interests: LinkItem[] = [
  { title: "Nature", description: "Walks, wetlands, lookouts and national park country.", link: "/nature", icon: TreePine },
  { title: "Food & Drink", description: "Where to eat across Palmer Street, the CBD and The Strand.", link: "/food", icon: Utensils },
  { title: "Shopping", description: "Centres, markets and local shopping areas.", link: "/shopping", icon: ShoppingBag },
  { title: "Events", description: "Sport, festivals, markets and community events.", link: "/events", icon: CalendarDays },
  { title: "Beaches", description: "Which beaches suit which kind of visit.", link: "/beaches", icon: Waves },
  { title: "Accessible Townsville", description: "Planning guidance for flatter routes and easier access.", link: "/accessible-townsville", icon: Accessibility },
  { title: "Dog-Friendly", description: "Off-leash areas, dog beaches and pet-friendly spots.", link: "/dog-friendly", icon: Dog },
];

const practical: LinkItem[] = [
  { title: "Townsville Airport & Flights", description: "Arrivals, transport, parking and car hire.", link: "/townsville-airport", icon: Plane },
  { title: "Useful Contacts", description: "Emergency numbers, health services and council.", link: "/useful-contacts", icon: Phone },
  { title: "Getting Around", description: "Buses, taxis, rideshare and walkable areas.", link: "/townsville-without-a-car", icon: Bus },
  { title: "Townsville Areas", description: "Where the main parts of the city sit and what each suits.", link: "/suburbs", icon: Map },
  { title: "Marine Stinger Safety", description: "How to check conditions and swim sensibly.", link: "/guides/stinger-safety", icon: ShieldAlert },
  { title: "Townsville Directory", description: "Visitor-focused local businesses and places.", link: "/directory", icon: Store },
];

const localLinks: LinkItem[] = [
  { title: "Events", description: "See festivals, sport, markets and where to check what's on now.", link: "/events", icon: CalendarDays },
  { title: "Townsville Directory", description: "Browse useful local businesses, services and places.", link: "/directory", icon: Store },
  { title: "Food & Drink", description: "Find dining areas, cafés and local food ideas.", link: "/food", icon: Utensils },
  { title: "Shopping", description: "Compare Townsville shopping centres, markets and local shopping areas.", link: "/shopping", icon: ShoppingBag },
  { title: "Beaches", description: "Explore Townsville's beaches and coastal areas.", link: "/beaches", icon: Waves },
  { title: "Dog Friendly", description: "Find dog-friendly beach, park and local outing information.", link: "/dog-friendly", icon: Dog },
  { title: "Suburbs & Areas", description: "Understand Townsville's main suburbs and local areas.", link: "/suburbs", icon: Map },
  { title: "Useful Contacts", description: "Find practical local, emergency and visitor contact information.", link: "/useful-contacts", icon: Phone },
];

const CardGrid = ({ items, cols = "lg:grid-cols-3" }: { items: LinkItem[]; cols?: string }) => (
  <div className={`grid sm:grid-cols-2 ${cols} gap-4`}>
    {items.map((item) => {
      const Icon = item.icon;
      return (
        <Link
          key={item.link + item.title}
          to={item.link}
          className="group block rounded-lg outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
        >
          <Card className="h-full border border-border/60 transition-colors hover:border-primary/40">
            <CardContent className="p-5">
              <div className="flex items-start gap-3">
                {Icon && (
                  <span className="p-2 rounded-lg bg-primary/10 text-primary shrink-0">
                    <Icon className="w-5 h-5" />
                  </span>
                )}
                <div className="min-w-0">
                  <h3 className="font-bold text-foreground group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mt-1">
                    {item.description}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </Link>
      );
    })}
  </div>
);

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

export const PlanYourVisit = () => (
  <section className="py-16 px-4 bg-muted/30">
    <div className="container mx-auto max-w-6xl">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-3 text-foreground">
        Plan Your Visit
      </h2>
      <p className="text-center text-muted-foreground mb-10 text-lg max-w-2xl mx-auto">
        Pick the planning guide that matches your trip.
      </p>
      <CardGrid items={planning} />
    </div>
  </section>
);

export const ExploreByInterest = () => (
  <section className="py-16 px-4 bg-background">
    <div className="container mx-auto max-w-6xl">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-3 text-foreground">
        Explore Townsville Your Way
      </h2>
      <p className="text-center text-muted-foreground mb-10 text-lg max-w-2xl mx-auto">
        Head straight to the hub that matches what you are interested in.
      </p>
      <CardGrid items={interests} />
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
        <Card className="border border-border/60">
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

export const WeatherAndWater = () => (
  <section className="py-16 px-4 bg-muted/30">
    <div className="container mx-auto max-w-6xl">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-3 text-foreground">
        Planning Around the Weather &amp; the Water
      </h2>
      <p className="text-center text-muted-foreground mb-10 text-lg max-w-2xl mx-auto">
        Townsville days often need adjusting for heat, rain or swimming conditions.
      </p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <Link to="/guides/beat-the-heat" className="group block rounded-lg">
          <Card className="h-full border border-border/60 transition-colors hover:border-primary/40">
            <CardContent className="p-5 space-y-2">
              <Sun className="w-6 h-6 text-primary" aria-hidden />
              <h3 className="font-bold text-foreground">Hot Day</h3>
              <p className="text-sm text-muted-foreground">Cooler timing, shade and water-based options.</p>
            </CardContent>
          </Card>
        </Link>
        <Link to="/guides/rainy-day-activities" className="group block rounded-lg">
          <Card className="h-full border border-border/60 transition-colors hover:border-primary/40">
            <CardContent className="p-5 space-y-2">
              <CloudRain className="w-6 h-6 text-primary" aria-hidden />
              <h3 className="font-bold text-foreground">Rainy Day</h3>
              <p className="text-sm text-muted-foreground">Indoor and undercover ideas when storms roll through.</p>
            </CardContent>
          </Card>
        </Link>
        <Link to="/beaches" className="group block rounded-lg">
          <Card className="h-full border border-border/60 transition-colors hover:border-primary/40">
            <CardContent className="p-5 space-y-2">
              <Waves className="w-6 h-6 text-primary" aria-hidden />
              <h3 className="font-bold text-foreground">Beaches</h3>
              <p className="text-sm text-muted-foreground">Not every beach suits swimming — see what each is best for.</p>
            </CardContent>
          </Card>
        </Link>
        <Link to="/guides/stinger-safety" className="group block rounded-lg">
          <Card className="h-full border border-border/60 transition-colors hover:border-primary/40">
            <CardContent className="p-5 space-y-2">
              <ShieldAlert className="w-6 h-6 text-primary" aria-hidden />
              <h3 className="font-bold text-foreground">Stinger Safety</h3>
              <p className="text-sm text-muted-foreground">How to check current advice before entering the water.</p>
            </CardContent>
          </Card>
        </Link>
      </div>
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

export const PracticalResources = () => (
  <section className="py-16 px-4 bg-muted/30">
    <div className="container mx-auto max-w-6xl">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-3 text-foreground">
        Practical Visitor Resources
      </h2>
      <p className="text-center text-muted-foreground mb-10 text-lg max-w-2xl mx-auto">
        The practical pages visitors reach for most, including the Townsville Directory of local
        businesses and places.
      </p>
      <CardGrid items={practical} />
    </div>
  </section>
);

export const ForLocals = () => (
  <section className="py-16 px-4 bg-muted/30">
    <div className="container mx-auto max-w-6xl">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-3 text-foreground">
        Living in Townsville?
      </h2>
      <p className="text-center text-muted-foreground mb-10 text-lg max-w-2xl mx-auto">
        Townsville Guide is useful for locals too. Find events, local businesses, food, shopping,
        beaches, suburb information and practical Townsville resources.
      </p>
      <CardGrid items={localLinks} />
      <div className="mt-8 flex flex-wrap justify-center items-center gap-x-4 gap-y-2 text-sm">
        <span className="text-muted-foreground">Also useful for locals:</span>
        <Link to="/riverway" className="text-primary hover:underline">Riverway</Link>
        <Link to="/local-tips" className="text-primary hover:underline">Local Tips</Link>
        <Link to="/nature" className="text-primary hover:underline">Nature</Link>
        <Link to="/accessible-townsville" className="text-primary hover:underline">Accessible Townsville</Link>
      </div>
    </div>
  </section>
);
