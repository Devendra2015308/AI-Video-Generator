"use client";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm fixed w-full z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-8 py-4">
        {/* Logo */}
        <div className="text-2xl font-bold text-gray-900 flex items-center gap-2">
          <span className="bg-[var(--primary-color)] w-5 h-5 rounded-full" />
          <span>Fliki</span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-8 text-gray-700 font-medium">
          <Link
            href="#"
            className="hover:text-[var(--primary-color)] transition"
          >
            Features
          </Link>
          <Link
            href="#"
            className="hover:text-[var(--primary-color)] transition"
          >
            Use Cases
          </Link>
          <Link
            href="#"
            className="hover:text-[var(--primary-color)] transition"
          >
            Explore
          </Link>
          <Link
            href="#"
            className="hover:text-[var(--primary-color)] transition"
          >
            Pricing
          </Link>
        </div>

        {/* Desktop Auth */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            href="#"
            className="text-gray-700 hover:text-[var(--primary-color)] font-medium transition"
          >
            Login
          </Link>
          <Link
            href="#"
            className="bg-[var(--primary-color)] hover:bg-[#3c43a5] text-white px-5 py-2 rounded-full font-semibold transition"
          >
            Signup →
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-gray-800 focus:outline-none"
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-white px-6 pt-2 pb-4 space-y-3 text-gray-700 font-medium transition-all duration-300 ease-in-out ${
          menuOpen ? "block" : "hidden"
        }`}
      >
        <Link
          href="#"
          className="block hover:text-[var(--primary-color)] transition"
        >
          Features
        </Link>
        <Link
          href="#"
          className="block hover:text-[var(--primary-color)] transition"
        >
          Use Cases
        </Link>
        <Link
          href="#"
          className="block hover:text-[var(--primary-color)] transition"
        >
          Explore
        </Link>
        <Link
          href="#"
          className="block hover:text-[var(--primary-color)] transition"
        >
          Pricing
        </Link>
        <hr className="border-gray-200" />
        <Link
          href="#"
          className="block hover:text-[var(--primary-color)] transition"
        >
          Login
        </Link>
        <Link
          href="#"
          className="block bg-[var(--primary-color)] hover:bg-[#3c43a5] text-white text-center px-4 py-2 rounded-full font-semibold transition"
        >
          Signup →
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
