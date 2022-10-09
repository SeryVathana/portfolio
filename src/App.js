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
      <section className=" text px-10 mt-32 lg:mt-16">
        <div className="text-left p-0 md:p-10 lg:p-10">
          <h2 className=" text-4xl md:text-5xl lg:text-5xl py-1 lg:py-0 text-red-700 font-medium lg:mr-72">
            Séry Vathana
          </h2>
          <h3 className=" text-md md:text-xl lg:text-2xl pb-2 md:py-2 lg:py-2 mb-4 text-gray-800">
            Information Technology Engineering Student, RUPP
          </h3>
          <p className="text-md md:text-xl lg:text-xl py-2 md:py-5 lg:py-0 leading-6 md:leading-8 lg:leading-8 text-gray-800 mb-10 lg:pr-96">
            Now studying in Royal University of Phnom Penh. I'm looking forward
            to enhance and explore more about technology and related to Cyber
            Security.
          </p>
          <div className=" text-5xl flex gap-16 py-3 text-red-700">
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
        <div className="hidden md:hidden lg:block bg overflow-hidden absolute w-full h-full bottom-0 right-0">
          <img className="w-5/12 absolute right-0 top-5" src={Landing} />
        </div>
      </section>
    </div>
  );
}

export default App;
