import { Box, Text } from "@chakra-ui/react";
import React from "react";
import { useState } from "react";
import "./addressform.css";

const AddressForm = () => {
  const [type, setType] = useState("");

  const handleAddress = (e) => {
    console.log(e.target.className);
    let targeted1 = document.getElementsByClassName("home type");
    let targeted2 = document.getElementsByClassName("office type");
    setType(e.target.className);
    if (e.target.className === "home type") {
      targeted1[0].style.backgroundColor = "blue";
      targeted2[0].style.backgroundColor = "white";
    } else {
      targeted1[0].style.backgroundColor = "white";
      targeted2[0].style.backgroundColor = "blue";
    }
  };

  return (
    <>
      <Box className="addressbox">
        <Text fontSize="17px" fontWeight={"600"}>
          ADD NEW ADDRESS
        </Text>
        <div className="line1"></div>
        <Text fontSize="17px" fontWeight={"600"}>
          Contact
        </Text>
        <Box className="contactInfo">
          <div className="myfloat">
            <input type="text" placeholder=" " required />
            <label>Name</label>
          </div>
          <div className="myfloat">
            <input type="text" placeholder=" " required />
            <label>Mobile</label>
          </div>
        </Box>
        <Box></Box>
        <Box className="addressInfo">
          <Box>
            <div className="myfloat">
              <input type="text" placeholder=" " required />
              <label>Pincode</label>
            </div>
            <div className="myfloat">
              <input type="text" placeholder=" " required />
              <label>City</label>
            </div>
            <div className="myfloat">
              <input type="text" placeholder=" " required />
              <label>State</label>
            </div>
          </Box>
          <Box>
            <div className="myfloat">
              <input type="text" placeholder=" " required />
              <label>Address</label>
            </div>
          </Box>
          <Text>Type of Address</Text>
          <Box>
            <div className="home type" onClick={handleAddress}>
              Home
            </div>
            <div className="office type" onClick={handleAddress}>
              Office
            </div>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default AddressForm;
