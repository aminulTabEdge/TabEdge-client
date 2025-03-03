import React from "react";
import {
  Globe,
  TrendingUp,
  Handshake,
  Compass,
  Store,
  Flag,
} from "lucide-react"; // Added Flag icon
import SectionContainer from "../ui/SectionContainer";
import SectionHeading from "../ui/SectionHeading";

const geographyData = [
  {
    title: "Global Reach",
    content:
      "TabEdge aims to provide its services to users worldwide, offering cross-border financial solutions that transcend geographical boundaries. This global approach allows individuals and businesses from different countries to access TabEdge's platform and benefit from its features.",
    icon: <Globe size={30} />,
  },
  {
    title: "Key Markets",
    content:
      "TabEdge may prioritize key markets with high demand for cross-border transactions, including regions such as North America, Europe, Asia-Pacific, and the Middle East. These areas offer significant opportunities for growth, as international commerce and efficient payment solutions are in high demand.",
    icon: <Store size={30} />,
  },
  {
    title: "Emerging Economies",
    content:
      "TabEdge may target emerging economies with growing trends in digital payments and e-commerce, where reliable cross-border financial services are needed. These economies present opportunities for TabEdge to expand its user base in fast-growing markets.",
    icon: <TrendingUp size={30} />,
  },
  {
    title: "Strategic Partnerships",
    content:
      "TabEdge may form strategic partnerships with financial institutions, payment processors, and other stakeholders in different regions. These partnerships will enhance TabEdge's geographic coverage and leverage existing networks for user acquisition and market expansion.",
    icon: <Handshake size={30} />,
  },
  {
    title: "Evolution of Coverage",
    content:
      "As TabEdge grows, its geographic coverage will evolve. The company’s goal is to provide accessible, efficient cross-border financial services to users worldwide, enabling seamless international transactions and promoting financial inclusion.",
    icon: <Compass size={30} />,
  },
  {
    title: "Localized Solutions", // New section
    content:
      "TabEdge aims to offer tailored financial solutions based on the local regulatory environment and user needs. By adapting its platform for specific countries or regions, it ensures compliance with local laws and delivers a better experience to users in each market.",
    icon: <Flag size={30} />, // Flag icon to represent localization
  },
];

const Geography = () => {
  return (
    <SectionContainer className="container mx-auto">
      <SectionHeading title="Geographical Coverage" />
      <div className="grid md:grid-cols-2 gap-12">
        {geographyData.map((item, index) => (
          <div
            key={index}
            className="bg-white p-6 shadow-lg rounded-lg flex flex-col items-center text-center"
          >
            <div className="text-blue-500 mb-4">{item.icon}</div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              {item.title}
            </h2>
            <p className="text-gray-600">{item.content}</p>
          </div>
        ))}
      </div>
    </SectionContainer>
  );
};

export default Geography;
