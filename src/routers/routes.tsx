// src/routers/routes.tsx
import { createBrowserRouter } from "react-router-dom";
import BuyerDashboard from "../components/BuyerDashboard";
import SellerDashboard from "../components/SellerDashboard";

import Login from "../components/Login";
import Account from "../components/Account";

import ProductDetail from "../components/ProductDetail";
import ProductForm from "../components/ProductForm";
import Signup from "../components/Signup";

import Cart from "../components/Cart";

const router = createBrowserRouter([
  {
    path: "/",
    element: <BuyerDashboard />,
  },
  // {
  //   path: "/cart",
  //   element: <Cart />,
  // },

  {
    path: "/account",
    element: <Account />,
  },

  {
    path: "/seller",
    element: <SellerDashboard />,
  },
  {
    path: "/product/:id",
    element: <ProductDetail />,
  },
  // {
  //   path: "/add-product",
  //   element: <ProductForm />,
  // },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },

]);

export default router;
