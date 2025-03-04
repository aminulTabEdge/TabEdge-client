import React from "react";
import SectionHeading from "../ui/SectionHeading";
import SectionContainer from "../ui/SectionContainer";
import SideImage from "../shared/SideImage";

const invoiceServices = [
  "Create professional invoices in minutes",
  "Automate invoice reminders for seamless transactions",
  "Track payments and monitor real-time status",
  "Ensure secure and instant online payments",
];

const Invoice = () => {
  return (
    <SectionContainer backgroundColor="bg-white" className="container mx-auto">
      <SectionHeading
        title="Invoice Management"
        description="Streamline your billing process with our powerful invoicing system."
      />
      <div className="flex flex-col lg:flex-row justify-center items-center gap-8 ">
        <div className="space-y-4">
          {invoiceServices.map((service, index) => (
            <div key={index} className="flex items-center space-x-3">
              <span className="text-blue-600 font-semibold">✔</span>
              <p className="text-gray-700 lg:text-lg">{service}</p>
            </div>
          ))}
        </div>
        <SideImage src="/assets/fintech/invoice.svg" alt="Invoice TabEdge" />
      </div>
    </SectionContainer>
  );
};

export default Invoice;
