import React from "react";

export default function TopicGenre({ title }) {
  return (
    <div className="text-xs border-2 border-gray-400 rounded-md gap-2 flex justify-center items-center px-3 py-2 lg:px-5 lg:py-4">
      <div className="relative w-2 h-2 lg:w-4 lg:h-4 bg-blue-400 rounded-full"></div>
      <h4>{title}</h4>
    </div>
  );
}
