import React from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from "react-icons/fa";

const contactDetails = [
  { id: 1, icon: FaPhone, text: "+1 234 567 890" },
  { id: 2, icon: FaEnvelope, text: "support@example.com" },
  { id: 3, icon: FaMapMarkerAlt, text: "123 Main Street, City, Country" },
  { id: 4, icon: FaClock, text: "Mon - Fri: 9:00 AM - 6:00 PM" },
];

const ContactInfo: React.FC = () => {
  return (
    <div className=" py-12 px-6 ">
      <div className="max-w-3xl mx-auto   rounded-2xl p-8">
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">
          Contact Information
        </h2>
        <ul className="space-y-4">
          {contactDetails.map(({ id, icon: Icon, text }) => (
            <li
              key={id}
              className="flex items-center  p-2 rounded-lg shadow-sm"
            >
              <div className="w-10 h-10 flex items-center justify-center bg-blue-500 text-white rounded-lg">
                <Icon size={20} />
              </div>
              <span className="ml-4  font-medium">{text}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ContactInfo;
