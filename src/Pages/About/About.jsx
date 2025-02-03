import React from "react";

const About = () => {
  return (
    <div className="relative">
      {/* Hero Section */}
      <div className="flex flex-col lg:flex-row items-center justify-between px-10 py-16 bg-black text-white">
        <div className="lg:w-1/2 text-center lg:text-left">
          <h1 className="text-4xl lg:text-6xl font-bold animate-fade-up">
            About Us
          </h1>
          <p className="text-lg text-gray-400 pt-3 lg:w-[80%]">
            Welcome to [Your Brand Name], where quality meets convenience. We
            are dedicated to delivering top-notch products and exceptional
            customer experiences.
          </p>
        </div>
        <div className="lg:w-1/2 mt-8 lg:mt-0">
          <img
            src="https://source.unsplash.com/600x400/?shopping,ecommerce"
            alt="About Us"
            className="w-full rounded-lg shadow-lg"
          />
        </div>
      </div>

      {/* Our Story Section */}
      <div className="max-w-4xl mx-auto p-8 text-gray-700">
        <h2 className="text-3xl font-semibold text-center">Our Story</h2>
        <p className="mt-4 text-lg text-center">
          Founded in [Year], [Your Brand Name] started with a mission to provide
          high-quality, affordable products to customers worldwide. Our passion
          for excellence drives us to curate the best items while ensuring a
          seamless shopping experience.
        </p>
      </div>

      {/* Why Choose Us Section */}
      <div className="bg-gray-100 py-12 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-semibold text-center">Why Choose Us?</h2>
          <div className="mt-8 grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-xl font-semibold">🌟 Premium Quality</h3>
              <p className="mt-2 text-gray-600">
                We source only the best products to ensure quality and
                durability.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold">🚚 Fast Shipping</h3>
              <p className="mt-2 text-gray-600">
                Your orders are processed quickly with reliable delivery
                services.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold">📞 Excellent Support</h3>
              <p className="mt-2 text-gray-600">
                Our team is always ready to assist you with any inquiries.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Team or Vision Section */}
      <div className="max-w-4xl mx-auto p-8 text-gray-700">
        <h2 className="text-3xl font-semibold text-center">Our Vision</h2>
        <p className="mt-4 text-lg text-center">
          At [Your Brand Name], we envision a future where shopping is
          effortless and enjoyable. Our goal is to create an online marketplace
          that values trust, transparency, and customer satisfaction above all.
        </p>
      </div>
    </div>
  );
};

export default About;
