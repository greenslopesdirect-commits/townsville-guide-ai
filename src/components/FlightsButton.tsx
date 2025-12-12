import { Plane } from "lucide-react";
import { Button } from "@/components/ui/button";

interface FlightsButtonProps {
  className?: string;
  size?: "default" | "sm" | "lg" | "icon";
}

const FlightsButton = ({ className = "", size = "default" }: FlightsButtonProps) => {
  return (
    <Button
      size={size}
      className={`gap-2 ${className}`}
      asChild
    >
      <a
        href="https://www.skyscanner.com.au/transport/flights-to/tsv"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Plane className="w-4 h-4" />
        Check Flight Prices
      </a>
    </Button>
  );
};

export default FlightsButton;
