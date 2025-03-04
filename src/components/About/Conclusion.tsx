/* eslint-disable react/no-unescaped-entities */
import React from "react";
import SectionContainer from "../ui/SectionContainer";

const Conclusion = () => {
  return (
    <SectionContainer
      className="max-w-4xl mx-auto text-center"
      backgroundColor="bg-white"
    >
      <div className="space-y-6">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
          A Vision Beyond Borders
        </h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
          TabEdge is more than a fintech platform; it's a revolution led by the
          visionary <span className="font-semibold">Shah Mubaruk</span>. His
          technical acumen and entrepreneurial drive power the cutting-edge
          solutions that define our mission.
        </p>
        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
          We are not just shaping transactions—we are redefining financial
          freedom. With a focus on
          <span className="font-semibold">user-centric design</span>,
          <span className="font-semibold">innovative technology</span>, and
          <span className="font-semibold">strategic collaborations</span>,
          TabEdge is poised to transform global finance.
        </p>
        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
          Invest in TabEdge—where the dream of a
          <span className="font-semibold">borderless, limitless</span> financial
          future is becoming reality. Together, we are shaping the next era of
          fintech innovation.
        </p>
      </div>
    </SectionContainer>
  );
};

export default Conclusion;
