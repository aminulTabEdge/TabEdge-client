import React from "react";
import SectionHeading from "../ui/SectionHeading";
import Image from "next/image";
import tabEdgeBank from "@/lib/constData/tabEdgeBank";
import SectionContainer from "../ui/SectionContainer";

const BankControl = () => {
  return (
    <SectionContainer tailwindClass="bg-gradient-to-r from-blue-50 to-blue-100">
      <div className="container mx-auto px-4">
        <SectionHeading title="TabEdge Bank" />
        
        {/* Responsive Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
          {tabEdgeBank.map((service) => (
            <div
              key={service.id}
              className="bg-white p-5 md:p-6 rounded-xl shadow-md flex flex-col items-center text-center transform transition duration-300 hover:scale-105 hover:shadow-lg hover:cursor-pointer"
            >
              {/* Icon Container */}
              <div className="flex justify-center w-14 h-14 bg-blue-400 rounded-full p-3 mb-4">
                <Image
                  src={service.icon}
                  width={40}
                  height={40}
                  alt={service.serviceName}
                  className="object-contain"
                />
              </div>

              {/* Title & Description */}
              <h3 className="text-lg md:text-xl font-semibold text-gray-800">
                {service.serviceName}
              </h3>
              <p className="text-gray-600 mt-2 text-base md:text-sm">
                {service.serviceInfo}
              </p>
            </div>
          ))}
        </div>
      </div>
    </SectionContainer>
  );
};

export default BankControl;
