import {
  useConfirmOrderMutation,
  useGetMeQuery,
} from "../../Redux/features/User/user.api";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { deleteDB, getShoppingCart } from "../../utils/setLocalStorage";
import { toast } from "sonner";

const Checkout = () => {
  const navigate = useNavigate();
  const { data: userData = {} } = useGetMeQuery();
  const [confirmOrder] = useConfirmOrderMutation();
  const [products, setProducts] = useState([]);
  const [couponDisCountTk, setCouponDisCountTk] = useState("");
  const [couponText, setCouponText] = useState("");
  const [errors, setErrors] = useState({});
  const [userLocation, setUserLocation] = useState({
    location: "",
    contactNo: "",
    name: "",
    city: "",
  });
  // New state for payment details
  const [cardNumber, setCardNumber] = useState("");
  const [expirationDate, setExpirationDate] = useState("");
  const [cvv, setCvv] = useState("");

  useEffect(() => {
    if (userData) {
      setUserLocation({
        name: userData.name || "",
        contactNo: userData.contactNo || "",
        location: userData.location || "",
        city: userData.city || "",
      });
    }
  }, [userData]);

  useEffect(() => {
    const fetchData = () => {
      const localData = getShoppingCart();
      setProducts(localData);
    };
    window.addEventListener("shopping-cart-updated", fetchData);
    fetchData();
    return () => {
      window.removeEventListener("shopping-cart-updated", fetchData);
    };
  }, []);

  // Combined validation for shipping and payment fields
  const validateAllFields = () => {
    const tempErrors = {};

    // Shipping validations
    if (!userLocation.name.trim()) tempErrors.name = "Name is required.";
    if (!userLocation.location.trim())
      tempErrors.location = "Address is required.";
    if (!userLocation.city.trim()) tempErrors.city = "City is required.";
    if (!userLocation.contactNo.trim()) {
      tempErrors.contactNo = "Phone number is required.";
    } else if (!/^\d+$/.test(userLocation.contactNo)) {
      tempErrors.contactNo = "Phone number must be number.";
    }

    // Payment validations
    if (!cardNumber.trim()) tempErrors.cardNumber = "Card Number is required.";
    if (!expirationDate.trim())
      tempErrors.expirationDate = "Expiration Date is required.";
    if (!cvv.trim()) tempErrors.cvv = "CVV is required.";

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const subtotal = products.reduce(
    (acc, product) => acc + product.price * product.quantity,
    0
  );
  const shipping = 5.0;
  const tax = 8.0;
  const total =
    subtotal + shipping + tax - (couponDisCountTk && Number(couponDisCountTk));

  const handlePlaceOrder = async () => {
    if (!validateAllFields()) {
      return;
    }
    try {
      const product = products.map((item) => ({
        productId: item.productId,
        nicotineStrength: item.nicotineStrength,
        quantity: item.quantity.toString(),
      }));
      const orderData = {
        product,
        contactNo: userLocation.contactNo,
        userLocation,
        shippingFee: String(shipping),
        totalAmount: total.toString(),
        ...(userData?._id && { userId: userData?._id }),
        ...(couponDisCountTk && { discount: couponDisCountTk }),
        // Optionally, you could include payment details here if needed:
        // payment: { cardNumber, expirationDate, cvv }
      };
      const res = await confirmOrder(orderData);
      if (res?.data) {
        setCouponDisCountTk("");
        deleteDB();
        navigate("/confirmOrder", { state: res?.data });
        toast.success("Order placed successfully!");
      } else {
        toast.error(res.error.data.message);
      }
    } catch (error) {
      console.error("Error placing order:", error);
      toast.error("Failed to place order. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="container mx-auto lg:px-28">
        <h1 className="text-3xl font-bold text-center mb-8">Checkout</h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 px-4 md:px-0">
          <div className="lg:col-span-1 bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-6">Shipping Details</h2>
            <form className="space-y-4">
              {Object.entries(userLocation).map(([key, value]) => (
                <div key={key}>
                  <label className="block text-sm font-medium text-gray-700 capitalize">
                    {key.replace("No", " Number")}:
                  </label>
                  <input
                    type="text"
                    value={value}
                    onChange={(e) =>
                      setUserLocation({
                        ...userLocation,
                        [key]: e.target.value,
                      })
                    }
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-1 focus:ring-blue-500"
                  />
                  {errors[key] && (
                    <p className="text-red-500 text-xs mt-1">{errors[key]}</p>
                  )}
                </div>
              ))}
            </form>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md lg:col-span-1">
            <h2 className="text-xl font-semibold mb-6">Order Summary</h2>
            <div className="space-y-4 mb-6">
              {products?.length > 0 &&
                products.map((product, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between gap-4"
                  >
                    <img
                      className="w-10 h-10 object-cover rounded"
                      src={product?.image}
                      alt={product?.name}
                    />
                    <div className="flex-1">
                      <span>{product?.name}</span>
                      <p className="text-gray-600">
                        $ {product?.price} x {product?.quantity}
                      </p>
                    </div>
                    <span>
                      ${(product?.price * product?.quantity).toFixed(2)}
                    </span>
                  </div>
                ))}
            </div>
            <div className="border-t border-gray-300 pt-4"></div>
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
              {couponDisCountTk && (
                <div className="flex justify-between">
                  <span>Discount</span>
                  <span>-${couponDisCountTk}</span>
                </div>
              )}
              <div className="flex justify-between font-semibold">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>
            <div className="mt-6">
              <div className="flex gap-2">
                <input
                  type="text"
                  onChange={(e) => setCouponText(e.target.value)}
                  className="flex-1 px-3 py-2 border border-gray-300 bg-gray-200 focus:outline-none focus:ring-1 focus:ring-black rounded-full"
                  placeholder="Enter promo code"
                />
                <button
                  onClick={() => {}}
                  className="px-8 py-2 bg-black text-white rounded-full focus:outline-none focus:ring-1 cursor-pointer"
                >
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
                    value={cardNumber}
                    onChange={(e) => setCardNumber(e.target.value)}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                    placeholder="1234 5678 9012 3456"
                  />
                  {errors.cardNumber && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.cardNumber}
                    </p>
                  )}
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Expiration Date
                    </label>
                    <input
                      type="text"
                      value={expirationDate}
                      onChange={(e) => setExpirationDate(e.target.value)}
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                      placeholder="MM/YY"
                    />
                    {errors.expirationDate && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.expirationDate}
                      </p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      CVV
                    </label>
                    <input
                      type="text"
                      value={cvv}
                      onChange={(e) => setCvv(e.target.value)}
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                      placeholder="123"
                    />
                    {errors.cvv && (
                      <p className="text-red-500 text-xs mt-1">{errors.cvv}</p>
                    )}
                  </div>
                </div>
              </div>
            </div>

            <button
              onClick={handlePlaceOrder}
              disabled={products?.length === 0}
              className={`w-full mt-6 py-3 rounded-full text-white ${
                products?.length === 0
                  ? "bg-gray-600 cursor-not-allowed "
                  : "bg-black cursor-pointer"
              }`}
            >
              <Link to="/confirmOrder">
              Place Order
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
