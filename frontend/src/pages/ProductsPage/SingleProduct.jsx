import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  Center,
  Container,
  Divider,
  Heading,
  HStack,
  Image,
  Stack,
  Tag,
  Text,
  VStack,
  Wrap,
} from "@chakra-ui/react";
import React from "react";
import styles from "./singleProd.module.css";
import { AiFillStar } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { TfiFacebook } from "react-icons/tfi";
import { BsTwitter } from "react-icons/bs";
import { SiLinkedin, SiMessenger } from "react-icons/si";
import P_Button from "../../components/ProductPage/P_Button";
import P_Description from "../../components/ProductPage/P_Description";

function SingleProduct() {
  return (
    <Container
      mt={"5rem"}
      className={styles.single_container}
      maxW={{ base: "100%", md: "95%", lg: "80%" }}
      minH="100vh"
    >
      <Center>
        <VStack>
          <Card
            direction={{ base: "column", md: "row", sm: "column" }}
            overflow="hidden"
            variant="outline"
            h={{ md: "350px", sm: "auto", lg: "350px" }}
            w={{ sm: "100%", lg: "100%" }}
          >
            <Stack
              direction={{ sm: "row", md: "column", base: "row", lg: "column" }}
              // border={"1px solid red"}
              w={{ base: "auto", sm: "95%", md: "100px", lg: "100px" }}
              h={{ base: "100px", sm: "100px", md: "350px", lg: "100%" }}
              overflow={"scroll"}
              placeItems="center"
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
              maxW={{ base: "100%", sm: "95%" }}
              src="https://files.myglamm.com/site-images/200x200/POPxo-Makeup-Thrivin'-Mini-Nail-Kit-(2).jpg"
              alt="Caffe Latte"
            />

            <Stack
              overflowY={"scroll"}
              border="1px solid red"
              w={{ lg: "600px" }}
            >
              <CardBody>
                <Heading size="md">
                  POPXO MAKEUP - THRIVIN’ MINI NAIL KIT
                </Heading>

                <Text py="2" color={"#909090"}>
                  Mini Nail Polish set with 5 chip-resistant glitter nail
                  polishes
                </Text>
                <HStack m={"0.5rem 0"} fontSize={"lg"}>
                  <Text fontWeight={"600"}>5 </Text>
                  <Text>
                    <AiFillStar color="pink" />
                  </Text>
                  <Divider bg={"grey"} h="20px" orientation="vertical" />
                  <Text>1536 ratings</Text>
                </HStack>

                {/* price */}
                <HStack m={"0.5rem 0 0.1rem 0"}>
                  <Text fontSize={"xl"}>₹ 400</Text>
                  <Text textDecoration={"line-through"} color="grey">
                    {" "}
                    ₹ 547
                  </Text>
                </HStack>
                <Text mb={"1rem"}>(MRP incl. of all taxes)</Text>
                <Box>
                  <P_Button text={"ADD TO cart"} />
                </Box>
                {/* shade */}
                <Stack>
                  <Text fontWeight={"bold"} fontSize="lg">
                    shades
                  </Text>
                  <Wrap>
                    {Array(10)
                      .fill(0)
                      .map((e) => (
                        <Box
                          border={"2px solid red"}
                          bg="pink"
                          w={"100px"}
                          h="100px"
                        ></Box>
                      ))}
                  </Wrap>

                  {/* Description */}
                  <P_Description />
                  {/* Description */}
                </Stack>
              </CardBody>
            </Stack>
          </Card>
          <Box w={{ lg: "200px" }}>
            <HStack placeContent={"left "} spacing="1rem" m="1rem 0">
              <TfiFacebook fontSize={"25px"} />
              <BsTwitter fontSize={"25px"} />
              <SiLinkedin fontSize={"25px"} />
              <SiMessenger fontSize={"25px"} />
            </HStack>
          </Box>
        </VStack>
      </Center>
    </Container>
  );
}

export default SingleProduct;
