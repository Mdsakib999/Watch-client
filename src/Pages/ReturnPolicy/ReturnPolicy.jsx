import React from "react";

const ReturnPolicy = () => {
  return (
    <div className="max-w-7xl mx-auto p-6 rounded-lg my-10">
      <h1 className="text-4xl font-bold text-center mb-6">Return Policy</h1>

      <div className="space-y-6">
        {/* Introduction */}
        <section>
          <h2 className="text-2xl font-semibold mb-2">Introduction</h2>
          <p className="text-gray-700">
            At [Your Company Name], we want you to be completely satisfied with
            your purchase. If you are not satisfied, you may return eligible
            items in accordance with the terms outlined in this policy.
          </p>
        </section>

        {/* Eligibility */}
        <section>
          <h2 className="text-2xl font-semibold mb-2">
            Eligibility for Returns
          </h2>
          <p className="text-gray-700">
            To be eligible for a return, the following conditions must be met:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2 pl-5">
            <li>
              The item must be unused, in its original packaging, and in the
              same condition as when you received it.
            </li>
            <li>
              The request for a return must be made within{" "}
              <strong>30 days</strong> of the purchase date.
            </li>
            <li>
              Proof of purchase (e.g., order number or receipt) must be
              provided.
            </li>
          </ul>
        </section>

        {/* Non-Returnable Items */}
        <section>
          <h2 className="text-2xl font-semibold mb-2">Non-Returnable Items</h2>
          <p className="text-gray-700">
            Certain items are not eligible for returns, including:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2 pl-5">
            <li>Gift cards.</li>
            <li>Personalized or custom-made items.</li>
            <li>Items marked as "final sale" or "non-returnable."</li>
          </ul>
        </section>

        {/* Return Process */}
        <section>
          <h2 className="text-2xl font-semibold mb-2">Return Process</h2>
          <p className="text-gray-700">
            To initiate a return, please follow these steps:
          </p>
          <ol className="list-decimal list-inside text-gray-700 space-y-2 pl-5">
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
              are requesting a return.
            </li>
            <li>
              If your return is approved, you will receive a Return
              Authorization Number (RAN) and instructions on how to return the
              item.
            </li>
            <li>
              Pack the item securely in its original packaging, include the RAN,
              and ship it to the provided address.
            </li>
          </ol>
        </section>

        {/* Return Shipping Costs */}
        <section>
          <h2 className="text-2xl font-semibold mb-2">Return Shipping Costs</h2>
          <p className="text-gray-700">
            Customers are responsible for the cost of return shipping unless the
            return is due to an error on our part (e.g., wrong item shipped or
            defective product). We recommend using a trackable shipping service
            to ensure the item is received.
          </p>
        </section>

        {/* Refunds for Returns */}
        <section>
          <h2 className="text-2xl font-semibold mb-2">Refunds for Returns</h2>
          <p className="text-gray-700">
            Once the returned item is received and inspected, we will process
            your refund within <strong>7 business days</strong>. Refunds will be
            issued to the original payment method used for the purchase. Please
            allow up to <strong>10 business days</strong> for the refund to
            reflect in your account, depending on your payment provider.
          </p>
        </section>

        {/* Exchanges */}
        <section>
          <h2 className="text-2xl font-semibold mb-2">Exchanges</h2>
          <p className="text-gray-700">
            If you would like to exchange an item, please contact our customer
            support team at{" "}
            <a
              href="mailto:support@yourcompany.com"
              className="text-blue-500 hover:underline"
            >
              support@yourcompany.com
            </a>
            . Exchanges are subject to product availability.
          </p>
        </section>

        {/* Contact Us */}
        <section>
          <h2 className="text-2xl font-semibold mb-2">Contact Us</h2>
          <p className="text-gray-700">
            If you have any questions about our return policy, please contact us
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

export default ReturnPolicy;
