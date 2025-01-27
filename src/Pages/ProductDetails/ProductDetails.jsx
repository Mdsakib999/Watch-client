import React from "react";
import ImageGallery from "./ProductDetailsComponent/ImageGallery";
import RenderStars from "./ProductDetailsComponent/RenderStars";

const ProductDetails = () => {
  const product = {
    name: "Elegant Chronograph Watch",
    details:
      "A stylish and versatile watch designed for every occasion. A stylish and versatile watch designed for every occasion.",
    rating: 4.5,
    brand: "seiko",
    images: [
      "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1546868871-7041f2a55e12?q=80&w=1364&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1541351991055-b55135fea4bf?q=80&w=1365&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    regular_price: 250.0,
    discount_price: 199.99,
    product_details: {
      brand: "Timeless Co.",
      material: "Stainless Steel",
      movement: "Quartz",
      water_resistance: "50 meters",
      warranty: "2 years",
      features: [
        "Chronograph functionality",
        "Luminous hands and markers",
        "Scratch-resistant sapphire crystal",
        "Adjustable stainless steel bracelet",
      ],
    },
  };

  return (
    <div className="flex my-10 justify-items-start px-4 ">
      {/* Image Gallery - 50% Width */}
      <div className="w-1/2 pr-6">
        <ImageGallery images={product.images} />
      </div>

      {/* Product Details - Fixed Width */}
      <div className="max-w-xl pl-6 flex flex-col ">
        {/* Product Title */}
        <div>
          <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
        </div>

        <div className="flex items-center mb-4 gap-1.5">
          <RenderStars rating={product.rating} />
          <p className="text-lg text-gray-800">
            {product.rating} / <span className="text-gray-600">5</span>
          </p>
        </div>

        {/* Pricing */}
        <div className="mb-6 flex gap-5">
          <p className="text-4xl font-bold">
            ${product.discount_price.toFixed(2)}
          </p>
          <p className="text-4xl font-semibold">
            <span className="line-through text-gray-400">
              ${product.regular_price.toFixed(2)}
            </span>
          </p>
        </div>

        <p className="text-gray-600 mb-4">{product.details}</p>
        <div className="border-t border-gray-200 my-4"></div>
        <p className="text-lg ">
          Brand
          <span className=" m-4 px-4  bg-gray-200 py-1 rounded-full">
            {product.brand}
          </span>
        </p>
        <div className="border-t border-gray-200 my-4"></div>

        {/* Add to cart & quantity */}
        <div className="mt-2 flex items-center gap-4 w-full">
          {/* Quantity Selector */}
          <div className="flex items-center justify-center w-40 h-10 overflow-hidden bg-gray-200 rounded-full py-3">
            <button
              className="px-3 py-1 bg-gray-200 text-gray-700 hover:bg-gray-300 focus:outline-none text-3xl"
              onClick={() => console.log("Decrease quantity")}
            >
              -
            </button>
            <span className="flex-1 text-center text-lg font-medium">1</span>
            <button
              className="px-3 py-1 bg-gray-200 text-gray-700 hover:bg-gray-300 focus:outline-none text-3xl"
              onClick={() => console.log("Increase quantity")}
            >
              +
            </button>
          </div>{" "}
          {/* Add to Cart Button */}
          <button
            className="px-6 py-3 bg-black w-70 text-white font-md rounded-full focus:outline-none shadow-lg"
            onClick={() => console.log("Add to cart clicked")}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
