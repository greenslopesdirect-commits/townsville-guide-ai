import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Sun } from "lucide-react";

interface StingerSeasonAlertProps {
  className?: string;
}

const StingerSeasonAlert = ({ className = "" }: StingerSeasonAlertProps) => {
  return (
    <Alert 
      className={`bg-amber-50 dark:bg-amber-950/30 border-amber-300 dark:border-amber-700 ${className}`}
    >
      <Sun className="h-5 w-5 text-amber-600 dark:text-amber-400" />
      <AlertTitle className="text-amber-800 dark:text-amber-300 font-semibold">
        ☀️ Stinger Season Has Ended — Nets May Still Be In Place
      </AlertTitle>
      <AlertDescription className="text-amber-700 dark:text-amber-400 mt-2">
        <p>
          The 2025/26 marine stinger season has officially wrapped up, so swimming at Townsville and Magnetic Island beaches is no longer considered high-risk for stings. Council typically leaves the beach enclosures up and maintained for a period afterwards as a precaution while water temperatures settle — so if you still see nets at The Strand, Pallarenda, or Magnetic Island, treat them as a comfort option rather than an active warning. Continue to check local signage and stay aware of general marine and crocodile advisories.
        </p>
      </AlertDescription>

    </Alert>
  );
};

export default StingerSeasonAlert;
