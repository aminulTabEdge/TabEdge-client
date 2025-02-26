import BankControl from "@/components/shared/BankControl";
import SectionBanner from "@/components/Banner/SectionBanner";
import IncludedPersonalBank from "@/components/PersonalBanking/IncludedPersonalBank";
import OnlineBanking from "@/components/PersonalBanking/OnlineBanking";
import PurchasingPower from "@/components/PersonalBanking/PurchasingPower";
import React from "react";

const PersonalBanking = () => {
  return (
    <div>
      <SectionBanner
        heading="Personal Banking"
        description="Take control of your finances with a personal bank account from TabEdge Bank "
        tailwindClass="text-white "
        backgroundImagePath="/background/blue-gradiant.png"
      />
      <BankControl />
      <PurchasingPower />
      <OnlineBanking />
      <IncludedPersonalBank />
    </div>
  );
};

export default PersonalBanking;
