const LiveWeatherWidget = () => {
  return (
    <section className="py-8 px-4 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto max-w-2xl">
        <div className="rounded-2xl border border-border/40 shadow-md bg-card overflow-hidden">
          <iframe
            src="https://www.weatherwidget.org/w/?id=wnXSLMjB&fcst=2&sun=1&geoid=2077895&bgcolor=%23FFFFFF&txtcolor=%23333333&hdrcolor=%2300796b&dtefmt=1&tmfmt=12"
            width="100%"
            height="200"
            frameBorder="0"
            scrolling="no"
            title="Townsville Weather Forecast"
            className="w-full"
            style={{ minHeight: "180px" }}
          />
        </div>
      </div>
    </section>
  );
};

export default LiveWeatherWidget;
