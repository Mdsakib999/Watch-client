// src/AllProducts.js
import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import { data } from "../../../public/data.js";
import { Link } from "react-router-dom";

const AllProducts = () => {
  const [filters, setFilters] = useState({
    category: [],
    gender: [],
    price: [],
  });

  const handleFilterChange = (filterType, value) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [filterType]: prevFilters[filterType].includes(value)
        ? prevFilters[filterType].filter((item) => item !== value)
        : [...prevFilters[filterType], value],
    }));
  };

  const filteredProducts = data.filter((product) => {
    return (
      (filters.category.length === 0 ||
        filters.category.includes(product.category)) &&
      (filters.gender.length === 0 ||
        filters.gender.includes(product.gender)) &&
      (filters.price.length === 0 ||
        filters.price.some((range) => {
          const [min, max] = range.split("-").map(Number);
          return product.discount_price >= min && product.discount_price <= max;
        }))
    );
  });

  return (
    <div className="flex p-4">
      {/* Filters Section */}
      <div className="w-1/5 p-4">
        <h2 className="text-xl font-semibold mb-4">Filters</h2>
        <div className="space-y-4">
          {/* Category Filter */}
          <div>
            <h3 className="font-semibold">Category</h3>
            {[
              "Casual",
              "Formal",
              "Sports",
              "Luxury",
              "Smartwatch",
              "Vintage",
            ].map((category) => (
              <label key={category} className="flex items-center">
                <input
                  type="checkbox"
                  className="mr-2"
                  onChange={() => handleFilterChange("category", category)}
                />
                {category}
              </label>
            ))}
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

          {/* Price Filter */}
          <div>
            <h3 className="font-semibold">Price</h3>
            {["0-100", "100-200", "200-500", "500-1000", "1000-5000"].map(
              (range) => (
                <label key={range} className="flex items-center">
                  <input
                    type="checkbox"
                    className="mr-2"
                    onChange={() => handleFilterChange("price", range)}
                  />
                  ${range}
                </label>
              )
            )}
          </div>
        </div>
      </div>

      {/* Products Section */}
      <div className="w-4/5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
        {filteredProducts.map((product) => (
          <div key={product._id} className="border border-gray-300 rounded-xl">
            <Link to={`/watches/${product._id}`} className="block">
              <img
                className="h-[250px] w-full rounded-t-xl object-cover"
                src={product.images[0]}
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
                    -
                    {Math.round(
                      ((product.regular_price - product.discount_price) /
                        product.regular_price) *
                        100
                    )}
                    %
                  </p>
                </div>
                <div className="flex justify-center">
                  <button className="border border-gray-400 px-4 py-1 mb-4 flex justify-center rounded-lg font-semibold hover:bg-white bg-black hover:text-black text-white">
                    Add to Cart
                  </button>
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
