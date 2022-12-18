import {
	Box,
	Card,
	CardBody,
	Heading,
	Image,
	SimpleGrid,
	Stack,
	Text,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { getItem } from "../../redux/localStorage";

const UserDashboard = () => {
	const user = getItem("userid");
	const [data, setData] = useState([]);
	useEffect(() => {
		axios
			.get("https://glamour.onrender.com/user")
			.then((res) => setData(res.data));
	}, []);

	return (
		<Card
			direction={{ base: "column", sm: "row" }}
			overflow="hidden"
			variant="outline"
			pr="5%"
			pl="5%"
			pt="10"
			pb="10"
		>
			<Image
				objectFit="cover"
				maxW={{ base: "100%", sm: "200px" }}
				src="https://i.postimg.cc/Fsxb3CGC/dummy.jpg"
				alt="Dummy image"
				borderRadius={"20"}
			/>

			<Stack>
				<CardBody pl={["", "20"]}>
					<Heading size="lg">Profile</Heading>

					{data.map((ele) => {
						if (ele._id === user) {
							let date = new Date(ele.createdAt);
							return (
								<SimpleGrid
									key={ele.email}
									pt="4"
									columns={2}
									spacingX={["2", "300"]}
									spacingY={["2", "30"]}
								>
									<Box>
										<Heading size={["sm", "md"]}>Name</Heading>
										<Text fontSize={["md", "lg"]}>{ele.name} </Text>
									</Box>
									<Box>
										<Heading size={["sm", "md"]}>Email</Heading>
										<Text fontSize={["md", "lg"]}>{ele.email}</Text>
									</Box>
									<Box>
										<Heading size={["sm", "md"]}>Joined on</Heading>
										<Text fontSize={["md", "lg"]}>
											{date.toLocaleDateString()}
										</Text>
									</Box>
								</SimpleGrid>
							);
						}
						return <div key={ele.email}></div>;
					})}
				</CardBody>
			</Stack>
		</Card>
	);
};

export default UserDashboard;
