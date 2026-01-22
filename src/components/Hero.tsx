import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, MapPin, CalendarDays } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/strand-hero.jpg"; // Using your existing import

// --- Weather Widget (Preserved & Styled for Background) ---
const HeroWeatherWidget = () => {
  const [weather, setWeather] = useState<{ temp: number; icon: string; condition: string } | null>(null);

  const getWeatherIcon = (code: number): { icon: string; condition: string } => {
    if (code === 0) return { icon: "☀️", condition: "Clear" };
    if (code === 1 || code === 2) return { icon: "🌤️", condition: "Partly Cloudy" };
    if (code === 3) return { icon: "☁️", condition: "Overcast" };
    if (code === 45 || code === 48) return { icon: "🌫️", condition: "Foggy" };
    if (code >= 51 && code <= 55) return { icon: "🌦️", condition: "Drizzle" };
    if (code >= 61 && code <= 65) return { icon: "🌧️", condition: "Rain" };
    if (code >= 71 && code <= 75) return { icon: "❄️", condition: "Snow" };
    if (code >= 80 && code <= 82) return { icon: "🌧️", condition: "Showers" };
    if (code >= 95) return { icon: "⛈️", condition: "Thunderstorm" };
    return { icon: "🌡️", condition: "Weather" };
  };

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await fetch(
          "https://api.open-meteo.com/v1/forecast?latitude=-19.2589&longitude=146.8169&current=temperature_2m,weather_code"
        );
        if (!response.ok) throw new Error("Failed to fetch");
        const data = await response.json();
        const { icon, condition } = getWeatherIcon(data.current.weather_code);
        setWeather({
          temp: Math.round(data.current.temperature_2m),
          icon,
          condition,
        });
      } catch (error) {
        console.error("Weather fetch error:", error);
      }
    };
    fetchWeather();
  }, []);

  if (!weather) return null;

  return (
    <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md border border-white/30 rounded-full px-4 py-2 text-white animate-fade-in">
      <span className="text-xl drop-shadow-sm">{weather.icon}</span>
      <div className="text-left">
        <p className="text-sm font-bold leading-tight">{weather.temp}°C</p>
        <p className="text-xs opacity-90">Townsville</p>
      </div>
    </div>
  );
};

// --- Main Hero Component ---
const Hero = () => {
  return (
    <div className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
      
      {/* Background Image Layer */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Townsville Strand Beach" 
          className="w-full h-full object-cover"
        />
        {/* Dark Overlay for Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/30" />
      </div>

      {/* Hero Content */}
      <div className="container relative z-10 px-4 pt-20 text-center mx-auto">
        
        {/* Weather Widget Positioned Top-Center */}
        <div className="mb-8 flex justify-center">
            <HeroWeatherWidget />
        </div>

        <div className="animate-fade-in-up">
            <span className="inline-block py-1 px-3 rounded-full bg-blue-500/30 backdrop-blur-sm border border-blue-400/50 text-white text-xs font-bold tracking-wider uppercase mb-4 shadow-sm">
            The 2026 Local Edition
            </span>
        </div>

        {/* Updated Headline */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 drop-shadow-xl leading-tight animate-fade-in-up animation-delay-100">
          Discover the Best of <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-400">
            Townsville & NQ
          </span>
        </h1>

        {/* Updated Philosophy Subtext */}
        <p className="text-lg md:text-2xl text-slate-100 mb-10 max-w-2xl mx-auto drop-shadow-md font-medium animate-fade-in-up animation-delay-200">
          Stop reading long blogs. Start seeing results. <br/>
          <span className="opacity-90 font-light text-base md:text-xl">Local guides for humans and dogs.</span>
        </p>

        {/* Action Buttons (Replacing AI Search) */}
        <div className="flex flex-col md:flex-row gap-4 justify-center items-center animate-fade-in-up animation-delay-300">
          
          {/* PRIMARY: Visual Guides (Hub & Spoke) */}
          <Link to="/townsville/guides">
            <Button size="lg" className="h-14 px-8 text-lg bg-primary hover:bg-primary/90 rounded-full shadow-lg shadow-primary/25 transition-all hover:scale-105 border-none">
              Explore Visual Guides
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>

          {/* SECONDARY: Australia Day (Urgent) */}
          <Link to="/townsville/events">
            <Button size="lg" variant="outline" className="h-14 px-8 text-lg bg-white/10 hover:bg-white/20 text-white border-2 border-white/50 hover:border-white backdrop-blur-sm rounded-full transition-all hover:scale-105">
              <span className="mr-2">🇦🇺</span> What's On: Aus Day
            </Button>
          </Link>

        </div>

        {/* Trust Signals */}
        <div className="mt-12 flex flex-wrap justify-center gap-6 text-white/80 text-sm font-medium animate-fade-in-up animation-delay-500">
            <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-yellow-400" />
                <span className="drop-shadow-md">Locally Curated</span>
            </div>
            <div className="flex items-center gap-2">
                <CalendarDays className="w-4 h-4 text-yellow-400" />
                <span className="drop-shadow-md">Updated Weekly</span>
            </div>
        </div>

      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden md:block text-white/50">
        <div className="w-1 h-8 rounded-full border border-white/30 flex justify-center pt-1">
            <div className="w-0.5 h-2 bg-white/50 rounded-full" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
