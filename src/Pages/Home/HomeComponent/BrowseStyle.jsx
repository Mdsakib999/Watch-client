import React from "react";
import image8 from "../../../assets/Images/8.png";
import image6 from "../../../assets/Images/6.png";
import image12 from "../../../assets/Images/12.png";
import image2 from "../../../assets/Images/2.png";

const BrowseStyle = () => {
  return (
    <div className="my-10 mx-16 rounded-3xl bg-gray-100 py-12">
      <p className="text-center text-4xl font-semibold tex">Browse By Style</p>

      <div className="grid grid-cols-3 gap-4 px-20 ">

        <div className="col-span-2  bg-white mt-8 rounded-2xl">
          <div className="flex justify-evenly ">
            <p className="text-3xl font-bold mt-4">Formal</p>
            <img
              className="w-[280px]"
              src={image8}
              alt=""
            />
          </div>
        </div>

        <div className=" bg-white mt-8 rounded-2xl ">
        <div className="flex justify-evenly ">
            <p className="text-3xl font-bold mt-4 ml-4">Casual</p>
            <img
              className="max-w-[280px]"
              src={image12}
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-4 px-20 ">

        

        <div className=" bg-white mt-8 rounded-2xl ">
        <div className="flex justify-evenly">
            <p className="text-3xl font-bold mt-4 ml-4">Women</p>
            <img
              className="max-w-[280px]"
              src={image6}
              alt=""
            />
          </div>
        </div>

        <div className="col-span-2  bg-white mt-8 rounded-2xl">
          <div className="flex justify-evenly">
            <p className="text-3xl font-bold mt-4">Men</p>
            <img
              className="w-[280px]"
              src={image2}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrowseStyle;
