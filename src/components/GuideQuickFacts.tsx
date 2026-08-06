import { useLocation } from "react-router-dom";
import {
  Clock,
  Ticket,
  MapPin,
  Car,
  ParkingCircle,
  Accessibility,
  Dog,
  Sun,
  Users,
  Timer,
  Bath,
  Quote,
  Ship,
  Route,
  AlertTriangle,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { getQuickFacts, type QuickFacts } from "@/data/guideQuickFacts";

interface GuideQuickFactsProps {
  facts?: QuickFacts;
  className?: string;
}

type Row = { icon: typeof Clock; label: string; value: string };

const GuideQuickFacts = ({ facts, className }: GuideQuickFactsProps) => {
  const location = useLocation();
  const data = facts ?? getQuickFacts(location.pathname);

  if (!data) return null;

  const rows: Row[] = [];
  const push = (icon: typeof Clock, label: string, value?: string) => {
    if (value && value.trim()) rows.push({ icon, label, value: value.trim() });
  };

  push(AlertTriangle, "Current access", data.currentAccess);
  push(
    Users,
    "Best for",
    data.bestFor?.filter(Boolean).length ? data.bestFor.filter(Boolean).join(" · ") : undefined,
  );
  push(Baby, "Best ages", data.bestAges);
  push(Sparkles, "Best free activity", data.bestFreeActivity);
  push(Ticket, "Best paid activity", data.bestPaidActivity);
  push(Sun, "Best hot-day option", data.bestHotDayOption);
  push(Ship, "Best day trip", data.bestDayTrip);
  push(CalendarDays, "Typical family stay", data.typicalStay);
  push(AlertTriangle, "Main challenge", data.mainChallenge);
  push(Clock, "Time needed", data.timeNeeded);

  push(Ticket, "Cost", data.cost);
  push(Route, "Route length", data.routeLength);
  push(MapPin, "Distance from CBD", data.distanceFromCBD);
  push(Timer, "Driving time from CBD", data.drivingTimeFromCBD);
  push(Ship, "Journey time", data.journeyTime);
  push(Car, "Car needed", data.carNeeded);
  push(ParkingCircle, "Parking", data.parking);
  push(Bath, "Toilets", data.toilets);
  push(Accessibility, "Accessibility", data.accessibility);
  push(Dog, "Dog friendly", data.dogFriendly);
  push(Sun, "Best time to visit", data.bestTimeToVisit);

  const verdict = data.localVerdict?.trim();
  if (!rows.length && !verdict) return null;

  return (
    <section
      aria-labelledby="guide-quick-facts-heading"
      className={cn("rounded-xl border border-border bg-muted/40 p-5 md:p-6", className)}
    >
      <h2
        id="guide-quick-facts-heading"
        className="text-lg font-semibold text-foreground mb-4"
      >
        Quick visitor information
      </h2>

      {rows.length > 0 && (
        <dl className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3">
          {rows.map(({ icon: Icon, label, value }) => (
            <div key={label} className="flex items-start gap-3 text-sm">
              <Icon className="w-4 h-4 mt-0.5 flex-shrink-0 text-primary" aria-hidden="true" />
              <div className="min-w-0">
                <dt className="font-medium text-foreground">{label}</dt>
                <dd className="text-muted-foreground leading-relaxed break-words">{value}</dd>
              </div>
            </div>
          ))}
        </dl>
      )}

      {verdict && (
        <div
          className={cn(
            "rounded-lg border border-border/60 bg-background/70 p-4 flex items-start gap-3",
            rows.length > 0 && "mt-5",
          )}
        >
          <Quote className="w-4 h-4 mt-0.5 flex-shrink-0 text-primary" aria-hidden="true" />
          <div>
            <p className="text-sm font-medium text-foreground">Local verdict</p>
            <p className="text-sm text-muted-foreground leading-relaxed">{verdict}</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default GuideQuickFacts;
