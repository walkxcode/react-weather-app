import React from "react";
import {
  UilArrowUp,
  UilArrowDown,
  UilTemperature,
  UilTear,
  UilWind,
  UilSun,
  UilSunset,
} from "@iconscout/react-unicons";

function Details() {
  return (
    <div>
      <div className="flex items-center justify-center py-1 text-xl text-cyan-300">
        <p>Bewolkt</p>
      </div>

      <div className="flex flex-row items-center justify-between text-white py-3">
        <div className="flex flex-row items-center">
          <img
            src="https://openweathermap.org/img/wn/01d@2x.png"
            alt=""
            className="w-20"
          />
          <p className="text-5xl"> 34°</p>
        </div>
        <div className="flex flex-col space-y-2">
          <div className="flex font-light text-sm items-center ">
            <UilTemperature size={18} className="mr-1" />
            Gevoels temperatuur:
            <span className="font-medium ml-1">32°</span>
          </div>
          <div className="flex font-light text-sm items-center">
            <UilTear size={18} className="mr-1" />
            Luchtvochtigheid:
            <span className="font-medium ml-1">65%</span>
          </div>
          <div className="flex font-light text-sm items-center">
            <UilWind size={18} className="mr-1" />
            Windkracht:
            <span className="font-medium ml-1">11 km/h</span>
          </div>
        </div>
      </div>
      <div className="flex flex-row items-center justify-center space-x-2 text-white text-sm py-3">
        <UilSun />
        <p className="font-light">
          Zonsopkomst
          <br /> <span className="font-medium">06:45</span>
        </p>
        <p className="font-light">|</p>
        <UilSunset />
        <p className="font-light">
          Zonsondergang
          <br /> <span className="font-medium">19:35</span>
        </p>
        <p className="font-light">|</p>
        <UilArrowUp />
        <p className="font-light">
          Hoog
          <br /> <span className="font-medium">32°</span>
        </p>
        <p className="font-light">|</p>
        <UilArrowDown />
        <p className="font-light">
          Laag
          <br /> <span className="font-medium">28°</span>
        </p>
      </div>
    </div>
  );
}

export default Details;
