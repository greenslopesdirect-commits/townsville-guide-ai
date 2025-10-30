import { ChevronDown, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
// TODO: Replace this import with your own Townsville background photo
// Upload your image to src/assets/ and name it strand-hero.jpg
import heroImage from "@/assets/strand-hero.jpg";

const Hero = () => {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
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
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground z-10" size={20} />
            <Input
              id="hero-chat-input"
              type="text"
              placeholder="Hi! I'm your Townsville guide. Ask me anything — restaurants, beaches, dog parks, events, accommodation."
              className="h-16 pl-12 pr-4 text-base rounded-2xl bg-white/95 backdrop-blur-sm border-white/40 shadow-xl focus-visible:ring-primary focus-visible:ring-2"
            />
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
