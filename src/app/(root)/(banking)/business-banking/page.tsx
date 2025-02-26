import SectionBanner from "@/components/Banner/SectionBanner";
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
    </div>
  );
};

export default BussinessBanking;
