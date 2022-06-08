import React from "react";
import ReactTooltip from "react-tooltip";
import {
  UilArrowUp,
  UilArrowDown,
  UilTemperature,
  UilTear,
  UilWind,
  UilSun,
  UilSunset,
} from "@iconscout/react-unicons";

import { formatToLocalTime, getIconURL } from "../services/weatherService";

function Details({
  weather: {
    description,
    icon,
    temp,
    temp_min,
    temp_max,
    sunrise,
    sunset,
    speed,
    humidity,
    feels_like,
    timezone,
  },
}) {
  return (
    <div>
      <div className="flex items-center justify-center py-1 text-xl text-cyan-300">
        <p className="capitalize">{description}</p>
      </div>

      <div className="flex flex-col items-center justify-center text-white py-3">
        <div className="flex flex-row items-center">
          <img
            data-tip={description}
            data-type="info"
            data-effect="solid"
            data-for="tooltip"
            data-offset="{'top': -20}"
            src={getIconURL(icon)}
            alt={description}
            className="w-35"
          />
          <ReactTooltip id="tooltip" />
          <p className="text-7xl font-bold">{`${temp.toFixed()}°`}</p>
        </div>
        <div className="flex flex-col items-center space-y-2">
          <div className="flex font-light text-sm items-center ">
            <UilTemperature size={18} className="mr-1" />
            Gevoels temperatuur:
            <span className="font-medium ml-1">{`${feels_like.toFixed()}°`}</span>
          </div>
          <div className="flex font-light text-sm items-center">
            <UilTear size={18} className="mr-1" />
            Luchtvochtigheid:
            <span className="font-medium ml-1">{`${humidity}%`}</span>
          </div>
          <div className="flex font-light text-sm items-center">
            <UilWind size={18} className="mr-1" />
            Windkracht:
            <span className="font-medium ml-1">{`${speed.toFixed()} km/h`}</span>
          </div>
        </div>
      </div>
      <div className="flex flex-row items-center justify-center space-x-2 text-white text-sm py-3">
        <UilSun />
        <p className="font-light">
          Zonsopkomst
          <br />{" "}
          <span className="font-medium">
            {formatToLocalTime(sunrise, timezone, "HH:mm")}
          </span>
        </p>
        <p className="font-light">|</p>
        <UilSunset />
        <p className="font-light">
          Zonsondergang
          <br />{" "}
          <span className="font-medium">
            {" "}
            {formatToLocalTime(sunset, timezone, "HH:mm")}
          </span>
        </p>
        <p className="font-light">|</p>
        <UilArrowUp />
        <p className="font-light">
          Hoog
          <br /> <span className="font-medium">{`${temp_max.toFixed()}°`}</span>
        </p>
        <p className="font-light">|</p>
        <UilArrowDown />
        <p className="font-light">
          Laag
          <br /> <span className="font-medium">{`${temp_min.toFixed()}°`}</span>
        </p>
      </div>
    </div>
  );
}

export default Details;
