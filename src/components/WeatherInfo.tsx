import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

const WeatherInfo = () => {
  const seasons = [
    {
      emoji: "☀️",
      title: "Dry Season",
      period: "May–Oct",
      description: "Warm, sunny, and perfect for exploring beaches.",
    },
    {
      emoji: "🌧",
      title: "Wet Season",
      period: "Nov–Apr",
      description: "Tropical rains and green landscapes.",
    },
    {
      emoji: "🏖",
      title: "Year-Round Warmth",
      period: "All Year",
      description: "Average 25–30°C, great for outdoor life.",
    },
  ];

  const handleAskAI = () => {
    if ((window as any).setAiInputValue) {
      (window as any).setAiInputValue("What's the weather like in Townsville today?");
    }
    
    const input = document.getElementById('townsville-ai-input');
    if (input) {
      input.scrollIntoView({ behavior: 'smooth', block: 'center' });
      setTimeout(() => {
        input.classList.add('ring-2', 'ring-primary');
        setTimeout(() => {
          input.classList.remove('ring-2', 'ring-primary');
        }, 2000);
      }, 500);
    }
  };

  return (
    <section className="py-16 px-4 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 text-foreground">
          Townsville Weather & Best Time to Visit
        </h2>
        
        <p className="text-center text-lg md:text-xl text-muted-foreground mb-12 max-w-3xl mx-auto">
          Townsville enjoys a tropical climate with year-round sunshine and warm temperatures. 
          The dry season (May–October) is ideal for beach days and outdoor adventures, while the wet season brings refreshing rains and lush greenery.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {seasons.map((season, index) => (
            <Card 
              key={index}
              className="hover:shadow-lg transition-all duration-300 animate-fade-in border-border/40"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader className="text-center pb-3">
                <div className="text-5xl mb-3">{season.emoji}</div>
                <CardTitle className="text-xl">{season.title}</CardTitle>
                <CardDescription className="font-semibold text-primary">
                  {season.period}
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground">{season.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="max-w-2xl mx-auto bg-card/80 backdrop-blur-sm border-primary/20 animate-fade-in" style={{ animationDelay: '300ms' }}>
          <CardHeader className="pb-3">
            <CardTitle className="text-lg flex items-center justify-center gap-2">
              <MessageCircle className="w-5 h-5" />
              Ask the AI
            </CardTitle>
          </CardHeader>
          <CardContent className="flex justify-center">
            <Button 
              onClick={handleAskAI}
              variant="default"
              className="w-full md:w-auto"
            >
              What's the weather like in Townsville today?
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default WeatherInfo;
