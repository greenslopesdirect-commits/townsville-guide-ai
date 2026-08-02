import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Calculator, ArrowRight, RotateCcw } from "lucide-react";

type Option = { value: string; label: string; perPerson: number };

const TRANSPORT: Option[] = [
  { value: "walk", label: "Walking / already here", perPerson: 0 },
  { value: "car", label: "Own car (fuel + parking)", perPerson: 25 },
  { value: "rideshare", label: "Rideshare / taxi", perPerson: 45 },
  { value: "ferry", label: "Magnetic Island ferry return", perPerson: 42 },
];

const FOOD: Option[] = [
  { value: "picnic", label: "Picnic & self-catering", perPerson: 25 },
  { value: "casual", label: "Cafés & casual eats", perPerson: 65 },
  { value: "restaurant", label: "Restaurants & a few drinks", perPerson: 120 },
];

const ACTIVITIES: Option[] = [
  { value: "free", label: "Free stuff (Strand, Castle Hill, beaches)", perPerson: 0 },
  { value: "mixed", label: "A mix of free and paid", perPerson: 55 },
  { value: "paid", label: "Paid attractions (Reef HQ, Billabong, tours)", perPerson: 130 },
];

const ACCOM: Option[] = [
  { value: "none", label: "Day trip — no accommodation", perPerson: 0 },
  { value: "budget", label: "Budget / hostel (2 nights)", perPerson: 90 },
  { value: "mid", label: "Mid-range hotel (2 nights)", perPerson: 190 },
  { value: "premium", label: "Premium waterfront (2 nights)", perPerson: 350 },
];

const money = (n: number) =>
  n.toLocaleString("en-AU", { style: "currency", currency: "AUD", maximumFractionDigits: 0 });

const Select = ({
  id,
  label,
  options,
  value,
  onChange,
}: {
  id: string;
  label: string;
  options: Option[];
  value: string;
  onChange: (v: string) => void;
}) => (
  <div className="space-y-2">
    <Label htmlFor={id}>{label}</Label>
    <select
      id={id}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full rounded-lg border-2 border-border bg-background text-foreground px-3 py-3 text-base focus:outline-none focus:ring-2 focus:ring-ring"
    >
      {options.map((o) => (
        <option key={o.value} value={o.value}>
          {o.label}
        </option>
      ))}
    </select>
  </div>
);

const WeekendCostCalculator = () => {
  const [adults, setAdults] = useState(2);
  const [kids, setKids] = useState(0);
  const [transport, setTransport] = useState("car");
  const [food, setFood] = useState("casual");
  const [activities, setActivities] = useState("mixed");
  const [accom, setAccom] = useState("none");
  const [showResult, setShowResult] = useState(false);

  const result = useMemo(() => {
    const rate = (list: Option[], v: string) => list.find((o) => o.value === v)?.perPerson ?? 0;
    // Kids counted at half rate for food/activities/transport, free for accommodation sharing.
    const people = adults + kids * 0.5;
    const lines = [
      { label: "Getting around", amount: Math.round(rate(TRANSPORT, transport) * people) },
      { label: "Food & drink", amount: Math.round(rate(FOOD, food) * people) },
      { label: "Activities", amount: Math.round(rate(ACTIVITIES, activities) * people) },
      { label: "Accommodation", amount: Math.round(rate(ACCOM, accom) * Math.max(adults, 1)) },
    ].filter((l) => l.amount > 0);
    const total = lines.reduce((s, l) => s + l.amount, 0);
    return { lines, total };
  }, [adults, kids, transport, food, activities, accom]);

  return (
    <>
      <SEOHead
        title="Townsville Weekend Cost Calculator"
        description="Estimate what a weekend in Townsville will cost you — food, transport, activities and accommodation, tailored to your group size."
        canonical="/weekend-cost-calculator"
      />

      <div className="min-h-screen py-12 px-4">
        <div className="container mx-auto max-w-2xl">
          <header className="text-center mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/15 text-primary text-sm font-medium mb-4">
              <Calculator className="w-4 h-4" />
              Free local planning tool
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
              Townsville Weekend Cost Calculator
            </h1>
            <p className="text-muted-foreground">
              A quick, honest estimate based on real local prices. No email required.
            </p>
          </header>

          <Card className="p-6 space-y-5">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="adults">Adults</Label>
                <input
                  id="adults"
                  type="number"
                  min={1}
                  max={12}
                  value={adults}
                  onChange={(e) => setAdults(Math.max(1, Math.min(12, Number(e.target.value) || 1)))}
                  className="w-full rounded-lg border-2 border-border bg-background text-foreground px-3 py-3 text-base focus:outline-none focus:ring-2 focus:ring-ring"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="kids">Kids</Label>
                <input
                  id="kids"
                  type="number"
                  min={0}
                  max={12}
                  value={kids}
                  onChange={(e) => setKids(Math.max(0, Math.min(12, Number(e.target.value) || 0)))}
                  className="w-full rounded-lg border-2 border-border bg-background text-foreground px-3 py-3 text-base focus:outline-none focus:ring-2 focus:ring-ring"
                />
              </div>
            </div>

            <Select id="transport" label="Getting around" options={TRANSPORT} value={transport} onChange={setTransport} />
            <Select id="food" label="Food & drink style" options={FOOD} value={food} onChange={setFood} />
            <Select id="activities" label="Activities" options={ACTIVITIES} value={activities} onChange={setActivities} />
            <Select id="accom" label="Accommodation" options={ACCOM} value={accom} onChange={setAccom} />

            <Button size="lg" className="w-full h-12 text-base font-semibold" onClick={() => setShowResult(true)}>
              <Calculator className="w-5 h-5" />
              Calculate My Weekend Cost
            </Button>
          </Card>

          {showResult && (
            <Card className="p-6 mt-6">
              <h2 className="text-xl font-bold text-foreground mb-1">Your estimated weekend</h2>
              <p className="text-sm text-muted-foreground mb-4">
                For {adults} adult{adults > 1 ? "s" : ""}
                {kids > 0 ? ` and ${kids} kid${kids > 1 ? "s" : ""}` : ""}.
              </p>

              <div className="text-4xl font-bold text-primary text-center my-6">{money(result.total)}</div>

              <div className="space-y-2">
                {result.lines.map((l) => (
                  <div key={l.label} className="flex justify-between rounded-lg bg-muted px-4 py-3 text-sm">
                    <span className="text-muted-foreground">{l.label}</span>
                    <span className="font-semibold text-foreground">{money(l.amount)}</span>
                  </div>
                ))}
                {result.lines.length === 0 && (
                  <p className="text-sm text-muted-foreground text-center">
                    A completely free weekend — that's very doable in Townsville!
                  </p>
                )}
              </div>

              <p className="text-xs text-muted-foreground mt-4">
                Estimates only, based on typical Townsville prices. Kids are costed at roughly half an adult.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 mt-6">
                <Button asChild variant="outline" className="flex-1">
                  <Link to="/things-to-do">
                    Find things to do
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
                <Button variant="ghost" className="flex-1" onClick={() => setShowResult(false)}>
                  <RotateCcw className="w-4 h-4" />
                  Adjust my answers
                </Button>
              </div>
            </Card>
          )}
        </div>
      </div>
    </>
  );
};

export default WeekendCostCalculator;
