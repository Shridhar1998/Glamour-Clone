import {
	Button,
	Center,
	Divider,
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
	Text,
	useToast,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginApi } from "../redux/Auth/auth.actions";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

const Login = ({ isOpen, onClose, setChangeValue }) => {
	const initState = {
		email: "",
		password: "",
	};
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const [show, setShow] = React.useState(false);
	const handleClick = () => setShow(!show);
	const [form, setForm] = useState(initState);
	const handleInput = ({ target: { name, value } }) => {
		setForm({ ...form, [name]: value });
	};
	const toast = useToast();

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(form);
		dispatch(loginApi(form))
			.then(() => {
				toast({
					title: "Login Success! Welcome✨",
					description: "It's a start of something amazing.",
					position: "top",
					status: "success",
					duration: 5000,
					isClosable: true,
				});
				navigate("/");
			})
			.catch((err) => {
				toast({
					title: "Internal server error!",
					description: "Please try after sometime.",
					position: "top",
					status: "error",
					duration: 5000,
					isClosable: true,
				});
			});
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
								color={"pink.600"}
								onClick={() => {
									setChangeValue(true);
								}}
								variant="link"
							>
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
								<Flex flexDirection={"column"} gap="2" w="90%" m="auto">
									<Center>
										<Divider w="30%" />
										<Text p="2">or continue with</Text>
										<Divider w="30%" />
									</Center>
									<Button
										colorScheme="whiteAlpha"
										color={"black"}
										variant="outline"
										borderColor={"gray"}
										leftIcon={<FcGoogle size={"20"} />}
									>
										Google
									</Button>
									<Button
										colorScheme="whiteAlpha"
										color={"black"}
										variant="outline"
										leftIcon={<FaGithub size={"20"} />}
									>
										GitHub
									</Button>
								</Flex>
							</TabPanels>
						</Tabs>
					</ModalBody>

					<ModalFooter>
						<Button colorScheme="pink" mr={3} onClick={onClose}>
							Close
						</Button>
						<Button variant="ghost" type="submit" onClick={onClose}>
							Login
						</Button>
					</ModalFooter>
				</form>
			</ModalContent>
		</Modal>
	);
};

export default Login;
