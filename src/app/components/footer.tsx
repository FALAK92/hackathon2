import React from "react";
import Link from "next/link";


function Footer() {
  const links = [
    {
      title: "Home",
      link: "/",
    },
    {
      title: "Shop",
      link: "/shop",
    },
    {
      title: "About",
      link: "/about",
    },
    {
      title: "Contact",
      link: "/contact",
    },
  ];

  const help = [
    {
      title: "Payment Options",
      link: "/",
    },
    {
      title: "Returns",
      link: "/",
    },
    {
      title: "Privacy Policies",
      link: "/",
    },
  ];

  return (
    <section className="pb-16">
      <div className="my-8">
        
      </div>

      <div className="px-4 md:px-[70px] flex justify-between w-full flex-col md:flex-row gap-8">
        <div>
          <div className="font-bold text-2xl">
            Furniro.
          </div>
          <div className="text-gray-600 mt-[50px]">
            400 University Drive Suite 200 Coral
            <br /> Gables,
            <br /> FL 33134 USA
          </div>
        </div>
        <div>
          <p className="text-customGray text-normal mb-[55px]">Links</p>
          <div className="flex flex-col gap-[46px] font-medium">
            {links.map((link, index) => (
              <Link href={link.link} key={index}>
                {link.title}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <p className="text-customGray text-normal mb-[55px]">Help</p>
          <div className="flex flex-col gap-[46px] font-medium">
            {help.map((link, index) => (
              <Link href={link.link} key={index}>
                {link.title}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <p className="text-customGray text-normal mb-[55px]">Newsletter</p>
          <div className="flex items-center gap-4">
            <input placeholder="Enter Your Email Address" />

            <div>
              <p className="font-medium underline underline-offset-[6px]">
                SUBSCRIBE
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="px-4 md:px-[70px] ">
        <div className="py-8 pt-[48px]">
          <hr></hr>
        </div>

        <p className="text-customGray">2023 furino. All rights reverved</p>
      </div>
    </section>
  );
}

export default Footer;