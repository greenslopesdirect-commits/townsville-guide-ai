import { useEffect, useRef } from "react";

const LiveWeatherWidget = () => {
  const widgetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const loadWidget = () => {
      // Remove existing script to force reload
      const existingScript = document.getElementById("weatherwidget-io-js");
      if (existingScript) {
        existingScript.remove();
      }

      // Create and append new script
      const script = document.createElement("script");
      script.id = "weatherwidget-io-js";
      script.src = "https://weatherwidget.io/js/widget.min.js";
      script.async = true;
      document.body.appendChild(script);
    };

    // Small delay to ensure DOM is ready
    const timer = setTimeout(loadWidget, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="py-8 px-4 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto max-w-2xl">
        <div 
          ref={widgetRef}
          className="rounded-2xl border border-border/40 shadow-md bg-card/80 backdrop-blur-sm p-4 overflow-hidden"
        >
          <a
            className="weatherwidget-io"
            href="https://forecast7.com/en/n19d26n146d82/townsville/"
            data-label_1="TOWNSVILLE"
            data-label_2="WEATHER"
            data-days="3"
            data-theme="pure"
          >
            TOWNSVILLE WEATHER
          </a>
        </div>
      </div>
    </section>
  );
};

export default LiveWeatherWidget;
