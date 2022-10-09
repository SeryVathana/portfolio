import React from "react";
import NAV from "./Nav";
import About_Flipped from "./assets/about_flipped.png";
import { about, skill } from "./data/data";

export default function About() {
  return (
    <div className="">
      <NAV />
      <section className="px-20 w-full grid grid-cols-2 text-gray-800">
        <div className="w-96 h-96 ml-10 mt-14 rounded-full  overflow-y-hidden">
          <img className="w-80" src={About_Flipped} alt="" />
        </div>
        <div className="grid grid-cols-1">
          <h1 className="text-3xl h-0 mb-5">Informations</h1>
          <div className="grid grid-cols-3 gap-10">
            <div className="text-right">
              {about.map((val, ind) => {
                return (
                  <div key={ind}>
                    <h1>{val[0]}</h1>
                  </div>
                );
              })}
            </div>
            <div className="col-span-2">
              {about.map((val, ind) => {
                return (
                  <div key={ind}>
                    <h1>{val[1]}</h1>
                  </div>
                );
              })}
            </div>
          </div>
          <div>
            <h1 className="text-3xl mb-3">Skills</h1>
            <h1 className="text-md">HTML/CSS/Javascript</h1>
            <div class="w-full bg-white rounded-full dark:bg-gray-700 mb-3">
              <div className="bg-blue-900 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full w-3/4">
                {" "}
                75%
              </div>
            </div>
            <h1 className="text-md">ReactJS & TailwindCSS</h1>
            <div class="w-full bg-white rounded-full dark:bg-gray-700 mb-3">
              <div className="bg-blue-900 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full w-1/2">
                {" "}
                50%
              </div>
            </div>
          </div>
        </div>
      </section>

      <div></div>
    </div>
  );
}
