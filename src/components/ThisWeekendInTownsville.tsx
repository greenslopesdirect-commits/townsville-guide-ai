import { useEffect, useState } from "react";
import { CalendarDays, ExternalLink } from "lucide-react";
import {
  COUNCIL_WHATS_ON_URL,
  THIS_WEEKEND,
  type ThisWeekendData,
  type WeekendItem,
} from "@/data/thisWeekend";

const MAX_ITEMS = 6;
const ISO_DATE = /^\d{4}-\d{2}-\d{2}$/;

/** Today's date in Townsville (Australia/Brisbane, no daylight saving) as YYYY-MM-DD. */
const todayInTownsville = (): string =>
  new Intl.DateTimeFormat("en-CA", {
    timeZone: "Australia/Brisbane",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(new Date());

const formatDay = (iso: string, withYear = false): string =>
  new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-AU", {
    timeZone: "UTC",
    weekday: "short",
    day: "numeric",
    month: "long",
    ...(withYear ? { year: "numeric" } : {}),
  });

const isValidItem = (i: WeekendItem): boolean =>
  Boolean(i && i.name && i.place && i.time && /^https:\/\//.test(i.link));

/** Returns the items to show, or null when the data is empty, malformed or out of date. */
const currentWeekendItems = (data: ThisWeekendData, today: string): WeekendItem[] | null => {
  if (!ISO_DATE.test(data.from) || !ISO_DATE.test(data.to)) return null;
  if (today > data.to) return null;
  const items = data.items.filter(isValidItem).slice(0, MAX_ITEMS);
  return items.length > 0 ? items : null;
};

const CouncilCalendarLink = ({ label }: { label: string }) => (
  <a
    href={COUNCIL_WHATS_ON_URL}
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center gap-1.5 text-primary font-medium hover:underline"
  >
    {label}
    <ExternalLink className="w-4 h-4" aria-hidden="true" />
  </a>
);

/**
 * Weekly "This weekend in Townsville" block, driven by src/data/thisWeekend.ts.
 *
 * It renders the fallback on the server and on first paint, then checks today's date in the
 * browser. That way the pre-rendered HTML can never show a past weekend as current.
 */
const ThisWeekendInTownsville = ({ data = THIS_WEEKEND }: { data?: ThisWeekendData }) => {
  const [items, setItems] = useState<WeekendItem[] | null>(null);

  useEffect(() => {
    setItems(currentWeekendItems(data, todayInTownsville()));
  }, [data]);

  return (
    <section
      aria-labelledby="this-weekend"
      className="mb-10 rounded-xl border-2 border-primary/30 bg-primary/5 p-6"
    >
      <h2 id="this-weekend" className="text-2xl font-bold mb-1 flex items-center gap-2">
        <CalendarDays className="w-6 h-6 text-primary" aria-hidden="true" />
        This weekend in Townsville
      </h2>

      {items ? (
        <>
          <p className="text-sm text-muted-foreground mb-4">
            {formatDay(data.from)} to {formatDay(data.to, true)}
          </p>
          <ul className="space-y-3 mb-4">
            {items.map((item) => (
              <li key={`${item.name}-${item.time}`} className="rounded-lg border bg-card p-4">
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-foreground hover:text-primary hover:underline"
                >
                  {item.name}
                </a>
                <p className="text-sm text-muted-foreground mt-1">
                  {item.place} · {item.time}
                </p>
              </li>
            ))}
          </ul>
          <p className="text-sm text-muted-foreground">
            Times and details can change, so confirm with the organiser before you go. Full listings:{" "}
            <CouncilCalendarLink label="What's On Townsville" />
          </p>
        </>
      ) : (
        <>
          <p className="text-muted-foreground leading-relaxed mb-3">
            Our weekend picks aren't up to date right now. The official council calendar lists
            what's on this weekend, including markets, sport, music and community events.
          </p>
          <CouncilCalendarLink label="See what's on at What's On Townsville" />
        </>
      )}
    </section>
  );
};

export default ThisWeekendInTownsville;
