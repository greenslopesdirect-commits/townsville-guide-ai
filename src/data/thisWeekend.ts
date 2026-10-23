/**
 * "This weekend in Townsville" — the ONLY file you edit each week.
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

export const THIS_WEEKEND: ThisWeekendData = {
  from: "2026-10-23",
  to: "2026-10-25",
  items: [
    {
      name: "Cotters Market",
      place: "Flinders Street, Townsville City",
      time: "Sun 25 Oct, 8:30am–1:00pm",
      link: "https://townsville.qld.gov.au/about-townsville/shopping-and-markets",
    },
    {
      name: "Townsville Fire v Sydney Flames (WNBL)",
      place: "Townsville Entertainment and Convention Centre",
      time: "Sun 25 Oct, 2:00pm",
      link: "https://tecc.net.au/event/townsville-fire-26-27-season/",
    },
    {
      name: "Candlelight: The Best of Hans Zimmer",
      place: "Sacred Heart Cathedral, Townsville City",
      time: "Sat 24 Oct, 6:00pm",
      link: "https://feverup.com/m/621941",
    },
    {
      name: "Brit Fest (18+)",
      place: "Dalrymple Hotel, Townsville",
      time: "Sat 24 Oct, 7:00pm",
      link: "https://tickets.oztix.com.au/outlet/event/9065544a-52c8-4968-bc7c-335c3d9527a2",
    },
    {
      name: "Mini Pick-Your-Own Sessions",
      place: "Frost Family Flower Farm, 61 Hammond Way, Kelso",
      time: "Sun 25 Oct, sessions between 9:00am and 6:00pm",
      link: "https://www.eventbrite.com.au/e/mini-pick-your-own-sessions-tickets-2003746984169",
    },
    {
      name: "Magnetic Island Markets",
      place: "Horseshoe Bay, Magnetic Island",
      time: "Sun 25 Oct, 9:00am–2:00pm",
      link: "https://townsville.qld.gov.au/about-townsville/shopping-and-markets",
    },
  ],
};
