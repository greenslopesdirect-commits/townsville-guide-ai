import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import strandImage from "@/assets/the-strand-townsville.webp";
import magneticIslandImage from "@/assets/magnetic-island-townsville.webp";
import castleHillImage from "@/assets/castle-hill-townsville.webp";

const picks = [
  {
    title: "The Strand",
    description: "Townsville's iconic beachfront, perfect for walks, swims, and sunset views.",
    image: strandImage,
    query: "Tell me about The Strand in Townsville.",
  },
  {
    title: "Magnetic Island",
    description: "Just a 20-minute ferry ride away — wildlife, beaches, and hikes galore.",
    image: magneticIslandImage,
    query: "What can I do on Magnetic Island?",
  },
  {
    title: "Castle Hill",
    description: "Climb or drive up for unbeatable views of the city and coast.",
    image: castleHillImage,
    query: "What's the best way to get to Castle Hill lookout?",
  },
  {
    title: "JAM Corner",
    description: "Upscale dining with a relaxed North Queensland vibe.",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80&auto=format&fit=crop&sat=10",
    query: "Tell me about JAM Corner restaurant in Townsville.",
  },
  {
    title: "Jezzine Barracks",
    description: "A scenic coastal walkway and heritage site with art, history, and stunning ocean views.",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80&auto=format&fit=crop",
    query: "What can I see at Jezzine Barracks in Townsville?",
  },
  {
    title: "Billabong Sanctuary",
    description: "Hand-feed kangaroos and meet koalas just south of Townsville.",
    image: "https://images.unsplash.com/photo-1540573133985-87b6da6d54a9?w=800&q=80&auto=format&fit=crop&sat=10",
    query: "What animals are at Billabong Sanctuary?",
  },
];

const TopPicks = () => {
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
    <section className="py-16 px-4 bg-muted/30">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-3 text-foreground">
          🏝 Top Local Picks in Townsville
        </h2>
        <p className="text-center text-muted-foreground mb-12 text-lg">
          Hand-picked highlights from around Townsville.
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {picks.map((pick) => (
            <Card 
              key={pick.title}
              onClick={() => handleCardClick(pick.query)}
              className="rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 border-2 cursor-pointer overflow-hidden"
            >
              <div className="aspect-video w-full overflow-hidden">
                <img 
                  src={pick.image} 
                  alt={`${pick.title} - ${pick.description.substring(0, 60)} in Townsville, North Queensland`}
                  className="w-full h-full object-cover transition-transform hover:scale-105"
                  loading="lazy"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-xl">{pick.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  {pick.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopPicks;
