

import React from "react";

const Hero: React.FC = () => {
  return (
    <section
      className="flex flex-col justify-center items-end w-full h-[calc(100vh-73px)] bg-no-repeat bg-cover bg-bottom"
      style={{
        backgroundImage: `url('/images/hero/hero.png')`, // Replace with your image path
      }}
    >
      <div className="bg-[#FFF3E3] mx-4 md:mr-[56px] md:ml-0 inline-block rounded-[10px] px-4 md:px-[39px] pt-[37px] md:pt-[62px] pb-[37px]">
        {/* Static Text */}
        <p className="text-black font-semibold text-2xl">
          New Arrival
        </p>
        <p className="text-[#B88E2F] py-4 md:py-2 text-3xl leading-tight md:text-4xl font-bold">
          Discover Our <br /> New Collection
        </p>
        <p className="text-gray-600 text-sm md:text-base mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />
          Ut elit tellus, luctus nec ullamcorper mattis.
        </p>
        <button className="bg-[#B88E2F] text-white font-normal px-7 py-2 hover:bg-opacity-90 transition ">
          BUY NOW
        </button>
      </div>
    </section>
  );
};

export default Hero;

