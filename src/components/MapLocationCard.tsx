import { MapPin } from "lucide-react";

interface MapLocationCardProps {
  url: string;
}

const MapLocationCard = ({ url }: MapLocationCardProps) => {
  const handleClick = () => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <button
      onClick={handleClick}
      className="w-full bg-white border border-gray-200 rounded-lg p-3 mt-2 flex items-center gap-3 hover:bg-gray-50 transition-colors shadow-sm cursor-pointer text-left"
      type="button"
    >
      <div className="flex items-center justify-center w-10 h-10 bg-primary/10 rounded-lg shrink-0">
        <MapPin className="w-5 h-5 text-primary" />
      </div>
      <span className="font-semibold text-foreground">
        Open in Google Maps
      </span>
    </button>
  );
};

export default MapLocationCard;
