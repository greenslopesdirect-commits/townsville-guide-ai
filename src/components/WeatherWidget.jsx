import { useEffect } from "react";

const WeatherWidget = () => {
  useEffect(() => {
    // Load the weatherwidget.io script dynamically
    const scriptId = "weatherwidget-io-js";
    if (!document.getElementById(scriptId)) {
      const script = document.createElement("script");
      script.id = scriptId;
      script.src = "https://weatherwidget.io/js/widget.min.js";
      document.body.appendChild(script);
    }
  }, []);

  return (
    <div className="my-6 flex justify-center">
      <a
        className="weatherwidget-io"
        href="https://forecast7.com/en/n19d26146d82/townsville/"
        data-label_1="TOWNSVILLE"
        data-label_2="WEATHER"
        data-theme="original"
      >
        TOWNSVILLE WEATHER
      </a>
    </div>
  );
};

export default WeatherWidget;

