import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Waves } from "lucide-react";
import heroImage from "@/assets/strand-hero.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[80vh] md:min-h-[88vh] flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Townsville Strand foreshore — wide tropical waterfront view"
          className="w-full h-full object-cover"
          width={1920}
          height={1080}
          fetchPriority="high"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/45 to-black/35" />
      </div>

      {/* Content */}
      <div className="container relative z-10 px-4 pt-20 text-center mx-auto max-w-3xl">
        <p className="text-sm md:text-base uppercase tracking-[0.25em] text-yellow-300/90 font-semibold mb-4 drop-shadow">
          My Aussie Guide
        </p>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-5 drop-shadow-xl leading-tight tracking-tight">
          Discover the Best of{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-400">
            Townsville
          </span>
        </h1>
        <p className="text-lg md:text-xl text-slate-100 mb-10 max-w-xl mx-auto font-medium drop-shadow">
          Your trusted local guide to Townsville — beaches, food, events, and local secrets.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-stretch sm:items-center max-w-md sm:max-w-none mx-auto">
          <Button asChild size="lg" className="rounded-full px-7 h-12 text-base shadow-lg gap-2">
            <Link to="/things-to-do">
              Explore Things to Do
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="rounded-full px-7 h-12 text-base bg-white/10 hover:bg-white/20 text-white border-white/40 hover:text-white backdrop-blur-sm gap-2"
          >
            <Link to="/beaches">
              <Waves className="w-4 h-4" />
              View Beaches
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
