import {
  Box,
  Divider,
  HStack,
  List,
  ListIcon,
  ListItem,
  Text,
  VStack,
} from "@chakra-ui/layout";
import { Tag } from "@chakra-ui/tag";
import React, { useState } from "react";
import Svg from "./Svg";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";

import Offer_Image from "./Offer_Image";
import Prod_Tabs from "./Prod_Tabs";

function P_Description({product_type}) {
  const [read, setRead] = useState(false);
  return (
    <Box>
      <Tag color="black" bg={"lightgrey"} p="7px" m="1rem 0">
        You will receive cashback worth ₹111 as myglammPOINTS on this purchase
      </Tag>
      <Divider bg={"grey"} />
      <HStack justifyContent={"space-between"} m="1rem 0">
        <Svg />
        <Text
          fontWeight={"semibold"}
          display="flex"
          gap={"0.3rem"}
          alignItems="center"
          fontSize={"1.0rem"}
          onClick={() => setRead(!read)}
        >
          READ {read ? "MORE" : "LESS"}{" "}
          {!read ? <IoIosArrowUp pt="10px" /> : <IoIosArrowDown pt="10px" />}
        </Text>
      </HStack>

      {/* read more */}
      <Box
        py={4}
        justifyItems="start"

        // border={"1px solid red"}
      >
        <List spacing={4}>
          <ListItem display={"flex"} gap="2">
            <Offer_Image />
            Get Upto 60% OFF. Select a coupon code on checkout.
          </ListItem>
          {read && (
            <List spacing={4}>
              <ListItem display={"flex"} gap="2">
                <Offer_Image />
                Get up to ₹150 Cashback in Mobikwik. on a minimum purchase of
                ₹250
              </ListItem>
              <ListItem display={"flex"} gap="2">
                <Offer_Image />
                Sanitiser Icon Get 20% Cashback in Simpl Upto Rs.200, No Minimum
                Order Value.
              </ListItem>
              <ListItem display={"flex"} gap="2">
                <Offer_Image />
                Earn Good Points on this purchase
              </ListItem>
            </List>
          )}
        </List>
        {/* <Box w="80%" pt={7}>
          <Button w="full" colorScheme="red" variant="outline">
            Start trial
          </Button>
        </Box> */}
      </Box>
      <Divider bg={"grey"} />

      {/* Tabs */}
      <Prod_Tabs  type= {product_type} />

      {/* Tabs */}
    </Box>
  );
}

export default P_Description;
