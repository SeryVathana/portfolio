import React from "react";

export default function Card({ image, title, des }) {
  return (
    <>
      <div className="grid grid-cols-2">
        <div className="bg-green-300 p-10 rounded-md shadow-sm h-48 col-span-2">
          {image}
        </div>
        <div className="p-5 col-span-2">
          <h1 className="text-3xl font-medium">{title}</h1>
          <p className="text-gray-700">{des}</p>
        </div>
      </div>
    </>
  );
}
