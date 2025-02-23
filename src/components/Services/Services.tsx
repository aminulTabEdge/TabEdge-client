import React from "react";
import SectionHeading from "../TypoGraphy/SectionHeading";
import Image from "next/image";
import { Button } from "../ui/button";

const Services = () => {
  return (
    <section className="container mx-auto ">
      <SectionHeading title="Our Services" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <div className="bg-white p-6 space-y-4 shadow-lg rounded-lg flex flex-col justify-evenly">
          <Image
            src={"/services/personal-bank.png"}
            width={64}
            height={64}
            alt="Personal Banking"
            className="mx-auto"
          />
          <h1 className="text-3xl font-bold text-center">Personal Banking</h1>
          <p className="text-justify">
            Take control of your finances and enjoy all the benefits of banking
            in the U.S. without needing to be a U.S. resident or citizen. Open a
            TabEdge Infinite account and enjoy virtual and physical Visa
            Infinite debit cards*. Make instant purchases online, in-store, or
            with a tap of your phone.
          </p>
          <Button className="mx-auto block">
            Register for Personal Banking
          </Button>
        </div>

        <div className="bg-white p-6 space-y-4 shadow-lg rounded-lg flex flex-col justify-evenly">
          <Image
            src={"/services/business-bank.png"}
            width={64}
            height={64}
            alt="Business Banking"
            className="mx-auto"
          />
          <h1 className="text-3xl font-bold text-center">Business Banking</h1>
          <p className="text-justify">
            Reduce costs and protect your profits with USD stability. Our
            business banking accounts are designed for small or single-director
            businesses that need an international edge. Enjoy the benefits of
            U.S. banking without needing to be a U.S. registered company,
            citizen, or resident.
          </p>
          <Button className="mx-auto block">
            Register for Business Banking
          </Button>
        </div>

        <div className="bg-white p-6 space-y-4 shadow-lg rounded-lg flex flex-col justify-evenly">
          <Image
            src={"/services/corporate-bank.png"}
            width={64}
            height={64}
            alt="Corporate Banking"
            className="mx-auto"
          />
          <h1 className="text-3xl font-bold text-center">Corporate Banking</h1>
          <p className="text-justify">
            Manage corporate finances with ease while enjoying all the benefits
            of banking in the U.S. without needing to be a U.S. resident or
            citizen. Open a TabEdge Infinite account and enjoy virtual and
            physical Visa Infinite debit cards*. Make instant purchases online,
            in-store, or with a tap of your phone.
          </p>
          <Button className="mx-auto block">
            Register for Corporate Banking
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
