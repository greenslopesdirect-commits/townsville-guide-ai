import { Helmet } from "react-helmet";
import { Link, useSearchParams } from "react-router-dom";
import { Bed, Compass, Utensils, Dog, Sparkles, MapPin, ExternalLink, LayoutGrid } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";

type CategorySlug = "accommodation" | "tours" | "food-and-drink" | "dog-friendly" | "wellness-beauty";

interface CategoryDef {
  slug: CategorySlug;
  label: string;
  icon: typeof Bed;
  title: string;
  description: string;
  intro: string;
}

const CATEGORIES: CategoryDef[] = [
  {
    slug: "accommodation",
    label: "Accommodation",
    icon: Bed,
    title: "Townsville Accommodation Directory — Local Picks",
    description:
      "Browse Townsville accommodation hand-picked by Duncan — hotels, apartments and beachfront stays across The Strand, the CBD and the northern beaches.",
    intro:
      "Places to stay around Townsville, from The Strand to the northern beaches. Click through to book direct with the venue.",
  },
  {
    slug: "tours",
    label: "Tours",
    icon: Compass,
    title: "Townsville Tours Directory — Reef, Island & Local Operators",
    description:
      "Local Townsville tour operators: Great Barrier Reef trips, Magnetic Island day tours, fishing charters and guided walks, listed by a local.",
    intro:
      "Reef trips, island runs, fishing charters and guided walks run by Townsville-based operators.",
  },
  {
    slug: "food-and-drink",
    label: "Food and Drink",
    icon: Utensils,
    title: "Townsville Food & Drink Directory — Cafés, Bars & Restaurants",
    description:
      "A local's directory of Townsville cafés, restaurants, bars and bakeries — where to eat breakfast, dinner and everything between.",
    intro:
      "Cafés, bakeries, pubs, bars and restaurants worth your time across Townsville.",
  },
  {
    slug: "dog-friendly",
    label: "Dog-Friendly",
    icon: Dog,
    title: "Dog-Friendly Townsville Directory — Cafés, Stays & Services",
    description:
      "Dog-friendly Townsville businesses: cafés that welcome dogs, pet-friendly accommodation, groomers, vets and dog-walking services.",
    intro:
      "Businesses that genuinely welcome dogs — cafés, stays, groomers and pet services.",
  },
  {
    slug: "wellness-beauty",
    label: "Wellness & Beauty",
    icon: Sparkles,
    title: "Townsville Wellness & Beauty Directory — Salons, Spas & Studios",
    description:
      "Townsville wellness and beauty businesses — salons, day spas, massage, yoga and fitness studios, listed by a local guide.",
    intro:
      "Salons, day spas, massage therapists, yoga and fitness studios around town.",
  },
];

interface Listing {
  name: string;
  category: CategorySlug;
  suburb: string;
  description: string;
  website: string;
  placeholder?: boolean;
}

// PLACEHOLDER DATA — real listings are added in a separate content pass.
const LISTINGS: Listing[] = [
  {
    name: "Example Listing — Accommodation",
    category: "accommodation",
    suburb: "North Ward",
    description:
      "Placeholder listing. Duncan's short, honest description of the stay goes here once the real listings are added.",
    website: "https://www.townsvilleguide.com.au/advertise",
    placeholder: true,
  },
  {
    name: "Example Listing — Tours",
    category: "tours",
    suburb: "Townsville CBD",
    description:
      "Placeholder listing. A couple of lines on what the operator does and why it's worth booking will go here.",
    website: "https://www.townsvilleguide.com.au/advertise",
    placeholder: true,
  },
  {
    name: "Example Listing — Food and Drink",
    category: "food-and-drink",
    suburb: "South Townsville",
    description:
      "Placeholder listing. Real café, pub and restaurant write-ups in Duncan's voice will replace this shortly.",
    website: "https://www.townsvilleguide.com.au/advertise",
    placeholder: true,
  },
];

const SITE = "https://www.townsvilleguide.com.au";

const ListingCardSimple = ({ listing }: { listing: Listing }) => {
  const cat = CATEGORIES.find((c) => c.slug === listing.category)!;
  const Icon = cat.icon;
  return (
    <article className="rounded-lg border border-border bg-card p-5 flex flex-col gap-3">
      <div className="flex items-center gap-2">
        <span className="p-1.5 rounded-md bg-muted text-muted-foreground">
          <Icon className="w-4 h-4" aria-hidden="true" />
        </span>
        <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
          {cat.label}
        </span>
        {listing.placeholder && (
          <span className="ml-auto text-[10px] font-semibold uppercase tracking-wide text-muted-foreground border border-dashed border-border rounded px-1.5 py-0.5">
            Placeholder
          </span>
        )}
      </div>

      <h3 className="text-base font-semibold text-foreground">{listing.name}</h3>

      <p className="text-sm text-muted-foreground leading-relaxed">{listing.description}</p>

      <p className="flex items-center gap-1.5 text-xs text-muted-foreground">
        <MapPin className="w-3.5 h-3.5" aria-hidden="true" />
        {listing.suburb}
      </p>

      <div className="mt-auto pt-2 flex items-center justify-between gap-3">
        <a
          href={listing.website}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
        >
          Visit Website
          <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
        </a>
        <Link
          to="/advertise"
          className="text-xs text-muted-foreground hover:text-primary transition-colors"
        >
          Feature your business here
        </Link>
      </div>
    </article>
  );
};

const Directory = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const raw = searchParams.get("category");
  const active = CATEGORIES.find((c) => c.slug === raw) || null;

  const listings = active ? LISTINGS.filter((l) => l.category === active.slug) : LISTINGS;

  const path = active ? `/directory?category=${active.slug}` : "/directory";
  const canonicalUrl = `${SITE}${path}`;

  const title = active
    ? active.title
    : "Townsville Business Directory — Local Picks by Townsville Guide";
  const description = active
    ? active.description
    : "A browsable directory of Townsville businesses hand-picked by a local — accommodation, tours, food and drink, dog-friendly spots and wellness & beauty.";

  const setCategory = (slug: CategorySlug | null) => {
    if (slug) setSearchParams({ category: slug });
    else setSearchParams({});
  };

  const itemList = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: title,
    url: canonicalUrl,
    itemListElement: listings.map((l, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "LocalBusiness",
        name: l.name,
        url: l.website,
        address: {
          "@type": "PostalAddress",
          addressLocality: l.suburb,
          addressRegion: "QLD",
          addressCountry: "AU",
        },
      },
    })),
  };

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${SITE}/` },
      { "@type": "ListItem", position: 2, name: "Directory", item: `${SITE}/directory` },
      ...(active
        ? [{ "@type": "ListItem", position: 3, name: active.label, item: canonicalUrl }]
        : []),
    ],
  };

  return (
    <>
      <SEOHead title={title} description={description} canonical={path} />
      <Helmet>
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:url" content={canonicalUrl} />
        <meta name="twitter:url" content={canonicalUrl} />
        <script type="application/ld+json">{JSON.stringify(itemList)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumb)}</script>
      </Helmet>

      {/* Intro */}
      <section className="py-14 px-4 bg-gradient-to-b from-primary/5 to-transparent">
        <div className="container mx-auto max-w-5xl text-center">
          <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-primary mb-3">
            <LayoutGrid className="w-4 h-4" aria-hidden="true" />
            Townsville Directory
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {active ? `${active.label} in Townsville` : "Townsville Business Directory"}
          </h1>
          <p className="text-muted-foreground text-lg leading-relaxed max-w-3xl mx-auto">
            {active
              ? active.intro
              : "This is my running list of Townsville businesses worth knowing about — the places I actually point friends and visitors towards. No paid rankings, no stock photos: just a name, where it is, and a link straight through to the business so you can see their own photos and book direct."}
          </p>
          <p className="text-sm text-muted-foreground mt-4">— Duncan, Townsville Guide</p>
        </div>
      </section>

      {/* Filters */}
      <section className="px-4">
        <div className="container mx-auto max-w-6xl">
          <nav aria-label="Directory categories" className="flex flex-wrap justify-center gap-2">
            <button
              type="button"
              onClick={() => setCategory(null)}
              aria-pressed={!active}
              className={`text-sm px-4 py-2 rounded-full border transition-colors ${
                !active
                  ? "bg-primary text-primary-foreground border-primary"
                  : "border-border text-muted-foreground hover:border-primary/40 hover:text-primary"
              }`}
            >
              All
            </button>
            {CATEGORIES.map((c) => {
              const Icon = c.icon;
              const isOn = active?.slug === c.slug;
              return (
                <button
                  key={c.slug}
                  type="button"
                  onClick={() => setCategory(c.slug)}
                  aria-pressed={isOn}
                  className={`text-sm px-4 py-2 rounded-full border transition-colors inline-flex items-center gap-2 ${
                    isOn
                      ? "bg-primary text-primary-foreground border-primary"
                      : "border-border text-muted-foreground hover:border-primary/40 hover:text-primary"
                  }`}
                >
                  <Icon className="w-4 h-4" aria-hidden="true" />
                  {c.label}
                </button>
              );
            })}
          </nav>
        </div>
      </section>

      {/* Listings */}
      <section className="py-10 px-4">
        <div className="container mx-auto max-w-6xl">
          <p className="text-xs text-muted-foreground mb-6 text-center">
            Example cards below are placeholders — the full set of Townsville listings is being added.
          </p>
          {listings.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {listings.map((l) => (
                <ListingCardSimple key={l.name} listing={l} />
              ))}
            </div>
          ) : (
            <div className="text-center border border-dashed border-border rounded-lg py-12">
              <p className="text-muted-foreground">
                Listings for this category are coming soon.
              </p>
              <Button asChild variant="outline" size="sm" className="mt-4">
                <Link to="/advertise">Be the first listed here</Link>
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-14 px-4 bg-muted/40">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
            Run a Townsville business?
          </h2>
          <p className="text-muted-foreground mb-6">
            Community listings are free, and Founding Partners get a richer, featured spot across
            the guide. Tell me about your business and I'll get you listed.
          </p>
          <Button asChild size="lg">
            <Link to="/advertise">Partner With Us</Link>
          </Button>
        </div>
      </section>
    </>
  );
};

export default Directory;
