import SectionBanner from "@/components/Banner/SectionBanner";
import AboutBussinessBanking from "@/components/BusinessBanking/AboutBussinessBanking";
import BussinessBankControl from "@/components/BusinessBanking/BusinessBankControl";
import Documents from "@/components/BusinessBanking/Documents";
import IncluedBusinessBanking from "@/components/BusinessBanking/IncluedBusinessBanking";
import React from "react";

const BussinessBanking = () => {
  return (
    <div>
      <SectionBanner
        heading="Business Banking"
        description="Open a U.S. business bank online. No need to be a U.S. registered company, citizen or residen"
        tailwindClass="text-white "
        backgroundImagePath="/background/blue-gradiant.png"
      />
      <BussinessBankControl />
      <AboutBussinessBanking />
      <IncluedBusinessBanking />
      <Documents />
    </div>
  );
};

export default BussinessBanking;
