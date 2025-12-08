import { useState, useEffect } from "react";

const HeaderWeather = () => {
  const [weather, setWeather] = useState<{ temp: number; icon: string } | null>(null);

  const getWeatherIcon = (code: number): string => {
    if (code === 0) return "☀️";
    if (code === 1 || code === 2) return "🌤️";
    if (code === 3) return "☁️";
    if (code === 45 || code === 48) return "🌫️";
    if (code === 51 || code === 53 || code === 55) return "🌦️";
    if (code === 61 || code === 63 || code === 65) return "🌧️";
    if (code === 71 || code === 73 || code === 75) return "❄️";
    if (code === 95) return "⛈️";
    return "🌡️";
  };

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await fetch(
          "https://api.open-meteo.com/v1/forecast?latitude=-19.2589&longitude=146.8169&current=temperature_2m,weather_code"
        );
        if (!response.ok) throw new Error("Failed to fetch");
        const data = await response.json();
        setWeather({
          temp: Math.round(data.current.temperature_2m),
          icon: getWeatherIcon(data.current.weather_code),
        });
      } catch (error) {
        console.error("Weather fetch error:", error);
      }
    };

    fetchWeather();
  }, []);

  if (!weather) return null;

  return (
    <span className="text-sm md:text-base text-gray-800 font-medium whitespace-nowrap px-2 md:px-3">
      {weather.icon} {weather.temp}°C — Townsville
    </span>
  );
};

export default HeaderWeather;
