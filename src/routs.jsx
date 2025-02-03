import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import ProductDetails from "./Pages/ProductDetails/ProductDetails";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
import AllProducts from "./Components/All Products/AllProducts";
import Contact from "./Pages/Contact/Contact";
import Checkout from "./Pages/Checkout/Checkout";
import FilteredProducts from "./Pages/FilteredProducts/FilteredProducts";
import Brand from "./Pages/Brand/Brand";
import ReturnPolicy from "./Pages/ReturnPolicy/ReturnPolicy";
import RefundPolicy from "./Pages/RefundPolicy/RefundPolicy";
import TermsAndConditions from "./Pages/TermsAndConditions/TermsAndCOnditions";

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
        path: "/brands",
        element: <Brand></Brand>,
      },
      {
        path: "/allProducts",
        element: <AllProducts></AllProducts>,
      },
      // test
      {
        path: "/products",
        element: <FilteredProducts></FilteredProducts>,
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
        path: "/checkout",
        element: <Checkout></Checkout>,
      },
      {
        path: "/watches/:id",
        element: <ProductDetails></ProductDetails>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/checkout",
        element: <Checkout></Checkout>,
      },
      {
        path: "/returnPolicy",
        element: <ReturnPolicy></ReturnPolicy>,
      },
      {
        path: "/refundPolicy",
        element: <RefundPolicy></RefundPolicy>,
      },
      {
        path: "/termsAndConditions",
        element: <TermsAndConditions></TermsAndConditions>,
      },
    ],
  },
]);
