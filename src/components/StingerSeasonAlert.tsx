import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertTriangle } from "lucide-react";
import { Link } from "react-router-dom";

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
        <p className="font-semibold">
          ☀️ April 6 Update: Nets remain active. With the school holidays in full swing, stick to the netted enclosures at The Strand and Pallarenda for your holiday swims.{" "}
          <Link 
            to="/guides/stinger-safety"
            className="text-amber-800 dark:text-amber-300 hover:underline"
          >
            View the latest Safety Guide →
          </Link>
        </p>
      </AlertDescription>
    </Alert>
  );
};

export default StingerSeasonAlert;
