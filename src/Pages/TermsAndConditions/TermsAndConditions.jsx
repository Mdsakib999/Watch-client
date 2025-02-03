import React from "react";

const TermsAndConditions = () => {
  return (
    <div className="max-w-7xl mx-auto p-8 ">
      <h1 className="text-4xl font-bold text-gray-900 mb-6 text-center">
        Terms & Conditions
      </h1>

      <div className="space-y-8 text-gray-700">
        {/* Section 1: General */}
        <div>
          <h2 className="text-2xl font-semibold text-gray-800">1. General</h2>
          <p className="mt-2">
            Welcome to our e-commerce store. By accessing and using our website,
            you agree to abide by the terms and policies outlined below.
          </p>
        </div>

        {/* Section 2: Payments */}
        <div>
          <h2 className="text-2xl font-semibold text-gray-800">2. Payments</h2>
          <p className="mt-2">
            We accept major credit cards, PayPal, and other secure payment
            methods. All transactions are processed securely and encrypted.
          </p>
        </div>

        {/* Section 3: Shipping & Delivery */}
        <div>
          <h2 className="text-2xl font-semibold text-gray-800">
            3. Shipping & Delivery
          </h2>
          <p className="mt-2">
            Orders are processed within 2-3 business days. Shipping times vary
            based on location and courier services. You will receive a tracking
            number once your order has shipped.
          </p>
        </div>

        {/* Section 4: Returns & Refunds */}
        <div>
          <h2 className="text-2xl font-semibold text-gray-800">
            4. Returns & Refunds
          </h2>
          <p className="mt-2">
            If you're not satisfied with your purchase, you can return it within
            14 days of delivery for a refund. Items must be unused and in their
            original packaging.
          </p>
        </div>

        {/* Section 5: Privacy Policy */}
        <div>
          <h2 className="text-2xl font-semibold text-gray-800">
            5. Privacy Policy
          </h2>
          <p className="mt-2">
            We value your privacy. Your personal information is securely stored
            and used only for order processing and customer service. We do not
            share your data with third parties.
          </p>
        </div>

        {/* Section 6: Contact Information */}
        <div>
          <h2 className="text-2xl font-semibold text-gray-800">
            6. Contact Us
          </h2>
          <p className="mt-2">
            If you have any questions about our terms, feel free to contact us
            at{" "}
            <a
              href="mailto:support@yourecommerce.com"
              className="text-blue-600 hover:underline"
            >
              support@yourecommerce.com
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;
