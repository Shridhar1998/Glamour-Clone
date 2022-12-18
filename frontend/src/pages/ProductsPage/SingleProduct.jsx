import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
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
  useToast,
  VStack,
  Wrap,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import styles from "./singleProd.module.css";
import { AiFillStar } from "react-icons/ai";

import { TfiFacebook } from "react-icons/tfi";

import { BsTwitter } from "react-icons/bs";
import { SiLinkedin, SiMessenger } from "react-icons/si";
import P_Button from "../../components/ProductPage/P_Button";
import P_Description from "../../components/ProductPage/P_Description";
import { useNavigate, useParams } from "react-router";
import axios from "axios";
import P_video from "../../components/ProductPage/P_Video_Desc";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { getItem } from "../../redux/localStorage";
import { getCartDetails } from "../../redux/cart/action";

function SingleProduct() {
  const [prod, setProd] = useState({});
  const { category, id } = useParams();
  const user_id = getItem("userid");
  let token = getItem("token");

  const toast = useToast()
  const navigate = useNavigate()

  function handleGet() {
    axios(`https://glamour.onrender.com/products/${category}/${id}`).then(
      (res) => {
        setProd(res.data[0]);
      }
    );
  }



  const handleAddtoCart = async () => {
    // dispatch(getCartDetails())
    let productid = prod._id;
    delete prod._id;
    let objadd = {
      ...prod,
      userId: user_id,
      productId: productid,
      quantity: 1,
    };
    await axios
      .post(`https://glamour.onrender.com/cart/${user_id}`, objadd, {
        headers: { authorization: token },
      })
      .then((res) => {        toast({
        title: 'Add to Cart',
        position:"top",
        description: "Product added successfully",
        status: 'success',
        duration: 3000,
        isClosable: true,
      })
    navigate("/cart")
    }
).catch((err)=>  toast({
  title: 'Something went wrong',
  position:"top",
  description: "Please try again",
  status: 'error',
  duration: 2000,
  isClosable: true,
}));

  };

  useEffect(() => {
    handleGet();
  }, []);
  return (
    <Container
      mt={"1rem"}
      className={styles.single_container}
      maxW={{ base: "100%", md: "95%", lg: "80%", sm: "100%" }}
      minH="100vh"
    >
      <Center p={"0.5rem 0"}>
        <Breadcrumb>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem>
            <BreadcrumbLink textTransform={"capitalize"} href={`/${category}`}>
              {category}
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <BreadcrumbLink textTransform={"capitalize"} href="#">
              {prod.brand}
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <BreadcrumbLink textTransform={"capitalize"} href="#">
              {prod.product_type}
            </BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
      </Center>
      <Divider bgColor={"lightgrey"} />
      <Center mt="2rem ">
        <VStack>
          <Card
            direction={{ base: "column", md: "row", sm: "column" }}
            overflow="hidden"
            variant="outline"
            h={{ md: "350px", sm: "auto", lg: "400px" }}
            w={{ sm: "400px", lg: "100%", base: "350px" }}
            boxSizing="border-box"
            // border={'1px solid red'}
          >
            <Stack
              className={styles.scrollbar}
              direction={{ sm: "row", md: "column", base: "row", lg: "column" }}
              // border={"1px solid red"}
              w={{ base: "350px", sm: "90%", md: "100px", lg: "100px" }}
              h={{ base: "100px", sm: "100px", md: "350px", lg: "100%" }}
              overflow={"scroll"}
              overflowX="scroll"
              boxSizing="border-box"
              // justifyContent={'space-around'}
            >
              {prod?.product_colors?.map((e, i) => (
                <Image
                  key={i}
                  src={
                    `${prod.api_featured_image}` ||
                    `https://files.myglamm.com/site-images/200x200/POPxo-Makeup-Thrivin'-Mini-Nail-Kit-(2).jpg`
                  }
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
              // className={styles.scrollbar}
              // border="1px solid red"
              w={{ lg: "600px" }}
            >
              <CardBody>
                <Heading size="md">
                  {prod?.name || "POPXO MAKEUP - THRIVIN’ MINI NAIL KIT"}
                </Heading>

                <Text py="2" color={"#909090"}>
                  {prod?.description ||
                    " Mini Nail Polish set with 5 chip-resistant glitter nail polishes"}
                </Text>
                <HStack m={"0.5rem 0"} fontSize={"lg"}>
                  <Text fontWeight={"bold"}>Type :</Text>
                  <Text>{prod?.product_type || "ACMA"}</Text>
                </HStack>
                <HStack m={"0.5rem 0"} fontSize={"lg"}>
                  <Text fontWeight={"bold"}>Category :</Text>
                  <Text>{prod?.category || "Makeup"}</Text>
                </HStack>
                <HStack m={"1rem 0"} fontSize={"lg"}>
                  <Text fontWeight={"600"}>5 </Text>
                  <Text>
                    <AiFillStar color="pink" />
                  </Text>
                  <Divider bg={"grey"} h="20px" orientation="vertical" />
                  <Text>1536 ratings</Text>
                </HStack>

                {/* price */}
                <HStack m={"0.5rem 0 0.1rem 0"}>
                  <Text fontSize={"xl"}>
                    {prod?.price_sign || "$"} {prod?.price || 6.0}
                  </Text>
                  <Text textDecoration={"line-through"} color="grey">
                    {" "}
                    $ {+prod?.price + 4.3 || 6.0}
                  </Text>
                </HStack>
                <Text mb={"1rem"}>(MRP incl. of all taxes)</Text>
                <Box>
                  <P_Button
                    text={"ADD TO cart"}
                    handleAddtoCart={handleAddtoCart}
                  />
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
                        bgColor={`${e.hex_value}`}
                        w={"50px"}
                        h="50px"
                      ></Box>
                    ))}
                  </Wrap>

                  {/* Description */}
                  <P_Description {...prod} />
                  {/* Description */}
                </Stack>
              </CardBody>
            </Stack>
          </Card>
          <Box m="3rem"></Box>
          {/* icons */}
          <Box w={{ lg: "200px" }} mt={6}>
            <HStack placeContent={"left "} spacing="1rem" m="1rem 0">
              <TfiFacebook fontSize={"25px"} />
              <BsTwitter fontSize={"25px"} />
              <SiLinkedin fontSize={"25px"} />
              <SiMessenger fontSize={"25px"} />
            </HStack>
          </Box>
        </VStack>
      </Center>

      {/* video description */}

      <Box>
        <P_video />
      </Box>
    </Container>
  );
}

export default SingleProduct;
