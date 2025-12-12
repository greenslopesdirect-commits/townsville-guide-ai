import { useState, useEffect } from "react";
import { Search, MessageCircle, X } from "lucide-react";
import MapLocationCard from "@/components/MapLocationCard";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { Link } from "react-router-dom";
import { checkPendingAiQuestion } from "@/utils/aiGuide";
import FlightsButton from "@/components/FlightsButton";
import heroImage from "@/assets/strand-hero.jpg";

// Weather widget component using free Open-Meteo API
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
    <div className="absolute top-4 right-4 md:top-6 md:right-8 z-20 bg-white/20 backdrop-blur-md rounded-xl px-4 py-2 shadow-lg border border-white/30">
      <div className="flex items-center gap-2 text-white">
        <span className="text-2xl">{weather.icon}</span>
        <div className="text-left">
          <p className="text-lg font-bold leading-tight drop-shadow-md">{weather.temp}°C</p>
          <p className="text-xs opacity-90 drop-shadow-sm">Townsville</p>
        </div>
      </div>
    </div>
  );
};
const Hero = () => {
  const [aiInputValue, setAiInputValue] = useState("");
  const [chatResponse, setChatResponse] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    // Register global setter for external triggers
    (window as any).setAiInputValue = (text: string) => {
      setAiInputValue(text);
      const input = document.getElementById('townsville-ai-input') as HTMLInputElement;
      if (input) {
        input.focus({
          preventScroll: true
        });
      }
    };

    // Check for pending AI questions from cross-page navigation
    checkPendingAiQuestion();
  }, []);
  const parseChatResponse = (text: string) => {
    const parts: Array<{
      type: 'text' | 'links';
      content: string;
      links?: {
        google_maps?: string;
        booking?: string;
      };
    }> = [];
    const regex = /\[LINKS:(.*?)\]/g;
    let lastIndex = 0;
    let match;
    while ((match = regex.exec(text)) !== null) {
      // Add text before the link
      if (match.index > lastIndex) {
        parts.push({
          type: 'text',
          content: text.slice(lastIndex, match.index)
        });
      }

      // Parse links
      const linksStr = match[1];
      const links: {
        google_maps?: string;
        booking?: string;
      } = {};
      linksStr.split(',').forEach(pair => {
        const [key, value] = pair.split('=');
        if (key && value) {
          links[key.trim() as 'google_maps' | 'booking'] = value.trim();
        }
      });
      parts.push({
        type: 'links',
        content: '',
        links
      });
      lastIndex = regex.lastIndex;
    }

    // Add remaining text
    if (lastIndex < text.length) {
      parts.push({
        type: 'text',
        content: text.slice(lastIndex)
      });
    }
    return parts;
  };

  // Parse markdown links like [View on Google Maps](https://google.com/maps/...) and render as MapLocationCard
  // Also handles 👉 emoji cleanup before map links
  const renderTextWithMapCards = (text: string) => {
    // Clean up 👉 emoji that appears before map links
    const cleanedText = text.replace(/👉\s*\[/g, '[');
    
    const mapsLinkRegex = /\[([^\]]*)\]\((https?:\/\/(?:www\.)?google\.com\/maps[^\)]*)\)/g;
    const parts: React.ReactNode[] = [];
    let lastIndex = 0;
    let match;

    while ((match = mapsLinkRegex.exec(cleanedText)) !== null) {
      // Add text before the link
      if (match.index > lastIndex) {
        const textBefore = cleanedText.slice(lastIndex, match.index);
        parts.push(<span key={`text-${lastIndex}`}>{textBefore}</span>);
      }
      
      // Add the MapLocationCard
      const [, , url] = match;
      parts.push(
        <MapLocationCard 
          key={`map-${match.index}`} 
          url={url} 
        />
      );
      
      lastIndex = mapsLinkRegex.lastIndex;
    }

    // Add remaining text
    if (lastIndex < cleanedText.length) {
      parts.push(<span key={`text-${lastIndex}`}>{cleanedText.slice(lastIndex)}</span>);
    }

    return parts.length > 0 ? parts : cleanedText;
  };
  const handleSend = async () => {
    if (!aiInputValue.trim()) {
      toast.error("Please enter a question");
      return;
    }
    setIsLoading(true);
    setChatResponse("");
    try {
      const {
        data,
        error
      } = await supabase.functions.invoke('townsville-chat', {
        body: {
          question: aiInputValue
        }
      });
      if (error) throw error;
      if (data?.answer) {
        setChatResponse(data.answer);
      } else {
        throw new Error("No response received");
      }
    } catch (error) {
      console.error("Chat error:", error);
      toast.error("Something went wrong. Please try again.");
      setChatResponse("");
    } finally {
      setIsLoading(false);
    }
  };
  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !isLoading) {
      handleSend();
    }
  };
  const handleClear = () => {
    setAiInputValue("");
    setChatResponse("");
  };
  return <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden pt-20 md:pt-24">
      {/* Background Image */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat pointer-events-none" style={{
      backgroundImage: `url(${heroImage})`
    }} role="img" aria-label="The Strand beachfront with palm trees in Townsville, North Queensland" />
      
      {/* Darker Gradient Overlay for better text contrast */}
      <div className="absolute inset-0 bg-black/40 pointer-events-none" />
      
      {/* Weather Widget - Top Right */}
      <HeroWeatherWidget />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <h1 className="text-5xl md:text-7xl font-bold mb-4 drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)] animate-fade-in" style={{
        textShadow: '2px 2px 8px rgba(0,0,0,0.9), 0 0 20px rgba(0,0,0,0.5)'
      }}>Welcome to MyAussieGuide – Townsville 👋</h1>
        <h2 className="text-2xl md:text-4xl font-semibold mb-6 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] animate-fade-in" style={{
        textShadow: '1px 1px 6px rgba(0,0,0,0.9), 0 0 15px rgba(0,0,0,0.4)'
      }}>
          Your AI-powered local guide to North Queensland
        </h2>
        <p className="text-lg md:text-xl mb-6 max-w-3xl mx-auto drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] animate-fade-in" style={{
        textShadow: '1px 1px 6px rgba(0,0,0,0.9), 0 0 15px rgba(0,0,0,0.4)'
      }}>
          Discover Townsville's best beaches, restaurants, cafés, dog parks, attractions, and hidden gems — all with help from a smart local AI assistant.
        </p>
        <div className="text-left max-w-2xl mx-auto mb-6 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] animate-fade-in" style={{
        textShadow: '1px 1px 6px rgba(0,0,0,0.9), 0 0 15px rgba(0,0,0,0.4)'
      }}>
          <p className="text-lg md:text-xl font-semibold mb-3">
            <strong>Ask your guide anything, such as:</strong>
          </p>
          <ul className="text-base md:text-lg space-y-2 list-disc list-inside ml-2">
            <li>"Where should we eat tonight?"</li>
            <li>"What's a good family beach near Townsville?"</li>
            <li>"What's happening this weekend?"</li>
            <li>"Where can I walk my dog off-leash?"</li>
          </ul>
        </div>
        <p className="text-lg md:text-xl mb-12 max-w-3xl mx-auto drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] animate-fade-in" style={{
        textShadow: '1px 1px 6px rgba(0,0,0,0.9), 0 0 15px rgba(0,0,0,0.4)'
      }}>
          👇 Ask me anything — beaches, restaurants, dog-friendly spots, things to do, ferries, weather, or hidden gems!
        </p>
        
        {/* Search/Chat Box */}
        <div className="max-w-2xl mx-auto mb-8 animate-scale-in">
          <div className="relative flex items-center gap-2">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground z-10" size={20} />
              <Input id="townsville-ai-input" type="text" placeholder="What would you like to know?" className="h-16 pl-12 pr-4 text-base rounded-2xl bg-white/95 backdrop-blur-sm border-white/40 shadow-xl focus-visible:ring-primary focus-visible:ring-2 text-gray-900 placeholder:text-gray-500" value={aiInputValue} onChange={e => setAiInputValue(e.target.value)} onKeyPress={handleKeyPress} disabled={isLoading} />
            </div>
            {aiInputValue && <Button onClick={handleClear} variant="ghost" className="h-16 w-16 rounded-2xl hover:bg-white/20 shrink-0" aria-label="Clear input and response" type="button">
                <X size={20} className="shrink-0 text-white" />
              </Button>}
            <Button onClick={handleSend} disabled={isLoading || !aiInputValue.trim()} className="h-16 w-16 rounded-2xl bg-primary hover:bg-primary/90 shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center shrink-0" aria-label="Send message" type="button">
              <MessageCircle size={24} className="shrink-0" />
            </Button>
          </div>
          
          {/* Response Display */}
          {chatResponse && <div className="mt-6 mb-8 bg-white/90 backdrop-blur-sm text-foreground rounded-2xl shadow-md text-left animate-fade-in overflow-y-auto max-h-[75vh]">
              <div className="p-6 pb-8">
                <strong className="text-primary">Answer:</strong>
                <div className="mt-2 mb-2 whitespace-pre-wrap">
                  {parseChatResponse(chatResponse).map((part, index) => <span key={index}>
                      {part.type === 'text' ? renderTextWithMapCards(part.content) : <span className="inline-flex gap-2 my-2">
                          {part.links?.google_maps && <MapLocationCard url={part.links.google_maps} />}
                          {part.links?.booking && <a href={part.links.booking} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 px-3 py-1.5 text-sm bg-primary hover:bg-primary/80 text-primary-foreground rounded-full transition-colors">
                              🏨 Check Availability
                            </a>}
                        </span>}
                    </span>)}
                </div>
              </div>
            </div>}
          
          {isLoading && <div className="mt-6 mb-8 bg-white/90 backdrop-blur-sm text-foreground p-6 rounded-2xl shadow-md text-center animate-fade-in">
              <p className="text-muted-foreground">Thinking...</p>
            </div>}
          
                    {/* History CTA Button */}
          <div className="mt-8 animate-fade-in flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/townsville/history">
              <Button size="lg" className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-primary-foreground shadow-[var(--shadow-tropical)] hover:shadow-[var(--shadow-glow)] transition-all duration-300 rounded-full px-8 py-4 text-base md:text-lg font-semibold" aria-label="Discover the history of Townsville">
                Discover Townsville's Story 📜
              </Button>
            </Link>
            <FlightsButton size="lg" className="rounded-full px-8 py-4 text-base md:text-lg font-semibold" />
          </div>

        </div>   {/* ← CLOSES max-w-2xl wrapper */}
      </div>     {/* ← CLOSES relative z-10 content wrapper */}

    </section>;
};
export default Hero;