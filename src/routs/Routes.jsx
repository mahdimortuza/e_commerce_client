import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import About from "../pages/About/About";
import ErrorPage from "../pages/Error/ErrorPage";
import Home from "../pages/Home/Home/Home";
import ProductDetails from "../pages/ProductDetails/ProductDetails";
import MyCart from "../pages/MyCart/MyCart";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
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
        path: "/details/:id",
        element: <ProductDetails></ProductDetails>,
      },
      {
        path: "/myCart",
        element: <MyCart></MyCart>,
      },
    ],
  },
]);
