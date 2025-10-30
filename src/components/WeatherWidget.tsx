import { useEffect } from "react";

const WeatherWidget = () => {
  useEffect(() => {
    // Load the weather widget script
    const script = document.createElement('script');
    script.id = 'weatherwidget-io-js';
    script.src = 'https://weatherwidget.io/js/widget.min.js';
    
    // Only add if not already present
    if (!document.getElementById('weatherwidget-io-js')) {
      document.body.appendChild(script);
    }

    return () => {
      // Cleanup: remove script when component unmounts
      const existingScript = document.getElementById('weatherwidget-io-js');
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

  return (
    <section className="py-16 px-4 bg-gradient-to-b from-background to-secondary/10">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-8 text-foreground">
          Townsville Weather Now
        </h2>
        <div className="bg-card rounded-3xl shadow-lg overflow-hidden">
          <a
            className="weatherwidget-io"
            href="https://forecast7.com/en/n19d26e146d82/townsville/"
            data-label_1="TOWNSVILLE"
            data-label_2="WEATHER"
            data-theme="pure"
          >
            TOWNSVILLE WEATHER
          </a>
        </div>
      </div>
    </section>
  );
};

export default WeatherWidget;
