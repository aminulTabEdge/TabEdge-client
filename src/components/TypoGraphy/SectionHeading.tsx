import React from "react";

type SectionHeadingType = {
  title: string;
  description?: string;
};

const SectionHeading = ({ title, description }: SectionHeadingType) => {
  return (
    <div className="max-w-xl mx-auto text-center py-6 lg:py-8 xl:py-12">
      <h1 className="font-bold text-3xl lg:text-4xl">{title}</h1>
      <p>{description}</p>
    </div>
  );
};

export default SectionHeading;
