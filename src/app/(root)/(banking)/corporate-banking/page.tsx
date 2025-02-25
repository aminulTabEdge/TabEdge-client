import SectionBanner from "@/components/Banner/SectionBanner";
import React from "react";

const CorporateBanking = () => {
  return (
    <div>
      <SectionBanner
        heading="Corporate Banking"
        description="Take control of your finances with a personal bank account from TabEdge Bank"
        tailwindClass="text-white "
        backgroundImagePath="/background/blue-gradiant.png"
      />
    </div>
  );
};

export default CorporateBanking;
