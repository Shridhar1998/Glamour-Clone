import { Button, useDisclosure } from "@chakra-ui/react";
import Signup from "./components/Signup";

import Navbar from "./components/navbar/Navbar";
import AllRoutes from "./routes/AllRoutes";
import AddressForm from "./pages/AddressForm";
import Cart from "./pages/Cart";
import ProductPage from "./pages/ProductsPage/ProductPage";

function App() {
  return (
    <div className="App" style={{ background: "white" }}>
      <Navbar />
      <AllRoutes />
    </div>
  );
}

export default App;
