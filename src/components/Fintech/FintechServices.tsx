import fintechServices from "@/lib/constData/fintechServices";
import React from "react";
import SectionContainer from "../ui/SectionContainer";
import SectionHeading from "../ui/SectionHeading";

const FintechServices = () => {
  return (
    <SectionContainer tailwindClass="container mx-auto">
      <SectionHeading title="Our Fintech Services" />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
        {fintechServices.map((service, index) => (
          <div
            key={index}
            className="flex flex-col items-center hover:cursor-pointer p-4 border rounded-2xl shadow-lg hover:shadow-xl transition"
          >
            <service.icon size={40} className="text-blue-600" />
            <h3 className="text-lg font-semibold mt-2">{service.title}</h3>
            <p className="text-gray-600 text-center mt-1">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </SectionContainer>
  );
};

export default FintechServices;
