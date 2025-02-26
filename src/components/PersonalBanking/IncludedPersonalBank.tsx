import React from "react";
import SectionContainer from "../ui/SectionContainer";
import SectionHeading from "../ui/SectionHeading";
import IncludedCard from "../shared/IncludedCard";

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
            <IncludedCard key={index} feature={feature} />
          ))}
        </div>
      </>
    </SectionContainer>
  );
};

export default IncludedPersonalBank;
