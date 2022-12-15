import {
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
} from "@chakra-ui/react";
import React, { useState } from "react";
import Form from "./Form";

const Signup = ({ isOpen, onClose }) => {
	const initState = {
		fullname: "",
		email: "",
		password: "",
	};
	const [type, setType] = useState("user");
	const [form, setForm] = useState(initState);
	const handleInput = ({ target: { name, value } }) => {
		setForm({ ...form, [name]: value });
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(form, type);
	};
	return (
		<Modal isOpen={isOpen} onClose={onClose}>
			<ModalOverlay />
			<ModalContent>
				<form onSubmit={handleSubmit}>
					<ModalHeader>Signup</ModalHeader>
					<ModalCloseButton />
					<ModalBody>
						<Tabs isFitted variant="enclosed">
							<TabList mb="1em">
								<Tab
									onClick={() => {
										setType("user");
									}}
								>
									Customer
								</Tab>
								<Tab
									onClick={() => {
										setType("seller");
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
							</TabPanels>
						</Tabs>
					</ModalBody>

					<ModalFooter></ModalFooter>
				</form>
			</ModalContent>
		</Modal>
	);
};

export default Signup;
