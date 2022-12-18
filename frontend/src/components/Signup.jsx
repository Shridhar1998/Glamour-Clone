import {
	Button,
	Center,
	Divider,
	Flex,
	Link,
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalFooter,
	ModalHeader,
	ModalOverlay,
	Tab,
	TabList,
	TabPanel,
	TabPanels,
	Tabs,
	Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useToast } from "@chakra-ui/react";
import { signUpApi } from "../redux/Auth/auth.actions";
import Form from "./Form";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

const Signup = ({ isOpen, onClose, setChangeValue }) => {
	const initState = {
		name: "",
		email: "",
		password: "",
		role: "user",
	};
	const dispatch = useDispatch();
	const toast = useToast();
	const [form, setForm] = useState(initState);
	const handleInput = ({ target: { name, value } }) => {
		setForm({ ...form, [name]: value });
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(signUpApi(form))
			.then((res) => {
				toast({
					title: "New user added! Welcome✨",
					description: "It's a start of something amazing.",
					position: "top",
					status: "success",
					duration: 5000,
					isClosable: true,
				});
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
					<ModalHeader>Signup</ModalHeader>
					<ModalCloseButton />
					<ModalBody>
						<Flex gap="2" pb="4">
							Already have an account?
							<Link
								color={"pink.600"}
								onClick={() => {
									setChangeValue(false);
								}}
								variant="link"
							>
								{" "}
								Login
							</Link>
						</Flex>
						<Tabs isFitted variant="enclosed" colorScheme={"pink"}>
							<TabList>
								<Tab
									onClick={() => {
										setForm({ ...form, role: "user" });
									}}
								>
									Customer
								</Tab>
								<Tab
									onClick={() => {
										setForm({ ...form, role: "seller" });
									}}
								>
									Seller
								</Tab>
							</TabList>
							<TabPanels>
								<TabPanel>
									<Form {...form} onClose={onClose} handleInput={handleInput} />
								</TabPanel>
								<TabPanel>
									<Form {...form} onClose={onClose} handleInput={handleInput} />
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
						<Button variant="ghost" type="submit">
							Signup
						</Button>
					</ModalFooter>
				</form>
			</ModalContent>
		</Modal>
	);
};

export default Signup;
