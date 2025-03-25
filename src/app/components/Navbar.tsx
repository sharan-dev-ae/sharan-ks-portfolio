'use client'
import React, { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-[#1c2bd6] text-white shadow-md sticky top-0 z-50 py-4">
      <div className="flex items-center justify-between w-full px-8 md:px-16">
        <div className="text-2xl font-bold">
          <Link href="/" className="hover:text-[#FFD700] transition">
            Sharan K Shaji
          </Link>
        </div>

        <div className="hidden md:flex space-x-12">
          <a href="#home" className="hover:text-[#66ccff] hover:underline transition">
            Home
          </a>
          <a href="#projects" className="hover:text-[#66ccff] hover:underline transition">
            Projects
          </a>
          <a href="#blog" className="hover:text-[#66ccff] hover:underline transition">
            Blog
          </a>
          <a href="#contact" className="hover:text-[#66ccff] hover:underline transition">
            Contact
          </a>
        </div>

        <button
          onClick={toggleMenu}
          className="md:hidden text-2xl"
          aria-label="Open menu"
        >
          {isOpen ? <span>&#x2715;</span> : <span>&#9776;</span>}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-[#1622A5] py-4 space-y-4">
          <a href="#home" className="block text-center hover:text-[#66ccff] hover:underline" onClick={toggleMenu}>
            Home
          </a>
          <a href="#projects" className="block text-center hover:text-[#66ccff] hover:underline" onClick={toggleMenu}>
            Projects
          </a>
          <a href="#blog" className="block text-center hover:text-[#66ccff] hover:underline" onClick={toggleMenu}>
            Blog
          </a>
          <a href="#contact" className="block text-center hover:text-[#66ccff] hover:underline" onClick={toggleMenu}>
            Contact
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
