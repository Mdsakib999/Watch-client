import React, { useContext, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";

const Login = () => {
  const { signIn, googleSignIn, user } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();

    signIn(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        if (user) {
          // Show SweetAlert on successful login
          Swal.fire({
            icon: "success",
            title: "Login Successful",
            text: "You have logged in successfully!",
          });

          navigate(from, { replace: true });
        }
      })
      .catch((error) => {
        // Handle login errors
        const errorMessage = error.message;
        
        // Show SweetAlert on login failure
        Swal.fire({
          icon: "error",
          title: "Login Failed",
          text: errorMessage,
        });
      });
  };

  const handleGoogleLogin = () => {
    googleSignIn()
      .then((result) => {
        if (result.user) {
          navigate(from, { replace: true });
          Swal.fire({
            icon: "success",
            title: "Success",
            text: "User signed in successfully!",
          });
        }
      })
      .catch((error) => {
        console.error(error.message);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: error.message,
        });
      });
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div>
        <img
          className="hidden lg:block max-w-[500px] animate-pul"
          src="https://img.freepik.com/free-vector/modern-job-search-staff-hiring-online-recruitment-freelance-profession-applicant-studying-help-wanted-poster-freelancer-looking-orders_335657-317.jpg?t=st=1737959835~exp=1737963435~hmac=75354dd539a8f38a61af93bb9b2bcf056ae8c638ba590ef57c81d4184e3393c5&w=740"
          alt=""
        />
      </div>
      <div className="w-full max-w-sm p-6 bg-gray-50 rounded-2xl shadow-lg mx-3 lg:mx-0">
        <h2 className="text-2xl font-semibold text-center text-gray-800">Login</h2>
        <form onSubmit={handleLogin} className="mt-6">
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-2 mt-1 text-gray-900 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-6 relative">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full px-4 py-2 mt-1 text-gray-900 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter your password"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-4 text-gray-500 hover:text-gray-700 focus:outline-none"
              >
                {showPassword ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
              </button>
            </div>
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 font-semibold text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none cursor-pointer"
          >
            Log In
          </button>
        </form>
        <p className="my-4 text-center">
          Don't have an account?{" "}
          <Link className="text-red-500" to="/register">
            Register
          </Link>{" "}
        </p>

        <div>
          <button
            onClick={handleGoogleLogin}
            className="border border-blue-500 cursor-pointer w-full flex items-center justify-center py-2 rounded-lg gap-x-4 font-semibold hover:border-orange-500 "
          >
            <FcGoogle size={26} /> <span>Login with Google</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
