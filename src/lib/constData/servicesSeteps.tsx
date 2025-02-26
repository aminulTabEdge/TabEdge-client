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
    icon: <FaUserPlus size={30} color="#3b82f6" />,
    title: "Create Account",
    description: "Sign up to access all services by creating an account.",
  },
  {
    id: 2,
    icon: <FaSignInAlt size={30} color="#22c55e" />,
    title: "Login Account",
    description: "Use your credentials to log into your account securely.",
  },
  {
    id: 3,
    icon: <FaHourglassHalf size={30} color="#eab308" />,
    title: "Wait for Approval",
    description: "We review and verify your details before granting access.",
  },
  {
    id: 4,
    icon: <FaCheckCircle size={30} color="#a855f7" />,
    title: "Approval Notification",
    description: "You’ll receive a notification once your account is approved.",
  },
  {
    id: 5,
    icon: <FaUnlockAlt size={30} color="#ef4444" />,
    title: "Full Access",
    description: "After approval, enjoy full access to all services!",
  },
  {
    id: 6,
    icon: <FaRocket size={30} color="#6366f1" />,
    title: "Start Using Services",
    description: "Now you can explore and use all features seamlessly.",
  },
];

export default serviceSteps;
