import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom"; // Import useNavigate
import { deleteDB, getShoppingCart } from "../../utils/setLocalStorage";
import Swal from "sweetalert2";
import { useConfirmOrderMutation, useGetMeQuery } from "../../Redux/features/User/user.api";
import { toast } from 'sonner';
import { axios } from 'axios';

const Checkout = () => {
  const navigate = useNavigate(); // Initialize navigate
  const { data: userData = {} } = useGetMeQuery()
  const [confirmOrder] = useConfirmOrderMutation()
  console.log(userData);
  const [products, setProducts] = useState([])
  const [couponDisCountTk, setCouponDisCountTk] = useState('')
  const [couponText, setCouponText] = useState('')
  const [userLocation, setUserLocation] = useState({
    location: "",
    contactNo: "",
    name: "",
    city: ""
  });
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  useEffect(() => {
    if (userData) {
      setUserLocation({
        location: userData.location,
        contactNo: userData?.contactNo,
        name: userData?.name,
        city: userData?.city,
      });
    } else {
      setUserLocation({
        location: "",
        contactNo: "",
        userName: "",
        city: ''
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



  // Calculate subtotal
  const subtotal = products.reduce(
    (acc, product) => acc + product.price * product.quantity,
    0
  );
  const shipping = 5.0;
  const tax = 8.0;
  const total = subtotal + shipping + tax - (couponDisCountTk && Number(couponDisCountTk))
  const handlePlaceOrder = async () => {
    try {
      console.log(userLocation.location);
      if (!userLocation.location || userLocation.location.trim().length === 0) {
        console.log(userLocation.location);
        return toast.error("Please set your location.");
      }

      if (!userLocation.contactNo || userLocation.contactNo.trim().length === 0) {
        return toast.error("Please set your contact number.");
      }
      if (!userLocation.city || userLocation.postCode.trim().length === 0) {
        return toast.error("Please set your City");
      }


      const product = products.map((item) => ({
        productId: item.productId,
        nicotineStrength: item.nicotineStrength,
        quantity: item.quantity.toString(),
      }));

      const userId = userData ? userData?._id : null;
      const contactNo = userLocation.contactNo
      // userLocation.location = `${userLocation.location}, ${userLocation.district}`
      delete userLocation.contactNo
      const orderData = {
        product,
        contactNo,
        userLocation,
        shippingFee: String(shipping),
        totalAmount: total.toString(),
        ...(userId && { userId }),
        ...(couponDisCountTk && { discount: couponDisCountTk }),
      };
      console.log(orderData);
      const res = await confirmOrder(orderData)
      console.log(res);
      if (res?.data) {
        setCouponDisCountTk("");
        deleteDB();
        navigate("/confirm-checkout", { state: res?.data });
        toast.success("Order placed successfully!");
      } else {
        toast.error(res.error.data.message);
      }
    } catch (error) {
      console.error("Error placing order:", error);
      toast.error("Failed to place order. Please try again.");
    }
  };

  const applyCoupon = async () => {
    if (Number(total) < 1000) {
      return Swal.fire({
        title: "The Internet?",
        text: "That thing is still around?",
        icon: "question"
      });
    }

    try {
      // Optionally, set a loading state here
      const res = await axios.post(`${import.meta.env.VITE_SERVER_URL}/validCoupon`, { couponText });
      console.log(res.data);




      if (res?.data) {
        setCouponDisCountTk(res.data.discount); // Update the discount state
      }

    } catch (error) {
      console.error("Error applying coupon:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="container mx-auto lg:px-28">
        <h1 className="text-3xl font-bold text-center mb-8">Checkout</h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8  px-4 md:px-0">
          {/* Shipping Details Form */}
          <div className="lg:col-span-1 bg-white p-6 rounded-lg shadow-md ">
            <h2 className="text-xl font-semibold mb-6">Shipping Details</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                  placeholder="John"
                  value={userLocation.name}
                  required
                  onChange={(e) =>
                    setUserLocation({
                      ...userLocation,
                      name: e.target.value,
                    })
                  }
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Address
                </label>
                <input
                  type="text"
                  value={userLocation.location}
                  required
                  onChange={(e) =>
                    setUserLocation({
                      ...userLocation,
                      location: e.target.value,
                    })
                  }
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                  placeholder="123 Main St"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  City
                </label>
                <input
                  type="text"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                  placeholder="New York"
                  value={userLocation.city}
                  required
                  onChange={(e) =>
                    setUserLocation({
                      ...userLocation,
                      city: e.target.value,
                    })
                  }
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Phone Number
                </label>
                <input
                  type="tel"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                  placeholder="+1 123 456 7890"
                  value={userLocation.contactNo}
                  required
                  onChange={(e) =>
                    setUserLocation({
                      ...userLocation,
                      contactNo: e.target.value,
                    })
                  }
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
                      {product.price}    X {product.quantity}
                    </span>
                  </div>

                  <span>${(product.price * product.quantity).toFixed(2)}</span>
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
              {
                couponDisCountTk && <div className="flex justify-between">
                  <span>Discount</span>
                  <span>-${couponDisCountTk}</span>
                </div>

              }
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
                  onChange={(e) => setCouponText(e.target.value)}
                  className="flex-1 px-3 py-2 border border-gray-300 bg-gray-200 focus:outline-none focus:ring-1 focus:ring-black rounded-full"
                  placeholder="Enter promo code"
                />
                <button onClick={applyCoupon} className="px-8 py-2 bg-black text-white rounded-full focus:outline-none focus:ring-1 cursor-pointer">
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
