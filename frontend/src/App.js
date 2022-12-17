import Navbar from "./components/navbar/Navbar";
import AllRoutes from "./routes/AllRoutes";

import Footer from "./components/Footer";

function App() {
	return (
		<div className="App">
			<Navbar />
			<AllRoutes />
			<Footer />
		</div>
	);
}

export default App;
