import React from "react";
import SectionContainer from "../ui/SectionContainer";
import SectionHeading from "../ui/SectionHeading";
import Image from "next/image";

const features = [
  "See all the activity online - all you need is an internet connection",
  "Make US domestic and international payments quickly and easily",
  "Manage every aspect of your account without visiting a branch",
];

const OnlineBanking = () => {
  return (
    <SectionContainer>
      <SectionHeading
        title="Online Banking"
        description="Access your accounts, manage payments, check your statements, and much more, 24 hours a day."
      />

      <div className="flex flex-col md:flex-row justify-center items-center gap-6">
        {/* Image */}
        <div className="w-full max-w-[500px]">
          <Image
            src="/assets/gif/online-banking.gif"
            width={500}
            height={500}
            alt="Online payment"
            className="w-full h-auto"
          />
        </div>

        {/* Features List */}
        <ul className="space-y-3 text-gray-700">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-2">
              <span className="text-blue-500 font-bold">•</span>
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </SectionContainer>
  );
};

export default OnlineBanking;
