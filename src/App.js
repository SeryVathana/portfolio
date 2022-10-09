import React from "react";
import "./App.css";
import NAV from "./Nav";
import Landing from "./assets/landing.png";

import {
  AiFillFacebook,
  AiFillLinkedin,
  AiFillTwitterCircle,
} from "react-icons/ai";

function App() {
  return (
    <div className="">
      <NAV />
      <section className=" text px-10 mt-24 md:mt-12 lg:mt-16">
        <div className="text-center md:text-left p-0 md:py-10 lg:p-10">
          <h2 className=" text-6xl md:text-5xl lg:text-5xl py-1 lg:py-0 text-red-600 font-medium lg:mr-72">
            Séry Vathana
          </h2>
          <h3 className=" text-md md:text-xl lg:text-2xl pb-2 md:py-2 lg:py-2 mb-4 text-gray-300">
            Information Technology Engineering Student, RUPP
          </h3>
          <p className="text-md md:text-xl lg:text-xl py-2 md:py-5 lg:py-0 md:pr-36 leading-6 md:leading-8 lg:leading-8 text-gray-300 mb-10 lg:pr-96">
            Now studying in Royal University of Phnom Penh. I'm looking forward
            to enhance and explore more about technology and related to Cyber
            Security.
          </p>
          <div className="text-5xl md:w-1/3 flex sm:justify-between md:justify-left md:gap-10 px-10 md:px-0 text-red-600">
            <a href="#">
              <AiFillFacebook />
            </a>
            <a href="#">
              <AiFillTwitterCircle />
            </a>
            <a href="#">
              <AiFillLinkedin />
            </a>
          </div>
        </div>
        <div className="hidden md:block lg:block overflow-hidden absolute w-full h-full md:bottom-0 md:right-0">
          <img
            className="md:w-8/10 lg:w-5/12 absolute right-0 md:-bottom-10"
            src={Landing}
          />
        </div>
      </section>
    </div>
  );
}

export default App;
