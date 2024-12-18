import Image from "next/image";
import Link from "next/link";
import React from "react";

interface ShoppingCartProps {
  isCartOpen: boolean;
  toggleCart: () => void;
}

const ShoppingCart: React.FC<ShoppingCartProps> = ({ isCartOpen, toggleCart }) => {
  return (
    <div
      className={`fixed top-0 right-0 w-[85%] md:w-[400px] h-auto px-4 md:px-7 bg-white shadow-lg transform ${
        isCartOpen ? "translate-x-0" : "translate-x-full"
      } transition-transform duration-300 z-50`}
    >
      <div className="flex justify-between items-center py-3 md:py-6">
        <h2 className="text-[18px] md:text-[24px] font-semibold">Shopping Cart</h2>
        <button onClick={toggleCart} className="text-gray-500 hover:text-black">
          <Image
            src="/sidetoggle.png"
            alt=""
            width={20}
            height={20}
            className="md:h-[20px] md:w-[20px] h-[14px] w-[14px]"
          />
        </button>
      </div>
      <div className="border-b-2 w-[80%]"></div>
      <div className="flex flex-col gap-8">
        {/* First Product */}
        <div className="mt-8 md:mt-12">
          <div className="flex items-center gap-3 md:gap-8 pb-4">
            <Image
              src="/images/cart/Asgaard sofa.png"
              alt="Asgaard Sofa"
              width={300}
              height={300}
              className="md:w-[108px] md:h-[106px] h-[80px] w-[80px] border-none rounded-lg bg-[#FFF3E3] object-cover"
            />
            <div>
              <p className="font-medium text-[14px] md:text-[18px]">Asgaard Sofa</p>
              <p className="text-black mt-2 text-[12px] md:text-[16px]">
                1 <span className="px-3">X</span>
                <span className="text-[#B88E2F] font-medium">Rs. 260,000.00</span>
              </p>
            </div>
            <Image
              src="/cross.png"
              alt="Remove"
              width={20}
              height={20}
              className="relative md:left-1 cursor-pointer"
            />
          </div>
        </div>

        {/* Second Product */}
        <div className="mt-4">
          <div className="flex items-center gap-3 md:gap-8 pb-4">
            <Image
              src="/images/cart/Elegance.png"
              alt="Casaliving Wood"
              width={300}
              height={300}
              className="md:w-[108px] md:h-[106px] h-[80px] w-[80px] border-none rounded-lg bg-[#FFF3E3] object-cover"
            />
            <div>
              <p className="font-medium text-[14px] md:text-[18px]">Casaliving Wood</p>
              <p className="text-black mt-2 text-[12px] md:text-[16px]">
                1 <span className="px-3">X</span>
                <span className="text-[#B88E2F] font-medium">Rs. 180,000.00</span>
              </p>
            </div>
            <Image
              src="/cross.png"
              alt="Remove"
              width={20}
              height={20}
              className="relative md:left-1 cursor-pointer"
            />
          </div>
        </div>

        {/* Subtotal Section */}
        <div className="p-4 mt-4">
          <div className="flex justify-between">
            <p className="text-[14px] md:text-[16px]">Subtotal</p>
            <p className="text-[#B88E2F] text-[14px] md:text-[16px] font-semibold">
              Rs. 440,000.00
            </p>
          </div>
          <div className="border-b-2 my-5"></div>

          {/* Buttons */}
          <div className="flex justify-center items-center gap-2 md:gap-4">
            <Link href="/cart">
              <button className="w-full max-w-[120px] text-center px-5 py-1 border border-black rounded-full hover:bg-[#B88E2F] hover:text-white duration-300">
                Cart
              </button>
            </Link>
            <Link href="/checkout">
              <button className="w-full max-w-[120px] text-center px-5 py-1 border border-black rounded-full hover:bg-[#B88E2F] hover:text-white duration-300">
                Checkout
              </button>
            </Link>
            <Link href="/comparison">
              <button className="w-full max-w-[120px] text-center px-5 py-1 border border-black rounded-full hover:bg-[#B88E2F] hover:text-white duration-300">
                Comparison
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;

