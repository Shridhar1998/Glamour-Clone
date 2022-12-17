import { Button, useDisclosure } from "@chakra-ui/react";
import { useState } from "react";
import Login from "./components/Login";
import Navbar from "./components/navbar/Navbar";
import Signup from "./components/Signup";
import AllRoutes from "./routes/AllRoutes";

import Footer from "./components/Footer";
import PostProducts from "./pages/Seller/PostProducts";

function App() {
	return (
		<div className="App">
			<PostProducts />
			<Navbar />
			<AllRoutes />
			<Footer />
		</div>
	);
}

export default App;
