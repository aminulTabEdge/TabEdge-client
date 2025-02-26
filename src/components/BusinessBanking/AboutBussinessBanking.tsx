import React from "react";
import SectionContainer from "../ui/SectionContainer";
import SectionHeading from "../ui/SectionHeading";
import Image from "next/image";

const features = [
  "Reduce costs and protect your profits with USD stability..",
  "Our business banking accounts are designed for small or single director businesses that need an international edge.",
  "Enjoy the benefits of U.S. banking, without needing to be a U.S. registered company, citizen or resident.",
];

const AboutBussinessBanking = () => {
  return (
    <SectionContainer
      backgroundColor="bg-white"
      tailwindClass="container mx-auto py-12 px-6"
    >
      <SectionHeading
        title="Business Banking Solutions"
        description="Reduce costs, protect your profits with USD stability, and enjoy the benefits of U.S. banking—no need for U.S. registration, citizenship, or residency."
      />

      <div className="flex flex-col lg:flex-row justify-center items-center gap-6">
        {/* Text Section */}
        <ul className="space-y-3 text-gray-700">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-2 max-w-lg text-justify">
              <span className="text-blue-500 font-bold">•</span>
              {feature}
            </li>
          ))}
        </ul>

        {/* Image Section */}
        <div className="w-full max-w-[500px]">
          <Image
            src="/gif/cash-payment.gif"
            width={500}
            height={500}
            alt="Payment Information TabEdge"
            className="w-full h-auto"
          />
        </div>
      </div>
    </SectionContainer>
  );
};

export default AboutBussinessBanking;
