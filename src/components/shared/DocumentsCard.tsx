import React from "react";
import { DocumentType } from "../BusinessBanking/Documents";

// Define the type for the DocumentsCard props
type DocumentsCardProps = {
  documents: DocumentType[];
};

const DocumentsCard = ({ documents }: DocumentsCardProps) => {
  return (
    <div>
      {/* Render Documents List */}
      <div className="max-w-3xl mx-auto w-full">
        <ul className="space-y-6">
          {documents.map((document) => (
            <li
              key={document.id}
              className="flex items-center gap-6 p-4 bg-slate-100 rounded-lg  hover:shadow-xl hover:cursor-pointer transition-shadow duration-300 ease-in-out"
            >
              <p className=" p-2 lg:p-3 rounded-full bg-blue-500 text-xl lg:text-3xl text-white">
                {document.icon}
              </p>
              <span className="lg:font-semibold lg:text-xl text-gray-800">
                {document.title}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DocumentsCard;
