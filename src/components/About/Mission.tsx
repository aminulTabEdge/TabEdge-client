/* eslint-disable react/no-unescaped-entities */
import React from "react";
import SectionContainer from "../ui/SectionContainer";
import SectionHeading from "../ui/SectionHeading";

const Mission = () => {
  return (
    <SectionContainer className="max-w-3xl mx-auto text-center">
      {/* Section Title */}
      <SectionHeading title="🚀 Our Mission" />

      {/* Mission Statement */}
      <p className="text-lg">
      At TabEdge, our mission is to liberate financial transactions from borders and restrictions. We strive to empower individuals and businesses worldwide by providing a seamless, secure, and limitless cross-border transaction experience. Through innovation, compliance, and user-centric solutions, we aim to be the catalyst for a more connected and accessible global financial landscape, enabling our users to transact without limits and experience true financial freedom.
      </p>
    </SectionContainer>
  );
};

export default Mission;
