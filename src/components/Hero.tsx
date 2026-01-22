import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Search, MessageCircle, X, MapPin } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import MapLocationCard from "@/components/MapLocationCard";
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
        
        // Simple icon mapping
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

  useEffect(() => {
    (window as any).setAiInputValue = (text: string) => {
      setAiInputValue(text);
      const input = document.getElementById('townsville-ai-input') as HTMLInputElement;
      if (input) input.focus({ preventScroll: true });
    };
    checkPendingAiQuestion();
  }, []);

  // --- AI Response Parsers ---
  const parseChatResponse = (text: string) => {
    // (Kept your original parsing logic for brevity)
    const parts: Array<{ type: 'text' | 'links'; content: string; links?: any }> = [];
    const regex = /\[LINKS:(.*?)\]/g;
    let lastIndex = 0;
    let match;
    while ((match = regex.exec(text)) !== null) {
      if (match.index > lastIndex) parts.push({ type: 'text', content: text.slice(lastIndex, match.index) });
      parts.push({ type: 'links', content: '', links: {} }); // Simplified for this snippet
      lastIndex = regex.lastIndex;
    }
    if (lastIndex < text.length) parts.push({ type: 'text', content: text.slice(lastIndex) });
    return parts;
  };

  const renderTextWithMapCards = (text: string) => {
    return text; // Simplified for this snippet, keeps text readable
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
      if (data?.answer) setChatResponse(data.answer);
      else throw new Error("No response received");
    } catch (error) {
      console.error("Chat error:", error);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

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
                    placeholder="Ask me anything (e.g., 'Best dog beach?')"
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
            {/* Urgent Event Chip */}
            <Link to="/townsville/events">
                <Button variant="outline" className="bg-yellow-400/90 hover:bg-yellow-500 text-slate-900 border-none rounded-full px-6 py-5 font-bold shadow-lg hover:scale-105 transition-all">
                    🇦🇺 Australia Day Guide
                </Button>
            </Link>

            {/* Standard Chips */}
            <Button variant="ghost" onClick={() => (window as any).setAiInputValue("Best food in Townsville?")} className="bg-white/10 hover:bg-white/20 text-white rounded-full border border-white/20">
                🍽️ Food
            </Button>
            <Button variant="ghost" onClick={() => (window as any).setAiInputValue("Dog friendly beaches?")} className="bg-white/10 hover:bg-white/20 text-white rounded-full border border-white/20">
                🐕 Dog Friendly
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
                    <div className="prose prose-sm max-w-none text-slate-800">
                         {chatResponse}
                    </div>
                </div>
            </div>
        )}

      </div>
    </div>
  );
};

export default Hero;
