import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import SectionHeading from "../ui/SectionHeading";

const FAQ = () => {
  return (
    <div className="max-w-2xl mx-auto ">
      <SectionHeading title="FAQ" />
      <Accordion type="single" collapsible>
        {/* Question 1 */}
        <AccordionItem value="item-1">
          <AccordionTrigger>Is it accessible?</AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>

        {/* Question 2 */}
        <AccordionItem value="item-2">
          <AccordionTrigger>How do I sign up?</AccordionTrigger>
          <AccordionContent>
            You can sign up by clicking the Sign Up button at the top right of
            the page.
          </AccordionContent>
        </AccordionItem>

        {/* Question 3 */}
        <AccordionItem value="item-3">
          <AccordionTrigger>
            What payment methods are accepted?
          </AccordionTrigger>
          <AccordionContent>
            We accept credit cards, PayPal, and bank transfers.
          </AccordionContent>
        </AccordionItem>

        {/* Question 4 */}
        <AccordionItem value="item-4">
          <AccordionTrigger>
            Can I change my subscription plan?
          </AccordionTrigger>
          <AccordionContent>
            Yes, you can change your plan at any time from your account
            settings.
          </AccordionContent>
        </AccordionItem>

        {/* Question 5 */}
        <AccordionItem value="item-5">
          <AccordionTrigger>How can I contact support?</AccordionTrigger>
          <AccordionContent>
            You can contact support via email at support@example.com or call us
            at +1 234 567 890.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default FAQ;
