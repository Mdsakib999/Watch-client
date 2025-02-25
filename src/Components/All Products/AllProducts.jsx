// src/AllProducts.js
import { useEffect, useState } from "react";
import { FaStar, FaTimes } from "react-icons/fa";
import { data } from "../../../public/data.js";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";
import { useGetAllProductQuery } from "../../Redux/features/Admin/admin.api.js";
import { addToDb } from "../../utils/setLocalStorage.js";
import Swal from "sweetalert2";

const AllProducts = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const [filters, setFilters] = useState({
    category: [],
    brand: [],
    gender: [],
    price: [],
  });
  const { data: productData, isLoading } = useGetAllProductQuery([{ name: 'limit', value: 100000 }])

  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const handleFilterChange = (filterType, value) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [filterType]: prevFilters[filterType].includes(value)
        ? prevFilters[filterType].filter((item) => item !== value)
        : [...prevFilters[filterType], value],
    }));
  };
  if (isLoading) {
    return <div>Loading..</div>
  }
  console.log(productData);
  const filteredProducts = productData?.data?.filter((product) => {
    return (
      (filters.category.length === 0 ||
        filters.category.includes(product.category)) &&
      (filters.brand.length === 0 || filters.brand.includes(product.brand)) &&
      (filters.gender.length === 0 ||
        filters.gender.includes(product.gender)) &&
      (filters.price.length === 0 ||
        filters.price.some((range) => {
          const [min, max] = range.split("-").map(Number);
          return product.regular_price >= min && product.regular_price <= max;
        }))
    );
  });
  const handelAddToCart = (data) => {
    const discountedPrice = data.discount_price
      ? Number(data.regular_price) - (Number(data.regular_price) * Number(data.discount_price)) / 100
      : Number(data.regular_price);
    const displayPrice = Math.round(discountedPrice);
    const cartData = {
      productId: data._id,
      image: data.images[0],
      price: displayPrice,
      quantity: 1,
      name: data.name,
    };
    addToDb(cartData);
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Add To Cart ",
      showConfirmButton: false,
      timer: 1500
    });
  }

  return (
    <div className="flex flex-col lg:flex-row lg:px-4 bg-gray-50 ">
      <button
        onClick={() => setIsFilterOpen(true)}
        className={`lg:hidden fixed  top-14 left-4 border  cursor-pointer hover:text-white px-2 py-2 rounded-full shadow-lg hover:bg-gray-800 transition-colors ${isFilterOpen ? "hidden" : ""
          }`}
      >
        <FaArrowRight />
      </button>

      {/* Filters Section */}
      <div
        className={`w-3/5 md:w-2/5 lg:w-1/5 p-4 lg:block bg-white transition-transform duration-300 mt-12 lg:mt-0 h-auto ${isFilterOpen ? "translate-x-0" : "-translate-x-full"
          } fixed inset-y-0 left-0 z-20 lg:relative lg:w-1/5 lg:translate-x-0`}
      >
        {isFilterOpen && (
          <button
            onClick={() => setIsFilterOpen(false)}
            className="absolute top-5 left-48 lg:hidden text-red-600 hover:text-red-500 cursor-pointer"
          >
            <FaTimes size={24} />
          </button>
        )}

        <h2 className="text-xl font-semibold mb-4 border-b pb-2 border-gray-300 ">
          Filters
        </h2>
        <div className="space-y-4">
          {/* Price Filter */}
          <div>
            <h3 className="font-semibold">Price</h3>
            {["0-100", "100-200", "200-500", "500-1000", "1000-5000", "10000-20000"].map(
              (range) => (
                <label key={range} className="flex items-center">
                  <input
                    type="checkbox"
                    className="mr-2"
                    onChange={() => handleFilterChange("price", range)}
                  />
                  $ {range}
                </label>
              )
            )}
          </div>

          {/* Brand */}
          <div>
            <h3 className="font-semibold mb-3">Brand</h3>
            <div className="flex flex-wrap gap-2">
              {[
                "Rolex",
                "Casio",
                "Fossil",
                "Timex",
                "Tissot",
                "MVMT",
                "Garmin",
              ].map((brand) => (
                <button
                  key={brand}
                  className={`px-4 py-1 rounded-full border ${filters.brand.includes(brand)
                    ? "bg-black text-white border-black hover:bg-gray-800" // Selected style
                    : "bg-gray-50 text-black border-gray-300 hover:bg-gray-100" // Default style
                    }  transition-colors`}
                  onClick={() => handleFilterChange("brand", brand)}
                >
                  {brand}
                </button>
              ))}
            </div>
          </div>

          {/* Category Filter */}
          <div>
            <h3 className="font-semibold mb-3">Category</h3>
            <div className="flex flex-wrap gap-2">
              {[
                "Casual",
                "Formal",
                "Sports",
                "Luxury",
                "Smartwatch",
                "Vintage",
              ].map((category) => (
                <button
                  key={category}
                  className={`px-4 py-1 rounded-full border ${filters.category.includes(category)
                    ? "bg-black text-white border-black hover:bg-gray-800" // Selected style
                    : "bg-gray-50 text-black border-gray-300 hover:bg-gray-100" // Default style
                    }  transition-colors`}
                  onClick={() => handleFilterChange("category", category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Gender Filter */}
          <div>
            <h3 className="font-semibold">Gender</h3>
            {["Male", "Female", "Unisex"].map((gender) => (
              <label key={gender} className="flex items-center">
                <input
                  type="checkbox"
                  className="mr-2"
                  onChange={() => handleFilterChange("gender", gender)}
                />
                {gender}
              </label>
            ))}
          </div>
        </div>
      </div>

      {/* Products Section */}
      <div className="w-4/5 mt-4 md:mt-0 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-8 px-1 md:px-4 py-11 ">
        {filteredProducts?.map((product) => (
          <div
            key={product._id}
            className="border border-gray-300 rounded-xl bg-white max-h-[460px] hover:shadow-lg"
          >
            <Link to={`/watches/${product._id}`}>
              <img
                className="max-h-[250px]  w-full rounded-t-xl object-cover"
                src={product.images[0]}
                alt={product.name}
              />
              <div className="px-4  flex flex-col justify-baseline ">
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
                  <p className="text-xl font-bold">${
                    Math.round(product.discount_price
                      ? Number(product.regular_price) - (Number(product.regular_price) * Number(product.discount_price)) / 100
                      : Number(product.regular_price))
                  }</p>
                  {
                    product.discount_price && <del className="text-xl font-semibold text-gray-400">
                      ${product.regular_price}
                    </del>
                  }
                  {
                    product.discount_price && <p className="text-red-500 font-semibold px-2 rounded-full bg-red-100">
                      -
                      {product.discount_price}
                      %
                    </p>
                  }
                </div>
                <div className="flex justify-center ">
                  <Link to={''} onClick={() => handelAddToCart(product)} className=" border-gray-400 px-4 py-2 mb-4 rounded-lg font-semibold text-white  transition-all duration-500 bg-gradient-to-r from-[#03b8e1] via-[#112949] to-[#00c4f5] bg-[length:200%_auto] shadow-lg hover:bg-right">
                    Add to Cart
                  </Link>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllProducts;
