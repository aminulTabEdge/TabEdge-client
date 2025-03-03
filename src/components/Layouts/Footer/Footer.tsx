import Image from "next/image";
import React from "react";

import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 px-6 md:px-12">
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="flex flex-col items-center md:items-start space-y-4 md:space-y-0 md:flex-row md:space-x-12">
          <Image
            src={"/logo.webp"}
            alt="logo of TabEdge"
            height={180}
            width={180}
            className="rounded-lg"
          />
        </div>

        <div className="flex flex-wrap justify-center md:justify-start space-y-4 md:space-y-0 md:space-x-12">
          <nav className="flex flex-col items-center md:items-start">
            <h6 className="text-lg font-bold mb-2">Services</h6>
            <Link href="/branding" className="hover:underline mb-1">
              Branding
            </Link>
            <Link href="/design" className="hover:underline mb-1">
              Design
            </Link>
            <Link href="/marketing" className="hover:underline mb-1">
              Marketing
            </Link>
            <Link href="/advertisement" className="hover:underline">
              Advertisement
            </Link>
          </nav>

          <nav className="flex flex-col items-center md:items-start">
            <h6 className="text-lg font-bold mb-2">Legal</h6>
            <Link href="/terms" className="hover:underline mb-1">
              Terms of use
            </Link>
            <Link href="/privacy" className="hover:underline mb-1">
              Privacy policy
            </Link>
            <Link href="/cookies" className="hover:underline">
              Cookie policy
            </Link>
          </nav>
        </div>
      </div>

      <div className="mt-8 text-center text-sm text-gray-400">
        <p>&copy; 2025 TabEdge. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
