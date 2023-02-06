import React from "react";
import { Navbar } from "flowbite-react";
import { Link, NavLink } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";
import logo from "../../assests/images/ink (1).png";

const NavbarSection = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="bg-sky-100 shadow">
      <div className="relative w-10/12 m-auto">
        <Navbar className="bg-sky-100">
          <Navbar.Brand>
            <img src={logo} className="mr-3 h-6 sm:h-9" alt="Flowbite Logo" />
            <span className="self-center  text-3xl font-bold text-sky-600">
              <Link to="/">LINK DIARY</Link>
            </span>
          </Navbar.Brand>
          {/* <Navbar.Toggle /> */}
          <Navbar.Collapse>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/dashboard">Dashboard</NavLink>
            <NavLink to="/About">About</NavLink>
            <NavLink to="/About">Contact</NavLink>
            <NavLink to="/About">Trending</NavLink>
          </Navbar.Collapse>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="btn block lg:hidden"
          >
            <AiOutlineMenu></AiOutlineMenu>
          </button>
        </Navbar>
        <div className={menuOpen ? " " : `hidden`}>
          <div className=" flex flex-col items-center  gap-2 my-2 ">
            <NavLink
              to="/"
              className="bg-[#85CDFD] w-[80%] p-2 rounded-md text-white font-bold text-center"
            >
              Home
            </NavLink>
            <NavLink
              to="/dashboard"
              className="bg-[#85CDFD] w-[80%] p-2 rounded-md text-white font-bold text-center"
            >
              Dashboard
            </NavLink>
            <NavLink
              to="/readingHistory"
              className="bg-[#85CDFD] w-[80%] p-2 rounded-md text-white font-bold text-center"
            >
              Reading History
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavbarSection;
