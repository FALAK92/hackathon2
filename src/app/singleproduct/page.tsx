"use client"
import {
  faChevronRight,
  faStar,
  faStarHalf,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Description from "./[id]/description";
import RelatedProduct from "./[id]/relatedproduct";

const SingleProduct = () => {
  const route = useRouter();

  return (
    <>
      <div className=''>
        <div className="">
          <ul className="flex w-full flex-no-center sm:gap-7 xs:gap-5 gap-3 bg-[#F9F1E7] py-5 sm:px-24 xs:px-12 xss:px-5 px-3">
            <li>
              <Link href="/" className="font-light text-gray text-16 sm:text-16">
                Home
              </Link>
            </li>
            <li>
              <FontAwesomeIcon icon={faChevronRight} width={20} height={20} />
            </li>
            <li>
              <Link href="/shop" className="font-light text-gray sm:text-16 text-14">
                Shop
              </Link>
            </li>
            <li>
              <FontAwesomeIcon icon={faChevronRight} width={10} height={10} />
            </li>
            <li className="text-gray-500">|</li>
            <li className="sm:text-16 text-14">Asgaard sofa</li>
          </ul>
        </div>
        <div className="product-view lg:py-10 py-8 lg:px-14 sm:px-8 xs:px-10 px-5 grid md:grid-cols-2 grid-cols-1 lg:gap-10 gap-5 ">
          <div className="part1 flex sm:flex-row flex-col-reverse gap-4 md:justify-self-auto justify-self-center ">
            <div className="img-col1 lg:space-y-5 sm:space-y-3 space-y-0 sm:block flex-center  flex-wrap gap-4">
              <div className="md:w-[100px] sm:w-[80px] w-[120px] md:h-[100px] sm:h-[80px] h-[120px] p-2 rounded-[10px] bg-[#F9F1E7] cursor-pointer">
                <Image
                  src="/images/singleproduct/s1.png"
                  alt="product-img"
                  width={500}
                  height={500}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="md:w-[100px] sm:w-[80px] w-[120px] md:h-[100px] sm:h-[80px] h-[120px] p-2 rounded-[10px] bg-[#F9F1E7] cursor-pointer">
                <Image
                  src="/images/singleproduct/s2.png"
                  alt="product-img"
                  width={500}
                  height={500}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="md:w-[100px] sm:w-[80px] w-[120px] md:h-[100px] sm:h-[80px] h-[120px] p-2 rounded-[10px] bg-[#F9F1E7] cursor-pointer">
                <Image
                  src="/images/singleproduct/s3.png"
                  alt="product-img"
                  width={500}
                  height={500}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="md:w-[100px] sm:w-[80px] w-[120px] md:h-[100px] sm:h-[80px] h-[120px] p-2 rounded-[10px] bg-[#F9F1E7] cursor-pointer">
                <Image
                  src="/images/singleproduct/s4.png"
                  alt="product-img"
                  width={500}
                  height={500}
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
            <div className="img-col2">
              <div className="bg-[#F9F1E7] lg:w-[425px] md:w-[350px] sm:w-[500px] w-full lg:h-[500px] md:h-[440px] xs:h-[400px] xss:h-[300px] h-[200px] cursor-pointer rounded-[10px]">
                <Image
                  src="/images/singleproduct/Asgaard sofa 3.png"
                  width={500}
                  height={500}
                  alt="img"
                  className="w-full h-full object-contain sm:object-bottom object-center"
                />
              </div>
            </div>
          </div>
          <div className="part2  sm:space-y-4 space-y-2 lg:ml-20 sm:ml-14 ml-0">
            <h1 className="lg:text-42 xs:text-38 xss:text-34 text-32 font-semibold">Asgaard sofa</h1>
            <p className="lg:text-22 sm:text-18 text-16 text-gray">Rs. 250,000.00</p>
            <div className="reviews flex-no-center sm:gap-4 gap-2">
              <div className="star-icons text-[#FFC700] flex-no-center sm:gap-2 gap-1 ">
                <FontAwesomeIcon icon={faStar} width={17} height={17} />
                <FontAwesomeIcon icon={faStar} width={17} height={17} />
                <FontAwesomeIcon icon={faStar} width={17} height={17} />
                <FontAwesomeIcon icon={faStar} width={17} height={17} />
                <FontAwesomeIcon icon={faStarHalf} width={17} height={17} />
              </div>
              <div>
                <p>|</p>
              </div>
              <div>
                <p className="sm:text-[13px] text-12 text-gray">5 Customer Review</p>
              </div>
            </div>
            <div>
              <p className="lg:text-16 sm:text-14 text-12 sm:text-left text-justify">
                Setting the bar as one of the loudest speakers in its class, the
                Kilburn is a compact, stout-hearted hero with a well-balanced
                audio which boasts a clear midrange and extended highs for a
                sound.
              </p>
            </div>
            <div className="size space-y-4">
              <p className="text-[14px] text-gray ">Size</p>
              <div>
                <ul className="flex flex-no-center gap-4">
                  <li className="p-3 bg-[#B88E2F] text-[13px] rounded-[5px] lg:w-[2.5rem] w-[2rem] lg:h-[2.5rem] h-[2rem] flex-center">
                    L
                  </li>
                  <li className="p-3 bg-[#F9F1E7] text-[13px] rounded-[5px] lg:w-[2.5rem] w-[2rem] lg:h-[2.5rem] h-[2rem] flex-center">
                    XL
                  </li>
                  <li className="p-3 bg-[#F9F1E7] text-[13px] rounded-[5px] lg:w-[2.5rem] w-[2rem] lg:h-[2.5rem] h-[2rem] flex-center">
                    XS
                  </li>
                </ul>
              </div>
            </div>
            <div className="color space-y-4">
              <p className="text-14 text-gray">Color</p>
              <div className="flex flex-no-center gap-4">
                <p className="rounded-full bg-[#816DFA] h-[25px] w-[25px]"></p>
                <p className="rounded-full bg-black h-[25px] w-[25px]"></p>
                <p className="rounded-full bg-[#B88E2F] h-[25px] w-[25px]"></p>
              </div>
            </div>
            <div className="flex buttons flex-no-center xss:flex-row lg:gap-5 gap-3 pt-4">
              <button
                className="border border-[#9F9F9F] rounded-[10px] text-18 w-full h-[64px]"
              >
                <div className="flex justify-center gap-10">
                  <p>-</p>
                  <p>1</p>
                  <p>+</p>
                </div>
              </button>
              <button
                className="border border-black h-[64px] rounded-[10px] text-18 w-full"
                
                onClick={()=> route.push("/cart") }
              >
                Add To Cart
              </button>
              <button
                className="border border-black rounded-[10px] text-18 w-full h-[64px]"
                
                onClick={()=> route.push("/productcomparison")}
              >
                + Compare
              </button>
            </div>
            <div className="border-b border-gray-400 py-3"></div>
            <div className="text-[#9F9F9F] text-16 text-gray grid grid-cols-[1fr_1fr_5fr] mt-5">
              <div className="text-14 py-4">
                <p>SKU</p>
                <p>Tags</p>
                <p>Category</p>
                <p>Share</p>
              </div>
              <div className="justify-items-center py-4">
                <p>:</p>
                <p>:</p>
                <p>:</p>
                <p>:</p>
              </div>
              <div className="text-14 py-4">
                <p>SS001</p>
                <p>Sofas</p>
                <p>Sofa, Chair, Home, Shop</p>
                <div className="flex social-icons flex-no-center gap-2">
                  <Image
                    src="/images/singleproduct/fb.png"
                    alt="social-icon"
                    width={20}
                    height={20}
                  />
                  <Image
                    src="/images/singleproduct/in.png"
                    alt="social-icon"
                    width={20}
                    height={20}
                  />
                  <Image
                    src="/images/singleproduct/tw.png"
                    alt="social-icon"
                    width={22}
                    height={22}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <Description/>
        <div className="lg:p-10 p-5">
          <RelatedProduct/>
          </div>
      </div>
 
    </>
  );
};

export default SingleProduct;
