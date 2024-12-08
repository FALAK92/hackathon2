"use client";
import React, { useState } from "react";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";

const RoomSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    { src: "/images/room/room1.png", label: "1_Bed Room", description: "Inner Peace" },
    { src: "/images/room/room2.png", label: "2_Bed Room", description: "Serenity" },
    { src: "/images/room/room3.png", label: "3_Bed Room", description: "Calm Haven" },
    { src: "/images/room/room4.png", label: "4_Bed Room", description: "Tranquil Space" },
  ];

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="w-full mx-auto p-4 mt-10 bg-[#FCF8F3]">
      <div className="flex flex-col lg:flex-row justify-between items-center">
        {/* Left Side: Heading, Paragraph, and Button */}
        <div className="lg:w-1/2 w-full mb-8 lg:mb-0">
          <h2 className="text-3xl font-bold text-customBlack mb-4">
            50+ Beautiful rooms 
            <br />
            inspirations
          </h2>
          <p className="text-gray-600 mb-6">
            Discover amazing room designs and inspiration for your next home project.
            From modern minimalist rooms to elegant.
          </p>
          <button className="bg-[#B88E2F] text-white px-6 py-2 font-semibold flex items-center space-x-2">
            <span>Explore More</span>
          </button>
        </div>

        {/* Right Side: Carousel */}
        <div className="lg:w-1/2 w-full relative">
          <div className="relative w-full h-[300px] sm:h-[400px] lg:h-[500px] overflow-hidden rounded-lg">
            {/* Carousel Images */}
            <div className="absolute inset-0 flex transition-all duration-500 ease-in-out gap-4">
              {images.map((image, index) => (
                <div
                  key={index}
                  className={`relative w-full transition-all duration-500 ease-in-out ${
                    currentIndex === index ? "h-[500px] z-10" : "h-[300px] z-0"
                  }`}
                >
                  <Image
                    src={image.src}
                    alt={`Room ${index + 1}`}
                    width={1000}
                    height={500}
                    className="w-full h-full object-cover"
                  />
                  {/* Image Caption */}
                  <div className="absolute bottom-0 left-0 right-0 bg-[#d8d8d7] p-4 bg-blur flex items-center justify-between rounded-t-md">
                    <div>
                      <h3 className="font-thin text-gray-600">{image.label}</h3>
                      <p className="font-thin text-black">{image.description}</p>
                    </div>
                    <FaArrowRight className="text-[#d4d2cb] cursor-pointer border-[2px] border-[#B88E2F] bg-[#B88E2F]" />
                  </div>
                </div>
              ))}
            </div>

            {/* Carousel Radio Dots */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-4">
              {images.map((_, index) => (
                <label key={index}>
                  <input
                    type="radio"
                    name="carousel"
                    checked={currentIndex === index}
                    onChange={() => setCurrentIndex(index)}
                    className="w-4 h-4 cursor-pointer bg-transparent border-2 border-[#B88E2F] rounded-full appearance-none checked:bg-[#B88E2F] checked:border-transparent"
                  />
                </label>
              ))}
            </div>

            {/* Next and Prev Buttons */}
            <button
              onClick={handlePrev}
              className="absolute top-1/2 left-2 transform -translate-y-1/2 text-[#B88E2f] text-3xl bg-white p-2 rounded-full"
            >
              &#10094;
            </button>
            <button
              onClick={handleNext}
              className="absolute top-1/2 right-2 transform -translate-y-1/2 text-[#B88E2F] text-3xl bg-white p-2 rounded-full"
            >
              &#10095;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomSection;
    







