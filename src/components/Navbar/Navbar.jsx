import React, { useState } from "react";
import "./navbar.css";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const routes = [
    { id: 1, path: "/", name: "Home" },
    { id: 2, path: "/about", name: "About" },
    { id: 3, path: "/education", name: "Education" },
    { id: 4, path: "/experience", name: "Experience" },
    { id: 5, path: "/projects", name: "Projects" },
    { id: 6, path: "/contact", name: "Contact" },
  ];

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="shadow-md bg-primary fixed w-full z-50 px-10">
      <div className="mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 navbar-logo">
            <a href="/" className="text-3xl font-[800] font-mono">
              Amir{" "}
              <span className="text-textMain text-shadow-main inline-block">
                Hamza
              </span>
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {routes.map((route) => (
              <NavLink
                key={route.id}
                to={route.path}
                className={({ isActive }) =>
                  `hover:text-textMain  hover:border-b-[3px] border-b-textMain ${
                    isActive
                      ? "text-textMain border-b-[3px] hover:border-b-[3px] border-b-textMain"
                      : "text-white"
                  }`
                }
              >
                {route.name}
              </NavLink>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white hover:text-blue-600 focus:outline-none"
            >
              {isOpen ? (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden shadow-md">
          <div className="px-4 pt-2 pb-3 space-y-1">
            {routes.map((route) => (
              <NavLink
                key={route.id}
                to={route.path}
                className={({ isActive }) =>
                  `block hover:text-textMain hover:border-b-[3px] border-b-textMain ${
                    isActive
                      ? "text-textMain font-bold hover:border-b-[3px] border-b-textMain"
                      : "text-white"
                  }`
                }
                onClick={() => setIsOpen(false)} // close mobile menu after click
              >
                {route.name}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
