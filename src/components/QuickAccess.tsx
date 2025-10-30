import { Card, CardContent } from "@/components/ui/card";

const categories = [
  { 
    emoji: "🏖", 
    name: "Beaches", 
    description: "Explore The Strand, Pallarenda, and Townsville's stunning coastal spots.",
    query: "Tell me about Townsville's beaches."
  },
  { 
    emoji: "🍽", 
    name: "Restaurants & Cafés", 
    description: "Find the best coffee, brunch, and dinner spots around town.",
    query: "Where are the best restaurants in Townsville?"
  },
  { 
    emoji: "🐶", 
    name: "Dog Parks", 
    description: "Discover the top off-leash areas and pet-friendly parks.",
    query: "Show me the best dog parks in Townsville."
  },
  { 
    emoji: "🏨", 
    name: "Accommodation", 
    description: "Browse great places to stay — from hotels to holiday apartments.",
    query: "What are good places to stay in Townsville?"
  },
  { 
    emoji: "🎟", 
    name: "Things to Do", 
    description: "Local attractions, tours, and family fun across North Queensland.",
    query: "What are the best things to do in Townsville?"
  },
  { 
    emoji: "🛍", 
    name: "Shopping & Markets", 
    description: "Uncover local shops, markets, and weekend stalls worth visiting.",
    query: "Where can I shop or find markets in Townsville?"
  },
];

const QuickAccess = () => {
  const handleCardClick = (query: string) => {
    const input = document.getElementById('hero-chat-input') as HTMLInputElement;
    if (input) {
      input.value = query;
    }
  };

  return (
    <section className="py-16 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-foreground">
          Quick Access
        </h2>
        <p className="text-center text-muted-foreground mb-12 text-base md:text-lg max-w-2xl mx-auto">
          Jump straight to what you're looking for — your Townsville guide has you covered.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map((category, index) => (
            <button
              key={category.name}
              onClick={() => handleCardClick(category.query)}
              className="text-left group animate-fade-in hover-scale"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <Card className="h-full border-2 hover:border-primary transition-all shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-tropical)] rounded-3xl">
                <CardContent className="p-6 flex flex-col gap-3">
                  <div className="text-5xl mb-2 group-hover:scale-110 transition-transform">
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
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuickAccess;
