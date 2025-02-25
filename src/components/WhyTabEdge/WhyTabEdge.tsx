import React from "react";
import { RiSecurePaymentLine, RiBankLine } from "react-icons/ri";
import { TbLicense } from "react-icons/tb";

const WhyTabEdge = () => {
  return (
    <div className="relative bg-[url('/background/primary-bg.png')] bg-local md:bg-fixed bg-center bg-cover h-auto min-h-[550px] flex items-center justify-center py-16 px-4">
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/30"></div>

      <div className="relative w-full max-w-7xl mx-auto text-white text-center">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold">
          Why Bank with TabEdge?
        </h1>
        <p className="mt-4 text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
          Enjoy seamless international banking with our secure, fast, and reliable services.
        </p>

        {/* Cards Container */}
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-12 mt-12 md:mt-16 w-full">
          {/* Safe and Secure */}
          <div className="flex flex-col items-center">
            <RiSecurePaymentLine className="text-5xl text-yellow-400" />
            <h2 className="text-xl sm:text-2xl md:text-3xl mt-2 font-semibold">
              Safe & Secure
            </h2>
            <p className="mt-3 text-gray-200 text-sm sm:text-base">
              Your personal and financial information are secured by ISO standards.
            </p>
          </div>
          {/* Licensed & Regulated */}
          <div className="flex flex-col items-center">
            <TbLicense className="text-5xl text-green-400" />
            <h2 className="text-xl sm:text-2xl md:text-3xl mt-2 font-semibold">
              Licensed & Regulated
            </h2>
            <p className="mt-3 text-gray-200 text-sm sm:text-base">
              Bank with confidence, knowing our operations are fully regulated.
            </p>
          </div>
          {/* Protected Funds */}
          <div className="flex flex-col items-center">
            <RiBankLine className="text-5xl text-blue-400" />
            <h2 className="text-xl sm:text-2xl md:text-3xl mt-2 font-semibold">
              Protected Funds
            </h2>
            <p className="mt-3 text-gray-200 text-sm sm:text-base">
              We are a full reserve bank. 100% of your funds are kept in the bank at all times.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyTabEdge;
