import { Card, CardContent } from "@/components/ui/card";
import { Mail, MapPin } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
const AboutSection = () => {
  return <section className="py-16 px-4 bg-gradient-to-br from-primary/5 to-background">
      <div className="container mx-auto max-w-4xl space-y-8">
        {/* About MyAussieGuide Card */}
        <Card className="rounded-3xl shadow-[var(--shadow-card)] border-2 animate-fade-in backdrop-blur-sm bg-card/95">
          <CardContent className="pt-8 pb-8 px-6 md:px-10">
            <div className="text-center mb-6">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">About MyAussieGuide – Townsville 💛</h2>
            </div>
            
            <div className="space-y-4 text-base md:text-lg text-muted-foreground leading-relaxed">
              <p>MyAussieGuide is your AI-powered local companion to everything Townsville and North Queensland — built to help locals, newcomers, and travellers discover the best of the region with real local insight.</p>
              <p>This guide brings together hand-picked recommendations, carefully curated lists, and AI-assisted suggestions to make exploring easy. From beaches and restaurants to dog parks, events, and hidden gems, it's designed to help you experience Townsville like a local.</p>
              <p>Whether you're planning your first trip or exploring new corners of the city you already call home, MyAussieGuide delivers updated recommendations, accurate information, and smart tools that adapt to your needs.</p>
            </div>
          </CardContent>
        </Card>

        <Separator className="my-8" />

        {/* About Duncan Ross Card */}
        <Card className="rounded-3xl shadow-[var(--shadow-card)] border-2 animate-fade-in backdrop-blur-sm bg-card/95" style={{
        animationDelay: '0.2s'
      }}>
          <CardContent className="pt-8 pb-8 px-6 md:px-10">
            <div className="text-center mb-6">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                About Duncan Ross 👋
              </h2>
            </div>
            
            <div className="space-y-4 text-base md:text-lg text-muted-foreground leading-relaxed mb-8">
              <p>Hi, I'm Duncan — the real person behind MyAussieGuide and a proud Townsville local.</p>
              <p>After moving to North Queensland, I quickly fell in love with Townsville's relaxed energy, sunshine, community spirit, and endless outdoor lifestyle. With a background in digital design, websites, and AI tools, I created this platform to share the very best of our city in a simple, friendly, and genuinely helpful way.</p>
              <p>
                I explore Townsville every day — beaches, cafés, dog-friendly spots, local events — and I've built this guide to make it easier for others to do the same.
              </p>
              <p>And if you ever see someone out walking a large black Giant Schnauzer, there's a very good chance that's me!</p>
            </div>

            <Separator className="my-6" />

            <div className="space-y-3 text-center">
              <div className="flex items-center justify-center gap-3 text-muted-foreground">
                <MapPin className="w-5 h-5 text-primary" />
                <span className="text-base md:text-lg">Based in Townsville, Queensland</span>
              </div>
              
              <Link to="/townsville/contact">
                <Button variant="outline" className="rounded-full px-6">
                  <Mail className="w-4 h-4 mr-2" />
                  Get in Touch
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>

        {/* History CTA Button */}
        <div className="text-center animate-fade-in" style={{
        animationDelay: '0.4s'
      }}>
          <Link to="/townsville/history">
            <Button size="lg" className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-primary-foreground shadow-[var(--shadow-tropical)] hover:shadow-[var(--shadow-glow)] transition-all duration-300 rounded-full px-8 py-6 text-base md:text-lg font-semibold" aria-label="Read the full history of Townsville">
              Read the Full History of Townsville 📜
            </Button>
          </Link>
        </div>
      </div>
    </section>;
};
export default AboutSection;
