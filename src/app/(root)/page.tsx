import BankControl from "@/components/shared/BankControl";
import ContactUs from "@/components/ContactUs/ContactUs";
import FAQ from "@/components/Home/FAQ";
import HeroBanner from "@/components/Home/HeroBanner";
import IncludedTabEdgeAccount from "@/components/Home/IncludedTabEdgeAccount";
// import Services from "@/components/Home/Services";
import WhyTabEdge from "@/components/Home/WhyTabEdge";
import React from "react";
import GetServices from "@/components/Home/GetServices";
import { Metadata } from "next";
import Geography from "@/components/shared/Geography";

export const metadata: Metadata = {
  title: "Home | TabEdge",
  description:
    "TabEdge is your go-to digital banking platform offering seamless online banking solutions, virtual credit cards, prepaid Visa cards, and international debit cards tailored for global users. With TabEdge, open a free checking account, access a virtual Visa card instantly, and enjoy secure, worldwide transactions with trusted partners like Visa and Mastercard. Whether you’re managing your money online, looking for the best virtual debit card, or wondering how to get a virtual credit card, TabEdge makes financial freedom easy. Trusted by digital bank users globally, we rival services like Chime, Revolut, N26, and more. Simplify your finances with TabEdge today!",
  keywords: "TabEdge, TabEdge Banking, TabEdge cross border transaction",
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

const HomePage = () => {
  return (
    <>
      <HeroBanner />
      {/* <Services /> */}
      <BankControl />
      <Geography />
      <WhyTabEdge />
      <IncludedTabEdgeAccount />
      <GetServices />
      <FAQ />
      <ContactUs />
    </>
  );
};

export default HomePage;
