import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";

function Header() {
  const [open, setOpen] = useState(false);

  const handleMenu = () => {
    setOpen(!open);
  };

  return (
    <header className="flex items-center justify-between px-4 mx-auto lg:max-w-auto md:px-8 h-16 bg-darkBrown text-white">
      <h1 className="text-xl font-bold font-heading text-orange">ROASTERS</h1>
      <div className="md:hidden">
        <button
          className="p-2 text-white rounded-md outline-none focus:border-orange-dark focus:border"
          onClick={handleMenu}
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </div>
      <nav
        className={`absolute top-16 left-0 w-full bg-darkBrown md:static md:w-auto md:bg-transparent md:flex md:items-center md:space-x-6 ${
          open ? "block" : "hidden"
        }`}
      >
        <ul className="flex flex-col items-center space-y-6 md:flex-row md:space-x-6 md:space-y-0 text-xl">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-orange border-b-2 border-orange"
                  : "text-white  hover:text-orange"
              }
              onClick={() => setOpen(false)}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? "text-orange border-b-2 border-orange"
                  : "text-white  hover:text-orange"
              }
              onClick={() => setOpen(false)}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/menu"
              className={({ isActive }) =>
                isActive
                  ? "text-orange border-b-2 border-orange"
                  : "text-white  hover:text-orange"
              }
              onClick={() => setOpen(false)}
            >
              Menu
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive
                  ? "text-orange border-b-2 border-orange"
                  : "text-white  hover:text-orange"
              }
              onClick={() => setOpen(false)}
            >
              Contact Us
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
