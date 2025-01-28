import React, { useState } from "react";
import ImageGallery from "./ProductDetailsComponent/ImageGallery";
import RenderStars from "./ProductDetailsComponent/RenderStars";
import image1 from "../../assets/Images/1.png";
import image2 from "../../assets/Images/2.png";
import image3 from "../../assets/Images/3.png";
import image4 from "../../assets/Images/4.png";

const ProductDetails = () => {
  const [activeTab, setActiveTab] = useState("details");

  const product = {
    _id: "1",
    name: "Classic Rose Gold Chain Watch",
    details:
      "A sophisticated watch designed for the modern gentleman. Featuring a rose gold case, a white dial, and a leather chain bracelet, this watch combines elegance and functionality.",
    rating: 4.7,
    brand: "Seiko",
    images: [image1, image2, image3, image4],
    regular_price: 320.0,
    discount_price: 269.99,
    availability: "In Stock",
    category: "Casual",
    gender: "Male",
    product_details: {
      brand: "Timeless Co.",
      material: "Stainless Steel",
      movement: "Analogue Quartz",
      waterResistance: "10 Bar",
      warranty: "2 years",
      caseSize: "40.4 mm",
      caseColor: "Rose Gold",
      braceletMaterial: "Chain",
      braceletColor: "Leather",
      dialColor: "White",
      features: [
        "Analogue Quartz movement",
        "Rose gold case",
        "White dial with minimalist design",
        "Leather chain bracelet",
        "Scratch-resistant sapphire crystal",
        "Water-resistant up to 10 Bar",
        "Luminous hands for visibility in low light",
        "Date display",
      ],
    },
  };

  // Static FAQs (same for every product)
  const faqs = [
    {
      question: "What is the return policy?",
      answer: "We offer a 30-day return policy for all products.",
    },
    {
      question: "How long does shipping take?",
      answer: "Shipping typically takes 3-5 business days.",
    },
    {
      question: "Is the watch water-resistant?",
      answer: "Yes, this watch is water-resistant up to 10 Bar.",
    },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case "details":
        return (
          <div>
            <h2 className="text-2xl font-bold mb-4">Product Details</h2>
            <ul className="list-disc list-inside">
              {Object.entries(product.product_details).map(([key, value]) => (
                <li key={key} className="mb-2">
                  <strong>{key.replace(/([A-Z])/g, " $1").trim()}:</strong>{" "}
                  {value}
                </li>
              ))}
            </ul>
            <h3 className="text-xl font-bold mt-6 mb-2">Features</h3>
            <ul className="list-disc list-inside">
              {product.product_details.features.map((feature, index) => (
                <li key={index} className="mb-2">
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        );
      case "ratings":
        return (
          <div>
            <h2 className="text-2xl font-bold mb-4">Ratings & Reviews</h2>
            <p>No reviews yet.</p>
          </div>
        );
      case "faqs":
        return (
          <div>
            <h2 className="text-2xl font-bold mb-4">FAQs</h2>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="border-b border-gray-200 pb-4">
                  <h3 className="font-semibold">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div>
      <div className="flex my-10 justify-items-start px-4 ">
        {/* Image Gallery - 50% Width */}
        <div className="w-1/2 pr-6">
          <ImageGallery images={product.images} />
        </div>

        {/* Product Details - Fixed Width */}
        <div className="max-w-xl pl-6 flex flex-col ">
          {/* Product Title */}
          <div>
            <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
          </div>

          <div className="flex items-center mb-4 gap-1.5">
            <RenderStars rating={product.rating} />
            <p className="text-lg text-gray-800">
              {product.rating} / <span className="text-gray-600">5</span>
            </p>
          </div>

          {/* Pricing */}
          <div className="mb-6 flex gap-5">
            <p className="text-4xl font-bold">
              ${product.discount_price.toFixed(2)}
            </p>
            <p className="text-4xl font-semibold">
              <span className="line-through text-gray-400">
                ${product.regular_price.toFixed(2)}
              </span>
            </p>
          </div>

          <p className="text-gray-600 mb-4">{product.details}</p>
          <div className="border-t border-gray-200 my-4"></div>
          <p className="text-lg ">
            Brand
            <span className=" m-4 px-4  bg-gray-200 py-1 rounded-full">
              {product.brand}
            </span>
          </p>
          <div className="border-t border-gray-200 my-4"></div>

          {/* Add to cart & quantity */}
          <div className="mt-2 flex items-center gap-4 w-full">
            {/* Quantity Selector */}
            <div className="flex items-center justify-center w-40 h-10 overflow-hidden bg-gray-200 rounded-full py-3">
              <button
                className="px-3 py-1 bg-gray-200 text-gray-700 hover:bg-gray-300 focus:outline-none text-3xl"
                onClick={() => console.log("Decrease quantity")}
              >
                -
              </button>
              <span className="flex-1 text-center text-lg font-medium">1</span>
              <button
                className="px-3 py-1 bg-gray-200 text-gray-700 hover:bg-gray-300 focus:outline-none text-3xl"
                onClick={() => console.log("Increase quantity")}
              >
                +
              </button>
            </div>
            {/* Add to Cart Button */}
            <button
              className="px-6 py-3 bg-black w-70 text-white font-md rounded-full focus:outline-none shadow-lg"
              onClick={() => console.log("Add to cart clicked")}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
      <div className="mt-10 px-4">
        {/* Tab Navigation */}
        <div className="flex justify-around border-b border-gray-200 text-xl font-light">
          <button
            className={`px-4 py-2 ${
              activeTab === "details"
                ? "border-b-2 border-black font-semibold"
                : "text-gray-500"
            }`}
            onClick={() => setActiveTab("details")}
          >
            Product Details
          </button>
          <button
            className={`px-4 py-2 ${
              activeTab === "ratings"
                ? "border-b-2 border-black font-semibold"
                : "text-gray-500"
            }`}
            onClick={() => setActiveTab("ratings")}
          >
            Ratings & Reviews
          </button>
          <button
            className={`px-4 py-2 ${
              activeTab === "faqs"
                ? "border-b-2 border-black font-semibold"
                : "text-gray-500"
            }`}
            onClick={() => setActiveTab("faqs")}
          >
            FAQs
          </button>
        </div>

        {/* Tab Content */}
        <div className="mt-6">{renderContent()}</div>
      </div>
    </div>
  );
};

export default ProductDetails;
