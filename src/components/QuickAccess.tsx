import { Link } from "react-router-dom";

const QuickAccess = () => {
  const items = [
    {
      icon: "🏖",
      title: "Beaches",
      desc: "Explore The Strand, Pallarenda, Rowes Bay & more.",
      link: "/townsville/beaches",
    },
    {
      icon: "🍽",
      title: "Restaurants & Cafés",
      desc: "Find the best breakfast, coffee, dinner & waterfront dining.",
      link: "/townsville/food",
    },
    {
      icon: "🐶",
      title: "Dog-Friendly Spots",
      desc: "Dog beaches, off-leash parks, walking tracks & pet cafés.",
      link: "/townsville/dog-friendly",
    },
    {
      icon: "🏨",
      title: "Accommodation",
      desc: "Hotels, beachfront stays, apartments & budget options.",
      link: "/townsville/accommodation",
    },
    {
      icon: "🎟",
      title: "Things to Do",
      desc: "Attractions, lookouts, museums & family-friendly activities.",
      link: "/townsville/things-to-do",
    },
    {
      icon: "🎉",
      title: "Events & What's On",
      desc: "Festivals, markets, concerts & local events year-round.",
      link: "/townsville/events",
    },
    {
      icon: "🛍",
      title: "Shopping & Markets",
      desc: "Local shops, boutiques & weekend market stalls.",
      link: "/townsville/shopping",
    },
    {
      icon: "🌿",
      title: "Nature & Walks",
      desc: "Castle Hill trails, wetlands, creeks & outdoor adventures.",
      link: "/townsville/nature",
    },
    {
      icon: "💡",
      title: "Local Tips",
      desc: "Weather, stinger season, transport & insider advice.",
      link: "/townsville/local-tips",
    },
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center">
          Quick Access
        </h2>
        <p className="text-center text-gray-600 mb-10">
          Jump straight to what you're looking for — your Townsville AI guide has you covered.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item) => (
            <Link
              key={item.title}
              to={item.link}
              className="p-6 rounded-xl bg-white shadow-sm hover:shadow-md transition-shadow border border-gray-100"
            >
              <div className="text-4xl mb-3">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuickAccess;
