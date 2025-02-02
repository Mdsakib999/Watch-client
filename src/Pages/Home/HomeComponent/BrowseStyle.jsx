import React from "react";
import { Link } from "react-router-dom";
import image8 from "../../../assets/Images/8.png";
import image6 from "../../../assets/Images/6.png";
import image12 from "../../../assets/Images/12.png";
import image2 from "../../../assets/Images/2.png";

const BrowseStyle = () => {
  return (
    <div className="my-10 mx-8 lg:mx-16 rounded-3xl bg-gray-100 py-12">
      <p className="text-center text-2xl lg:text-4xl font-semibold tex">
        Browse By Style
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 px-10 lg:px-20 ">
        {/* Formal Category Link */}
        <div className="lg:col-span-2 bg-white mt-8 rounded-2xl">
          <Link to={`/products?category=Formal`}>
            <div className="flex flex-col items-center lg:items-start lg:flex-row lg:justify-evenly">
              <p className="text-3xl font-bold mt-4">Formal</p>
              <img className="max-w-[280px]" src={image8} alt="Formal" />
            </div>
          </Link>
        </div>

        {/* Casual Category Link */}
        <div className="bg-white mt-8 rounded-2xl">
          <Link to={`/products?category=Casual`}>
            <div className="flex flex-col items-center lg:items-start lg:flex-row lg:justify-evenly">
              <p className="text-3xl font-bold mt-4 ml-4">Casual</p>
              <img className="max-w-[280px]" src={image12} alt="Casual" />
            </div>
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 px-10 lg:px-20 ">
        {/* Women Gender Link */}
        <div className="bg-white mt-8 rounded-2xl">
          <Link to={`/products?gender=Female`}>
            <div className="flex flex-col items-center lg:items-start lg:flex-row lg:justify-evenly">
              <p className="text-3xl font-bold mt-4 ml-4">Women</p>
              <img className="max-w-[280px]" src={image6} alt="Women" />
            </div>
          </Link>
        </div>

        {/* Men Gender Link */}
        <div className="lg:col-span-2 bg-white mt-8 rounded-2xl">
          <Link to={`/products?gender=Male`}>
            <div className="flex flex-col items-center lg:items-start lg:flex-row lg:justify-evenly">
              <p className="text-3xl font-bold mt-4">Men</p>
              <img className="max-w-[280px]" src={image2} alt="Men" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BrowseStyle;
