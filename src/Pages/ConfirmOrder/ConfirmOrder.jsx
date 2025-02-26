import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { BsCheckCircle } from "react-icons/bs"; // Heroicons for the success icon

const ConfirmOrder = () => {
  const navigate = useNavigate();
  const location = useLocation()
  console.log(location);
  const orderInfo = location.state

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-lg text-center ">
        <BsCheckCircle className="h-16 w-16 text-green-500 mx-auto" />
        <h1 className="text-2xl font-bold text-gray-800 mt-4">
          Order Confirmed!
        </h1>
        <p className="text-gray-600 mt-2">
          Thank you for your purchase. Your order has been successfully placed.
        </p>

        {/* Order Details */}
        <div className="mt-6 border-t border-gray-300 pt-4 text-left ">
          <h2 className="text-lg font-semibold">Order Summary</h2>
          <div className="mt-2 text-gray-600">
            <p>
              <span className="font-medium">Order ID:</span> {orderInfo.orderId}
            </p>
            <p>
              <span className="font-medium">Total Amount:</span> ${orderInfo.totalAmount}
            </p>
            <p>
              <span className="font-medium">Name: </span> {orderInfo.userLocation.name}
            </p>
            <p>
              <span className="font-medium">Contact Number: </span> {orderInfo.userLocation.contactNo}
            </p>
            <p>
              <span className="font-medium">Address: {orderInfo.userLocation.location}, {orderInfo.userLocation.city} </span>
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <button
          onClick={() => navigate("/")}
          className="mt-6 w-full bg-black text-white py-3 rounded-full font-medium hover:bg-gray-900 transition duration-300 cursor-pointer"
        >
          Go to Homepage
        </button>
      </div>
    </div>
  );
};

export default ConfirmOrder;
