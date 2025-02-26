import BankControl from "@/components/shared/BankControl";
import ContactUs from "@/components/ContactUs/ContactUs";
import FAQ from "@/components/Home/FAQ";
import HeroBanner from "@/components/Banner/HeroBanner";
import IncludedTabEdgeAccount from "@/components/Home/IncludedTabEdgeAccount";
import Services from "@/components/Home/Services";
import WhyTabEdge from "@/components/Home/WhyTabEdge";
import React from "react";
import GetServices from "@/components/Home/GetServices";

const HomePage = () => {
  return (
    <>
      <HeroBanner />
      <Services />
      <BankControl />
      <WhyTabEdge />
      <IncludedTabEdgeAccount />
      <GetServices />
      <FAQ />
      <ContactUs />
    </>
  );
};

export default HomePage;
