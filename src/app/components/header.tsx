"use client";

import React, { useState } from "react";
import Link from "next/link";
import { CiHeart, CiSearch, CiShoppingCart, CiUser } from "react-icons/ci";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <img
              src="/images/header/logo.png"
              alt="Logo"
              className="w-10 h-10"
            />
            <span className="text-2xl font-bold text-black">Furniro</span>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex space-x-6">
            <Link href="/" className="text-black hover:text-[#B88E2F]">
              Home
            </Link>
            <Link href="/shop" className="text-black hover:text-[#B88E2F]">
              Shop
            </Link>
            <Link href="/blog" className="text-black hover:text-[#B88E2F]">
              Blog
            </Link>
            <Link href="/contact" className="text-black hover:text-[#B88E2F]">
              Contact
            </Link>
          </div>

          {/* Icons */}
          <div className="hidden md:flex items-center space-x-4">
            <CiUser className="w-6 h-6 text-black cursor-pointer hover:text-[#B88E2F]" />
            <CiSearch className="w-6 h-6 text-black cursor-pointer hover:text-[#B88E2F]" />
            <CiHeart className="w-6 h-6 text-black cursor-pointer hover:text-[#B88E2F]" />
            <Link href={"/cart"}>
            <CiShoppingCart className="w-6 h-6 text-black cursor-pointer hover:text-[#B88E2F]" />
            </Link>
          </div>

          {/* Hamburger Menu Button */}
          <div className="md:hidden flex items-center">
            {menuOpen ? (
              <FiX
                className="w-6 h-6 text-black cursor-pointer"
                onClick={() => setMenuOpen(false)}
              />
            ) : (
              <FiMenu
                className="w-6 h-6 text-black cursor-pointer"
                onClick={() => setMenuOpen(true)}
              />
            )}
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#FFF3E3] shadow-lg">
          <div className="flex flex-col items-center space-y-4 py-4">
            <Link
              href="/"
              className="text-black hover:text-[#B88E2F] text-lg"
              onClick={() => setMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/shop"
              className="text-black hover:text-[#B88E2F] text-lg"
              onClick={() => setMenuOpen(false)}
            >
              Shop
            </Link>
            <Link
              href="/blog"
              className="text-black hover:text-[#B88E2F] text-lg"
              onClick={() => setMenuOpen(false)}
            >
              Blog
            </Link>
            <Link
              href="/contact"
              className="text-black hover:text-[#B88E2F] text-lg"
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </Link>
            <div className="flex items-center space-x-4">
              <CiUser className="w-6 h-6 text-black cursor-pointer hover:text-[#B88E2F]" />
              <CiSearch className="w-6 h-6 text-black cursor-pointer hover:text-[#B88E2F]" />
              <CiHeart className="w-6 h-6 text-black cursor-pointer hover:text-[#B88E2F]" />
              <Link href={"/cart"}>
              <CiShoppingCart className="w-6 h-6 text-black cursor-pointer hover:text-[#B88E2F]" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
