import {
  FaUserPlus,
  FaSignInAlt,
  FaHourglassHalf,
  FaCheckCircle,
  FaUnlockAlt,
  FaRocket,
} from "react-icons/fa";
const serviceSteps = [
  {
    id: 1,
    icon: <FaUserPlus size={30} className="text-blue-500" />,
    title: "Create Account",
    description: "Sign up to access all services by creating an account.",
  },
  {
    id: 2,
    icon: <FaSignInAlt size={30} className="text-green-500" />,
    title: "Login Account",
    description: "Use your credentials to log into your account securely.",
  },
  {
    id: 3,
    icon: <FaHourglassHalf size={30} className="text-yellow-500" />,
    title: "Wait for Approval",
    description: "We review and verify your details before granting access.",
  },
  {
    id: 4,
    icon: <FaCheckCircle size={30} className="text-purple-500" />,
    title: "Approval Notification",
    description: "You’ll receive a notification once your account is approved.",
  },
  {
    id: 5,
    icon: <FaUnlockAlt size={30} className="text-red-500" />,
    title: "Full Access",
    description: "After approval, enjoy full access to all services!",
  },
  {
    id: 6,
    icon: <FaRocket size={30} className="text-indigo-500" />,
    title: "Start Using Services",
    description: "Now you can explore and use all features seamlessly.",
  },
];

export default serviceSteps