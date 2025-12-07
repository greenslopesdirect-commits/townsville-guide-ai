import { Wifi, Car, Coffee, Waves } from "lucide-react";
import BookingButton from "@/components/BookingButton";

interface AccommodationCardProps {
  title: string;
  description: string;
  image?: string;
  priceFrom?: string;
  facilities?: string[];
}

const facilityIcons: Record<string, React.ReactNode> = {
  wifi: <Wifi className="w-4 h-4" />,
  parking: <Car className="w-4 h-4" />,
  breakfast: <Coffee className="w-4 h-4" />,
  pool: <Waves className="w-4 h-4" />,
};

const AccommodationCard = ({
  title,
  description,
  image,
  priceFrom = "From $XX/night",
  facilities = [],
}: AccommodationCardProps) => {
  return (
    <div className="bg-card border border-border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      {/* Image placeholder */}
      <div className="aspect-[16/10] bg-muted flex items-center justify-center">
        {image ? (
          <img src={image} alt={title} className="w-full h-full object-cover" />
        ) : (
          <span className="text-muted-foreground text-sm">Image placeholder</span>
        )}
      </div>

      <div className="p-4 space-y-3">
        <h3 className="font-semibold text-lg text-foreground">{title}</h3>
        <p className="text-sm text-muted-foreground line-clamp-2">{description}</p>

        {/* Facilities */}
        {facilities.length > 0 && (
          <div className="flex gap-3 text-muted-foreground">
            {facilities.map((facility) => (
              <span key={facility} title={facility} className="flex items-center gap-1 text-xs">
                {facilityIcons[facility] || null}
                <span className="capitalize">{facility}</span>
              </span>
            ))}
          </div>
        )}

        {/* Price */}
        <p className="text-primary font-semibold">{priceFrom}</p>

        {/* Booking Button */}
        <BookingButton size="sm" className="w-full" />
      </div>
    </div>
  );
};

export default AccommodationCard;
