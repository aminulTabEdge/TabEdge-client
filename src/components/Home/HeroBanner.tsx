import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";

const HeroBanner = () => {
  return (
    <div className="relative w-full">
      {/* Background Image */}
      <Image
        src={"/home/hero-banner.png"}
        width={1920}
        height={800}
        alt="Tabedge Hero banner"
        className="w-full h-auto object-cover"
      />

      {/* Overlay (Optional: Improves text visibility) */}
      <div className="absolute inset-0 "></div>

      {/* Text Content */}
      <div className="absolute top-1/2 left-10 transform -translate-y-1/2 text-white space-y-4">
        <h1 className="text-4xl font-bold mb-4">Welcome to TabEdge</h1>
        <p className="text-lg max-w-md">
          Your trusted partner for innovative digital solutions. Elevate your
          brand with us.
        </p>
        <Button>Get Started</Button>
      </div>
    </div>
  );
};

export default HeroBanner;
