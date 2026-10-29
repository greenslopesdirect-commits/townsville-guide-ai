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
  from: "2026-10-30",
  to: "2026-11-01",
  items: [
    {
      name: "EMOWEEN Townsville 2026 (Emo Halloween)",
      place: "Otherwise Bar, 87–95 Flinders Street, Townsville City",
      time: "Fri 30 Oct, 8:00pm–3:00am",
      link: "https://www.eventbrite.com.au/e/emoween-townsville-2026-emo-halloween-tickets-1966402481757",
    },
    {
      name: "The Haunted Homemakers Swap",
      place: "Frost Family Sunflower Farm, 61 Hammond Way, Kelso",
      time: "Sat 31 Oct, 3:00pm–5:00pm",
      link: "https://www.eventbrite.com/e/the-haunted-homemakers-swap-tickets-2002422274928",
    },
    {
      name: "Greased Lightning (Stage Door Theatre Restaurant)",
      place: "The Stage Door Theatre Restaurant, 5–7 Hayles Avenue, Arcadia, Magnetic Island",
      time: "Sat 31 Oct, doors 5:00pm, show finishes about 9:40pm",
      link: "https://whatson.townsville.qld.gov.au/events/greased-lightning",
    },
    {
      name: "Rugby League World Cup 2026: Australia v Cook Islands",
      place: "Queensland Country Bank Stadium, Railway Estate",
      time: "Sat 31 Oct, kick-off 7:05pm",
      link: "https://www.townsvillenorthqueensland.com.au/events/2026-rugby-league-world-cup-round-3--aus-692e2066f11888556737223c/",
    },
    {
      name: "Willows Rotary Markets",
      place: "Willows Shopping Centre carpark, corner of Thuringowa Drive and Hervey Range Road, Kirwan",
      time: "Sun 1 Nov, 7:30am–11:30am",
      link: "https://townsville.qld.gov.au/about-townsville/shopping-and-markets",
    },
    {
      name: "Cotters Market",
      place: "Flinders Street, Townsville City",
      time: "Sun 1 Nov, 8:30am–1:00pm",
      link: "https://townsville.qld.gov.au/about-townsville/shopping-and-markets",
    },
  ],
};
