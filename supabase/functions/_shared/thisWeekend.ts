/**
 * "This weekend in Townsville" — the ONLY file you edit each week.
 *
 * Lives here so the Townsville AI assistant (supabase/functions/townsville-chat) and the site box
 * (src/components/ThisWeekendInTownsville.tsx, via src/data/thisWeekend.ts) read one copy.
 * Plain TypeScript with no imports, so Deno and Vite can both load it.
 *
 * Weekly steps (about five minutes):
 *   1. Open https://whatson.townsville.qld.gov.au/ and pick 3 to 6 things happening this weekend.
 *   2. Set `from` and `to` to the weekend dates (YYYY-MM-DD, Townsville time). `to` is the last
 *      day the section will show; it switches itself off at midnight after that.
 *   3. Replace `items`. Each item needs: name, place, time (plain text, e.g. "Sat 7am to 12pm"),
 *      and link (an https URL to the organiser or the council listing).
 *   4. Commit and publish.
 *
 * Rules:
 *   - Only list events you have checked against the council calendar or the organiser.
 *   - If `items` is empty, or today is after `to`, the page automatically shows a link to the
 *     council What's On calendar instead. It never shows old events as current.
 *   - Maximum 6 items are shown.
 *
 * Example item (delete this when you add real ones):
 *   {
 *     name: "Cotters Market",
 *     place: "The Strand",
 *     time: "Sun 8am to 1pm",
 *     link: "https://whatson.townsville.qld.gov.au/",
 *   },
 */

export interface WeekendItem {
  name: string;
  place: string;
  time: string;
  link: string;
}

export interface ThisWeekendData {
  /** First day of the weekend window, YYYY-MM-DD. */
  from: string;
  /** Last day the section should display, YYYY-MM-DD. */
  to: string;
  items: WeekendItem[];
}

export const COUNCIL_WHATS_ON_URL = "https://whatson.townsville.qld.gov.au/";

/**
 * Date these listings were last updated, YYYY-MM-DD. /events shows it in the "Updated ..." line and
 * in the "About this guide" panel's "Last checked", so change it here when you change `items`.
 */
export const UPDATED_ON = "2026-11-16";

/** "9 November 2026" from a YYYY-MM-DD string. */
export const formatUpdatedOn = (iso: string = UPDATED_ON): string => {
  const MONTHS = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December",
  ];
  const [y, m, d] = iso.split("-").map(Number);
  return `${d} ${MONTHS[m - 1]} ${y}`;
};

export const THIS_WEEKEND: ThisWeekendData = {
  from: "2026-11-20",
  to: "2026-11-22",
  items: [
    {
      name: "Vote 1 Pauly!",
      place: "Selwyn Nicholas Brewing Co., 365 Woolcock St, Garbutt",
      time: "Fri 20 Nov, 8:30pm",
      link: "https://tickets.oztix.com.au/outlet/event/09fd1586-1276-4238-80e7-5d4fae4e7010",
    },
    {
      name: "In the Heart of the North [Part 3] and other exhibitions",
      place: "Perc Tucker Regional Gallery",
      time: "On now until 17 Jan 2027",
      link: "https://www.townsville.qld.gov.au/facilities-and-recreation/theatres-and-galleries/perc-tucker-regional-gallery/exhibitions",
    },
    {
      name: "Willows Rotary Markets",
      place: "Willows Shopping Centre carpark, Kirwan",
      time: "Sun 22 Nov, 7:30am–11:30am",
      link: "https://townsville.qld.gov.au/about-townsville/shopping-and-markets",
    },
    {
      name: "Cotters Market",
      place: "Flinders Street, Townsville City",
      time: "Sun 22 Nov, 8:30am–1:00pm",
      link: "https://townsville.qld.gov.au/about-townsville/shopping-and-markets",
    },
    {
      name: "Magnetic Island Markets",
      place: "Horseshoe Bay foreshore, Magnetic Island",
      time: "Sun 22 Nov, 9:00am–2:00pm",
      link: "https://whatson.townsville.qld.gov.au/events/magnetic-island-markets",
    },
    {
      name: "Townsville Fire v Bendigo Spirit (WNBL Round 6)",
      place: "Townsville Entertainment & Convention Centre",
      time: "Sun 22 Nov, 2:00pm",
      link: "https://tecc.net.au/event/townsville-fire-26-27-season/",
    },
  ],
};
