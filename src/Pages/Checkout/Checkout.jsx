import React, { useEffect } from "react";

const Checkout = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  // Sample product data
  const products = [
    {
      id: 1,
      name: "Golden Watch",
      price: 99.99,
      quantity: 1,
      image:
        "https://img.freepik.com/free-vector/smart-watch-realistic-image-black_1284-11873.jpg?t=st=1738397812~exp=1738401412~hmac=ded31e873f93797991d8a0b04c5c8ef118271eb11c190df04c3ed89c9d901460&w=740",
    },
    {
      id: 2,
      name: "Smart Watch",
      price: 299.99,
      quantity: 2,
      image:
        "https://img.freepik.com/free-psd/watch-isolated-transparent-background_191095-27096.jpg?t=st=1738397888~exp=1738401488~hmac=0ce341d923a75484543811a25dc1225d446a2ddcc63cfc663bcc1d6a459f2c9c&w=740",
    },
  ];

  // Calculate subtotal
  const subtotal = products.reduce(
    (acc, product) => acc + product.price * product.quantity,
    0
  );
  const shipping = 5.0;
  const tax = 8.0;
  const total = subtotal + shipping + tax;

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="container mx-auto lg:px-28">
        <h1 className="text-3xl font-bold text-center mb-8">Checkout</h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Shipping Details Form */}
          <div className="lg:col-span-1 bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-6">Shipping Details</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="John"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Address
                </label>
                <input
                  type="text"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="123 Main St"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  City
                </label>
                <input
                  type="text"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="New York"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Phone Number
                </label>
                <input
                  type="tel"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="+1 123 456 7890"
                />
              </div>
            </form>
          </div>

          {/* Order Summary */}
          <div className="bg-white p-6 rounded-lg shadow-md lg:col-span-1">
            <h2 className="text-xl font-semibold mb-6">Order Summary</h2>

            {/* Product List */}
            <div className="space-y-4 mb-6">
              {products.map((product, index) => (
                <div key={index} className="flex justify-between">
                  <div className="flex items-center gap-5">
                    <img
                      className="w-10 h-10 object-cover rounded"
                      src={product.image}
                      alt={product.name}
                    />
                    <span>{product.name}</span>
                    <span className="text-gray-600  text-sm">
                      {" "}
                      X {product.quantity}
                    </span>
                  </div>

                  <span>${product.price.toFixed(2) * product.quantity}</span>
                </div>
              ))}
            </div>
            <div className="border-t border-gray-300 pt-4"></div>
            {/* Subtotal, Shipping, Tax, and Total */}
            <div className="space-y-4">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span>${shipping.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Tax</span>
                <span>${tax.toFixed(2)}</span>
              </div>
              <div className="border-t border-gray-300 pt-4">
                <div className="flex justify-between font-semibold">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>
              </div>
            </div>

            {/* Promo Code Section */}
            <div className="mt-6">
              <div className="flex gap-2">
                <input
                  type="text"
                  className="flex-1 px-3 py-2 border border-gray-300 bg-gray-200 focus:outline-none focus:ring-1 focus:ring-black rounded-full"
                  placeholder="Enter promo code"
                />
                <button className="px-8 py-2 bg-black text-white rounded-full focus:outline-none focus:ring-1 cursor-pointer">
                  Apply
                </button>
              </div>
            </div>

            {/* Payment Section */}
            <div className="mt-6">
              <h2 className="text-xl font-semibold mb-4">Payment</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Card Number
                  </label>
                  <input
                    type="text"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                    placeholder="1234 5678 9012 3456"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Expiration Date
                    </label>
                    <input
                      type="text"
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                      placeholder="MM/YY"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      CVV
                    </label>
                    <input
                      type="text"
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                      placeholder="123"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Place Order Button */}
            <button className="w-full mt-6 bg-black text-white py-3 rounded-full focus:outline-none focus:ring-1 cursor-pointer">
              Place Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
