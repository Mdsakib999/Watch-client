import React, { useState } from "react";
import { FaShoppingCart, FaUser } from "react-icons/fa";
import { AiOutlineSearch } from "react-icons/ai";
import { IoIosArrowDown } from "react-icons/io";
import { FaBars } from "react-icons/fa6";
import { Link } from "react-router-dom";
import AddToCartSidebar from "../Sidebar/AddToCartSidebar";

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      {/* Navbar */}
      <nav className="flex items-center justify-between px-6 py-3 shadow-md ">
        {/* Logo */}
        <FaBars className="lg:hidden" />
        <Link to="/" className="text-xl lg:text-2xl font-bold">
          SMWATCH.CO
        </Link>

        {/* Navigation Items */}
        <ul className="lg:flex space-x-6 text-lg font-medium  hidden">
          <li className="relative group">
            <span className="cursor-pointer flex items-center gap-x-1">
              Category{" "}
              <IoIosArrowDown className="mt-1 group-hover:rotate-180" />
            </span>
            <ul className="absolute top-6 -left-3 hidden bg-white shadow-md group-hover:block hover:block mt-2 rounded-lg px-2">
              <li className="px-4 py-2 hover:bg-gray-100">Men</li>
              <li className="px-4 py-2 hover:bg-gray-100">Women</li>
              <li className="px-4 py-2 hover:bg-gray-100">Kids</li>
            </ul>
          </li>
          <li className="cursor-pointer">On Sale</li>
          <li className="cursor-pointer">
            <Link to="/allProduct">New Arrivals</Link>
          </li>
          <li className="cursor-pointer">Brands</li>
        </ul>

        {/* Search Box */}
        <div className="md:flex items-center bg-gray-100 rounded-full px-4 py-2 hidden ">
          <AiOutlineSearch className="text-gray-500" />
          <input
            type="text"
            placeholder="Search for products..."
            className="bg-transparent outline-none pl-2 text-sm"
          />
        </div>

        {/* Icons */}
        <div className="flex items-center space-x-3 text-lg">
        <AiOutlineSearch className="cursor-pointer md:hidden" />
          <FaShoppingCart className="cursor-pointer lg:text-3xl" onClick={toggleSidebar} />
          <Link to="/login">
            <FaUser className="cursor-pointer lg:hidden" />
          </Link>
          <div className="hidden lg:block ">
                  <Link to="/login" className=" px-5 pb-2 pt-1  font-semibold text-white  transition-all duration-500 bg-gradient-to-r from-[#03b8e1] via-[#112949] to-[#00c4f5] bg-[length:200%_auto] rounded-md shadow-lg hover:bg-right">Login </Link>
                </div>
        </div>
      </nav>

      {/* AddToCartSidebar */}
      <AddToCartSidebar
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />
    </>
  );
};

export default Navbar;
