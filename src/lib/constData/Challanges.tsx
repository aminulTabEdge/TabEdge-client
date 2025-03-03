import {
  CreditCard,
  Globe,
  Briefcase,
  Banknote,
  DollarSign,
  Shield,
} from "lucide-react";

const challenges = [
  {
    icon: <CreditCard size={32} className="text-blue-500" />, // Blue color for credit card icon
    title: "Limited Transactions in Bangladesh",
    description:
      "Individuals are restricted to a mere $300/day in international transactions, stifling the potential for global business and personal interactions.",
  },
  {
    icon: <Globe size={32} className="text-green-500" />, // Green color for globe icon
    title: "Passport Requirements for USD Payments",
    description:
      "The necessity of a passport for USD payments creates unnecessary hurdles, hindering the smooth and efficient flow of international transactions.",
  },
  {
    icon: <Briefcase size={32} className="text-purple-500" />, // Purple color for briefcase icon
    title: "Freelancer Limitations",
    description:
      "Freelancers face frustration as they are unable to accept small payments directly from other countries, limiting their earning potential and opportunities.",
  },
  {
    icon: <Banknote size={32} className="text-yellow-500" />, // Yellow color for banknote icon
    title: "Online Banking Hurdles",
    description:
      "Creating an online bank account remains a challenge, impeding the adoption of digital financial solutions for a significant portion of the population.",
  },
  {
    icon: <DollarSign size={32} className="text-red-500" />, // Red color for dollar sign icon
    title: "Currency Exchange Restrictions",
    description:
      "Stringent regulations surrounding currency exchange without government permission pose a barrier to fluid financial operations, impacting businesses and individuals alike.",
  },
  {
    icon: <Shield size={32} className="text-teal-500" />, // Teal color for shield icon
    title: "Stricter Regulations",
    description:
      "Some countries, including Bangladesh, have strict regulations and documentation requirements for international transactions to prevent money laundering and fraud.",
  },
];

export default challenges;
