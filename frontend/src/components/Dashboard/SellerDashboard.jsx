import {
	Center,
	Heading,
	Tab,
	TabList,
	TabPanel,
	TabPanels,
	Tabs,
} from "@chakra-ui/react";
import React from "react";

const SellerDashboard = () => {
	return (
		<Tabs isFitted mt="4" colorScheme={"pink"}>
			<TabList>
				<Tab>Total Orders</Tab>
				<Tab>Total Orders</Tab>
			</TabList>
			<TabPanels>
				<TabPanel>
					<Center>
						<Heading size={"md"}>No data Found</Heading>
					</Center>
				</TabPanel>
				<TabPanel>
					<Center>
						<Heading size={"md"}>No data Found</Heading>
					</Center>
				</TabPanel>
			</TabPanels>
		</Tabs>
	);
};

export default SellerDashboard;
