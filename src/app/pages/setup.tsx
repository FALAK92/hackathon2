"use client";

import React from "react";

const SetUp = () => {
  const images = [
    "/images/setup/s1.png",
    "/images/setup/s2.png",
    "/images/setup/s3.png",
    "/images/setup/s4.png",
    "/images/setup/s5.png",
    "/images/setup/s6.png",
    "/images/setup/s7.png",
    "/images/setup/s8.png",
    "/images/setup/s9.png",
  ];

  return (
    <section className="bg-[#FCF8F3] py-10">
      <div className="max-w-6xl mx-auto px-4">
        {/* Heading Section */}
        <div className="text-center mb-10">
          <p className="text-xl font-medium text-gray-600 mb-2">
            Share your setup with
          </p>
          <h2 className="text-4xl font-bold text-black">#FuniroFurniture</h2>
        </div>

        {/* Grid Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {images.map((src, index) => (
            <div
              key={index}
              className={`relative w-full ${
                index % 2 === 0 ? "h-[400px]" : "h-[300px]"
              } rounded-lg overflow-hidden shadow-lg`}
            >
              <img
                src={src}
                alt={`Furniture ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SetUp;







