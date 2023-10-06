import React from "react";
import { Route, Routes } from "react-router-dom";
import ProductListing from "../pages/ProductListing";
import Checkout from "../pages/Checkout";
import ShoppingCart from "../pages/ShoppingCart";
import PaymentSuccess from "./PaymentSuccess";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<ProductListing />} />
      <Route path="/cart" element={<ShoppingCart />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/paymentsuccess" element={<PaymentSuccess/>} />
    </Routes>
  );
};

export default AllRoutes;
