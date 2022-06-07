import React from "react";
import ReactTooltip from "react-tooltip";
import { getIconURL } from "../services/weatherService";

function Forecast({ title, items }) {
  return (
    <div>
      <div className="flex items-center justify-start mt-6">
        <p className="text-white font-medium uppercase">{title}</p>
      </div>
      <hr className="my-2" />
      <div className="flex flex-row items-center justify-between text-white">
        {items.map((item) => (
          <div
            key={item.title}
            className="flex flex-col items-center justify-center"
          >
            <p className="font-light text-sm capitalize">{item.title}</p>
            <img
              data-tip={item.description}
              data-type="info"
              data-effect="solid"
              data-for="tooltip"
              data-offset="{'top': -15}"
              src={getIconURL(item.icon)}
              alt={item.description}
              className="w-12 my-1"
            />
            <ReactTooltip id="tooltip" />
            <p className="font-medium">{`${item.temp.toFixed()}°`}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Forecast;
