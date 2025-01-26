import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-slate-100 text-gray-800 py-16 mt-36 ">
      <div className="flex flex-col justify-center items-center px-4 md:px-20">
        <div className="bg-white shadow-lg rounded-lg p-6 w-11/12 md:w-3/5 -mt-36 mb-16">
          <h2 className="text-2xl md:text-4xl font-bold text-center">Newsletter</h2>
          <form className="mt-6">
            <div className="flex justify-center gap-4">
              <input
                type="email"
                className="border border-gray-300 rounded-lg px-4 py-2 w-full max-w-md focus:outline-none"
                placeholder="Enter Email"
              />
              <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-500">
                Subscribe
              </button>
            </div>
          </form>
        </div>

        <div className="container mx-auto grid grid-cols-1 md:grid-cols-5 gap-8 text-center md:text-left ">
          <div>
            <h2 className="text-xl font-bold">SM watch</h2>
            <p className="text-gray-600 mt-4">
              Be the first to find out about exclusive deals, the latest Lookbooks trends. We're on a mission to build a
              better future where technology.
            </p>
          </div>

          <div>
            <h5 className="font-bold">Quick Links</h5>
            <ul className="mt-4 space-y-2">
              <li><a href="#!" className="text-gray-600 hover:text-gray-800">Home</a></li>
              <li><a href="#!" className="text-gray-600 hover:text-gray-800">About Us</a></li>
              <li><a href="#!" className="text-gray-600 hover:text-gray-800">Services</a></li>
            </ul>
          </div>

          <div>
            <h5 className="font-bold">Social Media</h5>
            <ul className="mt-4 space-y-2">
              <li><a href="#!" className="text-gray-600 hover:text-gray-800">Facebook</a></li>
              <li><a href="#!" className="text-gray-600 hover:text-gray-800">Instagram</a></li>
              <li><a href="#!" className="text-gray-600 hover:text-gray-800">LinkedIn</a></li>
              <li><a href="#!" className="text-gray-600 hover:text-gray-800">Twitter</a></li>
            </ul>
          </div>

          <div>
            <h5 className="font-bold">Job Info</h5>
            <ul className="mt-4 space-y-2">
              <li><a href="#!" className="text-gray-600 hover:text-gray-800">Select</a></li>
              <li><a href="#!" className="text-gray-600 hover:text-gray-800">Service</a></li>
              <li><a href="#!" className="text-gray-600 hover:text-gray-800">Payment</a></li>
            </ul>
          </div>

          <div>
            <h5 className="font-bold">Contact Us</h5>
            <ul className="mt-4 space-y-2">
              <li>Sylhet, Bangladesh</li>
              <li><a href="#!" className="text-gray-600 hover:text-gray-800">contact@easyfrontend.com</a></li>
              <li><a href="#!" className="text-gray-600 hover:text-gray-800">+880 1633-154215</a></li>
            </ul>
          </div>
        </div>

        <hr className="my-4 border-gray-500  w-full" />

        <div className=" flex flex-col md:flex-row justify-between w-full items-center">
          <p className="text-gray-600 text-sm">Copyright &copy; Easy Frontend, All rights reserved</p>
          <ul className="flex  space-x-4 mt-4 md:mt-0">
            <li><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYqQ19cWN84DvrRvaGW1Xhhk0YJJyoWBI1uFFpaV4YD7z4x8S6Ls5SSNJg_eS6_Z0QEs0&usqp=CAU" className='w-12' alt="" /></li>
            <li><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgc9xW_t712-TgFMwJxWxmgiKfTiPjrazjjg&s" className='w-8' alt="" /></li>
            <li><a href="#!" className="text-gray-600 hover:text-gray-800">Privacy</a></li>
            <li><a href="#!" className="text-gray-600 hover:text-gray-800">Security</a></li>
            <li><a href="#!" className="text-gray-600 hover:text-gray-800">Terms</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
