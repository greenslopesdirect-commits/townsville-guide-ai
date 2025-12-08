const LiveWeatherWidget = () => {
  return (
    <section className="py-8 px-4 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto max-w-2xl">
        <div className="rounded-2xl border border-border/40 shadow-md bg-card overflow-hidden">
          <iframe
            src="https://wttr.in/Townsville?format=4&m"
            width="100%"
            height="60"
            frameBorder="0"
            scrolling="no"
            title="Townsville Weather"
            className="w-full bg-white text-center"
            style={{ minHeight: "50px" }}
          />
        </div>
        <p className="text-center text-xs text-muted-foreground mt-2">
          Live weather data for Townsville, QLD
        </p>
      </div>
    </section>
  );
};

export default LiveWeatherWidget;
