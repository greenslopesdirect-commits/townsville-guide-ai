import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import strandImage from "@/assets/the-strand-townsville.webp";
import castleHillImage from "@/assets/castle-hill-townsville.webp";
import magneticIslandImage from "@/assets/magnetic-island-townsville.webp";

const featured = [
  {
    title: "The Strand",
    description:
      "Townsville's main waterfront: swimming areas, playgrounds, cafés and an easy flat walk along the coast.",
    image: strandImage,
    alt: "The Strand waterfront and beach in Townsville",
    link: "/the-strand",
  },
  {
    title: "Castle Hill",
    description:
      "The city's landmark lookout. You can drive to the top for the views — walking the tracks is optional.",
    image: castleHillImage,
    alt: "View over Townsville from the Castle Hill lookout",
    link: "/castle-hill",
  },
  {
    title: "Magnetic Island",
    description:
      "The region's major day trip: a short ferry ride to bays, beaches, walking tracks and wildlife.",
    image: magneticIslandImage,
    alt: "Bay and headland on Magnetic Island near Townsville",
    link: "/guides/magnetic-island-day-trip",
  },
];

const secondary = [
  {
    title: "Jezzine Barracks",
    description:
      "An easy free heritage and coastal headland at the northern end of The Strand, with walkways and ocean views.",
    link: "/jezzine-barracks",
  },
  {
    title: "Riverway",
    description:
      "A riverside recreation precinct with free lagoons and parkland — useful for families and quieter days, rather than a substitute for the island.",
    link: "/riverway",
  },
];

const EssentialExperiences = () => {
  return (
    <section id="essential-experiences" className="py-16 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-3 text-foreground">
          Start With Townsville's Essential Experiences
        </h2>
        <p className="text-center text-muted-foreground mb-10 text-lg max-w-2xl mx-auto">
          If you only have time for a few things, start here — then open the guide for the
          detail.
        </p>

        <div className="mb-10">
          <Link
            to="/the-strand"
            aria-label="Explore The Strand"
            className="group block rounded-2xl overflow-hidden border border-border/60 shadow-[var(--shadow-card)] transition-shadow hover:shadow-[var(--shadow-tropical)]"
          >
            <div className="aspect-[16/9] w-full overflow-hidden bg-muted">
              <img
                src="/images/homepage/the-strand-north-ward-townsville.webp"
                alt="The Strand beachfront at North Ward in Townsville"
                loading="lazy"
                width={1600}
                height={900}
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((item) => (
            <Link
              key={item.link}
              to={item.link}
              className="group block rounded-lg outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            >
              <Card className="h-full overflow-hidden border border-border/60 transition-shadow hover:shadow-[var(--shadow-tropical)]">
                <div className="aspect-[4/3] w-full overflow-hidden bg-muted">
                  <img
                    src={item.image}
                    alt={item.alt}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <CardContent className="p-5 space-y-2">
                  <h3 className="text-xl font-bold text-foreground">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                  <span className="inline-flex items-center gap-1.5 text-primary font-medium pt-1">
                    Read the guide
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 gap-6 mt-6">
          {secondary.map((item) => (
            <Link
              key={item.link}
              to={item.link}
              className="group block rounded-lg outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            >
              <Card className="h-full border border-border/60 transition-shadow hover:shadow-[var(--shadow-card)]">
                <CardContent className="p-5 space-y-2">
                  <h3 className="text-lg font-bold text-foreground">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {item.description}
                  </p>
                  <span className="inline-flex items-center gap-1.5 text-primary font-medium text-sm pt-1">
                    Read the guide
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EssentialExperiences;
