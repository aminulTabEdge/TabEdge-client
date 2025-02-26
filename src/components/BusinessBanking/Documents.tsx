import React from "react";
import SectionContainer from "../ui/SectionContainer";
import SectionHeading from "../ui/SectionHeading";
import DocumentsCard from "../shared/DocumentsCard";
import {
  FaFileAlt,
  FaIdCard,
  FaHome,
  FaRegMoneyBillAlt,
  FaBusinessTime,
  FaFileInvoice,
  FaFileSignature,
} from "react-icons/fa";

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
    icon: <FaFileAlt />,
  },
  {
    id: 2,
    title: "Proof of Identity (Passport/Driver's License)",
    icon: <FaIdCard />,
  },
  {
    id: 3,
    title: "Proof of Address (Utility Bill/Bank Statement)",
    icon: <FaHome />,
  },
  {
    id: 4,
    title:
      "Tax Identification Number (TIN) or Employer Identification Number (EIN)",
    icon: <FaRegMoneyBillAlt />,
  },
  {
    id: 5,
    title: "Business Plan or Overview",
    icon: <FaBusinessTime />,
  },
  {
    id: 6,
    title: "Bank Reference Letter",
    icon: <FaFileInvoice />,
  },
  {
    id: 7,
    title: "Financial Statements (Balance Sheet/Profit & Loss)",
    icon: <FaFileSignature />,
  },
];

const Documents = () => {
  return (
    <SectionContainer
      backgroundColor="bg-white"
      tailwindClass="container mx-auto"
    >
      <SectionHeading title="Documents For Business Banking" />
      {/* Pass the documents array to DocumentsCard */}
      <DocumentsCard documents={documents} />
    </SectionContainer>
  );
};

export default Documents;
