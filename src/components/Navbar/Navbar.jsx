import React, { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#home" className="text-2xl font-bold text-blue-600">
              Amir Hamza
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <a href="#home" className="text-gray-800 hover:text-blue-600">
              Home
            </a>
            <a href="#education" className="text-gray-800 hover:text-blue-600">
              Education
            </a>
            <a href="#services" className="text-gray-800 hover:text-blue-600">
              Services
            </a>
            <a
              href="#testimonials"
              className="text-gray-800 hover:text-blue-600"
            >
              Testimonials
            </a>
            <a href="#contact" className="text-gray-800 hover:text-blue-600">
              Contact
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-800 hover:text-blue-600 focus:outline-none"
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
        <div className="md:hidden bg-white shadow-md">
          <div className="px-4 pt-2 pb-3 space-y-1">
            <a href="#home" className="block text-gray-800 hover:text-blue-600">
              Home
            </a>
            <a
              href="#education"
              className="block text-gray-800 hover:text-blue-600"
            >
              Education
            </a>
            <a
              href="#services"
              className="block text-gray-800 hover:text-blue-600"
            >
              Services
            </a>
            <a
              href="#testimonials"
              className="block text-gray-800 hover:text-blue-600"
            >
              Testimonials
            </a>
            <a
              href="#contact"
              className="block text-gray-800 hover:text-blue-600"
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
