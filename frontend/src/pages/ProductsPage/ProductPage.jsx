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
  Flex,
  Heading,
  Image,
  Select,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

import Header_Gradient from "../../components/ProductPage/Header_Gradient";
import styles from "./product.module.css";
import { dummydata } from "./data";

function ProductPage() {
  // completed
  // future: pagination 
  const [data, setData] = useState(Array(8).fill(0));
  const [prod, setProd] = useState([]);
  const { category } = useParams();
  const [sortBy, setSortBy] = useState("asc");
  const [page,setPage]=useState(2)
  function handleGet() {
    
    axios(`https://glamour.onrender.com/products/${category}?page=${page}`).then((res) => {
      setProd(res.data);
      // console.log(res, "prod");
      localStorage.setItem("data", JSON.stringify(res.data));
    });
  }
  function letsSort(sortBy) {
    if (sortBy =="asc") {
      return axios.get(
        `https://glamour.onrender.com/products/${category}/${sortBy}/sort`
      ).then(res=>{
        // setProd(res.data)
        console.log(res,"sort")})
    } else if (sortBy =="desc") {
  
      return axios.get(
        `https://glamour.onrender.com/products/${category}/${sortBy}/sort`
      ).then(res=>console.log(res,"desc"))
    }
  }
  useEffect(() => {
    letsSort(sortBy);
  }, [sortBy]);

  console.log(prod);
  useEffect(() => {
    setProd(dummydata);
    if(category=="gel"){
setPage(1)
    }
  }, []);

  useEffect(() => {
    handleGet();
  }, [category]);

  return (
    <Container
      className={styles.prod_container}
      maxW={{ base: "100%", md: "95%", lg: "90%" }}
      minH="100vh"
      color="#262626"
    >
      <Center p={"0.5rem 0"}>
        <Breadcrumb>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem>
            <BreadcrumbLink href="/products/lipstick">Makeup</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
      </Center>
      <Divider bgColor={"lightgrey"} />
      {/* header Gradient */}
      <Box m={"2rem 0"}>
        <Header_Gradient name={category} size={"40px"} />
      </Box>
      {/* header Gradient */}
      <Box m={"1rem 0"}>
        <Select
          placeholder="Select option"
          variant="filled"
          w={"xs"}
          onChange={(e) => setSortBy(e.target.value)}
        >
          <option value="asc">Low to High</option>
          <option value="desc">High to Low</option>
        </Select>
      </Box>

      <SimpleGrid
        minChildWidth={{ base: "100%", md: "40%", lg: "30%" }}
        spacing="30px"
      >
        {(prod || data).map((e, i) => (
          <Link key={i} to={`/${e.category}/${e._id}`}>
            <Card
              maxW="sm"
              bg={"#ffff"}
              borderRadius={"2px"}
              boxShadow="rgba(9, 30, 66, 0.25) 0px 1px 1px, rgba(9, 30, 66, 0.13) 0px 0px 1px 1px"
              _hover={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}
            >
              <CardBody>
                <Center height={"300px"}>
                  <Image
                    src={
                      e.image_link ||
                      "https://files.myglamm.com/site-images/800x800/staydefined_3.jpeg"
                    }
                    alt="Green double couch with wooden legs"
                    borderRadius="sm"
                    w={"85%"}
                    height={"85%"}
                    _hover={{
                      w: "95%",
                      h: "95%",
                    }}

                    //   border={"1px solid red"}
                  />
                </Center>

                <Stack mt="6" spacing="3">
                  <Heading
                    size="sm"
                    color={"black"}
                    // fontSize='20px'
                    textAlign="center"
                    textTransform={"uppercase"}
                    noOfLines="1"
                  >
                    {e.name || "MYGLAMM SUPER SERUM COMPACT - 101N CREAM"}
                  </Heading>
                  <Text color={"black"} noOfLines="2" textAlign={"justify"}>
                    {e.description ||
                      " Skin-perfecting Compact Powder With Hyaluronic Acid"}
                  </Text>
                  <Flex color={"#111"} gap="0.5rem">
                    <Image
                      src={
                        "https://files.myglamm.com/site-images/original/plus-icon.png"
                      }
                    />
                    <span>
                      {e.product_colors?.length} {"  "}SHADES
                    </span>
                  </Flex>
                  <Text color="blue.600" fontSize="2xl">
                    $ {e.price || 450}
                  </Text>
                </Stack>
              </CardBody>
              <Divider />
            </Card>
          </Link>
        ))}
      </SimpleGrid>
    </Container>
  );
}

export default ProductPage;
