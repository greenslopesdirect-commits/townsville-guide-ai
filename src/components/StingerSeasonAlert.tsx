import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertTriangle, ExternalLink } from "lucide-react";

interface StingerSeasonAlertProps {
  className?: string;
}

const StingerSeasonAlert = ({ className = "" }: StingerSeasonAlertProps) => {
  return (
    <Alert 
      className={`bg-amber-50 dark:bg-amber-950/30 border-amber-300 dark:border-amber-700 ${className}`}
    >
      <AlertTriangle className="h-5 w-5 text-amber-600 dark:text-amber-400" />
      <AlertTitle className="text-amber-800 dark:text-amber-300 font-semibold">
        ⚠️ Stinger Season Notice: November–May
      </AlertTitle>
      <AlertDescription className="text-amber-700 dark:text-amber-400 mt-2">
        <p className="mb-2">
          Always swim within stinger nets or enclosures during marine stinger season. 
          Check with lifesavers for current conditions before entering the water.
        </p>
        <a 
          href="https://www.slsq.com.au/beach-reports" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-amber-800 dark:text-amber-300 hover:underline font-medium"
        >
          <ExternalLink className="w-4 h-4" />
          View Official Surf Life Saving Reports
        </a>
      </AlertDescription>
    </Alert>
  );
};

export default StingerSeasonAlert;
