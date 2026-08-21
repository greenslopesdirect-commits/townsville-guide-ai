import { Link } from "react-router-dom";

const WorthVisiting = () => {
  return (
    <section className="py-14 px-4 bg-muted/20">
      <div className="container mx-auto max-w-3xl text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">
          Is Townsville Worth Visiting?
        </h2>
        <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
          Yes, if you know what you are getting. Townsville is a real North Queensland city rather
          than a built-for-tourists strip — a genuinely good waterfront at{" "}
          <Link to="/the-strand" className="text-primary hover:underline">
            The Strand
          </Link>
          , a free city-and-coast view at{" "}
          <Link to="/castle-hill" className="text-primary hover:underline">
            Castle Hill
          </Link>
          , and one of the easiest short island trips in Australia a 20-minute ferry away at{" "}
          <Link to="/guides/magnetic-island-day-trip" className="text-primary hover:underline">
            Magnetic Island
          </Link>
          . It suits travellers who want a relaxed, less-touristy alternative to Cairns or the
          Whitsundays, with fewer big-ticket attractions and more room to slow down.
        </p>
        <p className="text-muted-foreground text-base sm:text-lg leading-relaxed mt-4">
          It is not the place for wall-to-wall organised tours or nightlife, and the tropical heat
          shapes how you plan each day. Expect an unhurried two to four days rather than a packed
          week. If that sounds like your trip,{" "}
          <Link to="/first-time-in-townsville" className="text-primary hover:underline">
            start with the first-time visitor guide
          </Link>
          .
        </p>
      </div>
    </section>
  );
};

export default WorthVisiting;
