import React from "react";
import { Route, Routes } from "react-router-dom";
import ProductListing from "../pages/ProductListing";
import Checkout from "../pages/Checkout";
import ShoppingCart from "../pages/ShoppingCart";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<ProductListing />} />
      <Route path="/cart" element={<ShoppingCart />} />
      <Route path="/checkout" element={<Checkout />} />
    </Routes>
  );
};

export default AllRoutes;
