import React from "react";
import SectionHeading from "../ui/SectionHeading";
import tabEdgeBank from "@/lib/constData/tabEdgeBank";
import SectionContainer from "../ui/SectionContainer";
import BankControlCard from "./BankConreolCard";

const BankControl = () => {
  return (
    <SectionContainer tailwindClass="bg-gradient-to-r from-blue-50 to-blue-100">
      <div className="container mx-auto px-4">
        <SectionHeading title="TabEdge Bank" />

        {/* Responsive Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
          {tabEdgeBank.map((service) => (
            <BankControlCard
              key={service.id}
              icon={service.icon}
              serviceName={service.serviceName}
              serviceInfo={service.serviceInfo}
            />
          ))}
        </div>
      </div>
    </SectionContainer>
  );
};

export default BankControl;
