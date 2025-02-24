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

const includedFeatures = [
  { id: 1, icon: FaDollarSign, text: "USD Personal Current Account" },
  { id: 2, icon: FaCreditCard, text: "Your TabEdge Visa Debit Card*" },
  { id: 3, icon: FaExchangeAlt, text: "Institutional FX Rates" },
  { id: 4, icon: FaMoneyCheckAlt, text: "No Account Funding Charges**" },
  {
    id: 5,
    icon: FaFileInvoice, // Changed to avoid duplication
    text: "Limitless ACH Payments, TabEdge Transfers, and Wire Transfers",
  },
  {
    id: 6,
    icon: FaFileInvoice,
    text: "Digital Account Statements and Payment Receipts",
  },
  {
    id: 7,
    icon: FaShieldAlt,
    text: "Extended Warranty, Price, and Purchase Protection",
  },
  { id: 8, icon: FaCar, text: "Auto Rental and Travel Accident Insurance" },
];

const IncludedTabEdgeAccount = () => {
  return (
    <div className="bg-white">
      <div className="container mx-auto   rounded-2xl lg:py-24">
        <SectionHeading title="Included TabEdge Account" />
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {includedFeatures.map(({ id, icon: Icon, text }) => (
            <li
              key={id}
              className="flex items-center bg-gray-50 p-4 rounded-lg transition-all duration-300 transform hover:scale-105 cursor-pointer shadow-sm hover:shadow-md"
            >
              <div className="w-10 h-10 flex items-center justify-center bg-blue-500 text-white rounded-lg">
                <Icon size={20} />
              </div>
              <span className="ml-4 text-gray-800 text-lg font-medium">
                {text}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default IncludedTabEdgeAccount;
