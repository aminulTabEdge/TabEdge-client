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
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Fintech | TabEdge",
  description:
    "TabEdge is a leading digital banking platform that offers seamless online banking, virtual Visa cards, prepaid Visa cards, and international debit cards designed for global transactions. Whether you're searching for the best virtual debit card, a free checking account, or how to get a virtual credit card, TabEdge has you covered. Trusted by users worldwide, we deliver solutions that rival Chime, Revolut, N26, and more, while ensuring secure transactions with Visa and Mastercard integration. From managing your digital bank account to accessing virtual credit card numbers instantly, TabEdge simplifies your financial needs for a connected world.",
};

const FintechPage = () => {
  return (
    <>
      <SectionBanner
        heading="Fintech"
        description="Fintech revolutionizes finance with digital payments, banking, lending, and blockchain for secure, fast, and accessible transactions."
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
