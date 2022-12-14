import {
	Button,
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
import React from "react";
import Form from "./Form";

const Signup = ({ isOpen, onClose }) => {
	return (
		<Modal isOpen={isOpen} onClose={onClose}>
			<ModalOverlay />
			<ModalContent>
				<ModalHeader>Signup</ModalHeader>
				<ModalCloseButton />
				<ModalBody>
					<Tabs isFitted variant="enclosed">
						<TabList mb="1em">
							<Tab>Customer</Tab>
							<Tab>Seller</Tab>
						</TabList>
						<TabPanels>
							<TabPanel>
								<Form />
							</TabPanel>
							<TabPanel>
								<Form />
							</TabPanel>
						</TabPanels>
					</Tabs>
				</ModalBody>

				<ModalFooter>
					<Button colorScheme="blue" mr={3} onClick={onClose}>
						Close
					</Button>
					<Button variant="ghost">Signup</Button>
				</ModalFooter>
			</ModalContent>
		</Modal>
	);
};

export default Signup;
