import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="sticky top-0 z-50 bg-gradient-to-r from-orange-400 to-orange-600 w-full shadow-md">
      <div className="flex items-center justify-between px-6 py-3 max-w-screen-lg mx-auto">
        {/* Logo on the left */} <div className={`flex-shrink-0 text-white text-2xl font-bold ${isOpen ? 'hidden' : 'block'} md:block`}> <a href="#home">Food</a> </div>

        {/* Hamburger Icon for Mobile */}
        <div className="flex md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none absolute top-3 right-5"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Centered Navigation Links */}
        <ul
          className={`flex-col md:flex-row md:flex space-y-2 md:space-y-0 md:space-x-8 text-white ${
            isOpen ? "flex mx-auto" : "hidden"
          } md:space-x-8 md:items-center text-center md:text-left mt-2 md:mt-0`}
        >
          <NavLink
            to="/"
            className="hover:text-gray-200"
            onClick={() => {
              const element = document.getElementById("home");
              if (element) {
                element.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            <li className="text-lg font-semibold">Home</li>
          </NavLink>

          <a href="#menu" className="hover:text-gray-200">
            <li className="text-lg font-semibold">Menu</li>
          </a>
          <a href="#reservation" className="hover:text-gray-200">
            <li className="text-lg font-semibold">Reservation</li>
          </a>
          <a href="#contact" className="hover:text-gray-200">
            <li className="text-lg font-semibold">Contact</li>
          </a>
          <NavLink to="/blogs" className="hover:text-gray-200">
            <li className="text-lg font-semibold">Blogs</li>
          </NavLink>
        </ul>
      </div>
    </div>
  );
}

export default Header;
