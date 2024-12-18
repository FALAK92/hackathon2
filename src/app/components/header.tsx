'use client';
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import ShoppingCart from "../components/cartbar";
import { FaBars } from "react-icons/fa";

function Navbar() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="flex items-center justify-between px-4 sm:px-6 md:px-12 lg:px-24 py-4 bg-white text-black h-[100px]">

      {/* Logo Section (Left aligned) */}
      <div className="flex items-center justify-start space-x-4">
        <Link href="/">
          <Image
            src="/images/header/logo.png"  // Apni logo ki image yahan den
            alt="Logo"
            width={50}      // Logo ka size adjust karein
            height={50}
          />
        </Link>
      </div>

      {/* Desktop Menu (Center aligned) */}
      <ul className="hidden md:flex space-x-[72px] flex-grow justify-center">
        <li>
          <Link href="/" className="text-black hover:text-gray-600 font-medium text-[20px]">
            Home
          </Link>
        </li>
        <li>
          <Link href="/shop" className="text-black hover:text-gray-600 font-medium text-[20px]">
            Shop
          </Link>
        </li>
        <li>
          <Link href="/blog" className="text-black hover:text-gray-600 font-medium text-[20px]">
            Blog
          </Link>
        </li>
        <li>
          <Link href="/contact" className="text-black hover:text-gray-600 font-medium text-[20px]">
            Contact
          </Link>
        </li>
      </ul>

      {/* Desktop Icons Section (Right aligned) */}
      <div className="hidden md:flex space-x-[30px] items-center">
        <Link href="/account">
          <Image
            src="/images/header/user.png"
            alt="Account"
            width={28}
            height={28}
            className="hover:text-gray-600"
          />
        </Link>
        <Image
          src="/images/header/search.png"
          alt="Search"
          width={28}
          height={28}
          className="hover:text-gray-600"
        />
        <Image
          src="/images/header/heart.png"
          alt="Heart"
          width={28}
          height={28}
          className="hover:text-gray-600"
        />
        <button onClick={toggleCart}>
          <Image
            src="/images/header/cart.png"
            alt="Cart"
            width={28}
            height={28}
            className="hover:text-gray-600"
          />
        </button>
      </div>

      {/* Mobile Menu Icon (Toggles on Mobile) */}
      <button className="block md:hidden" onClick={toggleMenu}>
        {isMenuOpen ? "X" : <FaBars />}
      </button>

      {/* Mobile Menu (Mobile version) */}
      {isMenuOpen && (
        <ul className="absolute top-[100px] left-0 w-full bg-[#FFF3E3] flex flex-col space-y-4 px-6 py-4 z-50 shadow-md md:hidden">
          <li>
            <Link href="/" className="text-black hover:text-gray-600 font-medium text-[16px]" onClick={toggleMenu}>
              Home
            </Link>
          </li>
          <li>
            <Link href="/shop" className="text-black hover:text-gray-600 font-medium text-[16px]" onClick={toggleMenu}>
              Shop
            </Link>
          </li>
          <li>
            <Link href="/blog" className="text-black hover:text-gray-600 font-medium text-[16px]" onClick={toggleMenu}>
              Blog
            </Link>
          </li>
          <li>
            <Link href="/contact" className="text-black hover:text-gray-600 font-medium text-[16px]" onClick={toggleMenu}>
              Contact
            </Link>
          </li>

          {/* Icons Section in Mobile */}
          <div className="flex space-x-[30px] justify-end">
            <Link href="/account">
              <Image
                src="/images/header/user.png"
                alt="Account"
                width={24}
                height={24}
                className="hover:text-gray-600"
              />
            </Link>
            <Image
              src="/images/header/search.png"
              alt="Search"
              width={24}
              height={24}
              className="hover:text-gray-600"
            />
            <Image
              src="/images/header/heart.png"
              alt="Heart"
              width={24}
              height={24}
              className="hover:text-gray-600"
            />
            <button onClick={toggleCart}>
              <Image
                src="/images/header/cart.png"
                alt="Cart"
                width={24}
                height={24}
                className="hover:text-gray-600"
              />
            </button>
          </div>

          {/* Shopping Cart Sidebar in Mobile */}
          <ShoppingCart isCartOpen={isCartOpen} toggleCart={toggleCart} />
        </ul>
      )}

      {/* Shopping Cart Sidebar (Desktop version) */}
      <ShoppingCart isCartOpen={isCartOpen} toggleCart={toggleCart} />
    </div>
  );
}

export default Navbar;


