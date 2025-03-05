import Conclusion from "@/components/About/Conclusion";
import Geography from "@/components/shared/Geography";
import Mission from "@/components/About/Mission";
import Problem from "@/components/About/Problem";
import Vision from "@/components/About/Vision";
import SectionBanner from "@/components/ui/SectionBanner";
import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | TabEdge",
  description:
    "TabEdge is a leading digital banking platform that offers seamless online banking, virtual Visa cards, prepaid Visa cards, and international debit cards designed for global transactions. Whether you're searching for the best virtual debit card, a free checking account, or how to get a virtual credit card, TabEdge has you covered. Trusted by users worldwide, we deliver solutions that rival Chime, Revolut, N26, and more, while ensuring secure transactions with Visa and Mastercard integration. From managing your digital bank account to accessing virtual credit card numbers instantly, TabEdge simplifies your financial needs for a connected world.",
  keywords:
    "TabEdge, TabEdge Banking, TabEdge cross border transaction, Invoice TabEdge, Payment Link TabEdge, Payment Request TabEdge, Start Selling Products with TabEdge, Send Money with TabEdge, Mobile Banking with TabEdge, Withdraw Money with TabEdge, Payment Gateway Intregration TabEdge",
  openGraph: {
    title: "TabEdge Banking",
    description: "Discover the best services with us.",
    url: "https://tabedge.com",
    siteName: "TabEdge",
    images: [
      {
        url: "http://tabedge.com/_next/image?url=%2Fassets%2Fhome%2Fhero-banner2.png&w=1920&q=75",
        width: 1200,
        height: 630,
        alt: "Tabedge Banner",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "TabEdge - Cross Border payment solution",
    description: "Discover the best services with us.",
    images: [
      "http://tabedge.com/_next/image?url=%2Fassets%2Fhome%2Fhero-banner2.png&w=1920&q=75",
    ],
    creator: "TabEdge",
  },
};

const AboutPage = () => {
  return (
    <>
      <SectionBanner
        backgroundImagePath="/assets/background/blue-gradiant.png"
        className="text-white "
        heading="About"
        description="TabEdge is a digital banking platform offering online banking, virtual Visa cards, prepaid cards, and international debit cards."
      />

      <Mission />
      <Vision />
      <SectionBanner
        className="text-white"
        backgroundImagePath="/assets/background/blue-gradiant.png"
        heading="Challenges in International Transactions"
      />
      <Problem />
      <Geography />
      <Conclusion />
    </>
  );
};

export default AboutPage;
