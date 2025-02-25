import React from "react";
import {
  FaDollarSign,
  FaCreditCard,
  FaExchangeAlt,
  FaMoneyCheckAlt,
  FaFileInvoice,
  FaShieldAlt,
  FaCar,
} from "react-icons/fa";
import SectionHeading from "../ui/SectionHeading";
import SectionContainer from "../ui/SectionContainer";

const includedFeatures = [
  { id: 1, icon: FaDollarSign, text: "USD Personal Current Account" },
  { id: 2, icon: FaCreditCard, text: "Your TabEdge Visa Debit Card*" },
  { id: 3, icon: FaExchangeAlt, text: "Institutional FX Rates" },
  { id: 4, icon: FaMoneyCheckAlt, text: "No Account Funding Charges**" },
  { id: 5, icon: FaFileInvoice, text: "Limitless ACH & Wire Transfers" },
  { id: 6, icon: FaFileInvoice, text: "Digital Statements & Payment Receipts" },
  { id: 7, icon: FaShieldAlt, text: "Extended Warranty & Purchase Protection" },
  { id: 8, icon: FaCar, text: "Auto Rental & Travel Accident Insurance" },
];

const IncludedTabEdgeAccount = () => {
  return (
    <SectionContainer backgroundColor="bg-white">
      <div className="container mx-auto">
        <SectionHeading title="Included TabEdge Account" />

        <ul className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {includedFeatures.map(({ id, icon: Icon, text }) => (
            <li
              key={id}
              className="flex items-center bg-gray-50 p-5 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-sm hover:shadow-lg cursor-pointer"
            >
              <div className="w-12 h-12 flex items-center justify-center bg-blue-500/90 text-white rounded-lg hover:bg-blue-600">
                <Icon size={24} />
              </div>
              <span className="ml-4 text-gray-700 md:text-gray-800 text-lg md:text-xl font-medium">
                {text}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </SectionContainer>
  );
};

export default IncludedTabEdgeAccount;
