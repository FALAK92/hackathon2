"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Banner from "../components/banner";
import Features from "../components/feature";
import React, { useState } from "react";

// FontAwesome Imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalf } from "@fortawesome/free-solid-svg-icons";

const Comparison = () => {
  const router = useRouter();
  const [selectedProduct, setSelectedProduct] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedProduct(e.target.value);
  };

  return (
    <div className="container m-auto px-4 py-4">
      {/* Banner Section */}
      <Banner label="comparison" image="/images/bg.png" logo="/images/header/logo.png" />

      {/* Product Comparison Grid */}
      <div className="grid md:grid-cols-4 xs:grid-cols-2 grid-cols-1 gap-4 p-5">
        {/* Go to Product Page */}
        <section className="sec1">
          <h1 className="lg:text-2xl sm:text-20 text-18 font-semibold">
            Go to Product<br></br>
             page for more<br></br>
              Products
          </h1>
          <Link href="/shop" className="underline mb-2 mt-3 underline-offset-8 text-[#727272]">
            View More
          </Link>
        </section>

        {/* Product 1 */}
        <section className="sec2 md:order-none xs:order-3 order-3">
          <div className="image bg-[#F9F1E7] lg:p-5 p-3">
            <Image
              src="/images/comparison/sofaset1.png"
              alt="Asgaard Sofa"
              width={500}
              height={500}
              className="w-[200px] h-[130px] object-cover lg:w-[239px] lg:h-[142px]"
            />
          </div>
          <div className="content">
            <h1 className="lg:text-20 xs:text-18 text-14 font-semibold">Asgaard Sofa</h1>
            <p className="lg:text-16 xs:text-14 text-12 font-medium">Rs. 250,000.00</p>
            <div className="flex items-center gap-2">
              <p className="lg:text-16 xs:text-14 text-12 font-medium">4.7</p>
              <div className="text-[#FFC700] flex items-center gap-1">
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStarHalf} />
              </div>
              <p className="text-[13px]">204 Review</p>
            </div>
          </div>
        </section>

        {/* Product 2 */}
        <section className="sec3">
          <div className="image bg-[#F9F1E7] p-3 lg:p-5">
            <Image
              src="/images/comparison/sofaset2.png"
              alt="Outdoor Sofa Set"
              width={500}
              height={500}
              className="w-[200px] h-[130px] object-cover lg:w-[239px] lg:h-[142px]"
            />
          </div>
          <div className="content">
            <h1 className="lg:text-20 xs:text-18 text-14 font-semibold">Outdoor Sofa Set</h1>
            <p className="lg:text-16 xs:text-14 text-12 font-medium">Rs. 224,000.00</p>
            <div className="flex items-center gap-2">
              <p className="lg:text-16 xs:text-14 text-12 font-medium">4.2</p>
              <div className="text-[#FFC700] flex items-center gap-1">
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStarHalf} />
              </div>
              <p className="text-[13px]">145 Review</p>
            </div>
          </div>
        </section>

        {/* Add Product Dropdown */}
        <section className="sec4">
          <h1 className="lg:text-2xl xs:text-18 text-2xl font-bold mb-4">Add A Product</h1>
          <select
            className="w-[80%] py-3  bg-[#B88E2F] text-white text-center text-xl"
            value={selectedProduct}
            onChange={handleChange}
          >
            <option value="" disabled>
              Choose a Product
            </option>
            <option value="sofa">Sofa</option>
            <option value="bed">Bed</option>
            <option value="chair">Chair</option>
          </select>
          {selectedProduct && (
            <p className="mt-2 text-gray-700">Selected Product: {selectedProduct}</p>
          )}
        </section>
      </div>
      <div
        className= 'grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-3 grid-cols-1 grid-rows-[auto,1fr]  border-t border-gray-400 mx-4 mt-4'
      >
        <div className="list1 sm:border-r border-0 border-gray-400 lg:p-10 p-5">
          <h1 className="lg:text-2xl text-2xl font-semibold pb-5 ">General</h1>
          <ul className="lg:text-[16px] text-[14px]  sm:space-y-5 space-y-2 ">
            <li>Sales Package</li>
            <li>Model Number</li>
            <li>Secondary Material</li>
            <li>Configuration</li>
            <li>Upholstery Material</li>
            <li>Upholstery Color</li>
          </ul>
        </div>
        <div className="list2 sm:border-r border-0 border-gray-400 lg:pt-[6rem] sm:pt-[4.8rem]  pt-[1rem] lg:px-10 px-5">
          <ul className="lg:text-[16px] text-[14px]  sm:space-y-5 space-y-2">
            <li>1 sectional sofa</li>
            <li>TFCBLIGRBL6SRHS</li>
            <li>Solid Wood</li>
            <li>L-shaped</li>
            <li>Fabric + Cotton</li>
            <li>Bright Grey & Lion</li>
          </ul>
        </div>
        <div className="list3 sm:border-r border-0 border-gray-400 lg:pt-[6rem] sm:pt-[4.8rem]  pt-[1.5rem] lg:px-10 px-5">
          <ul className="lg:text-[16px] text-[14px]  sm:space-y-5 space-y-2 ">
            <li>1 Three Seater, 2 Single Seater</li>
            <li>DTUBLIGRBL568</li>
            <li>Solid Wood</li>
            <li>L-shaped</li>
            <li>Fabric + Cotton</li>
            <li>Bright Grey & Lion</li>
          </ul>
        </div>
        <div className="list4"></div>
      </div>
      <div
        className=' grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-3 grid-cols-1 grid-rows-[auto,1fr]  mx-4'
      >
        <div className="list1 sm:border-r border-0 border-gray-400 lg:p-10 p-5">
          <h1 className="lg:text-2xl text-2xl font-semibold pb-5 ">Product</h1>
          <ul className="lg:text-[16px] text-[14px]  sm:space-y-5 space-y-2 ">
            <li>Filling Material</li>
            <li>Finish Type</li>
            <li>Adjustable Headrest</li>
            <li>Maximum Load Capacity</li>
            <li>Origin of Manufacture</li>
          </ul>
        </div>
        <div className="list2 sm:border-r border-0 border-gray-400 lg:pt-[6rem] sm:pt-[4.8rem]  pt-[1rem] lg:px-10 px-5">
          <ul className="lg:text-[16px] text-[14px] sm:space-y-5 space-y-2">
            <li>Foam</li>
            <li>Bright Grey & Lion</li>
            <li>No</li>
            <li>280 KG</li>
            <li>India</li>
          </ul>
        </div>
        <div className="list3 sm:border-r border-0 border-gray-400 lg:pt-[6rem] sm:pt-[4.8rem]  pt-[1.5rem] lg:px-10 px-5">
          <ul className="lg:text-[16px] text-[14px]  sm:space-y-5 space-y-2">
            <li>Matte</li>
            <li>Bright Grey & Lion</li>
            <li>yes</li>
            <li>300 KG</li>
            <li>India</li>
          </ul>
        </div>
        <div className="list4"></div>
      </div>
      <div
        className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-3 grid-cols-1  grid-rows-[auto,1fr]  mx-4"
      >
        <div className="list1 sm:border-r border-0 border-gray-400 lg:p-10 p-5">
          <h1 className="lg:text-2xl text-2xl font-semibold pb-5 ">Dimensions</h1>
          <ul className="lg:text-[16px] text-[14px]  sm:space-y-5 space-y-2 ">
            <li>Width</li>
            <li>Height</li>
            <li>Depth</li>
            <li>Weight</li>
            <li>Seat Height</li>
            <li>Leg Height</li>
          </ul>
        </div>
        <div className="list2 sm:border-r border-0 border-gray-400 lg:pt-[6rem] sm:pt-[4.8rem]  pt-[1rem] lg:px-10 px-5">
          <ul className="lg:text-[16px] text-[14px]  sm:space-y-5 space-y-2">
            <li>265.32 cm</li>
            <li>76 cm</li>
            <li>167.76 cm</li>
            <li>45 KG</li>
            <li>41.52 cm</li>
            <li>5.46 cm</li>
          </ul>
        </div>
        <div className="list3 sm:border-r border-0 border-gray-400 lg:pt-[6rem] sm:pt-[4.8rem]  pt-[1.5rem] lg:px-10 px-5">
          <ul className="lg:text-[16px] text-[14px]  sm:space-y-5 space-y-2">
            <li>265.32 cm</li>
            <li>76 cm</li>
            <li>167.76 cm</li>
            <li>65 KG</li>
            <li>41.52 cm</li>
            <li>5.46 cm</li>
          </ul>
        </div>
        <div className="list4"></div>
      </div>
      <div
        className= "grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-3 grid-cols-1 grid-rows-[auto,1fr]  mx-4"
      >
        <div className="list1 sm:border-r border-0 border-gray-400 lg:p-10 p-5">
          <h1 className="lg:text-2xl text-2xl font-semibold pb-5 ">Warranty</h1>
          <ul className="lg:text-[16px] text-[14px]  sm:space-y-5 space-y-2">
            <li>Warranty Summary</li>
            <li>Warranty Service </li>
            <li>Type</li>
            <li>Covered in Warranty</li>
            <li>Not Covered in Warranty</li>
            <li>Domestic Warranty</li>
          </ul>
        </div>
        <div className="list2 sm:border-r border-0 border-gray-400 lg:pt-[6rem] sm:pt-[4.8rem]  pt-[1rem] lg:px-10 px-5">
          <ul className="lg:text-[16px] md:text-[14px] sm:text-12 text-14 space-y-5">
            <li>1 Year Manufacturing Warranty</li>
            <li className="text-wrap">
              For Warranty Claims or Any Product Related Issues Please Email at
              operations@trevifurniture.com
            </li>
            <li>Warranty Against Manufacturing Defect</li>
            <li>
              The Warranty Does Not Cover Damages Due To Usage Of The Product
              Beyond Its Intended Use And Wear & Tear
            </li>{" "}
            <li>In The Natural Course Of Product Usage.</li>
            <li>1 Year</li>
          </ul>
          <button
            className="bg-[#B88E2F] text-18 text-white rounded-none px-11 py-4 mt-11 mb-8"
            onClick={() => router.push("/cart")}
          >
            Add To Cart
          </button>
        </div>
        <div className="list3 sm:border-r border-0 border-gray-400 lg:pt-[6rem] sm:pt-[4.8rem]  pt-[1rem] lg:px-10 px-5">
          <ul className="lg:text-16 md:text-14 sm:text-12 text-14 space-y-5">
            <li>1.2 Year Manufacturing Warranty</li>
            <li className="text-wrap">
              For Warranty Claims or Any Product Related Issues Please Email at
              support@xyz.com
            </li>
            <li>
              Warranty of the product is limited to manufacturing defects only.
            </li>
            <li>
              The Warranty Does Not Cover Damages Due To Usage Of The Product
              Beyond Its Intended Use And Wear & Tear
            </li>{" "}
            <li>In The Natural Course Of Product Usage.</li>
            <li>3 Months</li>
          </ul>
          <button
            className="bg-[#B88E2F] text-18 text-white rounded-none px-11 py-4 mt-5 mb-8 "
            onClick={() => router.push("/cart")}
          >
            Add To Cart
          </button>
        </div>

        <div className="list4"></div>
      </div>

      {/* Features Section */}
      <div className="bg-[#FAF3EA] mt-10">
      <Features />
      </div>
    </div>
  );
};

export default Comparison;
