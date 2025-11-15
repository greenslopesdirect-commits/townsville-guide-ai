import { Card, CardContent } from "@/components/ui/card";
import { Mail, Globe, MapPin, Facebook, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
const AboutDuncan = () => {
  return <section className="py-16 px-4 bg-gradient-to-br from-primary/10 to-background">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-foreground">
            About Duncan 👋
          </h2>
          
          {/* Placeholder circular image */}
          <div className="mb-8 flex justify-center">
            <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary/20 to-primary/40 shadow-lg flex items-center justify-center text-5xl">
              👤
            </div>
          </div>

          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed text-left">
            Hi, I'm Duncan Ross — a proud Townsville local and digital creator. 
I built this guide to help visitors and locals discover the best of North Queensland — from beaches and restaurants to hidden gems and dog-friendly spots. Whether you're planning your first visit or already call Townsville home, I hope this AI-powered guide makes your experience even better.
          </p>

          <h3 className="text-2xl md:text-3xl font-semibold mb-6 text-foreground">
            Contact
          </h3>

          <Card className="max-w-2xl mx-auto mb-8 bg-card/80 backdrop-blur-sm">
            <CardContent className="pt-6 space-y-4">
              <div className="flex items-center justify-center gap-3 text-muted-foreground hover:text-foreground transition-colors">
                <Mail className="w-5 h-5" />
                <a href="mailto:greenslopesdirect@gmail.com" className="text-base md:text-lg">
                  greenslopesdirect@gmail.com
                </a>
              </div>
              
              <div className="flex items-center justify-center gap-3 text-muted-foreground hover:text-foreground transition-colors">
                <Globe className="w-5 h-5" />
                <a href="https://whizpixstudio.com" target="_blank" rel="noopener noreferrer" className="text-base md:text-lg">
                  whizpixstudio.com
                </a>
              </div>
              
              <div className="flex items-center justify-center gap-3 text-muted-foreground">
                <MapPin className="w-5 h-5" />
                <span className="text-base md:text-lg">Based in Townsville, QLD</span>
              </div>

              {/* Social Media Icons */}
              <div className="flex justify-center gap-4 pt-4 border-t border-border/40">
                <Button asChild variant="ghost" size="icon" className="hover:bg-primary/10 transition-colors" aria-label="Facebook">
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                    <Facebook className="w-5 h-5" />
                  </a>
                </Button>
                <Button asChild variant="ghost" size="icon" className="hover:bg-primary/10 transition-colors" aria-label="Instagram">
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                    <Instagram className="w-5 h-5" />
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>

        </div>
      </div>
    </section>;
};
export default AboutDuncan;