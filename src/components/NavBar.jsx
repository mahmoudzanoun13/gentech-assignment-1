import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/Logo 1.png";
import DropDown from "./DropDown";

function NavBar() {
  const [open, setOpen] = useState(false);

  return (
    <nav>
      <div className="justify-between px-4 mx-auto lg:w-[80%] xl:w-[62%] md:items-center md:flex md:w-[100%] font-inter">
        <div>
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
            <Link to="/">
              <img src={logo} alt="CAD - Create a Dream - Logo" />
            </Link>
            <div className="md:hidden">
              <button
                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                onClick={() => setOpen(!open)}
              >
                {open ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    viewBox="0 0 20 20"
                    fill="white"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="white"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        <div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              open ? "block" : "hidden"
            }`}
          >
            <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
              <li className="text-white hover:font-bold">
                <NavLink to="/">About us</NavLink>
              </li>
              <li className="text-white hover:font-bold">
                <NavLink to="/">Portfolio</NavLink>
              </li>
              <li className="text-white hover:font-bold">
                <NavLink to="/">Order site</NavLink>
              </li>
              <li className="text-white hover:font-bold">
                <NavLink to="/">Design</NavLink>
              </li>
              <li className="text-white hover:font-bold">
                <DropDown />
              </li>
              <li className="text-white hover:font-bold">
                <NavLink to="/">Contacts</NavLink>
              </li>
              <li>
                <select
                  id="languages"
                  name="languages"
                  className="rounded cursor-pointer bg-transparent text-white"
                >
                  <option value="ru" className="lang">
                    RU
                  </option>
                  <option value="dk" className="lang">
                    UK
                  </option>
                  <option value="en" className="lang">
                    EN
                  </option>
                  <option value="pl" className="lang">
                    PL
                  </option>
                </select>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bottom-border relative w-[80%] h-[1px] bg-white" />
    </nav>
  );
}

export default NavBar;
