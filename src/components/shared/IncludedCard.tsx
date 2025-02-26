import React from "react";
import { HiCheckCircle } from "react-icons/hi";

type IncludedCardType = {
  feature: string;
};
const IncludedCard = ({ feature }: IncludedCardType) => {
  return (
    <div className="flex items-center justify-between border-b border-teal-400 pb-2">
      <span className="text-gray-800 text-lg">{feature}</span>
      <HiCheckCircle className="text-teal-500 text-2xl" />
    </div>
  );
};

export default IncludedCard;
