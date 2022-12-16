import { Button, useDisclosure } from "@chakra-ui/react";
import { useState } from "react";
import Login from "./components/Login";
import Navbar from "./components/navbar/Navbar";
import Signup from "./components/Signup";
import AllRoutes from "./routes/AllRoutes";

function App() {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const [changeValue, setChangeValue] = useState(true);

	return (
		<div className="App">
			<Button onClick={onOpen}>Open Modal</Button>
			{changeValue ? (
				<Signup
					isOpen={isOpen}
					onClose={onClose}
					setChangeValue={setChangeValue}
				/>
			) : (
				<Login
					isOpen={isOpen}
					onClose={onClose}
					setChangeValue={setChangeValue}
				/>
			)}
		
			
		</div>
	);
}

export default App;
