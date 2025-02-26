import React from "react";

import SectionHeading from "../ui/SectionHeading";
import SectionContainer from "../ui/SectionContainer";
import includedFeatures from "@/lib/constData/includedFeatures";

const IncludedTabEdgeAccount = () => {
  return (
    <SectionContainer>
      <div className="container mx-auto">
        <SectionHeading title="Included TabEdge Account" />

        <ul className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {includedFeatures.map(({ id, icon: Icon, text, color }) => (
            <li
              key={id}
              className="flex items-center bg-gray-50 p-5 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-sm hover:shadow-lg cursor-pointer"
            >
              {/* Icon container with dynamic background color */}
              <div
                style={{ backgroundColor: color }}
                className="p-2 text-white rounded-full"
              >
                <Icon size={26} />
              </div>

              {/* Text */}
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
