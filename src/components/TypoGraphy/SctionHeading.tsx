import React from "react";

type SectionHeadingType = {
  title: string;
  description?: string;
};

const SctionHeading = ({ title, description }: SectionHeadingType) => {
  return (
    <div className="max-w-xl mx-auto text-center">
      <h1 className="font-bold text-3xl lg:text-4xl">{title}</h1>
      <p>{description}</p>
    </div>
  );
};

export default SctionHeading;
