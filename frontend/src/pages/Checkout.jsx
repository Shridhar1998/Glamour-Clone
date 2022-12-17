import { Box, Divider, Text } from "@chakra-ui/react";
import React from "react";
import "../styles/checkout.css";
import { EmailIcon, PhoneIcon } from "@chakra-ui/icons";
import { FaTruckMoving } from "react-icons/fa";

const Checkout = () => {
  return (
    <>
      <Text textAlign={"center"} fontSize={["20px", "24px", "26px", "28px"]}>
        Checkout
      </Text>
      <div className="outerbox1">
        <Box className=" innerbox1">
          <Box className="shippingadddress">
            <Text fontSize="16px" mt="3vh" fontWeight="600" mb="1vh">SHIPPING ADDRESS</Text>
            <Divider borderColor="blackAlpha.500"></Divider>
            <Text fontSize={"16px"} fontWeight="600" mt={"1vh"}>
              Neeraj Singh
            </Text>
            <Text fontSize={"15px"} mb="1.5vh">
              Chaudhary colony
            </Text>
            <PhoneIcon h={"18px"} />
            <span style={{ marginLeft: "1vw", fontSize:"16px" }} > 88996368856</span>
            <br />
            <EmailIcon h={"18px"}  /> <span style={{ marginLeft: "1vw", fontSize:"17px"  }}>saksadjljs</span>
            <br />
            <button className="changebtn">CHANGE</button>
            <div className="deldate">
              <FaTruckMoving />
              <Text ml={"20px"} fontSize="16px" fontWeight="600">
                Expected Delivery Date
              </Text>
              <Text ml="1vw">tree</Text>
            </div>
          </Box>
          <Box className="ordersection">
            <Text fontSize="16px" mt="3vh" fontWeight="600" mb="1vh">
              YOUR ORDER
            </Text>
            <Divider borderColor="blackAlpha.500"></Divider>
            <div className="tablescroll">
              <Box className="orderTable">
                <Box className="imagetable">
                  <img
                    src="https://files.myglamm.com/site-images/original/LP1_4.png"
                    alt=""
                  />
                </Box>
                <Box className="producttable">
                  my name is neeraj singh
                </Box>
                <Box className="quantitytable">2</Box>
                <Box className="pricetable">36666</Box>
              </Box>
              <Divider mt={".5vh"} border="2px" bgColor={"blackAlpha.500"}></Divider>
              <Box className="orderTable">
                <Box className="imagetable">
                  <img
                    src="https://files.myglamm.com/site-images/original/LP1_4.png"
                    alt=""
                  />
                </Box>
                <Box className="producttable" fontSize={"18px"}>
                  dsjhkfhkshdfkkwsjdlslksdjsljlsjljdljgjgjsjljsdljlsdjksdj
                </Box>
                <Box className="quantitytable" fontSize={"18px"}>2</Box>
                <Box className="pricetable" fontSize={"18px"}>36666</Box>
              </Box>
            </div>
          </Box>
        </Box>
        <Box className=" innerbox2">
          <Text ml={["2vw"]} mt="2vh" fontSize={"20px"} fontWeight="600">
            Order Summary
          </Text>
          <Box className="orderouter">
            <Text>MRP</Text>
            <Text>645</Text>
          </Box>
          <Box className="orderouter">
            <Text>Discount on MRP</Text>
            <Text>{`-40`}</Text>
          </Box>
          <Text ml={"2vw"} mt="2vh" mb={"1vh"} fontSize="15px" fontWeight="600">
            Apply Promo Code
          </Text>
          <div className="apply">
            <input
              type="text"
              placeholder="PROMO CODE"
              className="promoinput"
            ></input>
            <button className="applybtn">APPLY</button>
          </div>
          <Box className="orderouter">
            <Text>Discount</Text>
            <Text></Text>
          </Box>
          <Box className="orderouter">
            <Text>Shipping Charges</Text>
            <Text>FREE</Text>
          </Box>
          <Box className="orderouter payable">
            <Text>Amount Payable</Text>
            <Text>480</Text>
          </Box>
          <Box className="orderouter">
            <Text>You Saved</Text>
            <Text>0</Text>
          </Box>
          <Box className="orderouter">
            <Text>You will earn</Text>
            <Text>48</Text>
          </Box>
          <button className="proceedtopayment">proceed to payment</button>
        </Box>
      </div>
      <Divider borderColor="blackAlpha.500" mt={"20px"} mb="1vh"></Divider>
      <div>kasdkj</div>
    </>
  );
};

export default Checkout;
