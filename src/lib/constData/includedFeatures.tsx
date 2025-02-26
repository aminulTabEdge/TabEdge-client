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
  {
    id: 1,
    icon: FaDollarSign,
    text: "USD Personal Current Account",
    color: "#1E40AF",
  }, // Blue
  {
    id: 2,
    icon: FaCreditCard,
    text: "Your TabEdge Visa Debit Card",
    color: "#E11D48",
  }, // Red
  {
    id: 3,
    icon: FaExchangeAlt,
    text: "Institutional FX Rates",
    color: "#10B981",
  }, // Green
  {
    id: 4,
    icon: FaMoneyCheckAlt,
    text: "No Account Funding Charges",
    color: "#F59E0B",
  }, // Yellow
  {
    id: 5,
    icon: FaFileInvoice,
    text: "Limitless ACH & Wire Transfers",
    color: "#7C3AED",
  }, // Purple
  {
    id: 6,
    icon: FaFileInvoice,
    text: "Digital Statements & Payment Receipts",
    color: "#6366F1",
  }, // Indigo
  {
    id: 7,
    icon: FaShieldAlt,
    text: "Extended Warranty & Purchase Protection",
    color: "#14B8A6",
  }, // Teal
  {
    id: 8,
    icon: FaCar,
    text: "Auto Rental & Travel Accident Insurance",
    color: "#D97706",
  }, // Amber
];

export default includedFeatures;
