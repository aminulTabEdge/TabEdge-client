import React from "react";
import { DocumentType } from "../BusinessBanking/Documents";
import Image from "next/image";

// Define the type for the DocumentsCard props
type DocumentsCardProps = {
  documents: DocumentType[];
};

const DocumentsCard = ({ documents }: DocumentsCardProps) => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between gap-8  ">
      {/* Render Documents List */}
      <div className="max-w-3xl w-full">
        <ul className="space-y-6">
          {documents.map((document) => (
            <li
              key={document.id}
              className="flex items-center gap-6 p-4 bg-white rounded-lg  hover:shadow-xl hover:cursor-pointer transition-shadow duration-300 ease-in-out"
            >
              <p> {document.icon}</p>
              <span className="font-semibold text-xl text-gray-800">
                {document.title}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* Image Section */}
      <div className="mx-auto max-w-sm mt-6 lg:mt-0">
        <Image
          src={"/logos/documents.svg"}
          width={500}
          height={400}
          alt="Documents illustration"
        />
      </div>
    </div>
  );
};

export default DocumentsCard;
