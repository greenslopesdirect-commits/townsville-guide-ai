const sections = [
  {
    id: "beaches",
    title: "Best Beaches in Townsville",
    content:
      "Townsville boasts some of Queensland's most stunning beaches. The Strand is the city's iconic 2.2km waterfront promenade, perfect for swimming, walking, and sunset views. Pallarenda Beach offers a quieter escape...",
    linkText: "See all beaches",
    linkTo: "/townsville/beaches"
  },
  {
    id: "things-to-do",
    title: "Things To Do in Townsville",
    content:
      "Townsville offers endless activities for visitors and locals alike. Climb or drive Castle Hill for panoramic views...",
    linkText: "See all things to do",
    linkTo: "/townsville/things-to-do"
  },
  {
    id: "dog-friendly",
    title: "Dog-Friendly Townsville",
    content:
      "Townsville is one of Queensland's most dog-friendly cities...",
    linkText: "See all dog-friendly spots",
    linkTo: "/townsville/dog-friendly"
  },
  {
    id: "walks-lookouts",
    title: "Best Walks & Lookouts",
    content:
      "Townsville's tropical landscape offers spectacular walking trails...",
    linkText: "Explore walking trails",
    linkTo: "/townsville/things-to-do"
  },
  {
    id: "restaurants",
    title: "Best Restaurants & Cafés in Townsville",
    content:
      "Townsville's dining scene blends tropical flavours, fresh seafood...",
    linkText: "Find places to eat",
    linkTo: "/townsville/food"
  },
  {
    id: "magnetic-island",
    title: "Magnetic Island Guide",
    content:
      "Just 20 minutes by ferry from Townsville, Magnetic Island is a tropical paradise...",
    linkText: "View Magnetic Island guide",
    linkTo: "/townsville/things-to-do"
  }
];


  return (
    <section className="py-16 px-4 bg-gradient-to-b from-muted/20 to-background">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {sections.map((section, index) => (
            <Card
              key={section.id}
              className="overflow-hidden animate-fade-in shadow-md hover:shadow-lg transition-all duration-300 border-border/40"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-8">
                <h2 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
                  {section.title}
                </h2>
                <p className="text-base text-muted-foreground leading-relaxed mb-6">
                  {section.content}
                </p>
                <a href={section.linkTo}>
                  <Button
                    variant="outline"
                    className="group"
                    aria-label={section.linkText}
                  >
                    {section.linkText}
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SeoContentSections;

