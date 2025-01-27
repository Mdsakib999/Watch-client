import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import ProductDetails from "./Pages/ProductDetails/ProductDetails";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/watches/:id",
        element: <ProductDetails></ProductDetails>,
      },
    ],
  },
]);
