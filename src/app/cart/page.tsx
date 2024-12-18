"use client"
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Link from "next/link";  // Link import karna zaroori hai
import Banner from "../components/banner";
import { FaTrash } from 'react-icons/fa'; // FaTrash icon import
import Features from "../components/feature";


const Cart = () => {
  const router = useRouter();

  return (
    <div className="container m-auto px-4 py-4">
      {/* Banner Section */}
      <div>
        <Banner label="Cart" image="/bg.png" logo="/images/header/logo.png" />
      </div>

      {/* Cart Content */}
      <div className="container mx-auto py-10 px-5">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items Section */}
          <div className="part sm:col-span-2 col-span-1">
            <div className="cart-nav sm:mb-10 mb-5">
              <ul className="bg-[#F9F1E7] grid sm:grid-cols-6 xs:grid-cols-5 xss:grid-cols-4 grid-cols-3 items-center sm:pl-0 pl-5 py-3">
                <li className="sm:col-start-2 col-start-1">
                  <Link href="/" className="lg:text-16 sm:text-14 text-12 font-medium">
                    Product
                  </Link>
                </li>
                <li >
                  <Link href="/" className="lg:text-16 sm:text-14 text-12 font-medium">
                    Price
                  </Link>
                </li>
                <li>
                  <Link href="/" className="lg:text-16 sm:text-14 text-12 font-medium">
                    Quantity
                  </Link>
                </li>
                <li>
                  <Link href="/" className="lg:text-16 sm:text-14 text-12 font-medium">
                    Subtotal
                  </Link>
                </li>
              </ul>
            </div>

            {/* Example Cart Item */}
            <div className="bg-white shadow-md rounded-lg p-5 mb-5 flex flex-wrap sm:flex-nowrap items-center">
              <Image
                src="/images/cart/Asgaard sofa.png"
                alt="Product Image"
                width={100}
                height={100}
                className="rounded-lg object-cover"
              />

              <div className="flex-grow ml-5">
                <h3 className="text-lg font-medium">Asgaard Sofa</h3>
                <p className="text-gray-600">Rs. 250,000.00</p>
              </div>

              <div className="flex items-center space-x-3 mt-3 sm:mt-0">
                <button className="border border-gray-300 px-3 py-1">-</button>
                <span className="font-medium">1</span>
                <button className="border border-gray-300 px-3 py-1">+</button>
              </div>

              <p className="ml-5 font-medium">Rs. 250,000.00</p>
              <button className="ml-5 text-[#B88E2F]">
                <FaTrash className="text-xl" /> {/* Trash Icon */}
              </button>
            </div>
          </div>

          {/* Cart Summary Section */}
          <div className="bg-[#F9F1E7] shadow-md p-6">
            <h2 className="text-xl font-bold mb-6">Cart Totals</h2>

            <div className="flex justify-between mb-4">
              <span className="font-medium">Subtotal:</span>
              <span>Rs. 250,000.00</span>
            </div>

            <div className="flex justify-between mb-4">
              <span className="font-medium">Total:</span>
              <span className="text-lg font-bold">Rs. 250,000.00</span>
            </div>
            <div className="flex justify-center items-center ">

              <button
                className=" bg-transparent text-black border border-black px-7 py-3"
                onClick={() => router.push("/checkout")}
              >
                Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#F9F1E7]">
        <Features />
      </div>
    </div>
  );
};

export default Cart;





