import React from "react";
import { getItem } from "../../redux/localStorage";
import AdminDashboard from "./AdminDashboard";
import SellerDashboard from "./SellerDashboard";
import UserDashboard from "./UserDashboard";

const Dashboard = () => {
	let role = getItem("role");
	if (role === "admin") {
		return <AdminDashboard />;
	} else if (role === "seller") {
		return <SellerDashboard />;
	} else {
		return <UserDashboard />;
	}
};

export default Dashboard;
