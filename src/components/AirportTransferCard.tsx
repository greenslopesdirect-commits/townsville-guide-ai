import { Plane, Info, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface AirportTransferCardProps {
  className?: string;
  proTipExtra?: string;
}

const AirportTransferCard = ({ className = "", proTipExtra }: AirportTransferCardProps) => {
  return (
    <div
      className={`rounded-xl border-2 border-primary/30 bg-gradient-to-br from-[hsl(var(--ocean-light))] to-background p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow ${className}`}
    >
      <div className="flex items-start gap-4 mb-4">
        <div className="hidden sm:flex w-12 h-12 rounded-lg bg-primary/15 items-center justify-center shrink-0">
          <Plane className="w-6 h-6 text-primary" />
        </div>
        <div className="flex-1">
          <h3 className="text-xl md:text-2xl font-bold text-foreground leading-tight mb-2">
            Arrive Stress-Free: Private Townsville Airport Transfers
          </h3>
          <p className="text-base text-muted-foreground leading-relaxed">
            Skip the taxi rank and the heat. Pre-book a private car and driver to meet you at the TSV arrivals gate. Perfect for families, groups, or fans heading straight to the stadium.
          </p>
        </div>
      </div>

      <Button size="lg" variant="coral" className="w-full sm:w-auto" asChild>
        <a
          href="https://www.awin1.com/cread.php?awinmid=87121&awinaffid=2687628&ued=https%3A%2F%2Fgowithguide.com%2Fairport-transfers"
          target="_blank"
          rel="noopener noreferrer sponsored"
        >
          Check Private Rates
          <ArrowRight className="w-4 h-4" />
        </a>
      </Button>

      <div className="mt-4 flex items-start gap-2 rounded-md bg-background/70 border border-border px-4 py-3">
        <Info className="w-4 h-4 text-primary shrink-0 mt-0.5" />
        <p className="text-sm italic text-muted-foreground leading-snug">
          <strong className="not-italic text-foreground">Pro Tip:</strong> When the page opens, simply type 'TSV' as your pickup and your hotel as the destination.
          {proTipExtra && <span className="block mt-1">{proTipExtra}</span>}
        </p>
      </div>
    </div>
  );
};

export default AirportTransferCard;
