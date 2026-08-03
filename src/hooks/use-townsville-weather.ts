import { useEffect, useState } from "react";

// Townsville, QLD
const TOWNSVILLE_LAT = -19.259;
const TOWNSVILLE_LON = 146.817;

const OPEN_METEO_URL =
  `https://api.open-meteo.com/v1/forecast?latitude=${TOWNSVILLE_LAT}&longitude=${TOWNSVILLE_LON}` +
  `&current=temperature_2m,weather_code&hourly=uv_index&timezone=Australia%2FBrisbane&forecast_days=1`;

// WMO weather codes used by Open-Meteo — https://open-meteo.com/en/docs
const WEATHER_CODE_DESCRIPTIONS: Record<number, string> = {
  0: "clear sky",
  1: "mostly clear",
  2: "partly cloudy",
  3: "overcast",
  45: "foggy",
  48: "foggy",
  51: "light drizzle",
  53: "drizzle",
  55: "heavy drizzle",
  56: "freezing drizzle",
  57: "freezing drizzle",
  61: "light rain",
  63: "rain",
  65: "heavy rain",
  66: "freezing rain",
  67: "freezing rain",
  71: "light snow",
  73: "snow",
  75: "heavy snow",
  77: "snow grains",
  80: "light showers",
  81: "showers",
  82: "heavy showers",
  85: "snow showers",
  86: "snow showers",
  95: "a thunderstorm",
  96: "a thunderstorm with hail",
  99: "a thunderstorm with hail",
};

function describeWeatherCode(code: number): string {
  return WEATHER_CODE_DESCRIPTIONS[code] ?? "fine conditions";
}

export interface TownsvilleWeatherData {
  temperatureC: number;
  condition: string;
  uvIndex: number | null;
}

export type TownsvilleWeatherState =
  | { status: "loading" }
  | { status: "error" }
  | ({ status: "success" } & TownsvilleWeatherData);

/**
 * Live current conditions for Townsville via the free Open-Meteo API (no key required).
 * Falls back to status "error" on any failure — callers should render evergreen
 * seasonal copy in that case rather than surfacing an error to visitors.
 */
export function useTownsvilleWeather(): TownsvilleWeatherState {
  const [state, setState] = useState<TownsvilleWeatherState>({ status: "loading" });

  useEffect(() => {
    let cancelled = false;
    const controller = new AbortController();

    async function load() {
      try {
        const response = await fetch(OPEN_METEO_URL, { signal: controller.signal });
        if (!response.ok) {
          throw new Error(`Open-Meteo request failed: ${response.status}`);
        }

        const json = await response.json();
        const currentTime: unknown = json?.current?.time;
        const temperature: unknown = json?.current?.temperature_2m;
        const weatherCode: unknown = json?.current?.weather_code;

        if (typeof temperature !== "number" || typeof weatherCode !== "number") {
          throw new Error("Unexpected Open-Meteo response shape");
        }

        let uvIndex: number | null = null;
        const hourlyTimes: unknown = json?.hourly?.time;
        const hourlyUv: unknown = json?.hourly?.uv_index;
        if (
          typeof currentTime === "string" &&
          Array.isArray(hourlyTimes) &&
          Array.isArray(hourlyUv)
        ) {
          // `current.time` can carry minute-level precision (e.g. "...T14:30")
          // while `hourly.time` entries are always on the hour ("...T14:00") —
          // round down to the hour before looking up the matching UV reading.
          const currentHour = currentTime.slice(0, 13) + ":00";
          const idx = hourlyTimes.indexOf(currentHour);
          if (idx !== -1 && typeof hourlyUv[idx] === "number") {
            uvIndex = hourlyUv[idx];
          }
        }

        if (!cancelled) {
          setState({
            status: "success",
            temperatureC: Math.round(temperature),
            condition: describeWeatherCode(weatherCode),
            uvIndex,
          });
        }
      } catch (err) {
        if (!cancelled) {
          console.error("useTownsvilleWeather: failed to fetch live conditions", err);
          setState({ status: "error" });
        }
      }
    }

    load();

    return () => {
      cancelled = true;
      controller.abort();
    };
  }, []);

  return state;
}
