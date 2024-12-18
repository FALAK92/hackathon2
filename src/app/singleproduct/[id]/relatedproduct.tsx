import Image from "next/image";
import React from "react";
import { FaShareAlt, FaExchangeAlt, FaHeart } from "react-icons/fa";
import { useState } from "react";
import { products } from "@/app/lib/constant";

function RelatedProduct() {

//   interface Product {
//     id: string;
//     imageUrl: string;
//     title: string;
//     description: string;
//     price: string;
//     otherPrice: string;
//     type: string;
//     typeValue: string;
//   }

//   const products:Product[]=[
//     {
//         id: "10",
//         imageUrl: "/images/constant/p1.png",
//         title: "Syltherine",
//         description: "Stylish cafe chair",
//         price: "27000",
//         otherPrice: "3.500.000",
//         type: "DISCOUNTED",
//         typeValue: "-30%",
//       },
//       {
//         id: "20",
//         imageUrl: "/images/constant/p2.png",
//         title: "Leviosa V3",
//         description: "Stylish cafe chair",
//         price: "27000",
//         otherPrice: "3.500.000",
//         type: "DISCOUNTED",
//         typeValue: "-30%",
//       },
//       {
//         id: "30",
//         imageUrl: "/images/constant/p3.png",
//         title: "Lolito Bilo",
//         description: "Luxury big sofa",
//         price: "500",
//         otherPrice: "14.000.000",
//         type: "DISCOUNTED",
//         typeValue: "-50%",
//       },
//       {
//         id: "40",
//         imageUrl: "/images/constant/p4.png",
//         title: "Respira Xen",
//         description: "Outdoor bar table and stool",
//         price: "7000",
//         otherPrice: "",
//         type: "NEW",
//         typeValue: "New",
//       },
//   ];
  const [showAll, setShowAll] = useState(false);

  const displayedProducts = showAll ? products : products.slice(0, 4);

  return (
    <div className="max-w-6xl mx-auto p-4">
      <h1 className="text-3xl font-semibold text-center text-customBlack mb-8 mt-6">
        Related Products
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {displayedProducts.map((products) => (
          <div
            key={products.id}
            className="relative rounded-lg overflow-hidden shadow-lg cursor-pointer transition-transform transform hover:scale-105 duration-300"
          >
            {/* Dynamic Circle for typeValue */}
            <div className="absolute top-3 right-3 z-10">
              <span
                className={`flex items-center justify-center w-12 h-12 rounded-full text-white text-sm font-bold transition-colors duration-300 ${
                  products.type === "NEW"
                    ? "bg-[#00cec8]"
                    : products.type === "DISCOUNTED"
                    ? "bg-[#FF5555]"  
                    : "bg-transparent"
                }`}
              >
                {products.type === "NEW" ? "New" : products.typeValue}
              </span>
            </div>

            {/* Product Image */}
            <div className="relative">
              <Image
                src={products.imageUrl}
                alt={products.title}
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
                {products.title}
              </p>
              <div className="flex items-center space-x-2">
                <p className="text-[#B88E2F] text-xl font-semibold">
                  {products.price}
                </p>
                {products.otherPrice && (
                  <p className="text-gray-400 line-through">
                    {products.otherPrice}
                  </p>
                )}
              </div>
              <p className="text-gray-600 mt-2">{products.description}</p>
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
}
export default RelatedProduct;
