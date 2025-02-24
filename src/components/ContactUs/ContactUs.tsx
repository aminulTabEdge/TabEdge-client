import React from "react";
import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";
import SectionHeading from "../ui/SectionHeading";

const ContactUs: React.FC = () => {
  return (
    <div className="relative px-4 py-6 lg:py-12 2xl:py-24 bg-[url('/background/white-polyshape.jpg')] bg-cover bg-center bg-opacity-50">
      {/* Gradient Overlay */}
      {/* <div className="absolute inset-0 bg-gradient-to-b from-[#f2f4f8] to-blue-900 opacity-40"></div> */}
      {/* Content Section */}
      <div className="relative z-10">
        <SectionHeading title="Contact Us" />
        <div className="flex flex-col lg:flex-row items-center gap-8 container mx-auto">
          <ContactInfo />
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
