import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "../components/Dashboard/Dashboard";
import Login from "../components/Login";
import Signup from "../components/Signup";
import AddressForm from "../pages/AddressForm";
import Cart from "../pages/Cart";
import Checkout from "../pages/Checkout";
import HomePage from "../pages/HomePage";
import Payment from "../pages/Payment";
import ProductPage from "../pages/ProductsPage/ProductPage";
import SingleProduct from "../pages/ProductsPage/SingleProduct";
import PostProducts from "../pages/Seller/PostProducts";

const AllRoutes = () => {
	return (
		<Routes>
			<Route path="/" element={<HomePage />} />
			<Route path="/login" element={<Login />} />
			<Route path="/signup" element={<Signup />} />
			<Route path="/addproduct" element={<PostProducts />} />

			<Route path="/cart" element={<Cart />} />
			<Route path="/addressform" element={<AddressForm/>}/>

			<Route path="/makeup" element={<ProductPage />} />

			<Route path="/products/:category" element={<ProductPage />} />
			<Route path="/:category/:id" element={<SingleProduct />} />

			<Route path="/payment" element={<Payment />} />

			<Route path="/checkout" element={<Checkout />} />
			<Route path="/dashboard" element={<Dashboard />} />
			<Route path="" />
		</Routes>
	);
};

export default AllRoutes;
