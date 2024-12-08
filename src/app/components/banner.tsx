import React from "react";
import { IoIosArrowForward } from "react-icons/io";


interface bannerInterface{
    image:string,
    label:string
}

function Banner(props:bannerInterface) {

  return (
    <div style={{'--image-url':`url(${props.image})`} as React.CSSProperties} 
    className="bg-[image:var(--image-url)] w-full h-[316px] mb-8 flex justify-center bg-cover">
        <div className="flex flex-col justify-center w-full h-full">
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