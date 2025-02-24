import { ChildrenType } from "@/app/layout";
import React from "react";

type TailwindClassProps = ChildrenType & {
  tailwindClass?: string;
};

const SectionContainer = ({ children, tailwindClass }: TailwindClassProps) => {
  return (
    <div className={`py-8 lg:py-14 xl:py-16 2xl:py-24 ${tailwindClass}`}>
      {children}
    </div>
  );
};

export default SectionContainer;
