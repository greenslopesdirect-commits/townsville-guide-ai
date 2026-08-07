import { Helmet } from "react-helmet";
import { useMemo, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { MapPin, ExternalLink, LayoutGrid, Search, X, ArrowRight, Info } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  AREAS,
  CATEGORIES,
  LISTINGS,
  countByCategory,
  type Area,
  type CategorySlug,
  type Listing,
} from "@/data/directoryListings";

const SITE = "https://www.townsvilleguide.com.au";

const ListingCard = ({ listing }: { listing: Listing }) => {
  const cat = CATEGORIES.find((c) => c.slug === listing.category)!;
  const Icon = cat.icon;
  const mapQuery = encodeURIComponent(`${listing.name}, ${listing.locality ?? listing.area}, Townsville QLD`);

  return (
    <article className="rounded-lg border border-border bg-card p-5 flex flex-col gap-3 h-full">
      <div className="flex items-center gap-2">
        <span className="p-1.5 rounded-md bg-muted text-muted-foreground">
          <Icon className="w-4 h-4" aria-hidden="true" />
        </span>
        <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
          {cat.label}
        </span>
      </div>

      <h3 className="text-base font-semibold text-foreground break-words">{listing.name}</h3>

      <p className="flex items-start gap-1.5 text-xs text-muted-foreground">
        <MapPin className="w-3.5 h-3.5 mt-0.5 shrink-0" aria-hidden="true" />
        <span>{listing.locality ? `${listing.locality} · ${listing.area}` : listing.area}</span>
      </p>

      <p className="text-sm text-muted-foreground leading-relaxed">{listing.description}</p>

      <div className="mt-auto pt-3 flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-border/60">
        {listing.websitePending ? (
          <span className="text-sm text-muted-foreground italic">Website link to be confirmed</span>
        ) : (
          <a
            href={listing.website}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
          >
            Visit website
            <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
          </a>
        )}
        <a
          href={`https://www.google.com/maps/search/?api=1&query=${mapQuery}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors"
        >
          Directions
        </a>
      </div>
    </article>
  );
};

const PLANNING_LINKS = [
  { to: "/things-to-do", label: "Things to Do", note: "Decide what's worth your time" },
  { to: "/food", label: "Food & Dining", note: "Where to eat and which area suits" },
  { to: "/accommodation", label: "Where to Stay", note: "Which area fits your trip" },
  { to: "/shopping", label: "Shopping", label2: "", note: "Centres, CBD and markets" },
  { to: "/nature", label: "Nature", note: "Beaches, hills, creeks and wildlife" },
  { to: "/first-time-in-townsville", label: "First Time in Townsville", note: "Start here if it's your first visit" },
  { to: "/townsville-without-a-car", label: "Townsville Without a Car", note: "Ferries, buses and walkable areas" },
  { to: "/townsville-with-kids", label: "Townsville with Kids", note: "Family-friendly planning" },
  { to: "/local-tips", label: "Local Tips", note: "Practical advice from the ground" },
];

const Directory = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const rawCategory = searchParams.get("category");
  const active = CATEGORIES.find((c) => c.slug === rawCategory) || null;

  const [area, setArea] = useState<Area | null>(null);
  const [query, setQuery] = useState("");

  const listings = useMemo(() => {
    const q = query.trim().toLowerCase();
    return LISTINGS.filter((l) => {
      if (active && l.category !== active.slug) return false;
      if (area && l.area !== area) return false;
      if (!q) return true;
      const cat = CATEGORIES.find((c) => c.slug === l.category);
      return [l.name, l.area, l.locality ?? "", l.description, cat?.label ?? ""]
        .join(" ")
        .toLowerCase()
        .includes(q);
    });
  }, [active, area, query]);

  const availableAreas = useMemo(
    () =>
      AREAS.filter((a) =>
        LISTINGS.some((l) => l.area === a && (!active || l.category === active.slug))
      ),
    [active]
  );

  const isFiltered = Boolean(active || area || query.trim());

  const setCategory = (slug: CategorySlug | null) => {
    setArea(null);
    if (slug) setSearchParams({ category: slug });
    else setSearchParams({});
  };

  const clearAll = () => {
    setQuery("");
    setArea(null);
    setSearchParams({});
  };

  /**
   * Canonical / indexing approach:
   * - One indexable landing page: /directory
   * - Category filtering uses ?category=, and canonicals back to /directory so
   *   filter permutations never become separate indexed URLs.
   * - Clean category paths (/directory/eat-drink) can be introduced later
   *   without breaking these query-string links.
   */
  const canonicalUrl = `${SITE}/directory`;

  const title = active
    ? active.title
    : "Townsville Directory | Places, Businesses & Visitor Services";
  const description = active
    ? active.description
    : "Browse useful Townsville businesses and places for food, accommodation, attractions, shopping, tours, transport and practical visitor services.";

  const collectionPage = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Townsville Directory",
    url: canonicalUrl,
    description:
      "Browse useful Townsville businesses and places for food, accommodation, attractions, shopping, tours, transport and practical visitor services.",
    isPartOf: { "@type": "WebSite", name: "Townsville Guide", url: `${SITE}/` },
  };

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${SITE}/` },
      { "@type": "ListItem", position: 2, name: "Directory", item: canonicalUrl },
    ],
  };

  const priority = CATEGORIES.filter((c) => c.priority);
  const secondary = CATEGORIES.filter((c) => !c.priority);

  return (
    <>
      <SEOHead title={title} description={description} canonical="/directory" noindex={Boolean(active)} />
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(collectionPage)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumb)}</script>
      </Helmet>

      {/* Intro */}
      <section className="py-12 md:py-14 px-4 bg-gradient-to-b from-primary/5 to-transparent">
        <div className="container mx-auto max-w-4xl text-center">
          <nav aria-label="Breadcrumb" className="mb-3 text-xs text-muted-foreground">
            <Link to="/" className="hover:text-primary">Home</Link>
            <span className="mx-1.5">/</span>
            <span className="text-foreground">Directory</span>
          </nav>
          <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-primary mb-3">
            <LayoutGrid className="w-4 h-4" aria-hidden="true" />
            Townsville Directory
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Townsville Directory
          </h1>
          <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
            Browse useful Townsville places and businesses for eating, staying, shopping,
            attractions, tours, transport and practical visitor needs. The directory complements
            our local guides by helping you find the actual places behind your plans.
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="px-4 pb-2">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-xl font-semibold text-foreground mb-4">Browse by category</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[...priority, ...secondary].map((c) => {
              const Icon = c.icon;
              const isOn = active?.slug === c.slug;
              return (
                <button
                  key={c.slug}
                  type="button"
                  onClick={() => setCategory(isOn ? null : c.slug)}
                  aria-pressed={isOn}
                  className={`text-left rounded-lg border p-4 transition-colors ${
                    isOn
                      ? "border-primary bg-primary/5"
                      : "border-border bg-card hover:border-primary/40"
                  }`}
                >
                  <span className="flex items-center gap-2 mb-1.5">
                    <Icon className="w-4 h-4 text-primary shrink-0" aria-hidden="true" />
                    <span className="font-semibold text-foreground">{c.label}</span>
                    <span className="ml-auto text-xs text-muted-foreground shrink-0">
                      {countByCategory(c.slug)}
                    </span>
                  </span>
                  <span className="block text-sm text-muted-foreground leading-relaxed">
                    {c.blurb}
                  </span>
                  <span className="mt-2 inline-flex items-center gap-1 text-xs font-medium text-primary">
                    {isOn ? "Showing this category" : "Browse"}
                    <ArrowRight className="w-3 h-3" aria-hidden="true" />
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Search + area filter */}
      <section className="px-4 pt-8">
        <div className="container mx-auto max-w-6xl">
          <div className="rounded-lg border border-border bg-card p-4 flex flex-col gap-4">
            <div className="relative">
              <Search
                className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
                aria-hidden="true"
              />
              <label htmlFor="directory-search" className="sr-only">
                Search places, businesses or categories
              </label>
              <Input
                id="directory-search"
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search places, businesses or categories"
                className="pl-9 w-full"
              />
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground mr-1">
                Area
              </span>
              <button
                type="button"
                onClick={() => setArea(null)}
                aria-pressed={!area}
                className={`text-sm px-3 py-1.5 rounded-full border transition-colors ${
                  !area
                    ? "bg-primary text-primary-foreground border-primary"
                    : "border-border text-muted-foreground hover:border-primary/40 hover:text-primary"
                }`}
              >
                All areas
              </button>
              {availableAreas.map((a) => (
                <button
                  key={a}
                  type="button"
                  onClick={() => setArea(area === a ? null : a)}
                  aria-pressed={area === a}
                  className={`text-sm px-3 py-1.5 rounded-full border transition-colors ${
                    area === a
                      ? "bg-primary text-primary-foreground border-primary"
                      : "border-border text-muted-foreground hover:border-primary/40 hover:text-primary"
                  }`}
                >
                  {a}
                </button>
              ))}
            </div>

            {isFiltered && (
              <div className="flex flex-wrap items-center justify-between gap-3">
                <p className="text-sm text-muted-foreground">
                  Showing {listings.length} {listings.length === 1 ? "listing" : "listings"}
                  {active ? ` in ${active.label}` : ""}
                  {area ? ` · ${area}` : ""}
                </p>
                <Button variant="ghost" size="sm" onClick={clearAll} className="gap-1.5">
                  <X className="w-3.5 h-3.5" aria-hidden="true" />
                  Clear filters
                </Button>
              </div>
            )}
          </div>

          {active && (
            <p className="mt-4 text-sm text-muted-foreground">
              {active.intro}{" "}
              <Link to={active.guidePath} className="text-primary hover:underline">
                Read the {active.guideLabel}
              </Link>{" "}
              for advice on choosing.
            </p>
          )}
        </div>
      </section>

      {/* Listings */}
      <section className="py-8 px-4">
        <div className="container mx-auto max-w-6xl">
          {listings.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {listings.map((l) => (
                <ListingCard key={`${l.category}-${l.name}`} listing={l} />
              ))}
            </div>
          ) : (
            <div className="text-center border border-dashed border-border rounded-lg py-12 px-4">
              <p className="font-medium text-foreground">No listings found</p>
              <p className="text-muted-foreground text-sm mt-1">
                Try another category, area or search term.
              </p>
              <Button variant="outline" size="sm" className="mt-4" onClick={clearAll}>
                Show all listings
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Trust + changing information */}
      <section className="px-4 pb-4">
        <div className="container mx-auto max-w-6xl grid gap-4 md:grid-cols-2">
          <div className="rounded-lg border border-border bg-muted/40 p-5">
            <h2 className="flex items-center gap-2 text-sm font-semibold text-foreground mb-2">
              <Info className="w-4 h-4 text-primary" aria-hidden="true" />
              About these listings
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Directory listings are provided to help visitors discover useful Townsville
              businesses and places. Inclusion does not necessarily mean we have personally used
              or recommend every listed business.
            </p>
          </div>
          <div className="rounded-lg border border-border bg-muted/40 p-5">
            <h2 className="text-sm font-semibold text-foreground mb-2">Details change</h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Opening hours, operators and services change, particularly outside peak season.
              We don't publish hours here — check directly with the business before making a
              special trip.
            </p>
          </div>
        </div>
      </section>

      {/* Guide integration */}
      <section className="py-12 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-2xl font-bold text-foreground mb-2">Planning your visit?</h2>
          <p className="text-muted-foreground mb-6 max-w-3xl">
            Our guides help you decide what suits you — which area to stay in, what to do and when.
            The directory helps you find the specific places behind those decisions.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {PLANNING_LINKS.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="rounded-lg border border-border bg-card p-4 hover:border-primary/40 transition-colors"
              >
                <span className="flex items-center gap-1.5 font-medium text-foreground">
                  {l.label}
                  <ArrowRight className="w-3.5 h-3.5 text-primary" aria-hidden="true" />
                </span>
                <span className="block text-sm text-muted-foreground mt-1">{l.note}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Submission CTA */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-bold text-foreground mb-3">
            Own a visitor-focused Townsville business?
          </h2>
          <p className="text-muted-foreground mb-6">
            Directory submissions will open as the directory grows. In the meantime you can get in
            touch — we can't guarantee inclusion, but we're happy to hear about places useful to
            visitors.
          </p>
          <Button asChild size="lg">
            <Link to="/advertise">Get in touch</Link>
          </Button>
        </div>
      </section>
    </>
  );
};

export default Directory;
