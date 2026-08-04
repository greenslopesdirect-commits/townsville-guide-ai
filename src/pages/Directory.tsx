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
  /** Confirmed URL. Omit and set websitePending when the real link hasn't been verified yet. */
  website?: string;
  /** True when we don't yet have a confirmed website URL — renders a "[Link pending]" state instead of a link. */
  websitePending?: boolean;
}

const LISTINGS: Listing[] = [
  // --- Accommodation ---
  {
    name: "The Ville Resort – Casino",
    category: "accommodation",
    suburb: "The Strand",
    description:
      "A resort-style stay right on the Strand, with a pool, dining options, casino and entertainment all on site. Rated 8.3/10 across 1,448+ reviews.",
    website: "https://www.the-ville.com.au/",
  },
  {
    name: "Mariners North Holiday Apartments",
    category: "accommodation",
    suburb: "The Strand",
    description:
      "Apartment-style stays on the Strand, popular for their sea views. A good option if you want a kitchen for a longer stay or you're travelling as a family.",
    website: "https://www.marinersnorth.com.au/",
  },
  {
    name: "Rydges Southbank Townsville",
    category: "accommodation",
    suburb: "Townsville CBD",
    description:
      "A 4-star hotel in the CBD with Castle Hill views — a solid pick if you're in town for business or just want to be central.",
    // TODO: confirm website URL for Rydges Southbank Townsville
    websitePending: true,
  },
  {
    name: "Strand Motel",
    category: "accommodation",
    suburb: "The Strand",
    description:
      "Budget-friendly and right on the Strand, with shops and restaurants an easy walk away. It's got a loyal following of repeat guests who keep coming back.",
    // TODO: confirm website URL for Strand Motel
    websitePending: true,
  },
  {
    name: "Aquarius on the Beach",
    category: "accommodation",
    suburb: "The Strand",
    description:
      "Beachfront and family-friendly, rated 8.0/10 across more than 4,500 reviews.",
    // TODO: confirm website URL for Aquarius on the Beach
    websitePending: true,
  },
  {
    name: "City Oasis Inn Townsville",
    category: "accommodation",
    suburb: "Townsville CBD",
    description:
      "A CBD hotel just minutes from Queensland Country Bank Stadium — a handy base if you're in town for a Cowboys game.",
    // TODO: confirm website URL for City Oasis Inn Townsville
    websitePending: true,
  },
  {
    name: "Hotel Grand Chancellor Townsville",
    category: "accommodation",
    suburb: "Townsville CBD",
    description:
      "Hard to miss — this 20-storey tower sits right across from the Cowboys Leagues Club, so it's a genuine walk-to-the-game option on home game weekends. There's a rooftop pool with Castle Hill views for afterwards, and it's about a 15-minute walk down to the Magnetic Island ferry if you're island-hopping the next day.",
    // TODO: confirm website URL for Hotel Grand Chancellor Townsville
    websitePending: true,
  },
  {
    name: "Oaks Townsville Hotel",
    category: "accommodation",
    suburb: "Townsville",
    description:
      "A 4.5-star aparthotel with ocean views and kitchenette apartments, plus a gym and pool on site.",
    // TODO: confirm website URL for Oaks Townsville Hotel
    websitePending: true,
  },
  {
    name: "Madison Plaza Townsville",
    category: "accommodation",
    suburb: "Townsville CBD",
    description:
      "Budget-friendly and in the CBD, with a short walk to the stadium if you're here for the footy.",
    // TODO: confirm website URL for Madison Plaza Townsville
    websitePending: true,
  },
  {
    name: "BIG4 Tasman Holiday Parks – Rowes Bay",
    category: "accommodation",
    suburb: "Rowes Bay",
    description: "A caravan and holiday park option out at Rowes Bay.",
    // TODO: confirm website URL for BIG4 Tasman Holiday Parks – Rowes Bay
    websitePending: true,
  },

  // --- Tours ---
  {
    name: "Adrenalin Snorkel and Dive",
    category: "tours",
    suburb: "Townsville",
    description:
      "The old hands of Townsville diving — over 30 years in the water and Eco Tourism Australia certified. They'll get you out to the Great Barrier Reef, down to the SS Yongala wreck, or over to the Museum of Underwater Art if you want something a bit different from a standard reef trip.",
    website: "https://www.adrenalindive.com.au/",
  },
  {
    name: "Pro Dive Magnetic Island",
    category: "tours",
    suburb: "Magnetic Island",
    description: "Based on Magnetic Island and specialising in dives out to the SS Yongala wreck.",
    // TODO: confirm website URL for Pro Dive Magnetic Island
    websitePending: true,
  },
  {
    name: "Yongala Dive",
    category: "tours",
    suburb: "Townsville",
    description: "A dedicated operator that specialises in one thing: the SS Yongala wreck dive.",
    // TODO: confirm website URL for Yongala Dive
    websitePending: true,
  },
  {
    name: "Poseidon Adventures",
    category: "tours",
    suburb: "Magnetic Island",
    description:
      "A well-reviewed boat tour and snorkelling trip around Magnetic Island, known for a friendly, safety-focused crew.",
    // TODO: confirm website URL for Poseidon Adventures
    websitePending: true,
  },
  {
    name: "Poseidon Jet Ski Tours",
    category: "tours",
    suburb: "Magnetic Island",
    description:
      "Guided jet ski tours around Magnetic Island's bays, taking in the SS Adelaide shipwreck along the way.",
    // TODO: confirm website URL for Poseidon Jet Ski Tours
    websitePending: true,
  },
  {
    name: "SeaLink",
    category: "tours",
    suburb: "Breakwater Terminal",
    description:
      "The regular ferry service running from Townsville's Breakwater terminal across to Magnetic Island.",
    // TODO: confirm website URL for SeaLink
    websitePending: true,
  },
  {
    name: "Townsville Helicopters",
    category: "tours",
    suburb: "Townsville",
    description: "Scenic helicopter flights over the reef and Magnetic Island.",
    // TODO: confirm website URL for Townsville Helicopters
    websitePending: true,
  },
  {
    name: "Nautilus Aviation",
    category: "tours",
    suburb: "Townsville",
    description: "Helicopter flights out to Palm Island and beyond.",
    // TODO: confirm website URL for Nautilus Aviation
    websitePending: true,
  },
  {
    name: "Aussie Barra Charters",
    category: "tours",
    suburb: "Townsville",
    description:
      "Barramundi fishing specialists with over 40 years of local experience, running charters around Magnetic Island and Cleveland Bay.",
    website: "https://aussiebarracharters.com.au/",
  },
  {
    name: "Fish City Fishing Charters",
    category: "tours",
    suburb: "Townsville",
    description:
      "Charters covering Magnetic Island, Cleveland Bay, Halifax Bay and Cape Cleveland, with options ranging from a short budget half-day trip to a full offshore charter.",
    website: "https://www.fishcity.com.au/",
  },

  // --- Food and Drink ---
  {
    name: "Seasoned",
    category: "food-and-drink",
    suburb: "Palmer Street, South Townsville",
    description:
      "Ask around and this is the name that keeps coming up as Townsville's best table. Tucked into Palmer Street with a menu that changes with the seasons, so what you get in July won't be what you get in January — worth booking ahead.",
    // TODO: confirm website URL for Seasoned
    websitePending: true,
  },
  {
    name: "A Touch of Salt",
    category: "food-and-drink",
    suburb: "Ross River",
    description:
      "Modern Australian on Ross River, known for creative dishes like smoked kangaroo dumplings and duck ramen.",
    // TODO: confirm website URL for A Touch of Salt
    websitePending: true,
  },
  {
    name: "Watermark Townsville",
    category: "food-and-drink",
    suburb: "The Strand",
    description:
      "Beachfront on the Strand, known for seafood platters, attentive service and ocean views.",
    // TODO: confirm website URL for Watermark Townsville
    websitePending: true,
  },
  {
    name: "JAM",
    category: "food-and-drink",
    suburb: "Palmer Street Dining District",
    description: "A Palmer Street staple for more than 14 years now.",
    // TODO: confirm website URL for JAM
    websitePending: true,
  },
  {
    name: "Bridgewater Q",
    category: "food-and-drink",
    suburb: "South Townsville",
    description: "Sophisticated riverside dining in South Townsville, with views across to Castle Hill.",
    // TODO: confirm website URL for Bridgewater Q
    websitePending: true,
  },
  {
    name: "Longboard Bar & Grill",
    category: "food-and-drink",
    suburb: "The Strand",
    description: "Casual, surf-shack-style burgers and beachfront drinks on the Strand.",
    // TODO: confirm website URL for Longboard Bar & Grill
    websitePending: true,
  },
  {
    name: "Odyssey on the Strand",
    category: "food-and-drink",
    suburb: "The Strand",
    description: "Greek and Mediterranean food with ocean views, open daily including breakfast.",
    // TODO: confirm website URL for Odyssey on the Strand
    websitePending: true,
  },
  {
    name: "Masala Indian Cuisine",
    category: "food-and-drink",
    suburb: "Palmer Street Dining District",
    description: "Family-friendly Indian cuisine in the Palmer Street dining district.",
    // TODO: confirm website URL for Masala Indian Cuisine
    websitePending: true,
  },
  {
    name: "Sakana Sushi",
    category: "food-and-drink",
    suburb: "Townsville",
    description: "Sushi and Japanese food that's consistently named among Townsville's best.",
    // TODO: confirm website URL for Sakana Sushi
    websitePending: true,
  },
  {
    name: "Townsville Yacht Club",
    category: "food-and-drink",
    suburb: "Townsville",
    description: "Waterfront dining and drinks — a casual, social pick.",
    // TODO: confirm website URL for Townsville Yacht Club
    websitePending: true,
  },

  // --- Dog-Friendly ---
  {
    name: "Juliette's",
    category: "dog-friendly",
    suburb: "The Strand",
    description:
      "The Strand's original dog-friendly café, open since 2007, with shady trees and sea views.",
    // TODO: confirm website URL for Juliette's
    websitePending: true,
  },
  {
    name: "Strand Coffee Club",
    category: "dog-friendly",
    suburb: "The Strand",
    description: "Dog-friendly on the Strand, with a popular Sunday brunch.",
    // TODO: confirm website URL for Strand Coffee Club
    websitePending: true,
  },
  {
    name: "The Balcony",
    category: "dog-friendly",
    suburb: "Townsville CBD",
    description: "In the city centre, with dogs welcome out on the verandah.",
    // TODO: confirm website URL for The Balcony
    websitePending: true,
  },
  {
    name: "Tobruk Kiosk",
    category: "dog-friendly",
    suburb: "The Strand (southern end)",
    description:
      "Coffee and light meals on the southern Strand, with treats and drinks on offer for dogs too.",
    // TODO: confirm website URL for Tobruk Kiosk
    websitePending: true,
  },
  {
    name: "Absolute Cravings",
    category: "dog-friendly",
    suburb: "Palmetum Botanic Garden",
    description: "Right next to the Palmetum Botanic Garden, with pet-friendly outdoor seating.",
    website: "https://www.absolutecravings.com.au/",
  },
  {
    name: "Sirens Bayside",
    category: "dog-friendly",
    suburb: "Belgian Gardens",
    description:
      "In Belgian Gardens, named a top pick for dog-friendly cafés and known for a beautiful outdoor area.",
    // TODO: confirm website URL for Sirens Bayside
    websitePending: true,
  },
  {
    name: "My Pet Hub Townsville",
    category: "dog-friendly",
    suburb: "Townsville",
    description:
      "Vet care, doggy daycare, grooming, retail, cat boarding and puppy school, all under one roof.",
    website: "https://mypethub.com.au/townsville-vet/",
  },
  {
    name: "Allsorts Doggie Daycare",
    category: "dog-friendly",
    suburb: "Townsville",
    description: "Doggy daycare with structured classes as well as one-on-one options.",
    // TODO: confirm website URL for Allsorts Doggie Daycare
    websitePending: true,
  },
  {
    name: "Shoredrive Motel",
    category: "dog-friendly",
    suburb: "The Strand",
    description: "On the Strand, with dedicated pet-friendly rooms for guests travelling with a dog.",
    // TODO: confirm website URL for Shoredrive Motel
    websitePending: true,
  },
  {
    name: "Pet Resorts Australia Townsville",
    category: "dog-friendly",
    suburb: "Yabulu",
    description:
      "My own pick, for what it's worth. Out at Yabulu, it's proper premium boarding — climate-controlled accommodation, a supervised splash park, and on-site training if your dog needs a bit of work while you're away. I trust them with my own dog.",
    website: "https://petresortsaustralia.com.au/locations/townsville",
  },

  // --- Wellness & Beauty ---
  {
    name: "Tropical North Day Spa Townsville",
    category: "wellness-beauty",
    suburb: "Townsville",
    description:
      "Rated 4.8/5 from more than 120 Google reviews, offering relaxation and deep tissue massage, aromatherapy and facials.",
    // TODO: confirm website URL for Tropical North Day Spa Townsville
    websitePending: true,
  },
  {
    name: "endota spa Townsville",
    category: "wellness-beauty",
    suburb: "Stockland",
    description: "A well-loved national spa brand, located at Stockland.",
    // TODO: confirm website URL for endota spa Townsville
    websitePending: true,
  },
  {
    name: "Chrysalis Medispa",
    category: "wellness-beauty",
    suburb: "Townsville",
    description: "North Queensland's only skin clinic led by a Plastic & Reconstructive Surgeon.",
    // TODO: confirm website URL for Chrysalis Medispa
    websitePending: true,
  },
  {
    name: "JoJo's Thai Massage and Spa",
    category: "wellness-beauty",
    suburb: "Townsville",
    description: "A calm, ambient space offering magnesium float treatments.",
    // TODO: confirm website URL for JoJo's Thai Massage and Spa
    websitePending: true,
  },
  {
    name: "City Cave Idalia",
    category: "wellness-beauty",
    suburb: "Idalia",
    description: "A float therapy specialist out at Idalia.",
    // TODO: confirm website URL for City Cave Idalia
    websitePending: true,
  },
  {
    name: "Beau Shea Massage & Beauty",
    category: "wellness-beauty",
    suburb: "Townsville",
    description: "A locally recommended massage and beauty studio.",
    // TODO: confirm website URL for Beau Shea Massage & Beauty
    websitePending: true,
  },
  {
    name: "Massage Relax Restore",
    category: "wellness-beauty",
    suburb: "Townsville",
    description: "Remedial massage and fire cupping, with warmly reviewed therapists.",
    // TODO: confirm website URL for Massage Relax Restore
    websitePending: true,
  },
  {
    name: "Senorita Nails Spa & Beauty",
    category: "wellness-beauty",
    suburb: "Thuringowa Central",
    description: "Nails and spa services combined, out at Thuringowa Central.",
    // TODO: confirm website URL for Senorita Nails Spa & Beauty
    websitePending: true,
  },
  {
    name: "YogaHealth Townsville",
    category: "wellness-beauty",
    suburb: "Currajong",
    description:
      "A Currajong studio that's quietly loved by long-time locals rather than chasing trends. There's a full class timetable if you want to make it a regular thing rather than a one-off.",
    website: "https://yogahealth.net.au/",
  },
  {
    name: "Diamond Barber",
    category: "wellness-beauty",
    suburb: "Townsville",
    description: "A well-reviewed local barbershop that's family-friendly.",
    // TODO: confirm website URL for Diamond Barber
    websitePending: true,
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
      </div>

      <h3 className="text-base font-semibold text-foreground">{listing.name}</h3>

      <p className="text-sm text-muted-foreground leading-relaxed">{listing.description}</p>

      <p className="flex items-center gap-1.5 text-xs text-muted-foreground">
        <MapPin className="w-3.5 h-3.5" aria-hidden="true" />
        {listing.suburb}
      </p>

      <div className="mt-auto pt-2 flex items-center justify-between gap-3">
        {listing.websitePending ? (
          <span className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground italic">
            [Link pending]
          </span>
        ) : (
          <a
            href={listing.website}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
          >
            Visit Website
            <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
          </a>
        )}
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
        ...(l.website ? { url: l.website } : {}),
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
