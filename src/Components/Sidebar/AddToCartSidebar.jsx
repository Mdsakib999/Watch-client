import { useEffect, useState } from "react";
import { RxCross2 } from "react-icons/rx";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { BsCartXFill } from "react-icons/bs";
import { addToDb, getShoppingCart, removeFromDb, removeOneFromDb } from "../../utils/setLocalStorage";

const AddToCartSidebar = ({ isSidebarOpen, setIsSidebarOpen }) => {
  const [data, setData] = useState([]);

  const navigate = useNavigate();
  useEffect(() => {
    const fetchData = () => {
      const localData = getShoppingCart();
      setData(localData);
    };
    // Add event listener for "shopping-cart-updated"
    window.addEventListener("shopping-cart-updated", fetchData);

    // Call fetchData initially
    fetchData();

    // Cleanup listener on component unmount
    return () => {
      window.removeEventListener("shopping-cart-updated", fetchData);
    };
  }, []);

  // Handle adding an item to the cart
  const handleAddToCart = (product) => {
    addToDb(product)
  };

  // Handle removing one quantity of an item from the cart
  const handleRemoveCart = (product) => {
    removeOneFromDb(product)
  };

  // Handle deleting an item entirely from the cart
  const handleDelete = (product) => {
    Swal.fire({
      title: "Are You Sure For Remove?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "YES",
    }).then((result) => {
      if (result.isConfirmed) {
        removeFromDb(product)
        Swal.fire({
          title: "Product Removed",
          text: "Product removed from cart successfully.",
          showConfirmButton: false,
          icon: "success",
          timer: 2000,
        });
      }
    });
  };

  // Calculate total price of items in the cart
  const totalPrice = data.reduce(
    (acc, cur) => acc + cur.quantity * cur.price,
    0
  );

  return (
    <div
      className={`${isSidebarOpen
        ? "fixed right-0 top-[50%] transform -translate-y-1/2 z-50"
        : "fixed right-[-1000px] top-1/2 transform -translate-y-1/2 z-40"
        } overflow-hidden h-[90vh] md:h-[88%] w-full sm:w-[75%] md:w-[50%] lg:w-[35%] 2xl:w-[28%] transition-right duration-500 bg-white text-black rounded-md shadow-md`}
    >
      <div className="flex flex-col h-full">
        {/* Sidebar Header */}
        <div className="flex justify-between items-center px-4 py-4  bg-slate-100">
          <p className="text-2xl font-bold">Shopping Cart</p>
          <span
            onClick={() => setIsSidebarOpen(false)}
            className="text-3xl cursor-pointer  "
          >
            <RxCross2 className="p-2 text-gray-500 rounded-full border hover:text-red-500" />
          </span>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto px-4 py-4 ">
          {data.length > 0 ? (
            data.map((item) => (
              <div
                key={item.id}
                className="flex justify-between mt-8 items-center"
              >
                <div className="flex items-center gap-3 w-[50%]">
                  <img
                    className="w-20 h-20 object-cover rounded"
                    src={item.image}
                    alt={item.name}
                  />
                  <div className="flex flex-col">
                    <p className="font-medium">{item.name}</p>
                    <p className="text-gray-600">Tk {item.price}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handleRemoveCart(item)}
                    className="w-8 h-8 flex items-center justify-center bg-gray-200 rounded hover:bg-gray-300"
                  >
                    -
                  </button>
                  <span className="px-2">{item.quantity}</span>
                  <button
                    onClick={() => handleAddToCart(item)}
                    className="w-8 h-8 flex items-center justify-center bg-gray-200 rounded hover:bg-gray-300"
                  >
                    +
                  </button>
                </div>
                <span
                  onClick={() => handleDelete(item)}
                  className="text-2xl cursor-pointer hover:text-red-600"
                >
                  <RxCross2 />
                </span>
              </div>
            ))
          ) : (
            <div className="text-center text-gray-500 mt-[20%] flex flex-col items-center">
              <p className="text-5xl mb-2 text-gray-300">
                <BsCartXFill />
              </p>
              <p>Cart is empty</p>
            </div>
          )}
        </div>

        {/* Sidebar Footer */}
        <div className="bg-gray-200  px-4 pb-2">
          <div className="flex justify-between py-2">
            <span className="text-xl font-semibold">Subtotal</span>
            <span className="text-xl font-semibold">
              Tk {totalPrice.toFixed(2)}
            </span>
          </div>
          <button
            onClick={() => {
              setIsSidebarOpen(false);
              navigate("checkout");
            }}
            className="w-full bg-black font-semibold mt-3 text-white py-3 text-xl rounded-full"
          >
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddToCartSidebar;
