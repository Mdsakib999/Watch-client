import React, { useEffect, useState } from "react";
import { FaStar, FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { addToDb } from "../../../utils/setLocalStorage";
import Swal from "sweetalert2";

const HomeProduct = () => {
  const [products, setProducts] = useState([]);
  const [selectedGender, setSelectedGender] = useState("All");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("http://localhost:5000/product");
        const data = await response.json();

        // Ensure the response has a 'data' array
        if (data?.data && Array.isArray(data.data)) {
          const lastFourProducts = data.data.slice(-4);
          setProducts(lastFourProducts);
        } else {
          console.error("Unexpected API response format:", data);
        }
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  const filteredProducts =
    selectedGender === "All"
      ? products
      : products.filter((product) => product.gender === selectedGender);

  return (
    <div className="mt-10 px-10 pb-10 lg:w-[90%] mx-auto max-w-[1500px]">
      <p className="text-center text-4xl font-semibold">OUR PRODUCTS</p>
      <div className="flex gap-x-4 justify-center mt-7 mb-8">
        {["All", "Male", "Female"].map((gender) => (
          <button
            key={gender}
            onClick={() => setSelectedGender(gender)}
            className={`px-5 font-semibold rounded-md border ${
              selectedGender === gender
                ? "bg-black bg-gradient-to-r from-[#03b8e1] to-[#112949] text-white py-1 border"
                : ""
            }`}
          >
            {gender === "All" ? "ALL" : gender.toUpperCase()}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))
        ) : (
          <p className="text-center text-gray-500 col-span-4">
            No products available.
          </p>
        )}
      </div>

      <div className="mt-12 flex justify-center group">
        <Link
          to="/allProducts"
          className="flex items-center gap-x-2 px-7 py-3 font-semibold text-white uppercase transition-all duration-500 bg-gradient-to-r from-[#03b8e1] via-[#112949] to-[#00c4f5] bg-[length:200%_auto] rounded-lg shadow-lg hover:bg-right"
        >
          View All <FaArrowRightLong />
        </Link>
      </div>
    </div>
  );
};

const ProductCard = ({ product }) => {
  const discountPercentage = calculateDiscountPercentage(
    product.regular_price,
    product.discount_price
  );

  // Handle Add to Cart Function
  const handelAddToCart = (product) => {
    const cartData = {
      productId: product._id,
      image: product.images[0],
      price: Math.round(product.discount_price),
      quantity: 1,
      name: product.name,
    };
    addToDb(cartData);
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Added to Cart",
      showConfirmButton: false,
      timer: 1500,
    });
  };

  return (
    <div className="border border-gray-300 rounded-xl">
      <Link to={`/watches/${product._id}`}>
        <img
          className="h-[300px] w-full rounded-t-xl"
          src={product.images?.[0]}
          alt={product.name}
        />
        <div className="px-4">
          <p className="text-xl font-semibold mt-4">{product.name}</p>
          <div className="flex items-center gap-x-2 text-yellow-400 my-2">
            {[...Array(5)].map((_, index) => (
              <FaStar
                key={index}
                className={
                  index < Math.round(product.rating)
                    ? "text-yellow-400"
                    : "text-gray-300"
                }
              />
            ))}
            <p className="text-black">{product.rating}/5.0</p>
          </div>
          <div className="flex gap-x-3 justify-between items-center mb-5">
            <p className="text-xl font-bold">${product.discount_price}</p>
            <del className="text-xl font-semibold text-gray-400">
              ${product.regular_price}
            </del>
            <p className="text-red-500 font-semibold px-2 rounded-full bg-red-100">
              - {discountPercentage}%
            </p>
          </div>
          <div className="flex justify-center">
            <Link
            to={""}
              onClick={() => handelAddToCart(product)}
              className="border border-gray-400 px-4 py-1 mb-4 flex justify-center rounded-lg font-semibold hover:bg-white bg-black hover:text-black text-white"
            >
              Add to Cart
            </Link>
          </div>
        </div>
      </Link>
    </div>
  );
};

const calculateDiscountPercentage = (originalPrice, price) => {
  return Math.round(((originalPrice - price) / originalPrice) * 100);
};

export default HomeProduct;
