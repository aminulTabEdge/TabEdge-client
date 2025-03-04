import Image from "next/image";
import React from "react";

const SideImage = ({ src, alt }: { src: string; alt: string }) => {
  return (
    <div className="lg:w-1/3">
      <Image
        src={src}
        width={500}
        height={500}
        alt={alt}
        className="w-full h-[400px] lg:h-[450px]"
      />
    </div>
  );
};

export default SideImage;
