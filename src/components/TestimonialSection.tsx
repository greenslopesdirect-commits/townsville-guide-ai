import { Card, CardContent } from "@/components/ui/card";
import FeedbackInvite from "@/components/FeedbackInvite";
import { MapPinned, Wrench, Heart } from "lucide-react";

const CommunityTrustSection = () => {
  const trustStats = [
    {
      icon: MapPinned,
      stat: "Real places",
      label: "Townsville spots locals actually use and recommend."
    },
    {
      icon: Wrench,
      stat: "Practical tools",
      label: "Simple planners and calculators to help people enjoy North Queensland."
    },
    {
      icon: Heart,
      stat: "Proudly local",
      label: "North Queensland owned and operated."
    }
  ];

  return (
    <section className="py-16 px-4 bg-muted/30">
      <div className="container mx-auto max-w-5xl">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Built by Locals, for Locals
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

        {/* Feedback: the same card shown at the end of every guide page */}
        <div className="max-w-2xl mx-auto">
          <FeedbackInvite />
        </div>
      </div>
    </section>
  );
};

export default CommunityTrustSection;
