import { Hotel } from "lucide-react";
import { Button } from "@/components/ui/button";

interface BookingButtonProps {
  className?: string;
  size?: "default" | "sm" | "lg" | "icon";
}

const BookingButton = ({ className = "", size = "default" }: BookingButtonProps) => {
  return (
    <Button
      size={size}
      variant="coral"
      className={`gap-2 ${className}`}
      asChild
    >
      <a
        href="https://booking-placeholder-link.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Hotel className="w-4 h-4" />
        Check Availability (Booking.com)
      </a>
    </Button>
  );
};

export default BookingButton;
