import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import SectionHeading from "../ui/SectionHeading";
import SectionContainer from "../ui/SectionContainer";
import Image from "next/image";

const FAQ = () => {
  return (
    <SectionContainer tailwindClass="container mx-auto">
      <SectionHeading title="FAQ" />

      <div className="grid sm:grid-cols-1 lg:grid-cols-2 items-center gap-8 lg:gap-12">
        {/* FAQ Image */}
        <div className="mx-auto">
          <Image
            src={"/logos/FAQ.png"}
            width={500}
            height={500}
            alt="FAQ image of TabEdge"
            className="max-w-[80%] md:max-w-full"
          />
        </div>

        {/* Accordion Content */}
        <div className="max-w-xl w-full">
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1">
              <AccordionTrigger>Is it accessible?</AccordionTrigger>
              <AccordionContent>
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger>How do I sign up?</AccordionTrigger>
              <AccordionContent>
                You can sign up by clicking the Sign Up button at the top right of the page.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger>What payment methods are accepted?</AccordionTrigger>
              <AccordionContent>
                We accept credit cards, PayPal, and bank transfers.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger>Can I change my subscription plan?</AccordionTrigger>
              <AccordionContent>
                Yes, you can change your plan at any time from your account settings.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5">
              <AccordionTrigger>How can I contact support?</AccordionTrigger>
              <AccordionContent>
                You can contact support via email at support@example.com or call us at +1 234 567 890.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </SectionContainer>
  );
};

export default FAQ;
