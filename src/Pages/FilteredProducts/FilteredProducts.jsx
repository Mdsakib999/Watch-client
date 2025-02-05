import React, { useState, useEffect } from "react";
import { FaStar } from "react-icons/fa";
import { data } from "../../../public/data.js";
import { Link, useSearchParams } from "react-router-dom";
//
const categoryImages = {
  Men: "https://images.unsplash.com/photo-1482954363933-4bed6bbea570?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  Women:
    "https://images.unsplash.com/photo-1451477334999-a9321157a431?q=80&w=1310&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  Casual:
    "https://images.unsplash.com/photo-1495704907664-81f74a7efd9b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
};

const FilteredProducts = () => {
  const [searchParams] = useSearchParams();
  const initialCategory = searchParams.get("category") || "";
  const initialGender = searchParams.get("gender") || "";
  const initialBrand = searchParams.get("brand") || "";

  const [filters, setFilters] = useState({
    category: initialCategory ? [initialCategory] : [],
    brand: initialBrand ? [initialBrand] : [],
    gender: initialGender ? [initialGender] : [],
    price: [],
  });

  useEffect(() => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      category: initialCategory ? [initialCategory] : prevFilters.category,
      gender: initialGender ? [initialGender] : prevFilters.gender,
      brand: initialBrand ? [initialBrand] : prevFilters.brand,
    }));
  }, [initialCategory, initialGender, initialBrand]);

  const filteredProducts = data.filter((product) => {
    return (
      (filters.category.length === 0 ||
        filters.category.includes(product.category)) &&
      (filters.gender.length === 0 ||
        filters.gender.includes(product.gender)) &&
      (filters.brand.length === 0 || filters.brand.includes(product.brand)) &&
      (filters.price.length === 0 ||
        filters.price.some((range) => {
          const [min, max] = range.split("-").map(Number);
          return product.discount_price >= min && product.discount_price <= max;
        }))
    );
  });

  return (
    <div className="flex flex-col justify-center lg:flex-row lg:px-4 bg-gray-50  w-full ">
      {/* Filtered Products Section */}
      <div className=" mt-4 md:mt-0 mx-auto flex flex-col items-center justify-center ">
        {/* test */}
        <div className="relative w-screen">
          {filters.category.length > 0 && (
            <div className="relative w-screen">
              <img
                src={categoryImages.Casual}
                alt=""
                className="w-screen h-[300px] object-cover"
              />
              <span className="absolute top-30 left-1/2 transform -translate-x-1/2 text-white text-3xl font-bold bg-black/50 px-4 py-2 rounded-lg">
                {filters.category.join(", ")}
              </span>
            </div>
          )}
          {filters.gender.length > 0 && (
            <div className="relative w-screen">
              <img
                src={categoryImages.Women}
                alt=""
                className="w-screen h-[300px] object-cover"
              />
              <span className="absolute top-30 left-1/2 transform -translate-x-1/2 text-white text-3xl font-bold bg-black/50 px-4 py-2 rounded-lg">
                {filters.gender.join(", ")}
              </span>
            </div>
          )}
          {filters.brand.length > 0 && (
            <div className="relative w-screen">
              <img
                src={categoryImages.Men}
                alt=""
                className="w-screen h-[300px] object-cover"
              />
              <span className="absolute top-30 left-1/2 transform -translate-x-1/2 text-white text-3xl font-bold bg-black/50 px-4 py-2 rounded-lg">
                {filters.brand.join(", ")}
              </span>
            </div>
          )}
        </div>

        <div className="w-4/5 mt-4 md:mt-0  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-8 px-1 md:px-4 py-10">
          {filteredProducts.map((product) => (
            <div
              key={product._id}
              className="border border-gray-300 rounded-xl bg-white max-h-[460px] hover:shadow-lg"
            >
              <Link to={`/watches/${product._id}`}>
                <img
                  className="max-h-[250px] w-full rounded-t-xl object-cover"
                  src={product.images[0]}
                  alt={product.name}
                />
                <div className="px-4 flex flex-col justify-baseline">
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
                    <p className="text-xl font-bold">
                      ${product.discount_price}
                    </p>
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
                    <button className=" border-gray-400 px-4 py-2 mb-4 rounded-lg font-semibold text-white  transition-all duration-500 bg-gradient-to-r from-[#03b8e1] via-[#112949] to-[#00c4f5] bg-[length:200%_auto] shadow-lg hover:bg-right">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FilteredProducts;
