import { MapPin, ExternalLink } from "lucide-react";

interface MapLocationCardProps {
  url: string;
  label?: string;
}

const MapLocationCard = ({ url, label = "View Location on Maps" }: MapLocationCardProps) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-3 px-4 py-3 my-2 bg-muted/50 hover:bg-muted border border-border/60 hover:border-primary/40 rounded-xl transition-all duration-200 group cursor-pointer"
    >
      <div className="flex items-center justify-center w-10 h-10 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
        <MapPin className="w-5 h-5 text-primary" />
      </div>
      <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
        {label}
      </span>
      <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors ml-auto" />
    </a>
  );
};

export default MapLocationCard;
