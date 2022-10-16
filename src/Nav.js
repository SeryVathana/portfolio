import React from "react";
import { BsDot } from "react-icons/bs";
import { MdClose } from "react-icons/md";
import { Link } from "react-router-dom";
import { CgMenuRightAlt } from "react-icons/cg";

export default function NAV(props) {
  return (
    <nav className="text-gray-300 py-5 mt-5 mb-10 flex justify-between sticky top-0 px-10 md:px-10 lg:px-20 z-10">
      <Link to="/" className="text-xl font-bold ">
        Séry Vathana
      </Link>

      <ul className=" flex items-center">
        <CgMenuRightAlt
          onClick={() => {
            const NavItems = document.getElementById("navBar");
            const closeNav = document.getElementById("closeNav");
            const openNav = document.getElementById("openNav");
            if (
              NavItems.classList.contains("hidden") &&
              closeNav.classList.contains("hidden")
            ) {
              NavItems.classList.remove("hidden");
              NavItems.classList.add("block");
              NavItems.classList.add("navSize");
              openNav.classList.remove("block");
              openNav.classList.add("hidden");
              closeNav.classList.add("block");
              closeNav.classList.remove("hidden");
            }
          }}
          id="openNav"
          className="block md:hidden lg:hidden cursor-pointer ml-8 text-3xl z-10"
        />
        <MdClose
          onClick={() => {
            const NavItems = document.getElementById("navBar");
            const openNav = document.getElementById("openNav");
            const closeNav = document.getElementById("closeNav");
            if (
              NavItems.classList.contains("block") &&
              openNav.classList.contains("hidden")
            ) {
              NavItems.classList.remove("block");
              NavItems.classList.add("hidden");
              NavItems.classList.add("navSize");
              openNav.classList.add("block");
              openNav.classList.remove("hidden");
              closeNav.classList.remove("block");
              closeNav.classList.add("hidden");
            }
          }}
          id="closeNav"
          className="hidden md:hidden lg:hidden cursor-pointer ml-8 text-3xl z-10"
        />
        <div
          id="navBar"
          className="navBar hidden md:relative md:flex lg:flex justify-between"
        >
          <li className="hover:text-red-600">
            <Link to="/about" className="ml-4">
              about me
            </Link>
          </li>
          <BsDot className="ml-4 hidden lg:block mt-1"></BsDot>
          <li className="hover:text-red-600">
            <Link to="/projects" className="ml-4">
              projects
            </Link>
          </li>
          <BsDot className="ml-4 hidden lg:block mt-1"></BsDot>
          <li className="hover:text-red-600">
            <Link to="/blogs" className="ml-4">
              blogs
            </Link>
          </li>
          <BsDot className="ml-4 hidden lg:block mt-1"></BsDot>
          <li className="hover:text-red-600">
            <Link to="/contact" className="ml-4">
              contact
            </Link>
          </li>
        </div>
      </ul>
    </nav>
  );
}
