import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="lg:flex  justify-evenly items-center mt-2 pb-10">
      <div className="lg:w-[60%] mt-5 lg:mt-0 px-4 lg:px-0">
        <p className="lg:w-[80%] md:mb-7 mb-4 text-3xl md:text-5xl font-bold font-serif">
          FIND WATCHES THAT MATCHES YOUR STYLE
        </p>

        <p className="lg:w-[90%] mb-8">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
          sapiente nobis quo, dicta eum, praesentium rem consequatur voluptatum
          odio nisi, id illum facere quam! Quaerat perspiciatis quo odio itaque
          consequatur!
        </p>

        {/* <button className='px-8 py-2 rounded-full bg-black font-semibold text-gray-200'>Shop Now</button> */}

        <div className="mt-1 flex ">
          <Link
            to="/allProducts"
            className=" flex items-center gap-x-2 px-7 py-2 font-semibold text-white uppercase transition-all duration-500 bg-gradient-to-r from-[#03b8e1] via-[#112949] to-[#00c4f5] bg-[length:200%_auto] rounded-full shadow-lg hover:bg-right"
          >
            Shop now <FaArrowRightLong />
          </Link>
        </div>

        <div className="flex mt-8  text-center mb-4 lg:mb-0">
          <div className="pr-3 md:pr-10 border-r">
            <p className="font-bold text-xl md:text-3xl">200+</p>
            <p>International Brands</p>
          </div>
          <div className="px-3 md:px-10 border-r">
            <p className="font-bold text-xl md:text-3xl">2000+</p>
            <p>High-quality Products</p>
          </div>
          <div className="pl-3 md:pl-10 ">
            <p className="font-bold text-xl md:text-3xl">20000+</p>
            <p>Happy Customers</p>
          </div>
        </div>
      </div>

      <div>
        {/* img */}
        <img
          className=" w-[50%] mx-auto lg:w-full "
          src="https://img.freepik.com/premium-vector/realistic-watch-clock-black-face-silver-red-arrow-white-number-with-fabric-strap-isolated-vector_33869-4744.jpg?w=360"
          alt=""
        />
      </div>
    </div>
  );
};

export default Banner;
