import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import Image from "next/image";

interface BannerInterface {
    image: string;
    label: string;
    logo: string; // Added logo property
}

function Banner(props: BannerInterface) {
  return (
    <div 
      style={{ '--image-url': `url(${props.image})` } as React.CSSProperties} 
      className="bg-[image:var(--image-url)] w-full h-[316px] mb-8 flex flex-col justify-center items-center bg-cover bg-gray-700"
    >
      {/* Logo Section */}
      <div className="flex flex-center mb-4">
        
      </div>

      {/* Label and Navigation */}
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="flex justify-center w-full ">
        <Image 
          src={props.logo} 
          alt="Logo" 
          width={80} 
          height={80} 
          className="object-contain "
        />
        </div>
        <div className="flex justify-center w-full text-5xl">
          {props.label}
          
        </div>
        <nav className="flex justify-center items-center space-x-4 mt-4">
          <a href="#" className="text-black-600">Home</a>
          <IoIosArrowForward />
          <a href="#" className="text-black-300">{props.label}</a>
        </nav>
      </div>
    </div>
  );
}

export default Banner;
