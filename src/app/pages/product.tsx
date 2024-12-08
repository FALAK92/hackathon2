"use client";
import React, { useState } from "react";
import Image from "next/image";
import { products } from "../lib/constant";
import { FaShareAlt, FaExchangeAlt, FaHeart } from "react-icons/fa";

const OurProduct = () => {
  const [showAll, setShowAll] = useState(false);

  const displayedProducts = showAll ? products : products.slice(0, 8);

  return (
    <div className="max-w-6xl mx-auto p-4">
      <h1 className="text-3xl font-semibold text-center text-customBlack mb-8 mt-6">
        Our Products
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {displayedProducts.map((product) => (
          <div
            key={product.id}
            className="relative rounded-lg overflow-hidden shadow-lg cursor-pointer transition-transform transform hover:scale-105 duration-300"
          >
            {/* Dynamic Circle for typeValue */}
            <div className="absolute top-3 right-3 z-10">
              <span
                className={`flex items-center justify-center w-12 h-12 rounded-full text-white text-sm font-bold transition-colors duration-300 ${
                  product.type === "NEW"
                    ? "bg-[#00cec8]"
                    : product.type === "DISCOUNTED"
                    ? "bg-[#FF5555]"  
                    : "bg-transparent"
                }`}
              >
                {product.type === "NEW" ? "New" : product.typeValue}
              </span>
            </div>

            {/* Product Image */}
            <div className="relative">
              <Image
                src={product.imageUrl}
                alt={product.title}
                width={400}
                height={300}
                className="w-full h-[300px] object-cover"
              />
              <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300">
                <div className="text-center">
                  <button className="bg-white text-[#B88E2F] px-6 py-2 rounded-md font-semibold mb-4">
                    Add to Cart
                  </button>
                  <div className="flex justify-center space-x-4">
                    <button className="text-white flex items-center space-x-1">
                      <FaShareAlt className="text-lg" />
                      <span>Share</span>
                    </button>
                    <button className="text-white flex items-center space-x-1">
                      <FaExchangeAlt className="text-lg" />
                      <span>Compare</span>
                    </button>
                    <button className="text-white flex items-center space-x-1">
                      <FaHeart className="text-lg" />
                      <span>Like</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Product Details */}
            <div className="p-4">
              <p className="text-black text-lg font-semibold">
                {product.title}
              </p>
              <div className="flex items-center space-x-2">
                <p className="text-[#B88E2F] text-xl font-semibold">
                  {product.price}
                </p>
                {product.otherPrice && (
                  <p className="text-gray-400 line-through">
                    {product.otherPrice}
                  </p>
                )}
              </div>
              <p className="text-gray-600 mt-2">{product.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Show More Button */}
      {products.length > 8 && !showAll && (
        <div className="text-center mt-8">
          <button
            onClick={() => setShowAll(true)}
            className="bg-[#B88E2F] text-white px-6 py-2  font-semibold"
          >
            Show More
          </button>
        </div>
      )}
      {showAll && (
        <div className="text-center mt-3">
          <button
            onClick={() => setShowAll(false)}
            className="bg-[#B88E2F] text-white px-6 py-2 font-semibold"
          >
            Show Less
          </button>
        </div>
      )}
    </div>
  );
};

export default OurProduct;



