import React from "react";
import SectionContainer from "../ui/SectionContainer";
import SectionHeading from "../ui/SectionHeading";

const Vision = () => {
  return (
    <SectionContainer className="max-w-3xl mx-auto text-center">
      {/* Section Title */}
      <SectionHeading title="🚀 Our Vision" />

      {/* Mission Statement */}
      <p className="text-lg text-justify">
        TabEdge envisions a world where financial transactions are borderless,
        effortless, and universally accessible. Our vision is to lead the
        transformation of the financial industry by fostering an inclusive
        global community. We aspire to be the go-to platform that not only
        breaks down traditional barriers but also shapes the future of
        cross-border transactions. With a commitment to continuous improvement
        and user satisfaction, TabEdge aims to redefine the way the world
        transacts, creating a more connected and empowered global economy
      </p>
    </SectionContainer>
  );
};

export default Vision;
