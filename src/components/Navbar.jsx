import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { navLinks } from "../constants";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  return (
    <div className="fixed top-0 left-0 z-50 w-full px-10 py-4 bg-transparent">
      <div className="flex items-center justify-between w-full mx-auto max-w-7xl">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        ></Link>

        <ul className="flex-row hidden gap-10 list-none bg-gray-100 shadow-lg sm:flex pt-[50px] pb-2 px-3 rounded-2xl -translate-y-[55px]">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title ? "text-red-600" : "text-secondary"
              } hover:text-black text-black hover:scale-110 duration-500 text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>

        <div className="flex items-center justify-end flex-1 sm:hidden">
          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className="flex flex-col items-start justify-end flex-1 gap-4 list-none">
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] ${
                    active === nav.title ? "text-white" : "text-secondary"
                  }`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(nav.title);
                  }}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
