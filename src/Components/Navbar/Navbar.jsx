import React, { useState } from "react";
import { FaShoppingCart, FaUser } from "react-icons/fa";
import { AiOutlineSearch } from "react-icons/ai";
import { IoIosArrowDown } from "react-icons/io";
import { FaBars } from "react-icons/fa6";
import { Link } from "react-router-dom";
import AddToCartSidebar from "../Sidebar/AddToCartSidebar";

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // Track mobile menu state

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      {/* Navbar */}
      <nav className="flex items-center justify-between px-6 py-3 shadow-md z-50">
        {/* Logo & Hamburger Icon */}
        <div className="flex items-center space-x-4">
          <FaBars
            className="lg:hidden cursor-pointer text-xl"
            onClick={toggleMobileMenu}
          />
          <Link to="/" className="text-xl lg:text-2xl font-bold">
            SMWATCH.CO
          </Link>
        </div>

        {/* Navigation Items */}
        <ul className="lg:flex space-x-6 text-lg font-medium  hidden">
          {/* <li className="relative group">
            <span className="cursor-pointer flex items-center gap-x-1">
              Category{" "}
              <IoIosArrowDown className="mt-1 group-hover:rotate-180" />
            </span>
            <ul className="absolute top-4 -left-3 hidden bg-white shadow-md group-hover:block hover:block mt-2 rounded-lg px-4 py-4">
              <Link to={`/products?gender=Male`}>
                <li className="px-4 py-2 hover:bg-gray-100">Men</li>
              </Link>
              <Link to={`/products?gender=Female`}>
                <li className="px-4 py-2 hover:bg-gray-100">Women</li>
              </Link>
            </ul>
          </li> */}
          <li className="cursor-pointer">
            <Link to="/allProducts">All Watch</Link>
          </li>

          <li className="cursor-pointer">
            <Link to="/allProducts">New Arrivals</Link>
          </li>
          <li className="cursor-pointer">
            <Link to="/brands">Brands</Link>
          </li>
          <li className="cursor-pointer">
            <Link to="/onSale">On Sale</Link>
          </li>
          {/* <li className="cursor-pointer">On Sale</li> */}
        </ul>

        {/* Search Box (Desktop) */}
        <div className="md:flex items-center bg-gray-100 rounded-full px-4 py-2 hidden">
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
          <div onClick={toggleSidebar} className="relative cursor-pointer ">
            <FaShoppingCart className=" lg:text-3xl" />
            <span className="absolute -top-3 -right-2.5 b px-1.5 bg-black text-white text-sm rounded-full">
              1
            </span>
          </div>
          <Link className="" to="/login">
            <FaUser className="cursor-pointer lg:hidden" />
          </Link>
          <div className="hidden lg:block">
            <Link
              to="/login"
              className="px-5 pb-2 pt-1 font-semibold text-white transition-all duration-500 bg-gradient-to-r from-[#03b8e1] via-[#112949] to-[#00c4f5] bg-[length:200%_auto] rounded-md shadow-lg hover:bg-right"
            >
              Login
            </Link>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed top-0 left-0 w-full h-screen bg-white shadow-md transform transition-transform duration-300 z-50 ${
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <button
          className="absolute top-4 right-4 text-2xl"
          onClick={toggleMobileMenu}
        >
          ✖
        </button>
        <ul className="flex flex-col items-center mt-20 space-y-6 text-lg font-medium z-50">
          <li>
            <Link to="/" onClick={toggleMobileMenu}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/allProducts" onClick={toggleMobileMenu}>
              New Arrivals
            </Link>
          </li>
          <li>
            <Link to="/brands" onClick={toggleMobileMenu}>
              Brands
            </Link>
          </li>
          <li>
            <Link to="/" onClick={toggleMobileMenu}>
              On Sale
            </Link>
          </li>
          <li>
            <Link to="/login" onClick={toggleMobileMenu}>
              Login
            </Link>
          </li>
        </ul>
      </div>

      {/* AddToCartSidebar */}
      <AddToCartSidebar
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />
    </>
  );
};

export default Navbar;
