import React from "react";
import SectionContainer from "../ui/SectionContainer";
import SectionHeading from "../ui/SectionHeading";
import SideImage from "../shared/SideImage";

const paymentRequestServices = [
  "Easily request payments from customers",
  "Set due dates and automatic reminders",
  "Accept multiple payment methods",
  "Track payment status in real-time",
];

const PaymentRequest = () => {
  return (
    <SectionContainer
      backgroundColor="bg-white"
      tailwindClass="container mx-auto"
    >
      <SectionHeading
        title="Payment Request"
        description="Request payments seamlessly with automated reminders and tracking."
      />
      <div className="flex flex-col lg:flex-row justify-center items-center gap-8 ">
        <div className="space-y-4">
          {paymentRequestServices.map((service, index) => (
            <div key={index} className="flex items-center space-x-3">
              <span className="text-purple-600 font-semibold">✔</span>
              <p className="text-gray-700 lg:text-lg">{service}</p>
            </div>
          ))}
        </div>
        <SideImage
          src="/Fintech/payment-request.svg"
          alt="Payment Information TabEdge"
        />
      </div>
    </SectionContainer>
  );
};

export default PaymentRequest;
