import { Link } from "react-router-dom";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FaqSection = () => {
  const faqs = [
    {
      question: "What's the best time to visit Townsville?",
      answer: "Dry season May–October is ideal for sunny days and comfortable temperatures, but Townsville's tropical climate means the city is warm and welcoming year-round."
    },
    {
      question: "Is Townsville family-friendly?",
      answer: "Yes — Townsville is extremely family-friendly. Riverway Lagoons, Castle Hill, The Strand waterpark, and Billabong Sanctuary are all great for families with kids of all ages.",
      linkText: "View our family guide",
      linkTo: "/townsville-with-kids"
    },
    {
      question: "What's the best free thing to do in Townsville?",
      answer: "Watching sunset from The Strand beachfront or climbing Castle Hill Lookout for panoramic views are both completely free and unforgettable experiences."
    },
    {
      question: "Is Townsville dog-friendly?",
      answer: "Very — Townsville has several off-leash dog parks including Rowes Bay, dog-friendly beach zones along The Strand, and many pet-friendly cafés and restaurants."
    },
    {
      question: "How do I get to Magnetic Island from Townsville?",
      answer: "SeaLink ferries depart daily from the Breakwater Terminal in Townsville. The journey takes just 20 minutes, with multiple departures throughout the day."
    },
    {
      question: "Is Townsville worth visiting?",
      answer: "Yes, if you want a relaxed, less-touristy alternative to Cairns or the Whitsundays. The Strand, Castle Hill and Magnetic Island cover the essentials, and Townsville works best as an unhurried two-to-four-day stop rather than a packed week."
    },
    {
      question: "How many days do I need in Townsville?",
      answer: "One focused day covers the essentials. Two days lets you add Magnetic Island properly. Three or more gives room for Paluma, the northern beaches or a slower pace.",
      linkText: "Read the First Time in Townsville guide",
      linkTo: "/first-time-in-townsville"
    },
    {
      question: "Can I see Townsville in one day?",
      answer: "Yes, if you pick a handful of highlights rather than trying to cover everything — The Strand, Castle Hill and a relaxed lunch make a realistic day. Our Townsville in One Day itinerary sets out an hour-by-hour plan.",
      linkText: "Read the Townsville in One Day itinerary",
      linkTo: "/townsville-in-one-day"
    },
    {
      question: "Can I visit Townsville without a car?",
      answer: "Yes, particularly if you stay around The Strand, North Ward or the CBD — most first-time experiences and the Magnetic Island ferry are walkable from there. Regional day trips like Paluma are much harder without one.",
      linkText: "Read the Townsville Without a Car guide",
      linkTo: "/townsville-without-a-car"
    }
  ];

  return (
    <section className="py-16 px-4 bg-background">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground">
            Common questions about visiting and exploring Townsville
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full animate-fade-in">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="border-border/40"
            >
              <AccordionTrigger className="text-left text-lg font-semibold hover:text-primary">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-base text-muted-foreground leading-relaxed">
                {faq.answer}
                {faq.linkTo && (
                  <Link 
                    to={faq.linkTo} 
                    className="block mt-2 text-primary hover:underline font-medium"
                  >
                    {faq.linkText} →
                  </Link>
                )}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FaqSection;
