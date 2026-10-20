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
  items: [],
};
