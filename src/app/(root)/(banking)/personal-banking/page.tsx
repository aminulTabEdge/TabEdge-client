import BankControl from "@/components/BankControl/BankControl";
import SectionBanner from "@/components/Banner/SectionBanner";
import IncludedPersonalBank from "@/components/PersonalBank/IncludedPersonalBank";
import OnlineBanking from "@/components/PersonalBank/OnlineBanking";
import PurchasingPower from "@/components/PersonalBank/PurchasingPower";
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
      <OnlineBanking/>
      <IncludedPersonalBank/>

    </div>
  );
};

export default PersonalBanking;
