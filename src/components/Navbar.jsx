import { Link, NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";

function Navbar() {
  const [open, setOpen] = useState(false);

  const handleMenu = () => {
    setOpen((prev) => !prev);
  };

  return (
    <nav className="bg-stone-400 flex mx-2 gap-6 h-16 items-center justify-between px-2">
      <h1 className="ml-2 md:ml-20">ROAST</h1>
      <ul className="gap-4 px-4 mx-auto hidden md:flex ">
        <li className="">
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/menu">Menu</NavLink>
        </li>
        <li>
          <NavLink to="/about">Contact Us</NavLink>
        </li>
      </ul>
      <div className="-mr-2 flex md:hidden">
        <button
          type="button"
          onClick={handleMenu}
          className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
        >
          <span className="sr-only">Open Main Menu</span>
          {open === true ? <FaTimes /> : <FaBars />}
        </button>
      </div>
      {open ? (
        <div className="md:hidden">
          <div className="ox-2 pt-2 pb-3 space-y-1 sm:px-3">
            <ul className="text-gray-400 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md ">
              <li className="">
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/about">About</NavLink>
              </li>
              <li>
                <NavLink to="/menu">Menu</NavLink>
              </li>
              <li>
                <NavLink to="/about">Contact Us</NavLink>
              </li>
            </ul>
          </div>
        </div>
      ) : null}
    </nav>
  );
}

export default Navbar;
