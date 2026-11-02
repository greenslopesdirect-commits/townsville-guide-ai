import { THIS_WEEKEND, type ThisWeekendData } from "@/data/thisWeekend";

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

const FALLBACK_TITLE = "What's On in Townsville This Weekend: Events & Markets";
const FALLBACK_DESCRIPTION =
  "What's on in Townsville this weekend? Updated weekly: live music, markets, festivals, Cowboys and Fire games, family events and official listings.";

const ISO_DATE = /^\d{4}-\d{2}-\d{2}$/;

/** Today's date in Townsville (Australia/Brisbane, no daylight saving) as YYYY-MM-DD. */
const todayInTownsville = (): string =>
  new Intl.DateTimeFormat("en-CA", {
    timeZone: "Australia/Brisbane",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(new Date());

/** "30 Oct–1 Nov" across months, "23–25 Oct" within one month. */
const formatRange = (from: string, to: string): string => {
  const [, fm, fd] = from.split("-").map(Number);
  const [, tm, td] = to.split("-").map(Number);
  return fm === tm ? `${fd}–${td} ${MONTHS[fm - 1]}` : `${fd} ${MONTHS[fm - 1]}–${td} ${MONTHS[tm - 1]}`;
};

/**
 * Title and meta description for /events. While the weekend list in thisWeekend.ts is current (same
 * rule as the "This weekend in Townsville" box) they name the weekend; otherwise they fall back to the
 * generic wording. Evaluated at build time for the prerendered HTML and again in the browser.
 */
export const getEventsSeo = (
  data: ThisWeekendData = THIS_WEEKEND,
  today: string = todayInTownsville(),
): { title: string; description: string } => {
  const current =
    ISO_DATE.test(data.from) && ISO_DATE.test(data.to) && data.items.length > 0 && today <= data.to;
  if (!current) return { title: FALLBACK_TITLE, description: FALLBACK_DESCRIPTION };

  const range = formatRange(data.from, data.to);
  return {
    title: `What's On in Townsville This Weekend (${range})`,
    description: `What's on in Townsville this weekend, ${range} ${data.to.slice(0, 4)}: ${data.items.length} picks with times, venues and links, plus the official calendar.`,
  };
};
