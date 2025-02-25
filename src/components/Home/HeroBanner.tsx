import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";

const HeroBanner = () => {
  return (
    <div className="relative w-full h-[500px] md:h-[650px] lg:h-[800px]">
      {/* Background Image */}
      <Image
        src="/home/hero-banner.png"
        alt="Tabedge Hero banner"
        fill
        priority
        className="object-cover"
      />

      {/* Overlay (Optional for text visibility) */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Text Content */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center px-4">
        <h1 className="text-2xl md:text-4xl font-bold">Welcome to TabEdge</h1>
        <p className="text-sm md:text-lg max-w-md mx-auto mt-2">
          Your trusted partner for innovative digital solutions. Elevate your
          brand with us.
        </p>
        <Button className="mt-4 md:mt-6">Get Started</Button>
      </div>
    </div>
  );
};

export default HeroBanner;
