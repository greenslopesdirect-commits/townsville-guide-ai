const LiveWeatherWidget = () => {
  return (
    <section className="py-6 px-4 bg-transparent">
      <div className="container mx-auto max-w-3xl">
        <h3 className="text-2xl md:text-3xl font-bold text-center mb-6 text-foreground">
          Live Weather in Townsville
        </h3>
        <div 
          className="mx-auto rounded-2xl border border-border/30 shadow-lg bg-[#f9f9f9] p-6 overflow-hidden"
          style={{ maxWidth: "600px" }}
        >
          <iframe
            src="https://wttr.in/Townsville?format=3"
            width="100%"
            height="80"
            frameBorder="0"
            scrolling="no"
            title="Townsville Weather"
            className="w-full text-center"
            style={{ 
              minHeight: "60px",
              fontSize: "1.5rem",
              transform: "scale(1.3)",
              transformOrigin: "center center"
            }}
          />
        </div>
        <p className="text-center text-sm text-muted-foreground mt-4">
          Current conditions for Townsville, QLD
        </p>
      </div>
    </section>
  );
};

export default LiveWeatherWidget;
