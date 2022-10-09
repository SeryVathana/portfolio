import React from "react";
import { finisedProject, projectTopic, workingProject } from "./data/data";
import NAV from "./Nav";
export default function Projects() {
  return (
    <div>
      <NAV />
      <div className="px-20 w-full">
        <section className="grid grid-cols-2 gap-10 mb-10">
          <div className="bg-blue-300 p-10 h-96 rounded-md shadow-lg">1</div>
          <div className="bg-green-300 p-10 rounded-md shadow-lg">2</div>
        </section>
        <h1 className="text-3xl font-bold">Project Topic</h1>
        <section className="flex mt-5 mb-10 gap-4">
          {projectTopic.map((val, ind) => {
            return (
              <div
                key={ind}
                className=" border-2 border-gray-400 rounded-md flex gap-3 justify-center px-4 py-4"
              >
                <div className="relative w-5 h-5 bg-blue-400 rounded-full"></div>
                <h4>{val.title}</h4>
              </div>
            );
          })}
        </section>
        <h1 className="text-3xl font-bold mt-5">Working On Projects</h1>
        <section className="grid grid-cols-3 gap-10 mt-5 mb-20">
          {workingProject.map((val, ind) => {
            return (
              <div key={ind} className="grid grid-cols-2 col-span-3 gap-2">
                <div className="bg-blue-300 p-10 rounded-md shadow-lg h-72">
                  {val.image}
                </div>
                <div className="p-5">
                  <h1 className="text-3xl font-medium">{val.title}</h1>
                  <p className="text-gray-700">{val.des}</p>
                </div>
              </div>
            );
          })}
        </section>
        <h1 className="text-3xl font-bold">Finished Projects</h1>
        <section className="grid grid-cols-3 gap-10 mt-5 mb-20">
          {finisedProject.map((val, ind) => {
            return (
              <div key={ind} className="grid grid-cols-2">
                <div className="bg-green-300 p-10 rounded-md shadow-lg h-48 col-span-2">
                  {val.image}
                </div>
                <div className="p-5 col-span-2">
                  <h1 className="text-3xl font-medium">{val.title}</h1>
                  <p className="text-gray-700">{val.des}</p>
                </div>
              </div>
            );
          })}
        </section>
      </div>
    </div>
  );
}
