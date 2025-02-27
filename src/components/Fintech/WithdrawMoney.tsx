import React from "react";
import SectionHeading from "../ui/SectionHeading";
import SectionContainer from "../ui/SectionContainer";
import SideImage from "../shared/SideImage";

const withdrawMoneyServices = [
  "Withdraw funds to your linked account instantly",
  "Choose from multiple withdrawal options",
  "Track your withdrawal status in real-time",
  "Secure transactions with advanced encryption",
];

const WithdrawMoney = () => {
  return (
    <SectionContainer
      backgroundColor="bg-white"
      tailwindClass="container mx-auto"
    >
      <SectionHeading
        title="Withdraw Money"
        description=" Withdraw your funds quickly, securely, and hassle-free."
      />
      <div className="flex flex-col lg:flex-row justify-center items-center gap-8 ">
        <SideImage
          src="/Fintech/widthraw-money.svg"
          alt="Widthraw Money Fintech"
        />
        <div className=" space-y-4">
          {withdrawMoneyServices.map((service, index) => (
            <div key={index} className="flex items-center space-x-3">
              <span className="text-teal-600 font-semibold">✔</span>
              <p className="text-gray-700 text-lg">{service}</p>
            </div>
          ))}
        </div>
      </div>
    </SectionContainer>
  );
};

export default WithdrawMoney;
