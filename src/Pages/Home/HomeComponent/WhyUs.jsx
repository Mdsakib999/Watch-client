import React from "react";
import { FaHeadset, FaTruck, FaExchangeAlt, FaShieldAlt } from "react-icons/fa";

const WhyUs = () => {
  const features = [
    {
      icon: <FaHeadset className="text-4xl text-gray-700 mb-2" />,
      title: "24/7 Friendly Support",
      description: "Our support team always ready for you 7 days a week.",
    },
    {
      icon: <FaTruck className="text-4xl text-gray-700 mb-2" />,
      title: "Free Shipping",
      description: "Free worldwide shipping on all area orders above $100.",
    },
    {
      icon: <FaExchangeAlt className="text-4xl text-gray-700 mb-2" />,
      title: "7 Day Easy Return",
      description: "Product any fault within 7 days for an immediate exchange.",
    },
    {
      icon: <FaShieldAlt className="text-4xl text-gray-700 mb-2" />,
      title: "Quality Guaranteed",
      description:
        "If your product aren't perfect, return them for a full refund.",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center py-20  px-12  ">
      {features.map((feature, index) => (
        <div key={index} className="flex flex-col items-center justify-center group ">
          <div className="px-3 pt-3 pb-1 rounded-full border gr bg-gray-50 group-hover:bg-gray-100 border-gray-400">
            {feature.icon}
          </div>
          <h3 className="text-lg font-semibold mt-4">{feature.title}</h3>
          <p className="text-gray-600 mt-2">{feature.description}</p>
        </div>
      ))}
    </div>
  );
};

export default WhyUs;
