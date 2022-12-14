import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  Container,
  Divider,
  Heading,
  HStack,
  Image,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import styles from "./singleProd.module.css";
import { AiFillStar } from "react-icons/ai";
import P_Button from "../../components/ProductPage/P_Button";

function SingleProduct() {
  return (
    <Container
      mt={"5rem"}
      className={styles.single_container}
      maxW={{ base: "100%", md: "95%", lg: "80%" }}
      minH="100vh"
      color="#262626"
    >
      <Card
        direction={{ base: "column", md: "row", sm: "column" }}
        overflow="hidden"
        variant="outline"
        h={{ md: "350px", sm: "auto", lg: "350px" }}
      >
        <Stack
          direction={{ sm: "row", md: "column" }}
          border={"1px solid red"}
          w={{ base: "auto", sm: "fit-content", md: "100px", lg: "100px" }}
          h={{ base: "350px", sm: "100px", lg: "100%" }}
          overflow={"scroll"}
        >
          {Array(5)
            .fill(0)
            .map((e, i) => (
              <Image
                src={`https://files.myglamm.com/site-images/200x200/POPxo-Makeup-Thrivin'-Mini-Nail-Kit-(2).jpg`}
                w="100px"
                h={"100px"}
              />
            ))}
        </Stack>
        <Image
          objectFit="cover"
          maxW={{ base: "100%", sm: "400px" }}
          src="https://files.myglamm.com/site-images/200x200/POPxo-Makeup-Thrivin'-Mini-Nail-Kit-(2).jpg"
          alt="Caffe Latte"
        />

        <Stack>
          <CardBody>
            <Heading size="md">POPXO MAKEUP - THRIVIN’ MINI NAIL KIT</Heading>

            <Text py="2">
              Mini Nail Polish set with 5 chip-resistant glitter nail polishes
            </Text>
            <HStack>
              <Text>5 </Text>
              <Text>
                <AiFillStar color="pink" />
              </Text>
              <Divider bg={"grey"} h="20px" orientation="vertical" />
              <Text>1536 ratings</Text>
            </HStack>

            {/* price */}
            <HStack>
              <Text>₹ 400</Text>
              <Text textDecoration={"line-through"}> ₹ 547</Text>
            </HStack>
            <Text>(MRP incl. of all taxes)</Text>

            {/* shade */}
            <HStack>
              <Text>shades</Text>
              <Divider bg={"grey"} h="20px" orientation="vertical" />
              <Text textDecoration={"line-through"}> ₹ 547</Text>
            </HStack>
          </CardBody>

          <CardFooter>
            <P_Button text={'ADD TO cart'}  />
          </CardFooter>
        </Stack>
      </Card>
    </Container>
  );
}

export default SingleProduct;
