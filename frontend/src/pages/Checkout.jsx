import { Box, Divider, Text } from "@chakra-ui/react";
import React from "react";
import "./checkout.css";
import { EmailIcon, PhoneIcon } from '@chakra-ui/icons'
import { FaTruckMoving } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";

const Checkout = () => {
  return (
    <>
      <Text textAlign={"center"} fontSize={["20px", "24px", "26px", "28px"]}>
        Checkout
      </Text>
      <Box className="outerbox">
        <Box className=" innerbox">
          <Box className="shippingadddress">
            <Text>SHIPPING ADDRESS</Text>
            <div className="line1"></div>
            <Text>Neeraj Singh</Text>
            <Text>Chaudhary colony</Text>
            <PhoneIcon /> <span>skalsaj</span>
            <br />
            <EmailIcon/> <span>saksadjljs</span>
            <br />
            <button>CHANGE</button>
            <div className="deldate"><FaTruckMoving/><Text ml={"20px"}> Expected Delivery Date</Text><Text>shdjkshjsdk</Text></div>
          </Box>
          <Box className="ordersection">
            <Text>YOUR ORDER</Text>
            <Divider></Divider>
            <Box className="tablescroll">
                <Box className="orderTable">
                    <Box className="imagetable"><img src="https://files.myglamm.com/site-images/original/LP1_4.png" alt="" /></Box>
                    <Box className="producttable">dsjhkfhkshdfkkwsjdlslksdjsljlsjljdljgjgjsjljsdljlsdjksdj</Box>
                    <Box className="quantitytable">2</Box>
                    <Box className="pricetable">36666</Box>
                </Box>
            </Box>
          </Box>
        </Box>
        <Box className=" innerbox">
            <Text>Order Summary</Text>
            <Text></Text>
        </Box>
      </Box>
    </>
  );
};

export default Checkout;
