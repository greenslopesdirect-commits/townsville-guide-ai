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
        href="https://www.skyscanner-placeholder.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Plane className="w-4 h-4" />
        Search Flights (Skyscanner)
      </a>
    </Button>
  );
};

export default FlightsButton;
