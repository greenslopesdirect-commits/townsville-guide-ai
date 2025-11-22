import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

const categories = [
  { 
    emoji: "🏖", 
    name: "Beaches", 
    description: "Explore The Strand, Pallarenda, Rowes Bay, and Townsville's most beautiful coastal spots.",
    query: "Tell me about Townsville's beaches."
  },
  { 
    emoji: "🍽", 
    name: "Restaurants & Cafés", 
    description: "Discover the best places for breakfast, coffee, lunch, dinner, and waterfront dining.",
    query: "Where are the best restaurants in Townsville?"
  },
  { 
    emoji: "🐶", 
    name: "Dog Parks", 
    description: "Find the top off-leash areas, beach walks, and dog-friendly spaces around Townsville.",
    query: "Show me the best dog parks in Townsville."
  },
  { 
    emoji: "🏨", 
    name: "Accommodation", 
    description: "Browse popular hotels, beachfront stays, family apartments, and budget options.",
    query: "What are good places to stay in Townsville?",
    link: "/accommodation"
  },
  { 
    emoji: "🎟", 
    name: "Things to Do", 
    description: "Attractions, tours, lookouts, museums, kid-friendly activities, and local adventures.",
    query: "What are the best things to do in Townsville?"
  },
  { 
    emoji: "🎉", 
    name: "Events & What's On", 
    description: "Festivals, markets, live music and events happening in Townsville throughout the year.",
    query: "What events are on in Townsville this week?",
    link: "/events"
  },
  { 
    emoji: "🛍", 
    name: "Shopping & Markets", 
    description: "Uncover local shops, weekend markets, boutiques, and artisanal stalls.",
    query: "Where can I shop or find markets in Townsville?"
  },
  { 
    emoji: "💡", 
    name: "Local Tips", 
    description: "Weather advice, stinger safety, getting around, and insider tips for visiting Townsville.",
    query: "What local tips should I know for visiting Townsville?",
    link: "/local-tips"
  },
];

const QuickAccess = () => {
  const handleCardClick = (query: string) => {
    // Use the Hero component's state setter function
    if ((window as any).setAiInputValue) {
      (window as any).setAiInputValue(query);
    }
    
    // Add scroll and pulse effects
    const input = document.getElementById('townsville-ai-input') as HTMLInputElement;
    if (input) {
      input.scrollIntoView({ behavior: 'smooth', block: 'center' });
      input.classList.add('ring-4', 'ring-primary/50', 'animate-pulse');
      setTimeout(() => input.classList.remove('ring-4', 'ring-primary/50', 'animate-pulse'), 2000);
    }
  };

  return (
    <section className="py-16 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-foreground">
          Quick Access
        </h2>
        <p className="text-center text-muted-foreground mb-12 text-base md:text-lg max-w-2xl mx-auto">
          Jump straight to what you're looking for — your Townsville AI guide has you covered.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map((category, index) => {
            const content = (
              <Card className="h-full border-2 hover:border-primary transition-all duration-300 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-tropical)] rounded-3xl">
                <CardContent className="p-6 flex flex-col gap-3">
                  <div className="text-6xl md:text-7xl mb-2 group-hover:scale-110 transition-transform duration-300">
                    {category.emoji}
                  </div>
                  <h3 className="text-lg md:text-xl font-semibold text-foreground">
                    {category.name}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {category.description}
                  </p>
                </CardContent>
              </Card>
            );

            if ((category as any).link) {
              return (
                <Link
                  key={category.name}
                  to={(category as any).link}
                  className="text-left group animate-fade-in hover-scale"
                  style={{ animationDelay: `${index * 100}ms` }}
                  aria-label={`Learn about ${category.name} in Townsville`}
                >
                  {content}
                </Link>
              );
            }

            return (
              <button
                key={category.name}
                onClick={() => handleCardClick(category.query)}
                className="text-left group animate-fade-in hover-scale"
                style={{ animationDelay: `${index * 100}ms` }}
                aria-label={`Learn about ${category.name} in Townsville`}
              >
                {content}
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default QuickAccess;
