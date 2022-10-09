import React from "react";
import { BsFillMoonStarsFill, BsFillSunFill, BsDot } from "react-icons/bs";
import { Link } from "react-router-dom";
import { CgMenuRightAlt } from "react-icons/cg";
import { useState } from "react";

export default function NAV(props) {
  return (
    <nav className="text-gray-800 py-5 mt-5 mb-10 flex justify-between sticky top-0 px-10 lg:px-20 z-10">
      <h1 className="text-xl font-bold ">Séry Vathana</h1>

      <ul className=" flex items-center">
        <CgMenuRightAlt className="block md:hidden lg:hidden cursor-pointer ml-8 text-3xl" />
        <div className="hidden md:flex lg:flex justify-between">
          <li>
            <Link to="/" className="test ml-8">
              home
            </Link>
          </li>
          <BsDot className="ml-4 hidden lg:block mt-1"></BsDot>
          <li>
            <Link to="/about" className="ml-4">
              about me
            </Link>
          </li>
          <BsDot className="ml-4 hidden lg:block mt-1"></BsDot>
          <li>
            <Link to="/projects" className="ml-4">
              projects
            </Link>
          </li>
          <BsDot className="ml-4 hidden lg:block mt-1"></BsDot>
          <li>
            <Link to="/blogs" className="ml-4">
              blogs
            </Link>
          </li>
          <BsDot className="ml-4 hidden lg:block mt-1"></BsDot>
          <li>
            <Link to="/contact" className="ml-4">
              contact
            </Link>
          </li>
        </div>
      </ul>
    </nav>
  );
}
