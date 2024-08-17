import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";

function Header() {
  const [open, setOpen] = useState(false);

  const handleMenu = () => {
    setOpen(!open);
  };

  return (
    <header className="flex items-center justify-between px-4 mx-auto lg:max-w-7xl md:px-8 h-16">
      <h1 className="text-xl font-bold">ROASTERS</h1>
      <div className="md:hidden">
        <button
          className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
          onClick={handleMenu}
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </div>
      <nav
        className={`absolute top-16 left-0 w-full bg-stone-400 md:static md:w-auto md:bg-transparent md:flex md:items-center md:space-x-6 ${
          open ? "block" : "hidden"
        }`}
      >
        <ul className="flex flex-col items-center space-y-6 md:flex-row md:space-x-6 md:space-y-0">
          <li>
            <NavLink to="/" onClick={() => setOpen(false)}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" onClick={() => setOpen(false)}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/menu" onClick={() => setOpen(false)}>
              Menu
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" onClick={() => setOpen(false)}>
              Contact Us
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
