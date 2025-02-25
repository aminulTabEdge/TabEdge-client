import React from "react";
import SectionContainer from "../ui/SectionContainer";
import SectionHeading from "../ui/SectionHeading";
import Image from "next/image";

const OnlineBanking = () => {
  return (
    <SectionContainer>
      <>
        <SectionHeading
          title="Online Banking"
          description="Access your accounts, manage payments, check your statements and much more, 24 hours a day"
        />
        <div className="flex justify-center items-center">
          <div>
            <Image
              src={"/gif/online-banking.gif"}
              width={500}
              height={500}
              alt="oneline payment"
            />
          </div>
          <ul>
            <li>
              See all the activity online - all you need in an internet
              connection
            </li>
            <li>
              Make US domestic and international payments quickly and easily
            </li>
            <li>
              Manage every espect of your account having to visit a branch
            </li>
          </ul>
        </div>
      </>
    </SectionContainer>
  );
};

export default OnlineBanking;
