import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

const TestimonialSection = () => {
  const testimonials = [
    {
      quote: "MyAussieGuide helped us find the best coffee in Townsville without the trial and error.",
      author: "Sarah",
      location: "Melbourne"
    },
    {
      quote: "Finally, a local guide that actually knows the hidden gems. The AI recommendations were spot on!",
      author: "James",
      location: "Brisbane"
    },
    {
      quote: "We found the perfect dog-friendly beach thanks to MyAussieGuide. Our schnauzer loved it!",
      author: "Emma",
      location: "Sydney"
    }
  ];

  return (
    <section className="py-16 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            <Quote className="w-4 h-4" />
            What Visitors Say
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Trusted by Travellers
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real feedback from visitors who discovered Townsville with MyAussieGuide
          </p>
        </div>

        {/* Testimonial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="border-2 border-border/40 hover:border-primary/30 transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6">
                <Quote className="w-8 h-8 text-primary/30 mb-4" />
                <p className="text-muted-foreground leading-relaxed mb-4 italic">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-primary font-semibold">
                      {testimonial.author.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="font-medium text-foreground">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">from {testimonial.location}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
