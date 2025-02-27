import React from "react";
import SectionHeading from "../ui/SectionHeading";
import SectionContainer from "../ui/SectionContainer";
import SideImage from "../shared/SideImage";

const paymentGatewayServices = [
  "Accept payments from around the world",
  "Support for credit cards, debit cards, and digital wallets",
  "Instant payment processing and secure transactions",
  "Seamless integration with your website or app",
];

const PaymentGateway = () => {
  return (
    <SectionContainer>
      <SectionHeading
        title="Payment Gateway"
        description=" Accept payments globally with a secure, fast, and easy-to-integrate solution."
      />
      <div className="flex flex-col lg:flex-row justify-center items-center gap-8 ">
        <div className="space-y-4">
          {paymentGatewayServices.map((service, index) => (
            <div key={index} className="flex items-center space-x-3">
              <span className="text-blue-600 font-semibold">✔</span>
              <p className="text-gray-700 lg:text-lg">{service}</p>
            </div>
          ))}
        </div>
        <SideImage
          src="/Fintech/payment-gateway.svg"
          alt="payement gateway TabEdge"
        />
      </div>
    </SectionContainer>
  );
};

export default PaymentGateway;
