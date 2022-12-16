import {
	Button,
	FormControl,
	FormLabel,
	Input,
	InputGroup,
	InputRightElement,
} from "@chakra-ui/react";
import React from "react";

const Form = ({ handleInput, fullname, email, password, onClose }) => {
	const [show, setShow] = React.useState(false);
	const handleClick = () => setShow(!show);

	return (
		<>
			<FormControl>
				<FormLabel>Full Name</FormLabel>
				<Input
					type="text"
					name="fullname"
					value={fullname}
					onChange={handleInput}
				/>
			</FormControl>
			<FormControl>
				<FormLabel>Email address</FormLabel>
				<Input type="email" name="email" value={email} onChange={handleInput} />
			</FormControl>
			<FormControl>
				<FormLabel>Password</FormLabel>

				<InputGroup size="md">
					<Input
						pr="4.5rem"
						type={show ? "text" : "password"}
						placeholder="Enter password"
						value={password}
						name="password"
						onChange={handleInput}
					/>
					<InputRightElement width="4.5rem">
						<Button h="1.75rem" size="sm" onClick={handleClick}>
							{show ? "Hide" : "Show"}
						</Button>
					</InputRightElement>
				</InputGroup>
			</FormControl>
		</>
	);
};

export default Form;
