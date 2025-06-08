"use client";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-gray-100 shadow-md w-full">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <div className="text-xl font-semibold text-gray-900 flex items-center gap-2">
          <span className="bg-[var(--primary-color)] w-4 h-4 rounded-full" />
          Fliki
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6 text-gray-700 font-medium">
          <Link href="#">Features</Link>
          <Link href="#">Use cases</Link>
          <Link href="#">Explore</Link>
          <Link href="#">Pricing</Link>
        </div>

        {/* Auth Buttons - Desktop */}
        <div className="hidden md:flex gap-4 items-center">
          <Link href="#" className="text-gray-700 font-medium">
            Login
          </Link>
          <Link
            href="#"
            className="bg-[#4D55CC] hover:bg-[#3c43a5] text-white px-4 py-2 rounded-full font-semibold"
          >
            Signup →
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-gray-800"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden px-6 pb-4 space-y-2 bg-gray-100 text-gray-700 font-medium">
          <Link href="#">Features</Link>
          <Link href="#">Use cases</Link>
          <Link href="#">Explore</Link>
          <Link href="#">Pricing</Link>
          <hr />
          <Link href="#">Login</Link>
          <Link
            href="#"
            className="bg-[#4D55CC] hover:bg-[#3c43a5] text-white block text-center px-4 py-2 rounded-full font-semibold"
          >
            Signup →
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
