import React from "react";
import SectionContainer from "../ui/SectionContainer";
import challenges from "@/lib/constData/Challanges";

const Problem = () => {
  return (
    <SectionContainer className="container mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {challenges.map((challenge, index) => (
          <div key={index} className="border p-6 rounded-lg shadow-md bg-white">
            <div className="flex items-center gap-3 mb-3">
              <span>{challenge.icon}</span>
              <h3 className="text-lg font-semibold">{challenge.title}</h3>
            </div>
            <p className="text-gray-600">{challenge.description}</p>
          </div>
        ))}
      </div>
      <div className="mt-12 text-center">
        <h2 className="text-xl font-bold">
          TabEdge recognizes these challenges as opportunities for
          transformation.
        </h2>
        <p className="text-gray-600 ">
          Join us as we pave the way for a future where these obstacles no
          longer hinder global financial interactions.
        </p>
      </div>
    </SectionContainer>
  );
};

export default Problem;
