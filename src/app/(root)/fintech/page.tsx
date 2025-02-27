import SectionBanner from "@/components/Banner/SectionBanner";
import FintechServices from "@/components/Fintech/FintechServices";
import Invoice from "@/components/Fintech/Invoice";
import MobileBanking from "@/components/Fintech/MobileBanking";
import PaymentGateway from "@/components/Fintech/PaymentGateway";
import PaymentLink from "@/components/Fintech/PaymentLink";
import PaymentRequest from "@/components/Fintech/PaymentRequest";
import SendMoney from "@/components/Fintech/SendMoney";
import StartSelling from "@/components/Fintech/StartSelling";
import WithdrawMoney from "@/components/Fintech/WithdrawMoney";
import React from "react";

const FintechPage = () => {
  return (
    <>
      <SectionBanner
        heading="Fintech"
        tailwindClass="text-white"
        backgroundImagePath="/background/blue-gradiant.png"
      />
      <FintechServices />
      <Invoice />
      <PaymentLink />
      <PaymentRequest />
      <StartSelling />
      <SendMoney />
      <MobileBanking />
      <WithdrawMoney />
      <PaymentGateway />
    </>
  );
};

export default FintechPage;
