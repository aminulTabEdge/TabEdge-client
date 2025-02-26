import Image from "next/image";
import React from "react";
type BankControlCardType = {
  icon: string;
  serviceName: string;
  serviceInfo: string;
};

const BankControlCard = ({
  icon,
  serviceName,
  serviceInfo,
}: BankControlCardType) => {
  return (
    <div className="bg-white p-5 md:p-6 rounded-xl shadow-md flex flex-col items-center text-center transform transition duration-300 hover:scale-105 hover:shadow-lg hover:cursor-pointer">
      {/* Icon Container */}
      <div className="flex justify-center w-14 h-14  rounded-full p-3 mb-4">
        <Image
          src={icon}
          width={40}
          height={40}
          alt={serviceName}
          className="object-contain"
        />
      </div>

      {/* Title & Description */}
      <h3 className="text-lg md:text-xl font-semibold text-gray-800">
        {serviceName}
      </h3>
      <p className="text-gray-600 mt-2 text-base md:text-sm">{serviceInfo}</p>
    </div>
  );
};

export default BankControlCard;
