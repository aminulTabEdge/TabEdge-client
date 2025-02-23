import HeroBanner from "@/components/Home/HeroBanner";
import Services from "@/components/Services/Services";
import WhyTabEdge from "@/components/WhyTabEdge/WhyTabEdge";
import React from "react";

const HomePage = () => {
  return (
    <div className="space-y-8">
      <HeroBanner />
      <Services />
      <WhyTabEdge />
    </div>
  );
};

export default HomePage;
