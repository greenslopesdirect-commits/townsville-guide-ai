import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { UserRound, CalendarCheck, ShieldCheck, ChevronDown, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  DEFAULT_GUIDE_TRUST,
  getGuideTrust,
  type GuideTrustMeta,
} from "@/data/guideTrust";

interface GuideTrustPanelProps extends Partial<GuideTrustMeta> {
  guideTitle?: string;
  className?: string;
}

const VISIT_TEXT: Record<GuideTrustMeta["visitStatus"], string> = {
  "personally-visited":
    "Duncan has personally visited this location and based the local observations in this guide on firsthand experience.",
  "research-based":
    "This guide is based on research and official information. It does not claim firsthand experience.",
  "partially-firsthand":
    "Duncan has visited this area, but some details in this guide were checked through official sources and additional research.",
};

const GuideTrustPanel = ({ guideTitle, className, ...overrides }: GuideTrustPanelProps) => {
  const location = useLocation();
  const [sourcesOpen, setSourcesOpen] = useState(false);

  const meta: GuideTrustMeta = {
    ...DEFAULT_GUIDE_TRUST,
    ...getGuideTrust(location.pathname),
    ...Object.fromEntries(Object.entries(overrides).filter(([, v]) => v !== undefined)),
  } as GuideTrustMeta;

  // document.title is set by react-helmet after the first render, so read it in
  // an effect (and on route change) rather than during render, otherwise the
  // report link falls back to the generic site title.
  const [docTitle, setDocTitle] = useState("");
  useEffect(() => {
    const id = window.setTimeout(() => setDocTitle(document.title), 0);
    return () => window.clearTimeout(id);
  }, [location.pathname]);

  const title = guideTitle || docTitle || "Townsville Guide";
  const url =
    typeof window !== "undefined"
      ? `${window.location.origin}${location.pathname}`
      : `https://www.townsvilleguide.com.au${location.pathname}`;

  const reportHref = `/contact?subject=${encodeURIComponent("Guide update")}&guide=${encodeURIComponent(
    title,
  )}&url=${encodeURIComponent(url)}`;

  return (
    <section
      aria-labelledby="guide-trust-heading"
      className={cn(
        "rounded-xl border border-border bg-muted/40 p-5 md:p-6 text-left",
        className,
      )}
    >
      <h2 id="guide-trust-heading" className="text-lg font-semibold text-foreground mb-4">
        About this guide
      </h2>

      <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
        <div className="flex items-start gap-3">
          <UserRound className="w-4 h-4 mt-0.5 flex-shrink-0 text-primary" aria-hidden="true" />
          <div>
            <p className="font-medium text-foreground">Written by {meta.author}</p>
            <p>
              Duncan has lived in Townsville since 2023 and writes Townsville Guide using
              local knowledge and carefully checked information.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <ShieldCheck className="w-4 h-4 mt-0.5 flex-shrink-0 text-primary" aria-hidden="true" />
          <p>{meta.visitNote || VISIT_TEXT[meta.visitStatus]}</p>
        </div>


        <div className="flex items-start gap-3">
          <CalendarCheck className="w-4 h-4 mt-0.5 flex-shrink-0 text-primary" aria-hidden="true" />
          <p>
            <span className="font-medium text-foreground">Last checked:</span> {meta.lastChecked}
          </p>
        </div>

        <p>
          {meta.officialSourcesChecked
            ? "Access, safety, opening hours, rules or transport information was checked against relevant official sources where available."
            : "This article primarily contains local observations and general visitor advice."}
        </p>

        {meta.officialSourcesChecked && meta.officialSources?.length ? (
          <div className="rounded-lg border border-border/60 bg-background/60">
            <button
              type="button"
              onClick={() => setSourcesOpen((v) => !v)}
              aria-expanded={sourcesOpen}
              className="flex w-full items-center justify-between gap-2 px-4 py-2.5 text-sm font-medium text-foreground"
            >
              Sources checked
              <ChevronDown
                className={cn("w-4 h-4 transition-transform", sourcesOpen && "rotate-180")}
                aria-hidden="true"
              />
            </button>
            {sourcesOpen && (
              <ul className="px-4 pb-3 space-y-2">
                {meta.officialSources.map((source) => (
                  <li key={source.url}>
                    <a
                      href={source.url}
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      className="inline-flex items-center gap-1.5 text-primary underline underline-offset-2 break-words"
                    >
                      {source.name}
                      <ExternalLink className="w-3 h-3 flex-shrink-0" aria-hidden="true" />
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ) : null}

        <div className="pt-1">
          <p className="font-medium text-foreground">Spotted an error or something that has changed?</p>
          <p className="mb-3">Please let us know so we can check and update the guide.</p>
          <Button asChild variant="outline" size="sm">
            <a href={reportHref}>Report an update</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default GuideTrustPanel;
