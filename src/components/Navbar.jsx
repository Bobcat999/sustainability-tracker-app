import React, { useState } from "react";
import { Link } from "react-router-dom";
import { pages } from "../constants";
import { close, menu } from "../assets";
import { AnimatePresence, motion } from "framer-motion";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="w-full flex items-center justify-between py-5 px-5 sticky top-0 z-20 bg-primary shadow-lg">
      <Link to="/" className="text-2xl font-brand font-bold text-white">
        Sustainability Tracker
      </Link>
      <div className="hidden md:flex space-x-6">
        {pages.map((page, index) => (
          <Link
            to={page.path}
            key={index}
            className="text-white text-lg hover:text-background transition-colors duration-300"
          >
            {page.name}
          </Link>
        ))}
      </div>
      <div className="md:hidden">
        <button onClick={toggleDropdown}>
          {isDropdownOpen ? (
            <img src={close} alt="Close" className="w-8 h-8" />
          ) : (
            <img src={menu} alt="Menu" className="w-8 h-8" />
          )}
        </button>
        <AnimatePresence>
          {isDropdownOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10, height: 0 }}
              animate={{ opacity: 1, y: 0, height: "auto" }}
              exit={{ opacity: 0, y: -10, height: 0 }}
              transition={{ duration: 0.1 }}
              className="absolute right-2 mt-2 w-48 overflow-hidden bg-white rounded-md shadow-lg py-2 z-20"
            >
              {pages.map((page, index) => (
                <Link
                  to={page.path}
                  key={index}
                  className="block px-4 py-2 text-dark-green hover:pl-6 hover:scale-105 transition-all duration-300"
                  onClick={() => setIsDropdownOpen(false)}
                >
                  {page.name}
                </Link>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
