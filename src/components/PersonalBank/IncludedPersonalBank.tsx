import React from "react";
import SectionContainer from "../ui/SectionContainer";
import SectionHeading from "../ui/SectionHeading";
import { HiCheckCircle } from "react-icons/hi";

const features = [
  "USD personal current account",
  "Your TabEdge Visa debit card*",
  "Institutional FX rates",
  "No account funding charges**",
  "Limitless ACH payments, TabEdge Transfers and wire transfer",
  "Digital account statements and payment receipts",
  "Extended Warranty, Price and Purchase Protection",
  "Auto Rental and Travel Accident Insurance",
];

const IncludedPersonalBank = () => {
  return (
    <SectionContainer backgroundColor="bg-white">
      <>
        <SectionHeading title="What is included?" />
        <div className="max-w-2xl mx-auto my-10 space-y-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex items-center justify-between border-b border-teal-400 pb-2"
            >
              <span className="text-gray-800 text-lg">{feature}</span>
              <HiCheckCircle className="text-teal-500 text-2xl" />
            </div>
          ))}
        </div>
      </>
    </SectionContainer>
  );
};

export default IncludedPersonalBank;
