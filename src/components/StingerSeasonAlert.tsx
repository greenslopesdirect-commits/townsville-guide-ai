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
        ☀️ June Update: Stinger Season Has Ended!
      </AlertTitle>
      <AlertDescription className="text-amber-700 dark:text-amber-400 mt-2">
        <p>
          The 2025/2026 marine stinger season has officially wrapped up, and Townsville City Council hauled the nets out on May 28. While deep-water beach swimming is now significantly safer for your dogs across North Queensland, always stay vigilant for general marine conditions and local crocodile signage.
        </p>
      </AlertDescription>
    </Alert>
  );
};

export default StingerSeasonAlert;
