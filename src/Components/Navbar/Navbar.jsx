import React, { useContext, useState } from "react";
import { FaShoppingCart, FaUser, FaUserCircle } from "react-icons/fa";
import { AiOutlineSearch } from "react-icons/ai";
import { IoIosArrowDown } from "react-icons/io";
import { FaBars } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import AddToCartSidebar from "../Sidebar/AddToCartSidebar";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
import { FiLogIn } from "react-icons/fi";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  console.log(user);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // Track mobile menu state

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleLogout = () => {
    if (user) {
      Swal.fire({
        title: "Are you sure?",
        text: "Do you really want to log out?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#d33",
        cancelButtonColor: "#3085d6",
        confirmButtonText: "Yes, Logout!",
      }).then((result) => {
        if (result.isConfirmed) {
          logOut().then(() => {
            Swal.fire({
              icon: "success",
              title: "Logged Out",
              text: "You have been logged out successfully!",
            });
          });
        }
      });
    } else {
      navigate("/login");
    }
  };

  return (
    <>
      {/* Navbar */}
      <nav className="flex items-center justify-between px-6 py-3 shadow-md z-50 sticky top-0 bg-white/20 backdrop-blur-lg border border-white/30 ">
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
          {user && (
            <li className="cursor-pointer">
              <Link to="/dashboard">Dashboard</Link>
            </li>
          )}
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
          {/* Search Icon - Visible only on smaller screens */}
          <AiOutlineSearch className="cursor-pointer md:hidden" />

          {/* Shopping Cart with Badge */}
          <div onClick={toggleSidebar} className="relative cursor-pointer">
            <FaShoppingCart className=" lg:text-3xl" />
            <span className="absolute -top-3 -right-2.5 px-1 md:px-1.5 bg-black text-white text-xs md:text-sm rounded-full">
              1
            </span>
          </div>

          {/* Mobile Login Icon (Hidden on Larger Screens) */}

          {user ? (
            <Link to="/" className="lg:hidden group">
              <div className="hidden group-hover:block absolute top-7 right-0 mt-2 w-40 bg-slate-100 shadow-lg rounded-md p-2">
                <Link
                  to="/dashboard"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-200"
                >
                  Dashboard
                </Link>
                <button
                  onClick={handleLogout}
                  className="w-full text-left px-4 py-2 text-red-600 hover:bg-gray-200"
                >
                  Logout
                </button>
              </div>
              <FaUserCircle className="cursor-pointer" />
            </Link>
          ) : (
            <Link to="/login" className="lg:hidden">
              <FiLogIn className="cursor-pointer text-xl" />
            </Link>
          )}

          {/* Desktop User Profile/Login - Visible Only on Larger Screens */}
          <div className="hidden lg:block">
            {user ? (
              <div className="dropdown dropdown-bottom dropdown-end">
                {user ? (
                  <div className=" flex items-center gap-x-2">
                    <div className=" group">
                    <FaUserCircle
                      tabIndex={0}
                      role="button"
                      size={34}
                      className=" rounded-full cursor-pointer  "
                    />

                    <div className="hidden group-hover:block absolute top-10 right-20 mt-2 w-40 bg-slate-100 shadow-lg rounded-md p-2">
                      <Link
                        to="/dashboard"
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-200"
                      >
                        Dashboard
                      </Link>
                      <button
                        onClick={handleLogout}
                        className="w-full text-left px-4 py-2 text-red-600 hover:bg-gray-200"
                      >
                        Logout
                      </button>
                    </div>
                    </div>

                    <button
                      onClick={handleLogout} // Correctly renamed to handleLogout
                      className="px-5 pb-2 pt-1 font-semibold text-white transition-all duration-500 bg-gradient-to-r from-[#03b8e1] via-[#112949] to-[#00c4f5] bg-[length:200%_auto] rounded-md shadow-lg hover:bg-right cursor-pointer"
                    >
                      Logout
                    </button>
                  </div>
                ) : (
                  <button
                    onClick={googleSignIn} // Assuming googleSignIn for login
                    className="px-5 pb-2 pt-1 font-semibold text-white transition-all duration-500 bg-gradient-to-r from-[#03b8e1] via-[#112949] to-[#00c4f5] bg-[length:200%_auto] rounded-md shadow-lg hover:bg-right "
                  >
                    Log In
                  </button>
                )}
              </div>
            ) : (
              <Link
                to="/login"
                className="px-5 pb-2 pt-1 font-semibold text-white transition-all duration-500 bg-gradient-to-r from-[#03b8e1] via-[#112949] to-[#00c4f5] bg-[length:200%_auto] rounded-md shadow-lg hover:bg-right"
              >
                Login
              </Link>
            )}
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
            <Link to="/onSale" onClick={toggleMobileMenu}>
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
