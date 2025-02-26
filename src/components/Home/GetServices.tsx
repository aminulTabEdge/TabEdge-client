import React from "react";
import SectionContainer from "../ui/SectionContainer";
import SectionHeading from "../ui/SectionHeading";
import serviceSteps from "@/lib/constData/servicesSeteps";

const GetServices = () => {
  return (
    <SectionContainer backgroundColor="bg-gradient-to-r from-blue-50 to-blue-100">
      <SectionHeading
        title="How To Get Services"
        description="Follow these simple steps to create your account, get approved, and start accessing all our services seamlessly."
      />

      <div className="container mx-auto px-4 py-8">
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {serviceSteps.map((step) => (
            <div
              key={step.id}
              className="flex flex-col items-center p-6 bg-white rounded-xl shadow-md transition-all duration-300 hover:scale-105 hover:cursor-pointer hover:shadow-lg"
            >
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-gray-200">
                {step.icon}
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-800">
                {step.title}
              </h3>
              <p className="text-gray-600 text-center mt-2">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </SectionContainer>
  );
};

export default GetServices;
