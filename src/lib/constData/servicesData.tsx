import { FaUserTie, FaBriefcase, FaBuilding } from "react-icons/fa";

const servicesData = [
  {
    id: 1,
    title: "Personal Banking",
    description:
      "Take control of your finances and enjoy all the benefits of banking in the U.S. without needing to be a U.S. resident or citizen. Open a TabEdge Infinite account and enjoy virtual and physical Visa Infinite debit cards. Make instant purchases online, in-store, or with a tap of your phone.",
    imageSrc: "/services/personal-bank.png",
    buttonText: "Details about Personal Banking",
    slug: "personal-banking",
    icon: <FaUserTie style={{ color: "#E63946", fontSize: "1.875rem" }} />, // Red shade
  },
  {
    id: 2,
    title: "Business Banking",
    description:
      "Reduce costs and protect your profits with USD stability. Our business banking accounts are designed for small or single-director businesses that need an international edge. Enjoy the benefits of U.S. banking without needing to be a U.S. registered company, citizen, or resident.",
    imageSrc: "/services/business-bank.png",
    buttonText: "Details about Business Banking",
    slug: "business-banking",
    icon: <FaBriefcase style={{ color: "#F4A261", fontSize: "1.875rem" }} />, // Orange shade
  },
  {
    id: 3,
    title: "Corporate Banking",
    description:
      "Manage corporate finances with ease while enjoying all the benefits of banking in the U.S. without needing to be a U.S. resident or citizen. Open a TabEdge Infinite account and enjoy virtual and physical Visa Infinite debit cards*. Make instant purchases online, in-store, or with a tap of your phone.",
    imageSrc: "/services/corporate-bank.png",
    buttonText: "Details about Corporate Banking",
    slug: "corporate-banking",
    icon: <FaBuilding style={{ color: "#457B9D", fontSize: "1.875rem" }} />, // Blue shade
  },
];

export default servicesData;
