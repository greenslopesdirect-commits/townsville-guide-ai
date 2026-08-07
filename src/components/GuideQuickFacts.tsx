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
  Baby,
  Sparkles,
  Waves,
  CalendarDays,
  TreePine,
  Building2,
  Flame,
  CloudSun,
  PhoneCall,
  Coffee,
  Umbrella,
  ShieldAlert,
  Shirt,
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
  push(CalendarDays, "Typical stinger season", data.stingerSeason);
  push(Flame, "Highest-risk period", data.highestRiskPeriod);
  push(Waves, "Best swimming choice", data.bestSwimmingChoice);
  push(ShieldAlert, "Stinger nets", data.stingerNets);
  push(Shirt, "Protective clothing", data.protectiveClothing);
  push(AlertTriangle, "Main species of concern", data.speciesOfConcern);
  push(CloudSun, "Before swimming", data.beforeSwimming);
  push(Sparkles, "Don't miss", data.dontMiss);
  push(CalendarDays, "Ideal first visit", data.idealFirstVisit);
  push(Clock, "Minimum worthwhile stay", data.minimumStay);
  push(MapPin, "Best area for first timers", data.bestArea);
  push(AlertTriangle, "Main planning issue", data.mainPlanningIssue);
  push(
    Users,
    "Best for",
    data.bestFor?.filter(Boolean).length ? data.bestFor.filter(Boolean).join(" · ") : undefined,
  );
  push(Sparkles, "Best overall", data.bestOverall);
  push(MapPin, "Best free view", data.bestView);
  push(Waves, "Best free swimming", data.bestSwimming);
  push(Waves, "Best for swimming", data.bestForSwimming);
  push(Baby, "Best with kids", data.bestWithKids);
  push(Route, "Best walk", data.bestWalk);
  push(Users, "Best without a car", data.bestWithoutCar);
  push(Sun, "Best sunset", data.bestSunset);
  push(Baby, "Best ages", data.bestAges);
  push(Sparkles, "Best free activity", data.bestFreeActivity);
  push(Ticket, "Best paid activity", data.bestPaidActivity);
  push(Sun, "Best hot-day option", data.bestHotDayOption);
  push(Ship, "Best day trip", data.bestDayTrip);
  push(CalendarDays, "Typical family stay", data.typicalStay);
  push(Sun, "Best outdoor time", data.bestOutdoorTime);
  push(Waves, "Best free cool-down", data.bestCoolDown);
  push(TreePine, "Best shaded option", data.bestShadedOption);
  push(Building2, "Best indoor break", data.bestIndoorBreak);
  push(Flame, "Hardest activity in heat", data.hardestInHeat);
  push(Baby, "Best family approach", data.bestFamilyApproach);
  push(AlertTriangle, "Main risk", data.mainRisk);
  push(Dog, "Best dog beach", data.bestDogBeach);
  push(Dog, "Best central off-leash beach", data.bestCentralOffLeashBeach);
  push(Dog, "Best fenced option", data.bestFencedOption);
  push(Waves, "Best for dog swimming", data.bestDogSwimming);
  push(AlertTriangle, "Main rule", data.mainRule);
  push(Building2, "Best indoor attraction", data.bestIndoorAttraction);
  push(Coffee, "Best food option", data.bestFoodOption);
  push(Umbrella, "Best light-rain option", data.bestLightRainOption);
  push(AlertTriangle, "Avoid in heavy rain", data.avoidInHeavyRain);
  push(AlertTriangle, "Main consideration", data.mainConsideration);
  push(CloudSun, "Check before heading out", data.checkBeforeHeadingOut);
  push(PhoneCall, "Emergency", data.emergency);
  push(AlertTriangle, "Main challenge", data.mainChallenge);
  push(Sparkles, "Main attraction", data.mainAttraction);
  push(Clock, "Time needed", data.timeNeeded);


  push(Ticket, "Cost", data.cost);
  push(Route, "Route length", data.routeLength);
  push(MapPin, "Distance from CBD", data.distanceFromCBD);
  push(Timer, "Driving time from CBD", data.drivingTimeFromCBD);
  push(Ship, "Journey time", data.journeyTime);
  push(Car, "Car needed", data.carNeeded);
  push(ParkingCircle, "Parking", data.parking);
  push(Route, "Public transport", data.publicTransport);
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
