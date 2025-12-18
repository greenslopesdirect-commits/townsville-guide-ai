import { useState, useEffect } from "react";
import { Search, MessageCircle, X } from "lucide-react";
import MapLocationCard from "@/components/MapLocationCard";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { Link } from "react-router-dom";
import { checkPendingAiQuestion } from "@/utils/aiGuide";
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
    <div className="flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2">
      <span className="text-2xl">{weather.icon}</span>
      <div className="text-left">
        <p className="text-sm font-semibold text-foreground leading-tight">{weather.temp}°C</p>
        <p className="text-xs text-muted-foreground">Townsville</p>
      </div>
    </div>
  );
};

// Quick chip component for navigation
const QuickChip = ({ label, to }: { label: string; to: string }) => (
  <Link
    to={to}
    className="inline-flex items-center px-4 py-2 bg-primary/10 hover:bg-primary/20 text-primary font-medium text-sm rounded-full transition-colors"
  >
    {label}
  </Link>
);

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
      if (match.index > lastIndex) {
        parts.push({
          type: 'text',
          content: text.slice(lastIndex, match.index)
        });
      }

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

    if (lastIndex < text.length) {
      parts.push({
        type: 'text',
        content: text.slice(lastIndex)
      });
    }
    return parts;
  };

  const renderTextWithMapCards = (text: string) => {
    const cleanedText = text.replace(/👉\s*\[/g, '[');
    const mapsLinkRegex = /\[([^\]]*)\]\((https?:\/\/(?:www\.)?google\.com\/maps[^\)]*)\)/g;
    const parts: React.ReactNode[] = [];
    let lastIndex = 0;
    let match;

    while ((match = mapsLinkRegex.exec(cleanedText)) !== null) {
      if (match.index > lastIndex) {
        const textBefore = cleanedText.slice(lastIndex, match.index);
        parts.push(<span key={`text-${lastIndex}`}>{textBefore}</span>);
      }
      
      const [, , url] = match;
      parts.push(
        <MapLocationCard 
          key={`map-${match.index}`} 
          url={url} 
        />
      );
      
      lastIndex = mapsLinkRegex.lastIndex;
    }

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
      const { data, error } = await supabase.functions.invoke('townsville-chat', {
        body: { question: aiInputValue }
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

  return (
    <section className="w-full pb-8 lg:pb-12" style={{ backgroundColor: 'hsl(42, 35%, 96%)' }}>
      {/* Split Screen Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
        
        {/* Left Column - Content */}
        <div className="flex flex-col justify-center items-center px-6 py-6 pt-24 md:pt-28 lg:py-8 lg:px-8 xl:px-12 order-1">
          <div className="max-w-lg w-full text-center lg:text-left">
            {/* Weather Widget */}
            <div className="mb-4">
              <HeroWeatherWidget />
            </div>

            {/* Headline */}
            <h1 className="text-3xl md:text-4xl xl:text-5xl font-bold text-foreground mb-3 leading-tight">
              Your Local AI Guide to Townsville
            </h1>
            
            {/* Subtext */}
            <p className="text-base md:text-lg text-muted-foreground mb-6">
              AI-powered. Local-Verified. No hallucinations.
            </p>

            {/* Search Bar - Large & Prominent */}
            <div className="mb-5">
              <div className="relative flex items-center justify-center lg:justify-start gap-2">
                <div className="relative flex-1">
                  <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-muted-foreground z-10" size={22} />
                  <Input
                    id="townsville-ai-input"
                    type="text"
                    placeholder="Ask me anything about Townsville..."
                    className="h-14 md:h-16 pl-14 pr-4 text-base md:text-lg rounded-full bg-background border-2 border-border shadow-lg focus-visible:ring-primary focus-visible:ring-2 focus-visible:border-primary"
                    value={aiInputValue}
                    onChange={e => setAiInputValue(e.target.value)}
                    onKeyPress={handleKeyPress}
                    disabled={isLoading}
                  />
                </div>
                {aiInputValue && (
                  <Button
                    onClick={handleClear}
                    variant="ghost"
                    className="h-14 md:h-16 w-14 md:w-16 rounded-full hover:bg-muted shrink-0"
                    aria-label="Clear input and response"
                    type="button"
                  >
                    <X size={20} className="shrink-0 text-muted-foreground" />
                  </Button>
                )}
                <Button
                  onClick={handleSend}
                  disabled={isLoading || !aiInputValue.trim()}
                  className="h-14 md:h-16 w-14 md:w-16 rounded-full bg-primary hover:bg-primary/90 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center shrink-0"
                  aria-label="Send message"
                  type="button"
                >
                  <MessageCircle size={24} className="shrink-0" />
                </Button>
              </div>
            </div>

            {/* Quick Chips */}
            <div className="flex flex-wrap gap-2 justify-center lg:justify-start mb-6">
              <QuickChip label="🏖️ Beaches" to="/townsville/beaches" />
              <QuickChip label="🍽️ Food" to="/townsville/food" />
              <QuickChip label="🎉 Events" to="/townsville/events" />
              <QuickChip label="🐕 Dog-Friendly" to="/townsville/dog-friendly" />
            </div>

            {/* Response Display */}
            {chatResponse && (
              <div className="bg-muted/50 border border-border rounded-2xl shadow-md text-left animate-fade-in overflow-y-auto max-h-[50vh]">
                <div className="p-6">
                  <strong className="text-primary">Answer:</strong>
                  <div className="mt-2 whitespace-pre-wrap text-foreground">
                    {parseChatResponse(chatResponse).map((part, index) => (
                      <span key={index}>
                        {part.type === 'text' ? renderTextWithMapCards(part.content) : (
                          <span className="inline-flex gap-2 my-2">
                            {part.links?.google_maps && <MapLocationCard url={part.links.google_maps} />}
                            {part.links?.booking && (
                              <a
                                href={part.links.booking}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1 px-3 py-1.5 text-sm bg-primary hover:bg-primary/80 text-primary-foreground rounded-full transition-colors"
                              >
                                🏨 Check Availability
                              </a>
                            )}
                          </span>
                        )}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {isLoading && (
              <div className="bg-muted/50 border border-border p-6 rounded-2xl shadow-md text-center animate-fade-in">
                <p className="text-muted-foreground">Thinking...</p>
              </div>
            )}
          </div>
        </div>

        {/* Right Column - Image */}
        <div className="relative h-48 md:h-64 lg:h-[400px] xl:h-[460px] order-2 lg:mt-4 lg:mr-6 xl:mr-10">
          <img
            src={heroImage}
            alt="The Strand beachfront with palm trees in Townsville, North Queensland"
            className="w-full h-full object-cover lg:rounded-2xl shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
