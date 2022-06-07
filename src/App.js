import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";

import "./App.css";
import TopBar from "./components/TopBar";
import Inputs from "./components/Inputs";
import Info from "./components/Info";
import Details from "./components/Details";
import Forecast from "./components/Forecast";
import getFormattedWeatherData from "./services/weatherService";

function App() {
  const [query, setQuery] = useState({ q: "amsterdam" });
  const [units, setUnits] = useState("metric");
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const message = query.q ? query.q : "current location";

    const fetchWeather = async () => {
      await getFormattedWeatherData({ ...query, units }).then((data) => {
        setWeather(data);
      });
    };

    toast.promise(fetchWeather(), {
      loading: `Fetching weather for ${message}`,
      success: `Success!`,
      error: `Failed to fetch...`,
    });
  }, [query, units]);

  const background = () => {
    if (!weather) return "from-cyan-500 to-blue-700";
    const threshold = units === "metric" ? 20 : 60;
    if (weather.temp <= threshold) return "from-cyan-500 to-blue-700";

    return "from-yellow-500 to-red-700";
  };

  return (
    <div
      className={`mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br  h-fit shadow-xl shadow-gray-800 rounded-lg ${background()}`}
    >
      <Toaster
        position="bottom-center"
        toastOptions={{
          style: {
            borderRadius: "10px",
            background: "#555",
            color: "#fff",
          },
        }}
      />

      <TopBar setQuery={setQuery} />
      <Inputs setQuery={setQuery} units={units} setUnits={setUnits} />

      {weather && (
        <div>
          <Info weather={weather} />
          <Details weather={weather} />

          <Forecast title="Uurlijkse voorspelling" items={weather.hourly} />
          <Forecast title="Dagelijkse voorspelling" items={weather.daily} />
        </div>
      )}
    </div>
  );
}

export default App;
