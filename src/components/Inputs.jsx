import React, { useState } from "react";
import { UilSearch, UilLocationPoint } from "@iconscout/react-unicons";
import toast from "react-hot-toast";

function Inputs({ setQuery, units, setUnits }) {
  const [city, setCity] = useState("");

  const handleSubmit = () => {
    if (city !== "") setQuery({ q: city });
  };

  const handleLocation = () => {
    toast("Gebruikers locatie aan het ophalen...");
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        let lat = position.coords.latitude;
        let lon = position.coords.longitude;

        setQuery({ lat, lon });
      });
    }
  };

  const handleUnits = (e) => {
    const selectedUnit = e.currentTarget.name;
    if (units !== selectedUnit) setUnits(selectedUnit);
  };

  return (
    <div className="flex flex-row justify-center my-6">
      <div className="flex flex-row w-3/4 items-center justify-center space-x-4">
        <input
          value={city}
          onChange={(e) => setCity(e.currentTarget.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") handleSubmit();
          }}
          type="text"
          placeholder="Zoek een plaats..."
          className="text-xl font-light p-2 w-full shadow-xl rounded-md focus:outline-none capitalize placeholder:normal-case"
        />
        <UilSearch
          size={25}
          className="text-white cursor-pointer hover:text-gray-300"
          onClick={handleSubmit}
        />
        <UilLocationPoint
          onClick={handleLocation}
          size={25}
          className="text-white cursor-pointer hover:text-gray-300"
        />
      </div>
      <div className="flex flex-row w-1/4 items-center justify-center">
        <button
          onClick={handleUnits}
          name="metric"
          className="text-xl text-white font-light hover:text-gray-300"
        >
          °C
        </button>
        <p className="text-xl text-white mx-1">—</p>
        <button
          onClick={handleUnits}
          name="imperial"
          className="text-xl text-white font-light hover:text-gray-300"
        >
          °F
        </button>
      </div>
    </div>
  );
}

export default Inputs;
