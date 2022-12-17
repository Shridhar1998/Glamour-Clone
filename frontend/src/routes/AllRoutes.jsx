import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "../components/Dashboard/Dashboard";
import Login from "../components/Login";
import Signup from "../components/Signup";
import Checkout from "../pages/Checkout";
import HomePage from "../pages/HomePage";
import ProductPage from "../pages/ProductsPage/ProductPage";
import SingleProduct from "../pages/ProductsPage/SingleProduct";

const AllRoutes = () => {
	return (
		<Routes>
			<Route path="/" element={<HomePage />} />
			<Route path="/login" element={<Login />} />
			<Route path="/signup" element={<Signup />} />
			<Route path="/makeup" element={<ProductPage />} />
			<Route path="/:category/:id" element={<SingleProduct />} />
			<Route path="" />
			<Route path="/checkout" element={<Checkout />} />
			<Route path="/dashboard" element={<Dashboard />} />
			<Route path="" />
		</Routes>
	);
};

export default AllRoutes;
