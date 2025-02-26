import React from "react";
import SectionContainer from "../ui/SectionContainer";
import SectionHeading from "../ui/SectionHeading";
import DocumentsCard from "../shared/DocumentsCard";
import { FaFileAlt, FaIdCard, FaHome, FaRegMoneyBillAlt, FaBusinessTime, FaFileInvoice, FaFileSignature } from "react-icons/fa";

// Define the type for a single document
export type DocumentType = {
  id: number;
  title: string;
  icon: React.ReactNode;
};

// Define the documents array with the appropriate type
const documents: DocumentType[] = [
  {
    id: 1,
    title: "Business Registration Certificate",
    icon: <FaFileAlt className="text-blue-500 text-3xl" />,
  },
  {
    id: 2,
    title: "Proof of Identity (Passport/Driver's License)",
    icon: <FaIdCard className="text-green-500 text-3xl" />,
  },
  {
    id: 3,
    title: "Proof of Address (Utility Bill/Bank Statement)",
    icon: <FaHome className="text-yellow-500 text-3xl" />,
  },
  {
    id: 4,
    title: "Tax Identification Number (TIN) or Employer Identification Number (EIN)",
    icon: <FaRegMoneyBillAlt className="text-purple-500 text-3xl" />,
  },
  {
    id: 5,
    title: "Business Plan or Overview",
    icon: <FaBusinessTime className="text-orange-500 text-3xl" />,
  },
  {
    id: 6,
    title: "Bank Reference Letter",
    icon: <FaFileInvoice className="text-teal-500 text-3xl" />,
  },
  {
    id: 7,
    title: "Financial Statements (Balance Sheet/Profit & Loss)",
    icon: <FaFileSignature className="text-red-500 text-3xl" />,
  },
];

const Documents = () => {
  return (
    <SectionContainer tailwindClass="container mx-auto">
      <SectionHeading title="Documents For Business Banking" />
      {/* Pass the documents array to DocumentsCard */}
      <DocumentsCard documents={documents} />
    </SectionContainer>
  );
};

export default Documents;
