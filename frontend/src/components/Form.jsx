import {
	Button,
	FormControl,
	FormLabel,
	Input,
	InputGroup,
	InputRightElement,
} from "@chakra-ui/react";
import React, { useState } from "react";

const Form = () => {
	const [email, setEmail] = useState("");
	const [name, setName] = useState("");
	const [password, setPassword] = useState("");
	const signupUser = () => {
		console.log("user");
	};
	const [show, setShow] = React.useState(false);
	const handleClick = () => setShow(!show);
	return (
		<>
			<form onSubmit={signupUser}>
				<FormControl>
					<FormLabel>Full Name</FormLabel>
					<Input
						type="text"
						name="name"
						value={name}
						onChange={(e) => {
							setName(e.target.value);
						}}
					/>
				</FormControl>
				<FormControl>
					<FormLabel>Email address</FormLabel>
					<Input
						type="email"
						name="email"
						value={email}
						onChange={(e) => {
							setEmail(e.target.value);
						}}
					/>
				</FormControl>
				<FormControl>
					<FormLabel>Password</FormLabel>

					<InputGroup size="md">
						<Input
							pr="4.5rem"
							type={show ? "text" : "password"}
							placeholder="Enter password"
							value={password}
							onChange={(e) => {
								setPassword(e.target.value);
							}}
						/>
						<InputRightElement width="4.5rem">
							<Button h="1.75rem" size="sm" onClick={handleClick}>
								{show ? "Hide" : "Show"}
							</Button>
						</InputRightElement>
					</InputGroup>
				</FormControl>
			</form>
		</>
	);
};

export default Form;
