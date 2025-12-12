import { useEffect, useRef } from "react";

const WeatherWidget = () => {
  const widgetRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Remove old script if it exists (prevents duplicates)
    const oldScript = document.getElementById("weatherwidget-io-js");
    if (oldScript) {
      oldScript.remove();
    }

    // Create new script
    const script = document.createElement("script");
    script.id = "weatherwidget-io-js";
    script.src = "https://weatherwidget.io/js/widget.min.js";
    script.async = true;

    // Append script AFTER widget is mounted
    if (widgetRef.current) {
      widgetRef.current.appendChild(script);
    }
  }, []);

  return (
  <div
    className="my-6 flex justify-center border border-red-500"
    ref={widgetRef}
  >
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


export default WeatherWidget;
