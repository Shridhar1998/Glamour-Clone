import React, { useState } from "react";
import {
	Tabs,
	Tab,
	TabList,
	TabPanel,
	TabPanels,
	TableContainer,
	Table,
	Thead,
	Tr,
	Th,
	Tbody,
	Td,
	Button,
	Flex,
} from "@chakra-ui/react";
import axios from "axios";
import { getItem } from "../../redux/localStorage";

const AdminDashboard = () => {
	const token = getItem("token");
	const [data, setData] = useState([]);

	axios
		.get("https://glamour.onrender.com/user", {
			headers: {
				authorization: token,
			},
		})
		.then((res) => setData(res.data));

	return (
		<Tabs mt="4" colorScheme="pink" isFitted>
			<TabList>
				<Tab>Pending Sellers</Tab>
				<Tab>Approved Sellers</Tab>
				<Tab>Rejected Sellers</Tab>
				<Tab>All Customers</Tab>
			</TabList>
			<TabPanels>
				<TabPanel>
					<TableContainer key="1">
						<Table variant="striped" colorScheme="pink">
							<Thead>
								<Tr>
									<Th>Name</Th>
									<Th>Email</Th>
									<Th>Take Action</Th>
								</Tr>
							</Thead>
							<Tbody>
								{data.map((ele) => {
									if (ele.role === "seller" && ele.status === "pending") {
										return (
											<Tr key={ele.email}>
												<Td>{ele.name}</Td>
												<Td>{ele.email}</Td>
												<Td>
													<Flex alignItems={"center"} gap="2">
														<Button variant={"link"}>Approve</Button>
														{" / "}
														<Button variant={"link"}>Reject</Button>
													</Flex>
												</Td>
											</Tr>
										);
									}
									return <Tr key={ele.email}></Tr>;
								})}
							</Tbody>
						</Table>
					</TableContainer>
				</TabPanel>
				<TabPanel>
					<TableContainer key="2">
						<Table variant="striped" colorScheme="pink">
							<Thead>
								<Tr>
									<Th>Name</Th>
									<Th>Email</Th>
									<Th>status</Th>
								</Tr>
							</Thead>
							<Tbody>
								{data.map((ele) => {
									if (ele.role === "seller" && ele.status === "approved") {
										return (
											<Tr key={ele.email}>
												<Td>{ele.name}</Td>
												<Td>{ele.email}</Td>
												<Td>{ele.status}</Td>
											</Tr>
										);
									}
									return <Tr key={ele.email}></Tr>;
								})}
							</Tbody>
						</Table>
					</TableContainer>
				</TabPanel>
				<TabPanel>
					<TableContainer key="3">
						<Table variant="striped" colorScheme="pink">
							<Thead>
								<Tr>
									<Th>Name</Th>
									<Th>Email</Th>
									<Th>status</Th>
								</Tr>
							</Thead>
							<Tbody>
								{data.map((ele) => {
									if (ele.role === "seller" && ele.status === "rejected") {
										return (
											<Tr key={ele.email}>
												<Td>{ele.name}</Td>
												<Td>{ele.email}</Td>
												<Td>{ele.status}</Td>
											</Tr>
										);
									}
									return <Tr key={ele.email}></Tr>;
								})}
							</Tbody>
						</Table>
					</TableContainer>
				</TabPanel>
				<TabPanel>
					<TableContainer key="4">
						<Table variant="striped" colorScheme="pink">
							<Thead>
								<Tr>
									<Th>Name</Th>
									<Th>Email</Th>
									<Th>Joined on</Th>
								</Tr>
							</Thead>
							<Tbody>
								{data.map((ele) => {
									let date = new Date(ele.createdAt);
									if (ele.role === "user") {
										return (
											<Tr key={ele.email}>
												<Td>{ele.name}</Td>
												<Td>{ele.email}</Td>
												<Td>{date.toGMTString()}</Td>
											</Tr>
										);
									}
									return <Tr key={ele.email}></Tr>;
								})}
							</Tbody>
						</Table>
					</TableContainer>
				</TabPanel>
			</TabPanels>
		</Tabs>
	);
};

export default AdminDashboard;
