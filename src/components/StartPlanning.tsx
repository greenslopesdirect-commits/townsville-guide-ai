import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import castleHillImage from "@/assets/castle-hill-townsville.webp";
import strandImage from "@/assets/the-strand-townsville.webp";
import magneticIslandImage from "@/assets/magnetic-island-townsville.webp";
import jezzineBarracksImage from "@/assets/jezzine-barracks-townsville.webp";

const pathways = [
  {
    title: "First Time in Townsville",
    description:
      "Understand how long to stay, where to base yourself, whether you need a car and what first-time visitors should know.",
    image: castleHillImage,
    alt: "View over Townsville and the coast from the Castle Hill lookout",
    link: "/first-time-in-townsville",
    label: "Read the First Time in Townsville guide",
  },
  {
    title: "Visiting With Kids",
    description:
      "Find family-friendly attractions, free activities and practical ideas for children of different ages.",
    image: strandImage,
    alt: "The Strand waterfront in Townsville, a popular family swimming and picnic spot",
    link: "/townsville-with-kids",
    label: "Read the Townsville with Kids guide",
  },
  {
    title: "Magnetic Island Day Trip",
    description:
      "Plan the ferry, island transport, beaches, walks and main stops for a full day on Magnetic Island.",
    image: magneticIslandImage,
    alt: "Sheltered bay and headland on Magnetic Island, a short ferry ride from Townsville",
    link: "/guides/magnetic-island-day-trip",
    label: "Read the Magnetic Island day trip guide",
  },
  {
    title: "Free Things to Do",
    description:
      "Explore Townsville's free lookouts, waterfront areas, walks, parks and family-friendly places.",
    image: jezzineBarracksImage,
    alt: "Coastal walkway and heritage displays at Jezzine Barracks, free to visit in Townsville",
    link: "/guides/free-things",
    label: "Read the free things to do in Townsville guide",
  },
  {
    title: "Townsville in One Day",
    description:
      "Follow a realistic one-day plan covering the main sights without trying to fit too much into a single visit.",
    image: castleHillTwoImage,
    alt: "Townsville city and coastline seen from the Castle Hill lookout in the late afternoon",
    link: "/townsville-in-one-day",
    label: "Read the Townsville in one day itinerary",
  },
];


const StartPlanning = () => {
  return (
    <section id="start-planning" className="py-16 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-3 text-foreground">
          Start Planning Your Townsville Visit
        </h2>
        <p className="text-center text-muted-foreground mb-12 text-lg max-w-3xl mx-auto">
          Whether you are visiting for the first time, spending only one day or travelling
          without a car, start with the guide that best matches your trip.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {pathways.map((item) => (
            <Card
              key={item.link}
              className="group relative overflow-hidden border border-border/60 shadow-[var(--shadow-card)] transition-shadow hover:shadow-[var(--shadow-tropical)] focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2"
            >
              <div className="aspect-[4/3] w-full overflow-hidden bg-muted">
                <img
                  src={item.image}
                  alt={item.alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <CardContent className="p-5 space-y-2">
                <h3 className="text-xl font-bold text-foreground">
                  <Link
                    to={item.link}
                    aria-label={item.label}
                    className="outline-none after:absolute after:inset-0 after:content-[''] focus-visible:underline"
                  >
                    {item.title}
                  </Link>
                </h3>
                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                <span className="inline-flex items-center gap-1.5 text-primary font-medium pt-1">
                  Read the guide
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </span>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StartPlanning;
