import { Button, useDisclosure } from "@chakra-ui/react";
import Signup from "./components/Signup";

function App() {
	const { isOpen, onOpen, onClose } = useDisclosure();
	return (
		<div className="App">
			<Button onClick={onOpen}>Open Modal</Button>
			<Signup isOpen={isOpen} onClose={onClose} />
		</div>
	);
}

export default App;
