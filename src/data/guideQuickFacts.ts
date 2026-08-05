export interface QuickFacts {
  bestFor?: string[];
  timeNeeded?: string;
  cost?: string;
  distanceFromCBD?: string;
  drivingTimeFromCBD?: string;
  carNeeded?: string;
  parking?: string;
  toilets?: string;
  accessibility?: string;
  dogFriendly?: string;
  bestTimeToVisit?: string;
  localVerdict?: string;
}

/**
 * Per-route quick facts. Keys are route pathnames (no trailing slash).
 * Only include fields that are confirmed by the guide content or a reliable
 * source. Use cautious wording ("Check before visiting") where uncertain, and
 * simply omit a field when there is no reliable information at all.
 */
export const QUICK_FACTS_BY_PATH: Record<string, QuickFacts> = {
  "/guides/jezzine-barracks": {
    bestFor: ["Waterfront walks", "Families", "Local history", "Views"],
    timeNeeded: "1–2 hours",
    cost: "Free entry",
    carNeeded:
      "No — it is a flat 10-minute walk from The Strand via the coastal boardwalk",
    parking:
      "Free parking off Mitchell Street, subject to current signs and availability",
    toilets: "Check before visiting",
    accessibility:
      "Main paths and boardwalks are largely flat; confirm detailed accessibility before visiting",
    dogFriendly: "Check current signage and council rules before visiting",
    bestTimeToVisit: "Morning or late afternoon for cooler conditions",
    localVerdict:
      "A worthwhile free stop that combines waterfront views, open space and Townsville history.",
  },
};

const normalise = (path: string) => (path !== "/" ? path.replace(/\/+$/, "") : path);

export const getQuickFacts = (path: string): QuickFacts | undefined =>
  QUICK_FACTS_BY_PATH[normalise(path)];
