import { useEffect, useState } from "react";
import { Cloud, CloudRain, Sun, CloudSnow, Wind } from "lucide-react";

const WeatherWidget = () => {
  const [weather, setWeather] = useState<{
    temp: number;
    condition: string;
    icon: string;
  } | null>(null);
  const [error, setError] = useState(false);

  const fetchWeather = async () => {
    try {
      const API_KEY = "YOUR_API_KEY"; // Replace with actual key
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=Townsville,AU&units=metric&appid=${API_KEY}`
      );
      
      if (!response.ok) throw new Error("Failed to fetch weather");
      
      const data = await response.json();
      setWeather({
        temp: Math.round(data.main.temp),
        condition: data.weather[0].main,
        icon: data.weather[0].icon,
      });
      setError(false);
    } catch (err) {
      console.error("Weather fetch error:", err);
      setError(true);
    }
  };

  useEffect(() => {
    fetchWeather();
    const interval = setInterval(fetchWeather, 30 * 60 * 1000); // 30 minutes
    return () => clearInterval(interval);
  }, []);

  const getWeatherIcon = (condition: string) => {
    switch (condition.toLowerCase()) {
      case "clear":
        return <Sun className="w-5 h-5 text-yellow-400" />;
      case "clouds":
        return <Cloud className="w-5 h-5 text-gray-400" />;
      case "rain":
      case "drizzle":
        return <CloudRain className="w-5 h-5 text-blue-400" />;
      case "snow":
        return <CloudSnow className="w-5 h-5 text-blue-200" />;
      default:
        return <Wind className="w-5 h-5 text-gray-400" />;
    }
  };

  if (error) {
    return (
      <div className="fixed top-4 right-4 z-50 bg-card/90 text-foreground rounded-2xl shadow-tropical px-4 py-3 backdrop-blur-sm">
        <p className="text-sm">Weather unavailable</p>
      </div>
    );
  }

  if (!weather) return null;

  return (
    <div className="fixed top-4 right-4 z-50 bg-card/90 text-foreground rounded-2xl shadow-tropical px-4 py-3 backdrop-blur-sm">
      <div className="flex items-center gap-2 text-sm md:text-base">
        {getWeatherIcon(weather.condition)}
        <span className="font-semibold">{weather.temp}°C</span>
        <span className="text-muted-foreground">|</span>
        <span>{weather.condition}</span>
      </div>
      <p className="text-xs text-muted-foreground mt-1">Townsville</p>
    </div>
  );
};

export default WeatherWidget;
