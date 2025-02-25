import React from "react";
import SectionContainer from "../ui/SectionContainer";
import SectionHeading from "../ui/SectionHeading";
import Image from "next/image";

const PurchasingPower = () => {
  return (
    <SectionContainer
      backgroundColor="bg-white"
      tailwindClass=" container mx-auto py-12 px-6"
    >
      <>
        <SectionHeading
          title="Purchasing Power"
          description="Personal US accounts that give complete purchasing power  With our virtual and physical Visa Infinite debit cards you can make
    instant purchases online, in-store or with a tap of your phone."
        />
        <div className="lg:flex justify-center items-center">
          {/* Text Section */}
          <ul>
            <li>Google and Samsung Pay compatible.</li>
            <li>Exclusive TabEdge Visa Infinite metal debit card.</li>
          </ul>

          {/* Image Section */}
          <div>
            <Image
              src={"/gif/payment-information.gif"}
              width={500}
              height={500}
              alt="Payment Information tabEdge"
            />
          </div>
        </div>
      </>
    </SectionContainer>
  );
};

export default PurchasingPower;
