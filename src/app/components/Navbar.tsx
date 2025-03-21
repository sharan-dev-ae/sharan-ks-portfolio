'use client'
import React, { useState } from "react";
import Link from "next/link"; // Link component for routing

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // State for mobile menu toggle

  // Toggle function for mobile menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-[#1D1841] text-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo or Brand Name */}
        <div className="text-2xl font-bold">
          <Link href="/" className="text-[#FFBC1C]">
            Sharan Portfolio
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          <a href="#home" className="hover:text-[#FFBC1C]">
            Home
          </a>
          <a href="#projects" className="hover:text-[#FFBC1C]">
            Projects
          </a>
          <a href="#blog" className="hover:text-[#FFBC1C]">
            Blog
          </a>
          <a href="#contact" className="hover:text-[#FFBC1C]">
            Contact
          </a>
        </div>

        {/* Mobile Hamburger Menu */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-2xl"
          aria-label="Open menu"
        >
          {isOpen ? (
            <span>&#x2715;</span> // Close icon (X)
          ) : (
            <span>&#9776;</span> // Hamburger icon (3 bars)
          )}
        </button>
      </div>

      {/* Mobile Menu (Dropdown) */}
      {isOpen && (
        <div className="md:hidden bg-[#1D1841] text-white py-4 space-y-4">
          <a href="#home" className="block text-center hover:text-[#FFBC1C]" onClick={toggleMenu}>
            Home
          </a>
          <a href="#projects" className="block text-center hover:text-[#FFBC1C]" onClick={toggleMenu}>
            Projects
          </a>
          <a href="#blog" className="block text-center hover:text-[#FFBC1C]" onClick={toggleMenu}>
            Blog
          </a>
          <a href="#contact" className="block text-center hover:text-[#FFBC1C]" onClick={toggleMenu}>
            Contact
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
