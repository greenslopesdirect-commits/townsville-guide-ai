import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Sun } from "lucide-react";

interface StingerSeasonAlertProps {
  className?: string;
}

const StingerSeasonAlert = ({ className = "" }: StingerSeasonAlertProps) => {
  return (
    <Alert 
      className={`bg-emerald-50 dark:bg-emerald-950/30 border-emerald-300 dark:border-emerald-700 ${className}`}
    >
      <Sun className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
      <AlertTitle className="text-emerald-800 dark:text-emerald-300 font-semibold">
        ☀️ Stinger Season Has Ended — Nets Removed for the Dry Season
      </AlertTitle>
      <AlertDescription className="text-emerald-700 dark:text-emerald-400 mt-2">
        <p>
          Townsville City Council confirmed on 27 May 2026 that the marine stinger enclosures at The Strand, Pallarenda, Magnetic Island (Picnic Bay and Horseshoe Bay) and Balgal Beach have been physically removed for the season, after weeks of clear net drags confirmed no stinger presence. This is standard annual practice — the nets are reinstalled each November when the next stinger season begins. Open-water swimming is no longer considered high-risk for box jellyfish or Irukandji. As always, follow beach flags, lifeguard directions and general marine and crocodile advisories.
        </p>
      </AlertDescription>

    </Alert>
  );
};

export default StingerSeasonAlert;
