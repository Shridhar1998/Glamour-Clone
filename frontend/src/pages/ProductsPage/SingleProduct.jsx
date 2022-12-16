import {
  Box,
  Card,
  CardBody,
  Center,
  Container,
  Divider,
  Heading,
  HStack,
  Image,
  Stack,
  Text,
  VStack,
  Wrap,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import styles from "./singleProd.module.css";
import { AiFillStar } from "react-icons/ai";

import { TfiFacebook } from "react-icons/tfi";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { BsTwitter } from "react-icons/bs";
import { SiLinkedin, SiMessenger } from "react-icons/si";
import P_Button from "../../components/ProductPage/P_Button";
import P_Description from "../../components/ProductPage/P_Description";
import { useParams } from "react-router";
import axios from "axios";

function SingleProduct() {
  const [prod, setProd] = useState({});
  const { category, id } = useParams();

  function handleGet() {
    axios(`https://glamour.onrender.com/products/${category}/${id}`).then(
      (res) => {
        setProd(res.data[0]);
        // console.log(res, "prod");
      }
    );
  }
  console.log(prod);

  useEffect(() => {
    handleGet();
  }, []);
  return (
    <Container
      mt={"5rem"}
      className={styles.single_container}
      maxW={{ base: "100%", md: "95%", lg: "80%", sm: "100%" }}
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
            boxSizing="border-box"
          >
            <Stack
              className={styles.scrollbar}
              direction={{ sm: "row", md: "column", base: "row", lg: "column" }}
              border={"1px solid red"}
              w={{ base: "auto", sm: "90%", md: "100px", lg: "100px" }}
              h={{ base: "100px", sm: "100px", md: "350px", lg: "100%" }}
              overflow={"scroll"}
              overflowX="scroll"
              boxSizing="border-box"
              // justifyContent={'space-around'}
            >
              {prod?.product_colors
                ?.map((e, i) => (
                  <Image
                    key={i}
                    src={ `${prod.api_featured_image
                    }`|| `https://files.myglamm.com/site-images/200x200/POPxo-Makeup-Thrivin'-Mini-Nail-Kit-(2).jpg`}
                    w="100px"
                    h={"100px"}
                    border="1px solid lightgrey"
                  />
                ))}
            </Stack>

            <Image
              boxSizing="border-box"
              // border="2px solid red"
              maxW={{ base: "90%", sm: "95%", md: "90%" }}
              src={`${prod.image_link}`}
              alt="Caffe Latte"
            />

            <Stack
              overflowY={"scroll"}
              className={styles.scrollbar}
              // border="1px solid red"
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
                    {prod.product_colors?.map((e, i) => (
                        <Box
                          key={i}
                          // border={"2px solid red"}
                          bgColor={`${e.hex_value}`}                          w={"50px"}
                          h="50px"
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
          {/* icons */}
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
