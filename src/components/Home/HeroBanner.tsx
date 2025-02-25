import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";

const HeroBanner = () => {
  return (
    <div className="relative w-full h-[500px]">
      {/* Background Image */}
      <Image
        src="/home/hero-banner.png"
        alt="Tabedge Hero banner"
        fill
        priority
        className="object-cover"
      />

      {/* Text Content - Aligned to the Left */}
      <div className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white px-4">
        <h1 className="text-2xl md:text-4xl font-bold">Welcome to TabEdge</h1>
        <p className="text-sm md:text-lg max-w-md mt-2">
          Your trusted partner for innovative digital solutions. Elevate your
          brand with us.
        </p>
        <Button className="mt-4 md:mt-6">Get Started</Button>
      </div>
    </div>
  );
};

export default HeroBanner;
