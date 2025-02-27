import React from "react";
import SectionHeading from "../ui/SectionHeading";
import SideImage from "../shared/SideImage";
import SectionContainer from "../ui/SectionContainer";

const sellingServices = [
  "Easily list and manage your products",
  "Set custom prices and discounts",
  "Track sales and inventory in real-time",
  "Offer multiple payment options",
];

const StartSelling = () => {
  return (
    <SectionContainer>
      <SectionHeading
        title="Start Selling"
        description="Get your store up and running with seamless product management and sales tracking."
      />

      <div className="flex flex-col lg:flex-row justify-center items-center gap-8 ">
        <div className="space-y-4">
          {sellingServices.map((service, index) => (
            <div key={index} className="flex items-center space-x-3">
              <span className="text-green-600 font-semibold">✔</span>
              <p className="text-gray-700 text-lg">{service}</p>
            </div>
          ))}
        </div>

        <SideImage src="/Fintech/selling.svg" alt="Selling TabEdge" />
      </div>
    </SectionContainer>
  );
};

export default StartSelling;
