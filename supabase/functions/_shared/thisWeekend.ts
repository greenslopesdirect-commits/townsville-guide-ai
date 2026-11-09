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
export const UPDATED_ON = "2026-11-09";

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
  from: "2026-11-13",
  to: "2026-11-15",
  items: [
    {
      name: "Monster Energy PBR 2026 Grand Finals",
      place: "Townsville Entertainment & Convention Centre",
      time: "Fri 13 – Sat 14 Nov, 7:30pm (arena opens 6:30pm)",
      link: "https://tecc.net.au/event/monster-energy-pbr-grandfinals-2026/",
    },
    {
      name: "Ashes to Ashes – The David Bowie Experience",
      place: "The Warehouse Bandroom",
      time: "Fri 13 Nov, 7:30pm",
      link: "https://tickets.oztix.com.au/outlet/event/807d3693-d051-4be3-b481-6c62412451ed",
    },
    {
      name: "Garage Sale Trail 2026",
      place: "Homes across Townsville",
      time: "Sat 14 – Sun 15 Nov",
      link: "https://garagesaletrail.com.au/Townsville",
    },
    {
      name: "Shannon Noll – The Road In Front Of Me Tour",
      place: "FLNDRS Bar & Nightclub, 159–165 Flinders Street",
      time: "Sat 14 Nov, 9:00pm",
      link: "https://www.eventbrite.com/e/shannon-noll-the-road-in-front-of-me-tour-with-special-guests-tickets-1996429882521",
    },
    {
      name: "Cotters Market",
      place: "Flinders Street, Townsville City",
      time: "Sun 15 Nov, 8:30am–1:00pm",
      link: "https://townsville.qld.gov.au/about-townsville/shopping-and-markets",
    },
    {
      name: "Magnetic Island Markets",
      place: "Horseshoe Bay foreshore, Magnetic Island",
      time: "Sun 15 Nov, 9:00am–2:00pm",
      link: "https://www.micda.com.au/magnetic-island-markets",
    },
  ],
};
