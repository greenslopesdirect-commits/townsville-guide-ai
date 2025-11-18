const VideoSection = () => {
  return (
    <section className="py-16 px-4 bg-background">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-8 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Watch Townsville in 5 Minutes 🎥
          </h2>
          <p className="text-muted-foreground text-base md:text-lg max-w-3xl mx-auto">
            Explore the best of Townsville with this beautifully shot local guide video. 
            From beaches to lookouts, restaurants to wildlife — here's everything you must see.
          </p>
        </div>
        
        <div className="relative w-full max-w-4xl mx-auto aspect-video rounded-xl shadow-lg overflow-hidden animate-fade-in">
          <iframe 
            className="absolute inset-0 w-full h-full"
            src="https://www.youtube.com/embed/lIfAT7YyHjg" 
            title="Is it WORTH VISITING Townsville? 20+ best things to do in Townsville | A local's guide to Townsville"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerPolicy="strict-origin-when-cross-origin" 
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
