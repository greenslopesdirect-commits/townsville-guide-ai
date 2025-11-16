import { Card, CardContent } from "@/components/ui/card";
import { Mail, MapPin } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const AboutSection = () => {
  return (
    <section className="py-16 px-4 bg-gradient-to-br from-primary/5 to-background">
      <div className="container mx-auto max-w-4xl space-y-8">
        {/* About Duncan's Guide Card */}
        <Card className="rounded-3xl shadow-[var(--shadow-card)] border-2 animate-fade-in backdrop-blur-sm bg-card/95">
          <CardContent className="pt-8 pb-8 px-6 md:px-10">
            <div className="text-center mb-6">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                🏝 About Duncan's Guide to Townsville
              </h2>
            </div>
            
            <div className="space-y-4 text-base md:text-lg text-muted-foreground leading-relaxed">
              <p>
                Welcome to <span className="font-semibold text-foreground">Duncan's Guide – Townsville</span>, your AI-powered local companion to everything North Queensland.
              </p>
              <p>
                This guide was created by a long-time Townsville local who loves showcasing the region's tropical lifestyle — from The Strand's oceanfront walks to hidden cafés, family adventures, and dog-friendly spots.
              </p>
              <p className="text-foreground font-medium">
                Our goal is simple: to help you experience Townsville like a local, not just a visitor.
              </p>
              <p>
                Whether you're planning your first trip or exploring new corners of the city you call home, this site brings together hand-picked recommendations, real local knowledge, and AI-assisted suggestions — all in one place.
              </p>
            </div>
          </CardContent>
        </Card>

        <Separator className="my-8" />

        {/* About Duncan Ross Card */}
        <Card className="rounded-3xl shadow-[var(--shadow-card)] border-2 animate-fade-in backdrop-blur-sm bg-card/95" style={{ animationDelay: '0.2s' }}>
          <CardContent className="pt-8 pb-8 px-6 md:px-10">
            <div className="text-center mb-6">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                👋 About Duncan Ross
              </h2>
            </div>
            
            <div className="space-y-4 text-base md:text-lg text-muted-foreground leading-relaxed mb-8">
              <p>
                Hi, I'm <span className="font-semibold text-foreground">Duncan Ross</span>, the creator behind this guide.
              </p>
              <p>
                After moving to Townsville, I fell in love with its relaxed energy, friendly community, and endless sunshine. I've combined my experience in digital design and AI technology to build this platform for locals, travellers, and newcomers alike.
              </p>
              <p>
                Through Duncan's Guide, I hope to share the best of what makes our city special — with accurate info, local updates, and smart tools that make exploring easy and enjoyable.
              </p>
            </div>

            <Separator className="my-6" />

            <div className="space-y-3 text-center">
              <div className="flex items-center justify-center gap-3 text-muted-foreground">
                <MapPin className="w-5 h-5 text-primary" />
                <span className="text-base md:text-lg">Based in Townsville, Queensland, Australia</span>
              </div>
              
              <div className="flex items-center justify-center gap-3 text-muted-foreground hover:text-foreground transition-colors">
                <Mail className="w-5 h-5 text-primary" />
                <a href="mailto:greenslopesdirect@gmail.com" className="text-base md:text-lg">
                  greenslopesdirect@gmail.com
                </a>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default AboutSection;
