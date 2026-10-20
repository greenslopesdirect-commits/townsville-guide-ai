import { Link } from "react-router-dom";
import { ArrowRight, Backpack, Home } from "lucide-react";

type Choice = { label: string; note: string; to: string };

const VISITING: Choice[] = [
  { label: "First Time in Townsville", note: "How long to stay, where to base yourself, what to prioritise.", to: "/first-time-in-townsville" },
  { label: "Things to Do", note: "Attractions, lookouts, water activities and wet-weather ideas.", to: "/things-to-do" },
  { label: "Townsville in One Day", note: "A realistic single-day plan.", to: "/townsville-in-one-day" },
  { label: "Magnetic Island Day Trip", note: "Ferry, bays and walks, planned properly.", to: "/guides/magnetic-island-day-trip" },
  { label: "Beaches and Stinger Season", note: "Where you can swim and what to check first.", to: "/beaches" },
  { label: "Where to Stay", note: "Which area suits which kind of trip.", to: "/accommodation" },
];

const LIVING: Choice[] = [
  { label: "What's On", note: "Events, markets and festivals, with the council calendar.", to: "/events" },
  { label: "Townsville Directory", note: "Local businesses and services, by category and area.", to: "/directory" },
  { label: "Food & Drink", note: "Where to eat, area by area.", to: "/food" },
  { label: "Dog-Friendly Townsville", note: "Off-leash beaches, parks and rules.", to: "/dog-friendly" },
  { label: "Nature and Walks", note: "Parks, lookouts and wildlife close to home.", to: "/nature" },
  { label: "Useful Contacts", note: "Emergency, health, council and transport numbers.", to: "/useful-contacts" },
];

const Panel = ({
  id,
  title,
  intro,
  icon: Icon,
  items,
}: {
  id: string;
  title: string;
  intro: string;
  icon: React.ComponentType<{ className?: string }>;
  items: Choice[];
}) => (
  <div id={id} className="rounded-2xl border-2 border-primary/20 bg-card p-6 shadow-sm">
    <div className="flex items-center gap-3 mb-2">
      <span className="p-2 rounded-lg bg-primary/10 text-primary">
        <Icon className="w-6 h-6" />
      </span>
      <h2 className="text-2xl font-bold text-foreground">{title}</h2>
    </div>
    <p className="text-muted-foreground mb-4">{intro}</p>
    <ul className="space-y-2">
      {items.map((item) => (
        <li key={item.to}>
          <Link
            to={item.to}
            className="group flex items-start justify-between gap-3 rounded-lg border border-border/60 px-4 py-3 transition-colors hover:border-primary/40"
          >
            <span>
              <span className="block font-semibold text-foreground group-hover:text-primary transition-colors">
                {item.label}
              </span>
              <span className="block text-sm text-muted-foreground">{item.note}</span>
            </span>
            <ArrowRight className="w-4 h-4 mt-1 shrink-0 text-primary" aria-hidden />
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

const AudienceChoice = () => (
  <section aria-labelledby="audience-heading" className="py-12 px-4 bg-background">
    <div className="container mx-auto max-w-6xl">
      <h2 id="audience-heading" className="text-3xl md:text-4xl font-bold text-center mb-8 text-foreground">
        Which describes you?
      </h2>
      <div className="grid gap-6 md:grid-cols-2">
        <Panel
          id="visiting"
          title="Visiting Townsville"
          intro="Planning a trip? Start with these."
          icon={Backpack}
          items={VISITING}
        />
        <Panel
          id="living"
          title="Live in Townsville"
          intro="Already here? These are the pages locals use most."
          icon={Home}
          items={LIVING}
        />
      </div>
    </div>
  </section>
);

export default AudienceChoice;
