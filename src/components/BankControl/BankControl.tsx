import React from "react";
import SectionHeading from "../ui/SectionHeading";
import Image from "next/image";
import tabEdgeBank from "@/lib/constData/tabEdgeBank";

const BankControl = () => {
  return (
    <div className=" lg:py-24  rounded-lg bg-gradient-to-r from-blue-50 to-blue-100 ">
      <div className="container mx-auto ">
        <SectionHeading title="TabEdge Bank" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
          {tabEdgeBank.map((service) => (
            <div
              key={service.id}
              className="bg-white p-6 rounded-xl shadow-md flex flex-col items-center text-center transform transition duration-300 hover:scale-105 hover:cursor-pointer"
            >
              <div className="flex justify-center w-12 h-12 bg-blue-400 rounded-full p-3 mb-4">
                <Image
                  src={service.icon}
                  width={40}
                  height={40}
                  alt={service.serviceName}
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-800">
                {service.serviceName}
              </h3>
              <p className="text-gray-600 mt-2 text-sm">
                {service.serviceInfo}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BankControl;
