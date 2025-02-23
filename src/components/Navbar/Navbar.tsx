"use client";
import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { CiMenuFries } from "react-icons/ci";
import { MdKeyboardArrowDown } from "react-icons/md";
import { BsArrowRight } from "react-icons/bs";
import Image from "next/image";

const Navbar = () => {
  const [mobileAboutUsOpen, setMobileAboutUsOpen] = useState(false);
  const [mobileServiceOpen, setMobileServiceOpen] = useState(false);
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between w-full relative h-auto  ">
      {/* logo */}
      <Image src={"/logo.webp"} width={130} height={50} alt="TabEdge Logo" />

      {/* nav links */}
      <ul className="items-center gap-[20px] text-[1rem] text-[#424242] md:flex hidden">
        <li className="transition-all duration-500 cursor-pointer hover:text-[#3B9DF8] capitalize">
          home
        </li>

        {/* about us mega menu */}
        <li className=" transition-all duration-500 cursor-pointer hover:text-[#3B9DF8] capitalize flex items-center gap-[3px] group relative">
          about us
          <MdKeyboardArrowDown className="text-[1.5rem] text-[#424242] group-hover:text-[#3B9DF8] transition-all duration-500 group-hover:rotate-[180deg]" />
          <article className="p-6 bg-white rounded-md boxShadow w-[500px] absolute top-[40px] z-[-1] left-[-100px] group-hover:translate-y-0 translate-y-[-20px] group-hover:opacity-100 opacity-0 group-hover:z-30 transition-all duration-300">
            <div>
              <ul className="flex flex-col gap-[7px] text-[#424242]">
                <li className="flex items-center gap-[7px] hover:text-[#3B9DF8] transition-all duration-300">
                  Company Details
                </li>
                <li className="flex items-center gap-[7px] hover:text-[#3B9DF8] transition-all duration-300">
                  Company Location
                </li>
                <li className="flex items-center gap-[7px] hover:text-[#3B9DF8] transition-all duration-300">
                  Team Members
                </li>
                <li className="flex items-center gap-[7px] hover:text-[#3B9DF8] transition-all duration-300">
                  Office Tour
                </li>
              </ul>
            </div>
          </article>
        </li>

        {/* service mega menu */}
        <li className="transition-all duration-500 cursor-pointer hover:text-[#3B9DF8] capitalize group relative flex items-center gap-[3px]">
          services
          <MdKeyboardArrowDown className="text-[1.5rem] text-[#424242] group-hover:text-[#3B9DF8] transition-all duration-500 group-hover:rotate-[180deg]" />
          <article className="p-6 bg-white rounded-md w-[500px] absolute top-[40px] z-[-1] left-[-150px] group-hover:translate-y-0 translate-y-[-20px] group-hover:opacity-100 opacity-0 group-hover:z-30 transition-all duration-300">
            <div className="grid grid-cols-2">
              <ul className="flex flex-col gap-[7px] text-[#424242]">
                <li className="flex items-center gap-[7px] hover:text-[#3B9DF8] transition-all duration-300">
                  <BsArrowRight className="text-[#424242] text-[0.9rem]" />{" "}
                  Company Details
                </li>
                <li className="flex items-center gap-[7px] hover:text-[#3B9DF8] transition-all duration-300">
                  <BsArrowRight className="text-[#424242] text-[0.9rem]" />
                  Company Location
                </li>
                <li className="flex items-center gap-[7px] hover:text-[#3B9DF8] transition-all duration-300">
                  <BsArrowRight className="text-[#424242] text-[0.9rem]" />
                  Team Members
                </li>
                <li className="flex items-center gap-[7px] hover:text-[#3B9DF8] transition-all duration-300">
                  <BsArrowRight className="text-[#424242] text-[0.9rem]" />{" "}
                  Office Tour
                </li>
              </ul>
            </div>
          </article>
        </li>
      </ul>

      <div className="flex items-center gap-[10px]">
        <button>Account</button>

        <CiMenuFries
          className="text-[1.6rem] text-[#424242]c cursor-pointer md:hidden flex"
          onClick={() => setMobileSidebarOpen(!mobileSidebarOpen)}
        />
      </div>

      {/* mobile sidebar */}
      <aside
        className={` ${
          mobileSidebarOpen
            ? "translate-x-0 opacity-100 z-20"
            : "translate-x-[200px] opacity-0 z-[-1]"
        } md:hidden bg-white boxShadow p-4 text-center absolute top-[55px] right-0 sm:w-[300px] w-full rounded-md transition-all duration-300`}
      >
        <ul className="items-start gap-[20px] text-[1rem] text-gray-600 flex flex-col">
          <li className="hover:text-[#3B9DF8] group transition-all duration-500 cursor-pointer capitalize flex items-center gap-[10px]">
            Home
          </li>

          <li
            onClick={() => setMobileAboutUsOpen(!mobileAboutUsOpen)}
            className="hover:text-[#3B9DF8] group transition-all duration-500 cursor-pointer capitalize flex items-center gap-[10px]"
          >
            About Us
            <IoIosArrowDown
              className={`${
                mobileAboutUsOpen ? "rotate-[180deg]" : "rotate-0"
              } text-gray-600 group-hover:text-[#3B9DF8] transition-all duration-300`}
            />
          </li>

          {/* about us mega menu */}
          <div
            className={`${
              mobileAboutUsOpen ? "block" : "hidden"
            } group font-[500] ml-6`}
          >
            <ul className="flex flex-col gap-[7px] text-[#424242]">
              <li className="flex items-center gap-[7px] hover:text-[#3B9DF8] transition-all duration-300">
                <BsArrowRight className="text-[#424242] text-[0.9rem]" />{" "}
                Company Details
              </li>
              <li className="flex items-center gap-[7px] hover:text-[#3B9DF8] transition-all duration-300">
             
                Company Location
              </li>
              <li className="flex items-center gap-[7px] hover:text-[#3B9DF8] transition-all duration-300">
              
                Team Members
              </li>
              <li className="flex items-center gap-[7px] hover:text-[#3B9DF8] transition-all duration-300">
             Office
                Tour
              </li>
            </ul>
          </div>

          <li
            onClick={() => setMobileServiceOpen(!mobileServiceOpen)}
            className="hover:text-[#3B9DF8] group transition-all duration-500 cursor-pointer capitalize flex items-center gap-[10px]"
          >
            Service
            <IoIosArrowDown
              className={`${
                mobileServiceOpen ? "rotate-0" : "rotate-[180deg]"
              } text-gray-600 group-hover:text-[#3B9DF8] transition-all duration-300`}
            />
          </li>

          {/* service mega menu */}
          <div
            className={`${
              mobileServiceOpen ? "hidden" : "block"
            } font-[500] ml-6`}
          >
            <ul className="flex flex-col gap-[7px] text-[#424242]">
              <li className="flex items-center gap-[7px] hover:text-[#3B9DF8] transition-all duration-300">
                Company Details
              </li>
              <li className="flex items-center gap-[7px] hover:text-[#3B9DF8] transition-all duration-300">
                Company Location
              </li>
              <li className="flex items-center gap-[7px] hover:text-[#3B9DF8] transition-all duration-300">
                Team Members
              </li>
              <li className="flex items-center gap-[7px] hover:text-[#3B9DF8] transition-all duration-300">
                Office Tour
              </li>
            </ul>
          </div>
        </ul>
      </aside>
    </nav>
  );
};

export default Navbar;
