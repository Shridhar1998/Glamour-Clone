import { Box, Button, Container, Text } from "@chakra-ui/react";
import React from "react";
import "./cart.css";
const Cart = () => {
  return (
    <>
      <div className="outerbox">
        <div>
          <h1>Bag</h1>
        </div>
        <div className="productsOuter">
          <div className="singleProduct">
            <div className="Imgdiv">
              <img
                src="https://files.myglamm.com/site-images/original/LP1_4.png"
                alt="default"
              />
            </div>
            <div className="detailsdiv">
              <div className="productname">
                <Text fontSize={{ base: "20px", md: "25px", lg: "28px" }}>
                  This
                </Text>
              </div>
              <div className="productprice">
                <Text fontSize={{ base: "20px", md: "25px", lg: "28px" }}>
                  This
                </Text>
              </div>
              <div className="counter">
                <Button
                  colorScheme="black"
                  variant="solid"
                  color="white"
                  bgColor="black"
                  className="counterbtn"
                  fontSize={["20px", "24px", "28px"]}
                  borderRadius="50%"
                >
                  -
                </Button>
                <Text className="countText" fontSize={["16px", "16px", "20px"]}>
                  26
                </Text>
                <Button
                  colorScheme="black"
                  variant="solid"
                  color="white"
                  bgColor="black"
                  className="counterbtn"
                  fontSize={["20px", "24px", "28px"]}
                  borderRadius="50%"
                //   w={["30%","40%","50%"]}
                p={"0px"}
                >
                  +
                </Button>
              </div>
              <div className="removeproduct">
                <button className="removebtn">Remove </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Box
        w="100vw"
        border="1px solid"
        h={"50px"}
        fontSize={["15px","20px","21px","21px"]}
        pl={"60vw"}
        alignItems="center"
        bgColor={"whitesmoke"}
        pt="7px"
        fontWeight={"bold"}
      >
        GRAND TOTAL: 222
      </Box>
      <Button
        colorScheme={"black"}
        bgColor="black"
        color={"white"}
        fontSize={["15px", "22px", "24px"]}
        borderRadius="0%"
        display={"block"}
        m={"auto"}
        mt="30px"
        w={["60vw", "55vw", "40vw", "35vw", "25vw", "25vw"]}
        h={["25px", "40px", "40px"]}
      >
        PROCEED TO CHECKOUT
      </Button>
    </>
  );
};

export default Cart;
