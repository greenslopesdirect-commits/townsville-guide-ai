import { Card, CardContent } from "@/components/ui/card";
import { toast } from "@/components/ui/sonner";
import { Users, ShieldCheck, MapPin, MessageSquare } from "lucide-react";
const CommunityTrustSection = () => {
  const trustStats = [
    {
      icon: Users,
      stat: "500+",
      label: "Townsville locals receiving our weekly updates."
    },
    {
      icon: ShieldCheck,
      stat: "100%",
      label: "Local-Verified recommendations."
    },
    {
      icon: MapPin,
      stat: "Proudly",
      label: "North Queensland owned and operated."
    }
  ];

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText("duncankross@gmail.com");
      toast("Email address copied to clipboard!");
    } catch (error) {
      toast("Unable to copy email. Please copy it manually: duncankross@gmail.com");
    }
  };

  return (
    <section className="py-16 px-4 bg-muted/30">
      <div className="container mx-auto max-w-5xl">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Built by Locals, Loved by the Community
          </h2>
        </div>

        {/* Trust Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {trustStats.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <Card
                key={index}
                className="border-2 border-border/40 hover:border-primary/30 transition-all duration-300 text-center"
              >
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-6 h-6 text-primary" />
                  </div>
                  <p className="text-2xl md:text-3xl font-bold text-primary mb-2">
                    {item.stat}
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    {item.label}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Feedback CTA */}
        <div className="text-center">
          <p className="text-muted-foreground flex items-center justify-center gap-2 flex-wrap">
            <MessageSquare className="w-4 h-4 text-primary" />
            Are you a local? Help us improve —{" "}
            <button
              type="button"
              onClick={handleCopyEmail}
              className="text-primary hover:underline font-medium underline-offset-2"
            >
              Send us your feedback
            </button>
          </p>
        </div>
      </div>
    </section>
  );
};

export default CommunityTrustSection;
