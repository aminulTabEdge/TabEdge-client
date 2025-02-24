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

const includedFeatures = [
  { id: 1, icon: FaDollarSign, text: "USD Personal Current Account" },
  { id: 2, icon: FaCreditCard, text: "Your TabEdge Visa Debit Card*" },
  { id: 3, icon: FaExchangeAlt, text: "Institutional FX Rates" },
  { id: 4, icon: FaMoneyCheckAlt, text: "No Account Funding Charges**" },
  {
    id: 5,
    icon: FaMoneyCheckAlt,
    text: "Limitless ACH Payments, TabEdge Transfers, and Wire Transfer",
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
    <div className=" py-12 px-6">
      <div className="max-w-3xl mx-auto bg-white shadow-xl rounded-2xl p-8">
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">
          Included TabEdge Account
        </h2>
        <ul className="space-y-4">
          {includedFeatures.map(({ id, icon: Icon, text }) => (
            <li
              key={id}
              className="flex items-center bg-gray-50 p-4 rounded-lg shadow-sm"
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
