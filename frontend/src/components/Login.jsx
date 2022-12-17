import {
	Button,
	Flex,
	FormControl,
	FormLabel,
	Input,
	InputGroup,
	InputRightElement,
	Link,
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalFooter,
	ModalHeader,
	ModalOverlay,
	TabPanel,
	TabPanels,
	Tabs,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { loginApi } from "../redux/Auth/auth.actions";
import { getItem } from "../redux/localStorage";

const Login = ({ isOpen, onClose, setChangeValue }) => {
	const initState = {
		email: "",
		password: "",
	};
	const dispatch = useDispatch();
	const [show, setShow] = React.useState(false);
	const handleClick = () => setShow(!show);
	const [form, setForm] = useState(initState);
	const handleInput = ({ target: { name, value } }) => {
		setForm({ ...form, [name]: value });
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(form);
		dispatch(loginApi(form)).then(() => {});
		console.log(
			getItem("user"),
			getItem("token"),
			getItem("userid"),
			getItem("refreshToken")
		);
	};

	return (
		<Modal isOpen={isOpen} onClose={onClose}>
			<ModalOverlay />
			<ModalContent>
				<form onSubmit={handleSubmit}>
					<ModalHeader>Login</ModalHeader>
					<ModalCloseButton />
					<ModalBody>
						<Flex gap="2">
							Create new Account{" "}
							<Link
								onClick={() => {
									setChangeValue(true);
								}}
								variant="link"
							>
								{" "}
								Signup
							</Link>
						</Flex>
						<Tabs isFitted variant="enclosed">
							<TabPanels>
								<TabPanel>
									<Flex gap="2" flexDirection={"column"}>
										<FormControl>
											<FormLabel>Email address</FormLabel>
											<Input
												type="email"
												name="email"
												value={form.email}
												onChange={handleInput}
											/>
										</FormControl>
										<FormControl>
											<FormLabel>Password</FormLabel>

											<InputGroup size="md">
												<Input
													pr="4.5rem"
													type={show ? "text" : "password"}
													placeholder="Enter password"
													value={form.password}
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
									</Flex>
								</TabPanel>
							</TabPanels>
						</Tabs>
					</ModalBody>

					<ModalFooter>
						<Button colorScheme="pink" mr={3} onClick={onClose}>
							Close
						</Button>
						<Button variant="ghost" type="submit">
							Login
						</Button>
					</ModalFooter>
				</form>
			</ModalContent>
		</Modal>
	);
};

export default Login;
