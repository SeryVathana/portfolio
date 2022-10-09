import React from "react";

export default function TopicGenre({ title }) {
  return (
    <div className=" border-2 border-gray-800 rounded-md flex gap-3 justify-center px-4 py-4 z-1">
      <div className="relative w-5 h-5 bg-blue-400 rounded-full z-1"></div>
      <h4>{title}</h4>
    </div>
  );
}
