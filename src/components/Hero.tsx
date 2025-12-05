import { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { ChevronDown, Search, MessageCircle, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import heroImage from "@/assets/strand-hero.jpg";

const Hero = () => {
  const [aiInputValue, setAiInputValue] = useState("");
  const [chatResponse, setChatResponse] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const location = useLocation();

  useEffect(() => {
  if (location.state?.aiQuestion) {
    setAiInputValue(location.state.aiQuestion);

    // Auto submit after input is set
    setTimeout(() => {
      handleSend();
    }, 500);
  }
}, [location.state]);

    }
  }, [location.state]);

  const handleSend = async () => {
    if (!aiInputValue.trim()) {
      toast.error("Please enter a question");
      return;
    }

    setIsLoading(true);
    setChatResponse("");

    try {
      const { data, error } = await supabase.functions.invoke("townsville-chat", {
        body: { question: aiInputValue },
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

  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden pt-24">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      <div className="absolute inset-0 bg-black/40" />

      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          Welcome to Duncan's Guide – Townsville 👋
        </h1>

        <div className="max-w-2xl mx-auto flex gap-2">
          <Input
            id="townsville-ai-input"
            value={aiInputValue}
            onChange={(e) => setAiInputValue(e.target.value)}
            placeholder="Ask me anything about Townsville..."
            className="h-14 text-black"
          />
          <Button onClick={handleSend} disabled={isLoading}>
            <MessageCircle />
          </Button>
        </div>

        {chatResponse && (
          <div className="mt-6 bg-white text-black p-4 rounded-lg">
            {chatResponse}
          </div>
        )}

        <div className="mt-8">
          <Link to="/history">
            <Button size="lg">Discover Townsville's Story 📜</Button>
          </Link>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="text-white" size={32} />
      </div>
    </section>
  );
};

export default Hero;
