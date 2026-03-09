import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Search, MessageCircle, X, ExternalLink } from "lucide-react"; // Added ExternalLink icon
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { checkPendingAiQuestion } from "@/utils/aiGuide";
import heroImage from "@/assets/strand-hero.jpg";

// --- Weather Widget ---
const HeroWeatherWidget = () => {
  const [weather, setWeather] = useState<{ temp: number; icon: string; condition: string } | null>(null);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await fetch(
          "https://api.open-meteo.com/v1/forecast?latitude=-19.2589&longitude=146.8169&current=temperature_2m,weather_code"
        );
        if (!response.ok) throw new Error("Failed to fetch");
        const data = await response.json();
        
        let icon = "🌡️";
        const code = data.current.weather_code;
        if (code === 0) icon = "☀️";
        else if (code <= 3) icon = "🌤️";
        else if (code <= 65) icon = "🌧️";
        else if (code >= 95) icon = "⛈️";

        setWeather({
          temp: Math.round(data.current.temperature_2m),
          icon,
          condition: "Townsville",
        });
      } catch (error) {
        console.error("Weather fetch error:", error);
      }
    };
    fetchWeather();
  }, []);

  if (!weather) return null;

  return (
    <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md border border-white/30 rounded-full px-4 py-2 text-white animate-fade-in mb-6">
      <span className="text-xl drop-shadow-sm">{weather.icon}</span>
      <div className="text-left">
        <p className="text-sm font-bold leading-tight">{weather.temp}°C</p>
        <p className="text-xs opacity-90">{weather.condition}</p>
      </div>
    </div>
  );
};

// --- Main Hero Component ---
const Hero = () => {
  const [aiInputValue, setAiInputValue] = useState("");
  const [chatResponse, setChatResponse] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();

  // --- IMPROVED PARSER: Handles Links inside Bold tags ---
  const renderMessage = (text: string) => {
    if (!text) return null;

    // Helper to process just Bold text **...**
    const renderBold = (segment: string) => {
      const parts = segment.split(/(\*\*.*?\*\*)/g);
      return parts.map((part, i) => {
        if (part.startsWith("**") && part.endsWith("**")) {
          return <strong key={i} className="text-slate-900 font-bold">{part.slice(2, -2)}</strong>;
        }
        return <span key={i}>{part}</span>;
      });
    };

    return text.split("\n").map((line, lineIndex) => {
      if (!line.trim()) return <br key={lineIndex} />;

      // 1. Split by Links first: [Label](URL)
      // This Regex captures the full link block to separate it from the text
      const parts = line.split(/(\[.*?\]\(.*?\))/g);

      return (
        <p key={lineIndex} className="mb-3 text-slate-800 leading-relaxed">
          {parts.map((part, partIndex) => {
            // 2. Check if this part is a Link
            const linkMatch = part.match(/^\[(.*?)\]\((.*?)\)$/);
            
            if (linkMatch) {
              const [_, label, url] = linkMatch;
              // Clean any stars from the label if the AI nested them inside
              const cleanLabel = label.replace(/\*\*/g, ""); 
              
              return (
                <a
                  key={partIndex}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-primary hover:text-primary/80 font-bold underline decoration-primary/30 underline-offset-4 mx-1 transition-colors"
                >
                  {cleanLabel} <ExternalLink className="h-3 w-3" />
                </a>
              );
            }

            // 3. If not a link, process for Bold text (**...**)
            return <span key={partIndex}>{renderBold(part)}</span>;
          })}
        </p>
      );
    });
  };

  const triggerSearch = async (query: string) => {
    if (!query.trim()) return;
    setIsLoading(true);
    setChatResponse("");

    // --- ⚡️ SMART INTERCEPT: Handle "What's On" locally ---
    const lowerQ = query.toLowerCase();
    if (lowerQ.includes("what is on") || lowerQ.includes("events") || lowerQ.includes("market")) {
        setTimeout(() => {
            setChatResponse(`**This Weekend (Jan 31 – Feb 1):**

🥕 **Willows Rotary Markets (Sunday):**
The best spot for fresh produce. 7:30 AM @ Willows Shopping Centre.
[View Map](https://www.google.com/maps/search/?api=1&query=Willows+Rotary+Markets+Townsville)

🏙️ **Cotters Market (Sunday):**
Arts, crafts, and food in the CBD. 8:00 AM @ Flinders St.
[View Map](https://www.google.com/maps/search/?api=1&query=Cotters+Market+Townsville)

🌅 **Sunset Spot:**
Tide is high in the evenings—perfect for a walk at Rowes Bay.

For the full calendar, check the **[Events Page](/events)**!`);
            setIsLoading(false);
        }, 600);
        return;
    }

    try {
      const { data, error } = await supabase.functions.invoke('townsville-chat', {
        body: { question: query }
      });
      if (error) throw error;
      if (data?.answer) setChatResponse(data.answer);
      else throw new Error("No response received");
    } catch (error) {
      console.error("Chat error:", error);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    (window as any).setAiInputValue = (text: string) => {
      setAiInputValue(text);
      const input = document.getElementById('townsville-ai-input') as HTMLInputElement;
      if (input) input.focus({ preventScroll: true });
    };

    checkPendingAiQuestion();

    if (location.state?.aiQuery) {
        const query = location.state.aiQuery;
        setAiInputValue(query);
        triggerSearch(query);
        window.history.replaceState({}, document.title);
    }
  }, [location]);

  const handleSend = () => triggerSearch(aiInputValue);

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !isLoading) handleSend();
  };

  return (
    <div className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      
      {/* Background Image Layer */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Townsville Strand Beach" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/40" />
      </div>

      {/* Hero Content */}
      <div className="container relative z-10 px-4 pt-20 text-center mx-auto max-w-4xl">
        
        <HeroWeatherWidget />

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 drop-shadow-xl leading-tight">
          Discover the Best of <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-400">
            Townsville & NQ
          </span>
        </h1>

        <p className="text-lg md:text-xl text-slate-200 mb-8 max-w-2xl mx-auto font-medium">
          AI-powered. Local-Verified. No hallucinations.
        </p>

        {/* --- AI SEARCH BAR --- */}
        <div className="relative max-w-2xl mx-auto mb-8">
            <div className="relative flex items-center">
                <Search className="absolute left-5 text-slate-400 z-10" size={22} />
                <Input
                    id="townsville-ai-input"
                    type="text"
                    placeholder="Ask me: 'Best Valentine's dinner?' or 'Which markets are open Sunday?'"
                    className="h-16 pl-14 pr-16 text-lg rounded-full bg-white/95 border-2 border-white/20 shadow-xl focus-visible:ring-yellow-400 text-slate-900 placeholder:text-slate-400"
                    value={aiInputValue}
                    onChange={e => setAiInputValue(e.target.value)}
                    onKeyPress={handleKeyPress}
                    disabled={isLoading}
                />
                <Button
                    onClick={handleSend}
                    disabled={isLoading || !aiInputValue.trim()}
                    className="absolute right-2 h-12 w-12 rounded-full bg-primary hover:bg-primary/90 shadow-md p-0 flex items-center justify-center"
                >
                    {isLoading ? <span className="animate-spin">⏳</span> : <MessageCircle size={24} />}
                </Button>
            </div>
        </div>

        {/* --- QUICK ACTION CHIPS --- */}
        <div className="flex flex-wrap gap-3 justify-center animate-fade-in-up animation-delay-300">
            {/* New Feature Chip - Rowes Bay */}
            <Link to="/beaches">
                <Button variant="outline" className="bg-white/95 hover:bg-white text-slate-900 border-none rounded-full px-6 py-5 font-bold shadow-lg hover:scale-105 transition-all flex items-center gap-2">
                    🌅 Updated: Secret Beach & Dog Guide
                </Button>
            </Link>

            {/* AI Helper Chips */}
            <Button variant="ghost" onClick={() => (window as any).setAiInputValue("Best food in Townsville?")} className="bg-white/10 hover:bg-white/20 text-white rounded-full border border-white/20">
                🍽️ Food
            </Button>
            <Button variant="ghost" onClick={() => (window as any).setAiInputValue("What's on this weekend?")} className="bg-white/10 hover:bg-white/20 text-white rounded-full border border-white/20">
                📅 Events
            </Button>
        </div>

        {/* --- AI RESPONSE AREA --- */}
        {chatResponse && (
            <div className="mt-8 bg-white/95 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl text-left animate-fade-in max-w-3xl mx-auto overflow-hidden">
                <div className="p-6 max-h-[50vh] overflow-y-auto">
                    <div className="flex justify-between items-center mb-4 border-b pb-2">
                        <strong className="text-primary flex items-center gap-2">
                             ✨ Local Insight
                        </strong>
                        <Button variant="ghost" size="sm" onClick={() => setChatResponse("")}>
                            <X className="w-4 h-4" />
                        </Button>
                    </div>
                    {/* Rendered Markdown Response */}
                    <div className="text-slate-800 text-sm md:text-base">
                         {renderMessage(chatResponse)}
                    </div>
                </div>
            </div>
        )}

      </div>
    </div>
  );
};

export default Hero;
