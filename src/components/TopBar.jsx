import React from "react";

function TopBar({ setQuery }) {
  const cities = [
    {
      id: 1,
      title: "Londen",
    },
    {
      id: 2,
      title: "Sydney",
    },
    {
      id: 3,
      title: "Tokyo",
    },
    {
      id: 4,
      title: "Amsterdam",
    },
    {
      id: 5,
      title: "Parijs",
    },
  ];

  return (
    <div className="flex items-center justify-around my-6">
      {cities.map((city) => (
        <button
          key={city.id}
          className="text-white text-lg font-bold hover:text-gray-300"
          onClick={() => setQuery({ q: city.title })}
        >
          {city.title}
        </button>
      ))}
    </div>
  );
}

export default TopBar;
