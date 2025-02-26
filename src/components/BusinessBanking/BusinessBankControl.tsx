import businessBankControlData from "@/lib/constData/businessBankConreolData";
import React from "react";
import BankControlCard from "../shared/BankConreolCard";
import SectionContainer from "../ui/SectionContainer";
import SectionHeading from "../ui/SectionHeading";

const BussinessBankControl = () => {
  return (
    <SectionContainer tailwindClass="container mx-auto">
      <SectionHeading
        title="Online Business Bank Account"
        description="Reduce costs and increase your financial efficiency with a US bank account"
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
        {businessBankControlData.map((service) => (
          <BankControlCard
            key={service.id}
            icon={service.icon}
            serviceName={service.serviceName}
            serviceInfo={service.serviceInfo}
          />
        ))}
      </div>
    </SectionContainer>
  );
};

export default BussinessBankControl;
