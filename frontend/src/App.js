
import { Button, useDisclosure } from "@chakra-ui/react";
import Signup from "./components/Signup";

import Navbar from "./components/navbar/Navbar";
import AllRoutes from "./routes/AllRoutes";
import AddressForm from "./pages/AddressForm";
import Cart from "./pages/Cart";


function App() {
  return (
    <div className="App">
      <Navbar/>
      <AllRoutes/>

      {/* <Cart/> */}
      <AddressForm/>

    </div>
  );
}

export default App;
