import { Link } from "react-router-dom";
import { MapPin, Compass, RefreshCw, BookOpen } from "lucide-react";

const points = [
  {
    icon: MapPin,
    title: "Built in Townsville",
    text: "Written and maintained locally, not assembled from a national tourism database.",
  },
  {
    icon: Compass,
    title: "Independent",
    text: "No tourism board sign-off — just practical advice about how the city actually works.",
  },
  {
    icon: RefreshCw,
    title: "Kept current",
    text: "Guides are reviewed and dated, with official sources linked where details change.",
  },
  {
    icon: BookOpen,
    title: "Detailed guides",
    text: "Every recommendation leads to a full guide rather than a one-line listing.",
  },
];

const LocalTrustIntro = () => {
  return (
    <section className="py-14 px-4 bg-background">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center max-w-2xl mx-auto mb-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3">
            An Independent Local Guide to Townsville
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
            Townsville Guide is built here in Townsville by Duncan Ross. It exists to help visitors
            work out what is worth doing, how to plan around the heat and the seasons, and which
            guide to open next.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {points.map((p) => (
            <div key={p.title} className="rounded-xl border border-border/60 bg-card p-5">
              <p.icon className="w-5 h-5 text-primary mb-2" aria-hidden />
              <h3 className="font-semibold text-foreground">{p.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mt-1">{p.text}</p>
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-muted-foreground mt-6">
          More about the guide and how it is put together on the{" "}
          <Link to="/local-tips" className="text-primary hover:underline">
            local tips page
          </Link>
          .
        </p>
      </div>
    </section>
  );
};

export default LocalTrustIntro;
