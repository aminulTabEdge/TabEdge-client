import React from "react";
import { RiSecurePaymentLine, RiBankLine } from "react-icons/ri";
import { TbLicense } from "react-icons/tb";

const WhyTabEdge = () => {
  return (
    <div className="relative bg-[url('/background/primary-bg.png')] bg-fixed bg-center bg-cover h-[550px] flex items-center justify-center py-24">
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/20"></div>

      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  w-full max-w-7xl mx-auto text-white text-center px-6">
        <h1 className="text-4xl font-bold">Why Bank with TabEdge?</h1>
        <p className="mt-4 text-lg">
          Enjoy seamless international banking with our secure, fast, and
          reliable services.
        </p>

        {/* Cards Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mt-16 w-full">
          {/* Safe and secure */}
          <div className="flex flex-col items-center">
            <RiSecurePaymentLine className="text-5xl text-yellow-400" />
            <h2 className="text-3xl mt-2">Safe & Secure</h2>
            <p className="mt-3 text-gray-200">
              Your personal and financial information are secured by ISO
              standards.
            </p>
          </div>
          {/* Licensed & Regulated */}
          <div className="flex flex-col items-center">
            <TbLicense className="text-5xl text-green-400" />
            <h2 className="text-3xl mt-2">Licensed & Regulated</h2>
            <p className="mt-3 text-gray-200">
              Bank with confidence, knowing our operations are fully regulated.
            </p>
          </div>
          {/* Protected Funds */}
          <div className="flex flex-col items-center">
            <RiBankLine className="text-5xl text-blue-400" />
            <h2 className="text-3xl mt-2">Protected Funds</h2>
            <p className="mt-3 text-gray-200">
              We are a full reserve bank. 100% of your funds are kept in the
              bank at all times.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyTabEdge;
