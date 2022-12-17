import { Box, Select } from "@chakra-ui/react";
import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../../redux/Auth/auth.actions";
import { getItem } from "../../redux/localStorage";

const Dropdow = () => {
	const role = getItem("role");
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const handleChange = (e) => {
		if (e.target.value === "logout") {
			dispatch(logout());
			navigate("/");
			window.location.reload();
		} else if (e.target.value === "dashboard") {
			navigate("/dashboard");
		} else if (e.target.value === "product") {
			navigate("/addproduct");
		}
	};
	return (
		<Box>
			<Select placeholder="Select option" onChange={handleChange}>
				<option value="dashboard">Dashboard</option>
				{role === "seller" ? (
					<option value="product">Add Product</option>
				) : (
					<></>
				)}
				<option value="logout">Logout</option>
			</Select>
		</Box>
	);
};

export default Dropdow;
