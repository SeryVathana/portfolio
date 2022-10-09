import React from "react";
import NAV from "./Nav";
import About_Flipped from "./assets/about.png";
import { about, skill } from "./data/data";
import "./About.css";

export default function About() {
  return (
    <div className="">
      <NAV />
      <section className="px-10 md:px-20 lg:px-20 w-full text-gray-300">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="text-center md:text-left lg:text-right lg:-mr-36 mt-20 order-last md:order-last lg:order-first">
            <div className={`text-md lg:text-2xl md:mb-5 lg:mr-20`}>
              <span>{about[0][0]}</span>
              &ensp;
              <span className="text-pink-600">-</span>
              &ensp;
              <span>{about[0][1]}</span>
            </div>
            <div className={`text-md lg:text-2xl md:mb-5 lg:mr-20`}>
              <span>{about[1][0]}</span>
              &ensp;
              <span className="text-pink-600">-</span>
              &ensp;
              <span>{about[1][1]}</span>
            </div>
            <div className={`text-md lg:text-2xl md:mb-5 lg:mr-20 `}>
              <span>{about[2][0]}</span>
              &ensp;
              <span className="text-pink-600">-</span>
              &ensp;
              <span>{about[2][1]}</span>
            </div>
            <div className={`text-md lg:text-2xl md:mb-5 lg:mr-16 `}>
              <span>{about[3][0]}</span>
              &ensp;
              <span className="text-pink-600">-</span>
              &ensp;
              <span>{about[3][1]}</span>
            </div>
            <div className={`text-md lg:text-2xl md:mb-5 lg:mr-28`}>
              <span>{about[4][0]}</span>
              &ensp;
              <span className="text-pink-600">-</span>
              &ensp;
              <span>{about[4][1]}</span>
            </div>
            <div className={`text-md lg:text-2xl lg:mb-5 lg:mr-40`}>
              <span>{about[5][0]}</span>
              &ensp;
              <span className="text-pink-600">-</span>
              &ensp;
              <span>{about[5][1]}</span>
            </div>
            <div className="flex lg:ml-32 gap-5 lg:gap-10 mt-10">
              <button className="bg-pink-600 border-2 border-pink-600 px-4 py-2 lg:px-7 lg:py-5 rounded-lg">
                Download CV
              </button>
              <button className=" border-2 border-pink-600 px-4 py-2 lg:px-7 lg:py-5 rounded-lg">
                Contact Me
              </button>
            </div>
          </div>
          <div className="w-72 h-72 md:w-big md:h-big lg:w-large lg:h-large rounded-full lg:rounded-none image_container md:-ml-16 lg:-ml-20 md:mt-10 lg:mt-5 overflow-y-hidden">
            <img className="image_1" src={About_Flipped} alt="" />
          </div>
        </div>
      </section>

      {/* <div>
            <h1 className="text-3xl mb-3">Skills</h1>
            <h1 className="text-md">HTML/CSS/Javascript</h1>
            <div class="w-full bg-white rounded-full mb-3">
              <div className="bg-pink-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full w-3/4">
                {" "}
                75%
              </div>
            </div>
            <h1 className="text-md">ReactJS & TailwindCSS</h1>
            <div class="w-full bg-white rounded-full mb-3">
              <div className="bg-pink-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full w-1/2">
                {" "}
                50%
              </div>
            </div>
          </div> */}
    </div>
  );
}
