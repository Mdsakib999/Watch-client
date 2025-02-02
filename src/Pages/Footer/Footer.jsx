import React from "react";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";


const Footer = () => {
  return (
    <footer className="bg-slate-100 text-gray-800 py-16 mt-36 ">
      <div className="flex flex-col justify-center items-center px-4 md:px-20">
        <div className="bg-white shadow-lg rounded-lg p-6 w-11/12 md:w-3/5 -mt-36 mb-16">
          <h2 className="text-2xl md:text-4xl font-bold text-center">
            Newsletter
          </h2>
          <form className="mt-6">
            <div className="flex justify-center gap-4 ">
              <input
                type="email"
                className="border border-gray-300 rounded-lg px-4 py-2 w-full max-w-md focus:outline-none"
                placeholder="Enter Email"
              />

              <button className="md:px-8 px-3 md:py-2 py-2 text-white uppercase transition-all duration-500 bg-gradient-to-r from-[#03b8e1] via-[#112949] to-[#00c4f5] bg-[length:200%_auto] rounded-lg shadow-lg hover:bg-right">
                Subscribe
              </button>
            </div>
          </form>
        </div>

        <div className="container mx-auto grid grid-cols-1 md:grid-cols-5 gap-8 text-center md:text-left ">
          <div>
            <h2 className="text-xl font-bold">SM watch</h2>
            <p className="text-gray-600 mt-4">
              Be the first to find out about exclusive deals, the latest
              Logbooks trends. We're on a mission to build a better future where
              technology.
            </p>
          </div>

          <div className="">
            <h5 className="font-bold">Quick Links</h5>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="#!" className="text-gray-600 hover:text-gray-800">
                  Home
                </a>
              </li>
              <li>
                <a href="#!" className="text-gray-600 hover:text-gray-800">
                  About Us
                </a>
              </li>
              <li>
                <a href="#!" className="text-gray-600 hover:text-gray-800">
                  Products
                </a>
              </li>
              
            </ul>
          </div>

          <div className="">
            <h5 className="font-bold">Social Media</h5>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="#!" className="text-gray-600 hover:text-gray-800 flex justify-center lg:justify-start items-center gap-x-2">
                <FaFacebookSquare size={20} />
                  Facebook
                </a>
              </li>
              <li>
                <a href="#!" className="text-gray-600 hover:text-gray-800 flex justify-center lg:justify-start items-center gap-x-2">
                <FaInstagramSquare size={20} />
                  Instagram
                </a>
              </li>
              <li>
                <a href="#!" className="text-gray-600 hover:text-gray-800 flex justify-center lg:justify-start items-center gap-x-2">
                <FaLinkedin size={20} />
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="#!" className="text-gray-600 hover:text-gray-800 flex justify-center lg:justify-start items-center gap-x-2">
                <FaTwitterSquare size={20} />
                  Twitter
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h5 className="font-bold">Job Info</h5>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="#!" className="text-gray-600 hover:text-gray-800">
                  Customer Support
                </a>
              </li>
              <li>
                <a href="#!" className="text-gray-600 hover:text-gray-800">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="#!" className="text-gray-600 hover:text-gray-800">
                  Return Policy
                </a>
              </li>
              <li>
                <a href="#!" className="text-gray-600 hover:text-gray-800">
                  Refund Policy
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h5 className="font-bold">Contact Us</h5>
            <ul className="mt-4 space-y-2">
              <li>California, United States.</li>
              <li>
                <a href="#!" className="text-gray-600 hover:text-gray-800">
                  contact@easyfrontend.com
                </a>
              </li>
              <li>
                <a href="#!" className="text-gray-600 hover:text-gray-800">
                  +550 1633-154215
                </a>
              </li>
            </ul>
          </div>
        </div>

        <hr className="my-4 border-gray-500  w-full" />

        <div className=" flex flex-col md:flex-row justify-between w-full items-center ">
          <p className="text-gray-600 text-sm">
            Copyright &copy; Easy Frontend, All rights reserved
          </p>
          <ul className="flex items-center space-x-4 mt-4 md:mt-0">
            <li>
              <img
                src="https://cdn.easyfrontend.com/pictures/logos/color-logo-8.png"
                className="w-12"
                alt=""
              />
            </li>
            <li>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgc9xW_t712-TgFMwJxWxmgiKfTiPjrazjjg&s"
                className="w-8"
                alt=""
              />
            </li>
            <li>
              <img
                src="https://cdn.worldvectorlogo.com/logos/bkash.svg"
                className="w-15"
                alt=""
              />
            </li>
            <li>
              <img
                src="https://cdn.easyfrontend.com/pictures/logos/color-logo-4.png"
                className="w-12"
                alt=""
              />
            </li>
            <li>
              <img
                src="https://cdn.easyfrontend.com/pictures/logos/color-logo-6.png"
                className="w-20"
                alt=""
              />
            </li>
            {/* <li><a href="#!" className="text-gray-600 hover:text-gray-800">Security</a></li> */}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
