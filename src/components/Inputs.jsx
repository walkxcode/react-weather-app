import React from "react";
import { UilSearch, UilLocationPoint } from "@iconscout/react-unicons";

function Inputs() {
  return (
    <div className="flex flex-row justify-center my-6">
      <div className="flex flex-row w-3/4 items-center justify-center space-x-4">
        <input
          type="text"
          placeholder="Zoek een plaats..."
          className="text-xl font-light p-2 w-full shadow-xl rounded-md focus:outline-none capitalize placeholder:normal-case"
        />
        <UilSearch
          size={25}
          className="text-white cursor-pointer hover:text-gray-300"
        />
        <UilLocationPoint
          size={25}
          className="text-white cursor-pointer hover:text-gray-300"
        />
      </div>
      <div className="flex flex-row w-1/4 items-center justify-center">
        <button
          name="metric"
          className="text-xl text-white font-light hover:text-gray-300"
        >
          °C
        </button>
        <p className="text-xl text-white mx-1">—</p>
        <button
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
