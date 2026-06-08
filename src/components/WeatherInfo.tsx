import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Compass, Sun, CloudRain, Palmtree } from "lucide-react";
import { Link } from "react-router-dom";

const WeatherInfo = () => {
  const seasons = [
    {
      Icon: Sun,
      title: "☀️ Dry Season",
      period: "May–October",
      description: "Warm, sunny, low humidity — perfect for beaches, hiking, and exploring outdoors. Expect: blue skies, cool nights, 20–28°C.",
    },
    {
      Icon: CloudRain,
      title: "🌧️ Wet Season",
      period: "November–April",
      description: "Tropical rain, afternoon storms, and vibrant green scenery. Expect: warm days, short bursts of rain, 25–32°C.",
    },
    {
      Icon: Palmtree,
      title: "🌴 Year-Round Warmth",
      period: "All Year",
      description: "Townsville stays comfortably warm all year, ideal for beach walks, alfresco dining, and outdoor life.",
    },
  ];

  return (
    <section className="py-16 px-4 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 text-foreground">
          Townsville Weather & Best Time to Visit ☀️
        </h2>
        
        <p className="text-center text-lg md:text-xl text-muted-foreground mb-12 max-w-3xl mx-auto">
          Townsville enjoys warm, sunny weather all year round thanks to its tropical climate. The best time to visit depends on what you enjoy — beach days, hiking, wildlife encounters, or lush green landscapes.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {seasons.map((season, index) => (
            <Card 
              key={index}
              className="h-full hover:shadow-lg hover:scale-105 transition-all duration-300 animate-fade-in border-border/40"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader className="text-center pb-3">
                <div className="flex justify-center mb-3">
                  <season.Icon className="w-12 h-12 text-primary" />
                </div>
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
              <Compass className="w-5 h-5" />
              Explore Townsville
            </CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col items-center gap-3">
            <p className="text-sm text-muted-foreground text-center max-w-md">
              Wondering <strong>what to do in Townsville today</strong>, or planning ahead for <strong>things to do in Townsville this weekend</strong>? Tap below for live local picks.
            </p>
            <p className="text-xs text-muted-foreground/80 text-center italic max-w-md">
              Ask me: "Where is the best place to park for the Cowboys game?" or "Which beaches are completely off-leash for dogs near me?"
            </p>
            <Link to="/things-to-do">
              <Button 
                variant="default"
                className="w-full md:w-auto"
              >
                Top Things To Do Today in Townsville
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default WeatherInfo;