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

export const THIS_WEEKEND: ThisWeekendData = {
  from: "2026-11-06",
  to: "2026-11-08",
  items: [
    {
      name: "Garage Sale Trail 2026",
      place: "Garage sales at homes across Townsville",
      time: "Sat 7 and Sun 8 Nov (also 14–15 Nov)",
      link: "https://garagesaletrail.com.au/Townsville",
    },
    {
      name: "Foo Fighters: Take Cover Tour",
      place: "Queensland Country Bank Stadium, Railway Estate",
      time: "Sat 7 Nov, gates 4:00pm, show starts 5:30pm",
      link: "https://queenslandcountrybankstadium.com.au/events/Foo-Fighters",
    },
    {
      name: "Gurambilbarra NAIDOC Gala & Awards Night",
      place: "The Ville Resort-Casino, Sir Leslie Thiess Drive",
      time: "Sat 7 Nov, from 5:30pm",
      link: "https://nit.com.au/10-09-2026/26404/gurambilbarra-to-celebrate-50-years-of-naidoc-with-gala-awards-night",
    },
    {
      name: "Greased Lightning (Stage Door Theatre Restaurant)",
      place: "The Stage Door Theatre Restaurant, 5–7 Hayles Avenue, Arcadia, Magnetic Island",
      time: "Sat 7 Nov, doors 5:00pm, show finishes about 9:40pm",
      link: "https://whatson.townsville.qld.gov.au/events/greased-lightning",
    },
    {
      name: "Willows Rotary Markets",
      place: "Willows Shopping Centre carpark, corner of Thuringowa Drive and Hervey Range Road, Kirwan",
      time: "Sun 8 Nov, 7:30am–11:30am",
      link: "https://townsville.qld.gov.au/about-townsville/shopping-and-markets",
    },
    {
      name: "Cotters Market",
      place: "Flinders Street, Townsville City",
      time: "Sun 8 Nov, 8:30am–1:00pm",
      link: "https://townsville.qld.gov.au/about-townsville/shopping-and-markets",
    },
  ],
};
