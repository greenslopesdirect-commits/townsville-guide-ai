import { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { ChevronDown, Search, MessageCircle, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import heroImage from "@/assets/strand-hero.jpg";

// TODO: Replace this import with your own Townsville background photo
// Upload your image to src/assets/ and name it strand-hero.jpg
import heroImage from "@/assets/strand-hero.jpg";

const Hero = () => {
  const [aiInputValue, setAiInputValue] = useState("");
  const [chatResponse, setChatResponse] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const location = useLocation();

  useEffect(() => {
    if (location.state?.aiQuestion) {
      setAiInputValue(location.state.aiQuestion);
    }
  }, [location.state]);


  useEffect(() => {
    (window as any).setAiInputValue = (text: string) => {
      setAiInputValue(text);
      const input = document.getElementById('townsville-ai-input') as HTMLInputElement;
      if (input) {
        input.focus({ preventScroll: true });
      }
    };
  }, []);

  const parseChatResponse = (text: string) => {
    const parts: Array<{ type: 'text' | 'links', content: string, links?: { google_maps?: string, booking?: string } }> = [];
    const regex = /\[LINKS:(.*?)\]/g;
    let lastIndex = 0;
    let match;

    while ((match = regex.exec(text)) !== null) {
      // Add text before the link
      if (match.index > lastIndex) {
        parts.push({ type: 'text', content: text.slice(lastIndex, match.index) });
      }

      // Parse links
      const linksStr = match[1];
      const links: { google_maps?: string, booking?: string } = {};
      linksStr.split(',').forEach(pair => {
        const [key, value] = pair.split('=');
        if (key && value) {
          links[key.trim() as 'google_maps' | 'booking'] = value.trim();
        }
      });

      parts.push({ type: 'links', content: '', links });
      lastIndex = regex.lastIndex;
    }

    // Add remaining text
    if (lastIndex < text.length) {
      parts.push({ type: 'text', content: text.slice(lastIndex) });
    }

    return parts;
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
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden pt-20 md:pt-24">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
        role="img"
        aria-label="The Strand beachfront with palm trees in Townsville, North Queensland"
      />
      
      {/* Darker Gradient Overlay for better text contrast */}
      <div 
        className="absolute inset-0 bg-black/40"
      />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <h1 className="text-5xl md:text-7xl font-bold mb-4 drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)] animate-fade-in" style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.9), 0 0 20px rgba(0,0,0,0.5)' }}>
          Welcome to Duncan's Guide – Townsville 👋
        </h1>
        <h2 className="text-2xl md:text-4xl font-semibold mb-6 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] animate-fade-in" style={{ textShadow: '1px 1px 6px rgba(0,0,0,0.9), 0 0 15px rgba(0,0,0,0.4)' }}>
          Your AI-powered local guide to North Queensland
        </h2>
        <p className="text-lg md:text-xl mb-6 max-w-3xl mx-auto drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] animate-fade-in" style={{ textShadow: '1px 1px 6px rgba(0,0,0,0.9), 0 0 15px rgba(0,0,0,0.4)' }}>
          Discover Townsville's best beaches, restaurants, cafés, dog parks, attractions, and hidden gems — all with help from a smart local AI assistant.
        </p>
        <div className="text-left max-w-2xl mx-auto mb-6 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] animate-fade-in" style={{ textShadow: '1px 1px 6px rgba(0,0,0,0.9), 0 0 15px rgba(0,0,0,0.4)' }}>
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
        <p className="text-lg md:text-xl mb-12 max-w-3xl mx-auto drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] animate-fade-in" style={{ textShadow: '1px 1px 6px rgba(0,0,0,0.9), 0 0 15px rgba(0,0,0,0.4)' }}>
          👇 Ask me anything — beaches, restaurants, dog-friendly spots, things to do, ferries, weather, or hidden gems!
        </p>
        
        {/* Search/Chat Box */}
        <div className="max-w-2xl mx-auto mb-8 animate-scale-in">
          <div className="relative flex items-center gap-2">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground z-10" size={20} />
              <Input
                id="townsville-ai-input"
                type="text"
                placeholder="What would you like to know?"
                className="h-16 pl-12 pr-4 text-base rounded-2xl bg-white/95 backdrop-blur-sm border-white/40 shadow-xl focus-visible:ring-primary focus-visible:ring-2 text-gray-900 placeholder:text-gray-500"
                value={aiInputValue}
                onChange={(e) => setAiInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                disabled={isLoading}
              />
            </div>
            {aiInputValue && (
              <Button
                onClick={handleClear}
                variant="ghost"
                className="h-16 w-16 rounded-2xl hover:bg-white/20 shrink-0"
                aria-label="Clear input and response"
                type="button"
              >
                <X size={20} className="shrink-0 text-white" />
              </Button>
            )}
            <Button
              onClick={handleSend}
              disabled={isLoading || !aiInputValue.trim()}
              className="h-16 w-16 rounded-2xl bg-primary hover:bg-primary/90 shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center shrink-0"
              aria-label="Send message"
              type="button"
            >
              <MessageCircle size={24} className="shrink-0" />
            </Button>
          </div>
          
          {/* Response Display */}
          {chatResponse && (
            <div className="mt-6 mb-8 bg-white/90 backdrop-blur-sm text-foreground rounded-2xl shadow-md text-left animate-fade-in overflow-y-auto max-h-[75vh]">
              <div className="p-6 pb-8">
                <strong className="text-primary">Answer:</strong>
                <div className="mt-2 mb-2 whitespace-pre-wrap">
                  {parseChatResponse(chatResponse).map((part, index) => (
                    <span key={index}>
                      {part.type === 'text' ? (
                        part.content
                      ) : (
                        <span className="inline-flex gap-2 my-2">
                          {part.links?.google_maps && (
                            <a
                              href={part.links.google_maps}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1 px-3 py-1.5 text-sm bg-primary hover:bg-primary/80 text-primary-foreground rounded-full transition-colors"
                            >
                              📍 View on Maps
                            </a>
                          )}
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
            <div className="mt-6 mb-8 bg-white/90 backdrop-blur-sm text-foreground p-6 rounded-2xl shadow-md text-center animate-fade-in">
              <p className="text-muted-foreground">Thinking...</p>
            </div>
          )}
          
          {/* History CTA Button */}
          <div className="mt-8 animate-fade-in">
            <Link to="/history">
              <Button 
                size="lg"
                className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-primary-foreground shadow-[var(--shadow-tropical)] hover:shadow-[var(--shadow-glow)] transition-all duration-300 rounded-full px-8 py-4 text-base md:text-lg font-semibold"
                aria-label="Discover the history of Townsville"
              >
                Discover Townsville's Story 📜
              </Button>
            </Link>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="text-white drop-shadow-lg" size={32} />
      </div>
    </section>
  );
};

export default Hero;
