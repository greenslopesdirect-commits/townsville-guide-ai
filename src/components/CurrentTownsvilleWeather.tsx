import { Sun, ExternalLink } from "lucide-react";
import { useTownsvilleWeather } from "@/hooks/use-townsville-weather";

const BOM_URL = "http://www.bom.gov.au/qld/forecasts/townsville.shtml";

// Standard WHO / Australian (ARPANSA) UV Index scale.
function uvLabel(uv: number): string {
  if (uv >= 11) return "Extreme";
  if (uv >= 8) return "Very High";
  if (uv >= 6) return "High";
  if (uv >= 3) return "Moderate";
  return "Low";
}

interface CurrentTownsvilleWeatherProps {
  className?: string;
}

const CurrentTownsvilleWeather = ({ className = "" }: CurrentTownsvilleWeatherProps) => {
  const weather = useTownsvilleWeather();

  return (
    <section
      aria-labelledby="current-weather-heading"
      className={`rounded-xl border border-border bg-muted/40 p-5 md:p-6 ${className}`}
    >
      <div className="flex items-center gap-2 mb-3">
        <Sun className="w-5 h-5 text-primary flex-shrink-0" aria-hidden="true" />
        <h2 id="current-weather-heading" className="text-lg font-semibold text-foreground">
          Right Now in Townsville
        </h2>
      </div>

      {weather.status === "loading" && (
        <p className="text-sm text-muted-foreground">Checking today's live Townsville conditions…</p>
      )}

      {weather.status === "error" && (
        <p className="text-sm text-muted-foreground">
          Live conditions aren't available right now. Townsville is warm and sunny most of the year —
          check the Bureau of Meteorology below for today's actual forecast.
        </p>
      )}

      {weather.status === "success" && (
        <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
          <span className="text-3xl font-bold text-foreground">{weather.temperatureC}°C</span>
          <span className="text-sm text-muted-foreground capitalize">{weather.condition}</span>
          {weather.uvIndex !== null && (
            <span className="text-sm text-muted-foreground">
              UV {uvLabel(weather.uvIndex)} ({Math.round(weather.uvIndex)})
            </span>
          )}
        </div>
      )}

      <p className="text-xs text-muted-foreground/80 mt-3 leading-relaxed">
        Live conditions via Open-Meteo — not an official forecast.{" "}
        <a
          href={BOM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary underline underline-offset-2 inline-flex items-center gap-1"
        >
          Check the Bureau of Meteorology for the full Townsville forecast and current warnings.
          <ExternalLink className="w-3 h-3 flex-shrink-0" aria-hidden="true" />
        </a>
      </p>
    </section>
  );
};

export default CurrentTownsvilleWeather;
