import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="bg-black text-white p-10 flex flex-wrap justify-between">
        <aside className="flex flex-col items-start space-y-2">
          <Image
            src={"/logo.webp"}
            alt="logo of TabEdge"
            height={180}
            width={180}
          />
        </aside>
        <nav className="flex flex-col space-y-1">
          <h6 className="text-lg font-bold">Services</h6>
          <a className="hover:underline">Branding</a>
          <a className="hover:underline">Design</a>
          <a className="hover:underline">Marketing</a>
          <a className="hover:underline">Advertisement</a>
        </nav>
        <nav className="flex flex-col space-y-1">
          <h6 className="text-lg font-bold">Company</h6>
          <a className="hover:underline">About us</a>
          <a className="hover:underline">Contact</a>
          <a className="hover:underline">Jobs</a>
          <a className="hover:underline">Press kit</a>
        </nav>
        <nav className="flex flex-col space-y-1">
          <h6 className="text-lg font-bold">Legal</h6>
          <a className="hover:underline">Terms of use</a>
          <a className="hover:underline">Privacy policy</a>
          <a className="hover:underline">Cookie policy</a>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
