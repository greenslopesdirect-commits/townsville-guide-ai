import { Card, CardContent } from "@/components/ui/card";
import { Heart } from "lucide-react";
const About = () => {
  return <section className="py-16 px-4 bg-muted/30">
      <div className="container mx-auto max-w-3xl">
        <Card className="rounded-3xl shadow-[var(--shadow-card)] border-2">
          <CardContent className="pt-8 pb-8 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
              <Heart className="w-8 h-8 text-primary fill-primary" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
              About This Guide
            </h2>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-4 text-left">
              Created by a proud Townsville local who loves sharing the best our beautiful city has to offer. 
              Whether you're visiting for the first time or you've lived here for years, there's always something 
              new to discover in North Queensland's largest city.
            </p>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed text-left">
              This guide brings together local knowledge, hidden gems, and must-see attractions to help you 
              experience Townsville like a true local.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>;
};
export default About;