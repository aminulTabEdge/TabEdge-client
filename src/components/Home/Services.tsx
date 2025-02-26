import React from "react";
import SectionHeading from "../ui/SectionHeading";
import { Button } from "../ui/button";
import SectionContainer from "../ui/SectionContainer";
import servicesData from "@/lib/constData/servicesData";
import Link from "next/link";

const Services = () => {
  return (
    <SectionContainer tailwindClass="container mx-auto px-4">
      <SectionHeading title="Our Services" />

      {/* Responsive Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {servicesData.map(
          ({ id, title, description, buttonText, slug, icon }) => (
            <div
              key={id}
              className="bg-white p-6 space-y-4 shadow-lg rounded-lg flex flex-col justify-between transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:cursor-pointer"
            >
              {/* Icon */}
              <div className="flex justify-center">
                <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full">
                  {icon}
                </div>
              </div>

              {/* Content */}
              <h1 className="text-xl md:text-2xl font-bold text-center">
                {title}
              </h1>
              <p className="text-left md:text-justify text-sm md:text-base">
                {description}
              </p>

              {/* Button */}
              <div className="flex justify-center mt-auto">
                <Link href={slug}>
                  <Button className="px-6">{buttonText}</Button>
                </Link>
              </div>
            </div>
          )
        )}
      </div>
    </SectionContainer>
  );
};

export default Services;
