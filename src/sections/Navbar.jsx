import React, { useState } from "react";
import { navLinks } from "../constants";

const NavItems = () => {
  return (
    <ul className="flex justify-between items-center gap-5 nav-ul">
      {navLinks.map((link) => (
        <li key={link.id} className="nav-li">
          <a
            href={link.href}
            className="nav-li_a"
            onClick={() => window.scrollTo(0, 0)}
          >
            {link.name}
          </a>
        </li>
      ))}
    </ul>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 text-white-600">
      <div className="w-full">
        <div className="flex sm:justify-center justify-between items-center py-5 mx-auto c-space">
          {/* <a
            href="/"
            className="text-neutrl-400 font-bold text-xl hover:text-white transition-colors"
          >
            Aryaman
          </a> */}
          <button
            onClick={toggleMenu}
            className="text-neutral-400 hover:text-white focus:outline-none sm:hidden flex"
            aria-label="toggle menu"
          >
            <img
              src={isOpen ? "assets/close.svg" : "assets/menu.svg"}
              alt="toggle"
              className="w-6 h-6"
            />
          </button>
          <nav className="sm:flex hidden">
            <NavItems />
          </nav>
        </div>
      </div>
      <div className={`nav-sidebar ${isOpen ? "max-h-screen" : "max-h-0"}`}>
        <nav className="p-5">
          <NavItems />
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
