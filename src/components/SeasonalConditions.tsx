import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CalendarClock, ExternalLink } from "lucide-react";

const OFFICIAL_LINKS = [
  { label: "Bureau of Meteorology: Townsville forecast and warnings", href: "https://www.bom.gov.au/qld/warnings/" },
  { label: "Beachsafe: beach and patrol information", href: "https://beachsafe.org.au/" },
  { label: "Queensland Parks: park alerts and track closures", href: "https://parks.qld.gov.au/park-alerts" },
  { label: "Queensland Traffic: road conditions", href: "https://qldtraffic.qld.gov.au/" },
  { label: "Townsville Disaster Dashboard", href: "https://disaster.townsville.qld.gov.au/" },
];

interface Seasonal {
  season: string;
  stinger: string;
  heat: string;
}

/**
 * Month-based seasonal summary. This is a calendar guide only. It is not a forecast and says
 * nothing about today's conditions. `month` is 1 to 12 in Townsville time.
 */
const seasonalFor = (month: number): Seasonal => {
  const wet = month >= 11 || month <= 4;
  const stingerSeason = month >= 11 || month <= 5;

  const season = wet
    ? "Wet season (about November to April): hot and humid, with storms and heavy rain possible."
    : month === 10
      ? "Dry season (about May to October), with the hotter, more humid build-up to the wet starting."
      : "Dry season (about May to October): generally drier, with mild to warm days.";

  const stinger = stingerSeason
    ? "Stinger season (typically November to May) is on. Marine stingers can be in the water, so read the stinger guide and check signs before you swim."
    : month === 10
      ? "Stinger season usually starts in November, when Council installs seasonal nets. Stingers can occur outside the season, so check signs before you swim."
      : "Outside the usual November to May stinger season, but stingers can still occur. Check signs before you swim.";

  const heat =
    month >= 10 || month <= 4
      ? "Plan outdoor activity for early morning or late afternoon, carry water, and use sun protection."
      : "UV stays high in North Queensland all year, so use sun protection even on mild days.";

  return { season, stinger, heat };
};

/**
 * Homepage "Right now in Townsville" block. It is a seasonal guide with links to the official
 * live sources. It deliberately shows no live status, temperature or warnings.
 */
const SeasonalConditions = () => {
  const [seasonal, setSeasonal] = useState<Seasonal | null>(null);

  // Computed in the browser so pre-rendered HTML never carries a stale month.
  useEffect(() => {
    const month = Number(
      new Intl.DateTimeFormat("en-AU", { timeZone: "Australia/Brisbane", month: "numeric" }).format(new Date())
    );
    setSeasonal(seasonalFor(month));
  }, []);

  return (
    <section aria-labelledby="seasonal-heading" className="px-4 pb-8">
      <div className="container mx-auto max-w-5xl rounded-xl border border-border bg-muted/40 p-5 md:p-6">
        <h2 id="seasonal-heading" className="flex items-center gap-2 text-lg font-semibold text-foreground mb-3">
          <CalendarClock className="w-5 h-5 text-primary" aria-hidden />
          Right now in Townsville: the season
        </h2>

        {seasonal ? (
          <dl className="grid gap-3 md:grid-cols-3 text-sm">
            <div>
              <dt className="font-semibold text-foreground">Season</dt>
              <dd className="text-muted-foreground leading-relaxed">{seasonal.season}</dd>
            </div>
            <div>
              <dt className="font-semibold text-foreground">Stingers</dt>
              <dd className="text-muted-foreground leading-relaxed">
                {seasonal.stinger}{" "}
                <Link to="/guides/stinger-safety" className="text-primary underline underline-offset-2">
                  Stinger safety guide
                </Link>
              </dd>
            </div>
            <div>
              <dt className="font-semibold text-foreground">Heat and sun</dt>
              <dd className="text-muted-foreground leading-relaxed">
                {seasonal.heat}{" "}
                <Link to="/guides/beat-the-heat" className="text-primary underline underline-offset-2">
                  Beat the heat
                </Link>
              </dd>
            </div>
          </dl>
        ) : (
          <p className="text-sm text-muted-foreground leading-relaxed">
            Townsville has a dry season (about May to October) and a wet season (about November to
            April). Marine stinger season typically runs November to May.{" "}
            <Link to="/guides/stinger-safety" className="text-primary underline underline-offset-2">
              Stinger safety guide
            </Link>
          </p>
        )}

        <p className="text-sm text-muted-foreground mt-4 mb-2">
          This is a seasonal guide, not live conditions. For today's weather, warnings, beach status and
          closures, use the official sources:
        </p>
        <ul className="grid gap-x-6 gap-y-1 sm:grid-cols-2 text-sm">
          {OFFICIAL_LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-primary underline underline-offset-2"
              >
                {l.label}
                <ExternalLink className="w-3 h-3 shrink-0" aria-hidden />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default SeasonalConditions;
