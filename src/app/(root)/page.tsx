import BankControl from "@/components/BankControl/BankControl";
import ContactUs from "@/components/ContactUs/ContactUs";
import FAQ from "@/components/Home/FAQ";
import HeroBanner from "@/components/Banner/HeroBanner";
import IncludedTabEdgeAccount from "@/components/IncludedTabEdgeAccount/IncludedTabEdgeAccount";
import Services from "@/components/Services/Services";
import WhyTabEdge from "@/components/WhyTabEdge/WhyTabEdge";
import React from "react";

const HomePage = () => {
  return (
    <>
      <HeroBanner />
      <Services />
      <BankControl />
      <WhyTabEdge />
      <IncludedTabEdgeAccount />
      <FAQ />
      <ContactUs />
    </>
  );
};

export default HomePage;
