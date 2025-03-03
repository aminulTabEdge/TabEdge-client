import React from "react";
import SectionContainer from "../ui/SectionContainer";
import SectionHeading from "../ui/SectionHeading";
import Image from "next/image";

const features = [
  "Google and Samsung Pay compatible.",
  "Exclusive TabEdge Visa Infinite metal debit card.",
];

const PurchasingPower = () => {
  return (
    <SectionContainer
      backgroundColor="bg-white"
      className="container mx-auto py-12 px-6"
    >
      <SectionHeading
        title="Purchasing Power"
        description="Personal US accounts that give complete purchasing power. With our virtual and physical Visa Infinite debit cards, you can make instant purchases online, in-store, or with a tap of your phone."
      />

      <div className="flex flex-col lg:flex-row justify-center items-center gap-6">
        {/* Text Section */}
        <ul className="space-y-3 text-gray-700">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-2">
              <span className="text-blue-500 font-bold">•</span>
              {feature}
            </li>
          ))}
        </ul>

        {/* Image Section */}
        <div className="w-full max-w-[500px]">
          <Image
            src="/gif/payment-information.gif"
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

export default PurchasingPower;
