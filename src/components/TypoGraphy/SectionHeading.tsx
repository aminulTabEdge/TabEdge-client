import React from "react";

type SectionHeadingType = {
  title: string;
  description?: string;
  tailwindClass?: string;
};

const SectionHeading = ({
  title,
  description,
  tailwindClass,
}: SectionHeadingType) => {
  return (
    <div
      className={`max-w-xl mx-auto text-center py-6 lg:py-8 xl:py-12 ${
        tailwindClass || ""
      }`}
    >
      <h1 className="font-bold text-3xl lg:text-4xl">{title}</h1>
      {description && <p>{description}</p>}
    </div>
  );
};

export default SectionHeading;
