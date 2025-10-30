import { useState, useEffect } from "react";
import { ChevronDown, Search, MessageCircle } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
// TODO: Replace this import with your own Townsville background photo
// Upload your image to src/assets/ and name it strand-hero.jpg
import heroImage from "@/assets/strand-hero.jpg";

const Hero = () => {
  const [aiInputValue, setAiInputValue] = useState("");
  const [chatResponse, setChatResponse] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    (window as any).setAiInputValue = (text: string) => {
      setAiInputValue(text);
      const input = document.getElementById('townsville-ai-input') as HTMLInputElement;
      if (input) {
        input.focus({ preventScroll: true });
      }
    };
  }, []);

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
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Gradient Overlay */}
      <div 
        className="absolute inset-0" 
        style={{ background: 'var(--gradient-hero)' }}
      />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <h1 className="text-5xl md:text-7xl font-bold mb-4 drop-shadow-lg animate-fade-in">
          Welcome to Townsville 👋
        </h1>
        <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto drop-shadow-md animate-fade-in">
          Your local AI guide to everything in North Queensland.
        </p>
        
        {/* Search/Chat Box */}
        <div className="max-w-2xl mx-auto mb-8 animate-scale-in">
          <div className="relative flex items-center gap-2">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground z-10" size={20} />
              <Input
                id="townsville-ai-input"
                type="text"
                placeholder="Hi! I'm your Townsville guide. Ask me anything — restaurants, beaches, dog parks, events, accommodation."
                className="h-16 pl-12 pr-4 text-base rounded-2xl bg-white/95 backdrop-blur-sm border-white/40 shadow-xl focus-visible:ring-primary focus-visible:ring-2 text-gray-900 placeholder:text-gray-500"
                value={aiInputValue}
                onChange={(e) => setAiInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                disabled={isLoading}
              />
            </div>
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
                <p className="mt-2 mb-2 whitespace-pre-wrap">{chatResponse}</p>
              </div>
            </div>
          )}
          
          {isLoading && (
            <div className="mt-6 mb-8 bg-white/90 backdrop-blur-sm text-foreground p-6 rounded-2xl shadow-md text-center animate-fade-in">
              <p className="text-muted-foreground">Thinking...</p>
            </div>
          )}
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
