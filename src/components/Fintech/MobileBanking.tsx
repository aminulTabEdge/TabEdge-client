import React from "react";
import SectionContainer from "../ui/SectionContainer";
import SectionHeading from "../ui/SectionHeading";
import SideImage from "../shared/SideImage";

const mobileBankingServices = [
  "Access your account anytime, anywhere",
  "Check balances, transfer funds, and pay bills",
  "Real-time notifications for all transactions",
  "Secure login with multi-factor authentication",
];

const MobileBanking = () => {
  return (
    <SectionContainer tailwindClass="container mx-auto">
      <SectionHeading
        title=" Mobile Banking"
        description="  Manage your finances on-the-go with secure and convenient mobile
          banking."
      />
      <div className="flex flex-col lg:flex-row justify-center items-center gap-8 ">
        <div className="mt-6 space-y-4">
          {mobileBankingServices.map((service, index) => (
            <div key={index} className="flex items-center space-x-3">
              <span className="text-indigo-600 font-semibold">✔</span>
              <p className="text-gray-700 text-lg">{service}</p>
            </div>
          ))}
        </div>
        <SideImage
          src="/Fintech/mobile-banking.svg"
          alt="Mobile Banking Tabedge"
        />
      </div>
    </SectionContainer>
  );
};

export default MobileBanking;
