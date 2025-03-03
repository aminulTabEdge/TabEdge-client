import React from "react";
import SectionHeading from "../ui/SectionHeading";
import SideImage from "../shared/SideImage";
import SectionContainer from "../ui/SectionContainer";

const sendMoneyServices = [
  "Send money instantly to anyone",
  "Secure transactions with end-to-end encryption",
  "Support for multiple currencies",
  "Track your payments and transaction history",
];

const SendMoney = () => {
  return (
    <SectionContainer backgroundColor="bg-white" className="container mx-auto">
      <SectionHeading
        title="Send Money"
        description=" Send money securely and instantly, wherever you are."
      />
      <div className="flex flex-col lg:flex-row justify-center items-center gap-8 ">
        <SideImage src="/Fintech/send-money.svg" alt="Send Money TabEdge" />
        <div className="space-y-4">
          {sendMoneyServices.map((service, index) => (
            <div key={index} className="flex items-center space-x-3">
              <span className="text-blue-600 font-semibold">✔</span>
              <p className="text-gray-700 lg:text-lg">{service}</p>
            </div>
          ))}
        </div>
      </div>
    </SectionContainer>
  );
};

export default SendMoney;
