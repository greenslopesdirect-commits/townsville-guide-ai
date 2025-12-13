import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Sun, ExternalLink } from "lucide-react";

interface HeatSafetyAlertProps {
  className?: string;
}

const HeatSafetyAlert = ({ className = "" }: HeatSafetyAlertProps) => {
  return (
    <Alert 
      className={`bg-orange-50 dark:bg-orange-950/30 border-orange-300 dark:border-orange-700 ${className}`}
    >
      <Sun className="h-5 w-5 text-orange-600 dark:text-orange-400" />
      <AlertTitle className="text-orange-800 dark:text-orange-300 font-semibold">
        ☀️ Heat & Sun Safety Notice
      </AlertTitle>
      <AlertDescription className="text-orange-700 dark:text-orange-400 mt-2">
        <p className="mb-2">
          Townsville's tropical heat can be intense, especially between 10am–3pm. 
          Locals recommend hiking Castle Hill early morning (before 7am) or late afternoon to avoid heatstroke.
        </p>
        <ul className="list-disc list-inside text-sm space-y-1 mb-2">
          <li>Carry at least 1L of water per person</li>
          <li>Wear a hat, sunscreen (SPF 50+) and light clothing</li>
          <li>Rest in shade regularly during outdoor activities</li>
        </ul>
        <a 
          href="http://www.bom.gov.au/qld/forecasts/townsville.shtml" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-orange-800 dark:text-orange-300 hover:underline font-medium"
        >
          <ExternalLink className="w-4 h-4" />
          Check Today's Weather Forecast
        </a>
      </AlertDescription>
    </Alert>
  );
};

export default HeatSafetyAlert;
