import React from "react";
import { TbShoppingBagX } from "react-icons/tb";
import { Link } from "react-router-dom";

const OnSale = () => {
  return (
    <div className="flex flex-col h-screen">
      <h1 className="text-3xl font-bold mt-8 text-center">Product on Sale</h1>
      <div className="flex flex-col items-center justify-center flex-grow">
        <p className="text-lg text-gray-400 flex items-center gap-x-2 mb-20"><TbShoppingBagX size={34} /> Currently no product on sale.</p>
        <Link to="/allProduct" className="px-6 py-3 uppercase mb-4 rounded-lg font-semibold text-white  transition-all duration-500 bg-gradient-to-r from-[#03b8e1] via-[#112949] to-[#00c4f5] bg-[length:200%_auto] shadow-lg hover:bg-right">Return to Shop</Link>
      </div>
    </div>
  );
};

export default OnSale;