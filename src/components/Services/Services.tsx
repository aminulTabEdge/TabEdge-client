import React from "react";
import SectionHeading from "../ui/SectionHeading";
import Image from "next/image";
import { Button } from "../ui/button";
import SectionContainer from "../ui/SectionContainer";
import servicesData from "@/lib/constData/servicesData";

const Services = () => {
  return (
    <SectionContainer tailwindClass="container mx-auto">
      <SectionHeading title="Our Services" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {servicesData.map(
          ({ id, title, description, imageSrc, buttonText }) => (
            <div
              key={id}
              className="bg-white p-6 space-y-4 shadow-lg rounded-lg flex flex-col justify-evenly"
            >
              <Image
                src={imageSrc}
                width={64}
                height={64}
                alt={title}
                className="mx-auto"
              />
              <h1 className="text-3xl font-bold text-center">{title}</h1>
              <p className="text-justify">{description}</p>
              <Button className="mx-auto block">{buttonText}</Button>
            </div>
          )
        )}
      </div>
    </SectionContainer>
  );
};

export default Services;
