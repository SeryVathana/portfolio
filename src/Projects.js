import React from "react";
import { finisedProject, projectTopic, workingProject } from "./data/data";
import NAV from "./Nav";
export default function Projects() {
  return (
    <div>
      <NAV />
      <div className="px-10 lg:px-20 w-full">
        <section className="grid grid-cols-2 gap-10 mb-10 text-gray-300">
          <div className="bg-blue-300 p-10 h-40 md:h-56 lg:h-96 rounded-md shadow-lg col-span-2 md:col-span-1">
            1
          </div>
          <div className="bg-green-300 p-10 h-40 md:h-56 lg:h-96 rounded-md shadow-lg col-span-2 md:col-span-1">
            2
          </div>
        </section>
        <h1 className="text-xl md:text-3xl font-bold text-gray-300">
          Project Topic
        </h1>
        <section className="flex flex-wrap mt-2 md:mt-5 mb-10 md:mb-20 gap-2 lg:gap-4 text-gray-300">
          {projectTopic.map((val, ind) => {
            return (
              <div
                key={ind}
                className=" text-xs lg:text-sm border-2 border-gray-400 rounded-md gap-2 flex justify-center items-center px-3 py-2 lg:px-5 lg:py-4"
              >
                <div className="relative w-2 h-2 lg:w-4 lg:h-4 bg-blue-400 rounded-full"></div>
                <h4>{val.title}</h4>
              </div>
            );
          })}
        </section>
        <h1 className="text-xl md:text-3xl font-bold mt-5 text-gray-300">
          Working On Projects
        </h1>
        <section className="grid grid-cols-3 gap-10 mt-5 mb-10 md:mb-20 text-gray-300">
          {workingProject.map((val, ind) => {
            return (
              <div key={ind} className="grid grid-cols-2 col-span-3 gap-1">
                <div className="bg-blue-300 p-2 md:p-10 rounded-md shadow-lg h-24 md:h-48 lg:h-72">
                  {val.image}
                </div>
                <div className="p-2 md:p-5">
                  <h1 className="text-md md:text-3xl font-medium">
                    {val.title}
                  </h1>
                  <p className="text-sm md:text-xl text-gray-700">{val.des}</p>
                </div>
              </div>
            );
          })}
        </section>
        <h1 className="text-xl md:text-3xl font-bold text-gray-300">
          Finished Projects
        </h1>
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-10 mt-5 mb-20 text-gray-300">
          {finisedProject.map((val, ind) => {
            return (
              <div
                key={ind}
                className="grid grid-cols-2 md:col-span-1 text-gray-300"
              >
                <div className="bg-green-300 p-10 rounded-md shadow-lg h-24 md:h-48 lg:h-52 col-span-1 md:col-span-2">
                  {val.image}
                </div>
                <div className="p-2 md:p-5">
                  <h1 className="text-md md:text-2xl font-medium">
                    {val.title}
                  </h1>
                  <p className="text-sm md:text-md text-gray-700">{val.des}</p>
                </div>
              </div>
            );
          })}
        </section>
      </div>
    </div>
  );
}
