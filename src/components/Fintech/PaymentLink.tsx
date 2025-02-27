import React from "react";
import SectionHeading from "../ui/SectionHeading";
import SectionContainer from "../ui/SectionContainer";
import SideImage from "../shared/SideImage";

const paymentLinkServices = [
  "Generate one-time or recurring payment links",
  "Share links via email, SMS, or social media",
  "Track payments and transaction status",
  "Secure and instant online payments",
];

const PaymentLink = () => {
  return (
    <SectionContainer tailwindClass="container mx-auto">
      <SectionHeading
        title="Payment Link"
        description="Easily create and share payment links for seamless transactions."
      />

      {/* Use flex-row for large screens and flex-col for small screens */}
      <div className="flex flex-col lg:flex-row items-center justify-center gap-6">
        {/* Image section */}
        <SideImage src="/Fintech/payment-link.svg" alt="Payement Fintech" />

        {/* Services list */}
        <div className=" space-y-4">
          {paymentLinkServices.map((service, index) => (
            <div key={index} className="flex items-center space-x-3">
              <span className="text-green-600 font-semibold">✔</span>
              <p className="text-gray-700 text-lg">{service}</p>
            </div>
          ))}
        </div>
      </div>
    </SectionContainer>
  );
};

export default PaymentLink;
