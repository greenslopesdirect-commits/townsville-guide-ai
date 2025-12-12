import { useEffect } from "react";

const HeaderWeather = () => {
  useEffect(() => {
    const scriptId = "weatherwidget-io-js";

    // If the script doesn't exist, load it
    if (!document.getElementById(scriptId)) {
      const script = document.createElement("script");
      script.id = scriptId;
      script.src = "https://weatherwidget.io/js/widget.min.js";
      script.async = true;
      document.body.appendChild(script);
    } else {
      // Re-initialize widget if script already loaded
      window?.__weatherwidget_init?.();
    }
  }, []);

  return (
    <div className="hidden md:flex items-center ml-4">
      <a
        className="weatherwidget-io"
        href="https://forecast7.com/en/n19d26146d82/townsville/"
        data-label_1="TSV"
        data-label_2="WEATHER"
        data-theme="pure"
        style={{ minWidth: "140px" }}
      >
        TSV WEATHER
      </a>
    </div>
  );
};

export default HeaderWeather;
