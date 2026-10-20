import { Link } from "react-router-dom";

type Group = { title: string; links: { to: string; label: string }[] };

// Every main page on the site, grouped. Keep this in step with scripts/generate-sitemap.mjs.
const GROUPS: Group[] = [
  {
    title: "Plan a trip",
    links: [
      { to: "/first-time-in-townsville", label: "First Time in Townsville" },
      { to: "/townsville-in-one-day", label: "Townsville in One Day" },
      { to: "/townsville-without-a-car", label: "Without a Car" },
      { to: "/townsville-with-kids", label: "With Kids" },
      { to: "/accessible-townsville", label: "Accessible Townsville" },
      { to: "/weekend-cost-calculator", label: "Weekend Cost Calculator" },
      { to: "/townsville-airport", label: "Airport & Flights" },
      { to: "/accommodation", label: "Where to Stay" },
      { to: "/suburbs", label: "Suburbs & Areas" },
      { to: "/history", label: "History" },
    ],
  },
  {
    title: "Things to do",
    links: [
      { to: "/things-to-do", label: "Things to Do" },
      { to: "/the-strand", label: "The Strand" },
      { to: "/castle-hill", label: "Castle Hill" },
      { to: "/guides/walking-castle-hill", label: "Walking Castle Hill" },
      { to: "/jezzine-barracks", label: "Jezzine Barracks" },
      { to: "/riverway", label: "Riverway" },
      { to: "/billabong-sanctuary", label: "Billabong Sanctuary" },
      { to: "/reef-hq-townsville", label: "Reef HQ Status" },
      { to: "/great-barrier-reef-townsville", label: "Great Barrier Reef Tours" },
      { to: "/guides/free-things", label: "Free Things to Do" },
      { to: "/guides/sunset-walks", label: "Sunset Walks" },
      { to: "/cowboys-stadium-guide", label: "Cowboys Stadium Guide" },
      { to: "/events", label: "Events" },
      { to: "/nature", label: "Nature" },
    ],
  },
  {
    title: "Day trips",
    links: [
      { to: "/guides/magnetic-island-day-trip", label: "Magnetic Island Day Trip" },
      { to: "/guides/magnetic-island-ferry", label: "Magnetic Island Ferry" },
      { to: "/guides/forts-walk-magnetic-island", label: "Forts Walk" },
      { to: "/guides/paluma-day-trip", label: "Paluma Day Trip" },
      { to: "/little-crystal-creek-townsville", label: "Little Crystal Creek" },
      { to: "/north-shore-townsville", label: "North Shore" },
    ],
  },
  {
    title: "Beaches and weather",
    links: [
      { to: "/beaches", label: "Beaches" },
      { to: "/guides/stinger-safety", label: "Stinger Safety" },
      { to: "/pallarenda-beach", label: "Pallarenda" },
      { to: "/rowes-bay", label: "Rowes Bay" },
      { to: "/bushland-beach", label: "Bushland Beach" },
      { to: "/beaches/saunders-beach", label: "Saunders Beach" },
      { to: "/dog-friendly", label: "Dog-Friendly" },
      { to: "/guides/beat-the-heat", label: "Beat the Heat" },
      { to: "/guides/rainy-day-activities", label: "Rainy Day Activities" },
    ],
  },
  {
    title: "Eat, shop and live",
    links: [
      { to: "/food", label: "Food & Drink" },
      { to: "/shopping", label: "Shopping" },
      { to: "/directory", label: "Directory" },
      { to: "/moving-to-townsville", label: "Moving to Townsville" },
      { to: "/useful-contacts", label: "Useful Contacts" },
    ],
  },
  {
    title: "About",
    links: [
      { to: "/advertise", label: "Partner With Us" },
      { to: "/contact", label: "Contact" },
    ],
  },
];

const AllGuides = () => (
  <section aria-labelledby="all-guides-heading" className="py-14 px-4 bg-muted/30">
    <div className="container mx-auto max-w-6xl">
      <h2 id="all-guides-heading" className="text-2xl md:text-3xl font-bold text-center mb-8 text-foreground">
        Every Townsville Guide
      </h2>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {GROUPS.map((g) => (
          <div key={g.title}>
            <h3 className="font-semibold text-foreground mb-2">{g.title}</h3>
            <ul className="space-y-1 text-sm">
              {g.links.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="text-primary hover:underline">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default AllGuides;
