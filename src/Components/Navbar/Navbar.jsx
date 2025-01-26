import React from 'react';
import { FaShoppingCart, FaUser } from 'react-icons/fa';
import { AiOutlineSearch } from 'react-icons/ai';
import { IoIosArrowDown } from 'react-icons/io';

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-6 py-3 shadow-md ">
      {/* Logo */}
      <div className="text-2xl font-bold">SMWATCH.CO</div>

      {/* Navigation Items */}
      <ul className="flex space-x-6 text-lg font-medium">
        <li className="relative group ">
          <span className="cursor-pointer flex items-center gap-x-1 ">Category <IoIosArrowDown className='mt-1 group-hover:rotate-180' /></span>
          <ul className="absolute top-6 -left-3 hidden bg-white shadow-md group-hover:block hover:block mt-2 rounded-lg px-2">
            <li className="px-4 py-2 hover:bg-gray-100">Men</li>
            <li className="px-4 py-2 hover:bg-gray-100">Women</li>
            <li className="px-4 py-2 hover:bg-gray-100">Kids</li>
          </ul>
        </li>
        <li className="cursor-pointer">On Sale</li>
        <li className="cursor-pointer">New Arrivals</li>
        <li className="cursor-pointer">Brands</li>
      </ul>

      {/* Search Box */}
      <div className="flex items-center bg-gray-100 rounded-full px-4 py-2">
        <AiOutlineSearch className="text-gray-500" />
        <input
          type="text"
          placeholder="Search for products..."
          className="bg-transparent outline-none pl-2 text-sm"
        />
      </div>

      {/* Icons */}
      <div className="flex space-x-4 text-xl">
        <FaShoppingCart className="cursor-pointer" />
        <FaUser className="cursor-pointer" />
      </div>
    </nav>
  );
};

export default Navbar;
