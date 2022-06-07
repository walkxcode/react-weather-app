import "./App.css";
import TopBar from "./components/TopBar";
import Inputs from "./components/Inputs";
import Info from "./components/Info";
import Details from "./components/Details";
import Forecast from "./components/Forecast";

function App() {
  return (
    <div className="mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br from-cyan-500 to-blue-700 h-fit shadow-xl shadow-gray-800 rounded-lg">
      <TopBar />
      <Inputs />

      <Info />
      <Details />

      <Forecast title="Uurlijkse voorspelling" />
      <Forecast title="Dagelijkse voorspelling" />
    </div>
  );
}

export default App;
