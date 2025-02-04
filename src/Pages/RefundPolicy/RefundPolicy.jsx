import React from "react";

const RefundPolicy = () => {
  return (
    <div className="max-w-7xl mx-auto p-6   rounded-lg my-10">
      <h1 className="text-4xl font-bold text-center mb-6">Refund Policy</h1>

      <div className="space-y-6">
        {/* Introduction */}
        <section>
          <h2 className="text-2xl font-semibold mb-2">Introduction</h2>
          <p className="text-gray-700">
            At [Your Company Name], we strive to ensure that our customers are
            completely satisfied with their purchases. However, if you are not
            satisfied with your purchase, we offer a straightforward refund
            policy to make the process as easy as possible.
          </p>
        </section>

        {/* Eligibility */}
        <section>
          <h2 className="text-2xl font-semibold mb-2">
            Eligibility for Refunds
          </h2>
          <p className="text-gray-700">
            To be eligible for a refund, the following conditions must be met:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2 pl-5">
            <li>
              The item must be unused, in its original packaging, and in the
              same condition as when you received it.
            </li>
            <li>
              The request for a refund must be made within{" "}
              <strong>30 days</strong> of the purchase date.
            </li>
            <li>
              Proof of purchase (e.g., order number or receipt) must be
              provided.
            </li>
          </ul>
        </section>

        {/* Non-Refundable Items */}
        <section>
          <h2 className="text-2xl font-semibold mb-2">Non-Refundable Items</h2>
          <p className="text-gray-700">
            Certain items are not eligible for refunds, including:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2 pl-5">
            <li>Gift cards.</li>
            <li>Personalized or custom-made items.</li>
            <li>Items marked as "final sale" or "non-refundable."</li>
          </ul>
        </section>

        {/* Refund Process */}
        <section>
          <h2 className="text-2xl font-semibold mb-2">Refund Process</h2>
          <p className="text-gray-700">
            To request a refund, please follow these steps:
          </p>
          <ol className="list-disc list-inside text-gray-700 space-y-2 pl-5">
            <li>
              Contact our customer support team at{" "}
              <a
                href="mailto:support@yourcompany.com"
                className="text-blue-500 hover:underline"
              >
                support@yourcompany.com
              </a>{" "}
              within 30 days of receiving your order.
            </li>
            <li>
              Provide your order number and a detailed explanation of why you
              are requesting a refund.
            </li>
            <li>
              If your refund is approved, you will receive instructions on how
              to return the item.
            </li>
            <li>
              Once the returned item is received and inspected, we will process
              your refund within <strong>7 business days</strong>.
            </li>
          </ol>
        </section>

        {/* Refund Methods */}
        <section>
          <h2 className="text-2xl font-semibold mb-2">Refund Methods</h2>
          <p className="text-gray-700">
            Refunds will be issued to the original payment method used for the
            purchase. Please allow up to <strong>10 business days</strong> for
            the refund to reflect in your account, depending on your payment
            provider.
          </p>
        </section>

        {/* Shipping Costs */}
        <section>
          <h2 className="text-2xl font-semibold mb-2">Shipping Costs</h2>
          <p className="text-gray-700">
            Shipping costs are non-refundable. If you are returning an item, you
            will be responsible for the cost of return shipping unless the
            return is due to an error on our part (e.g., wrong item shipped or
            defective product).
          </p>
        </section>

        {/* Contact Us */}
        <section>
          <h2 className="text-2xl font-semibold mb-2">Contact Us</h2>
          <p className="text-gray-700">
            If you have any questions about our refund policy, please contact us
            at:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2 pl-5">
            <li>
              Email:{" "}
              <a
                href="mailto:support@yourcompany.com"
                className="text-blue-500 hover:underline"
              >
                support@yourcompany.com
              </a>
            </li>
            <li>Phone: [Your Customer Support Phone Number]</li>
            <li>Address: [Your Company Address]</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default RefundPolicy;
