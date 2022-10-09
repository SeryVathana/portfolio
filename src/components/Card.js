import React from "react";

export default function Card({ image, title, des }) {
  return (
    <>
      <div className="grid grid-cols-2 md:col-span-1 text-gray-300">
        <div className="bg-green-300 p-10 rounded-md shadow-lg h-24 md:h-48 col-span-1 md:col-span-2">
          {image}
        </div>
        <div className="p-2 md:p-5">
          <h1 className="text-md md:text-2xl font-medium">{title}</h1>
          <p className="text-sm md:text-md text-gray-700">{des}</p>
        </div>
      </div>
    </>
  );
}
