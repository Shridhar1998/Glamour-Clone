import { Box, Text } from "@chakra-ui/react";
import React from "react";
import { useState } from "react";
import "./addressform.css";
// import {Link} from 'react-router-dom'

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

  console.log(type);

  return (
    <>
      <Box className="addressbox">
        <Text fontSize="17px" fontWeight={"600"}>
          ADD NEW ADDRESS
        </Text>
        <div className="line1"></div>
        <Text fontSize="16px" fontWeight={"600"} textAlign="left" ml={"5vw"} mt="30px">
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
        <Box className="divider"></Box>
        <Text fontSize="16px" fontWeight={"600"} textAlign="left" ml={"5vw"} mt="3vh">
          Address
        </Text>
        <Box className="addressInfo">
          <Box className="addresspin">
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
          <Box className="detailedaddress">
            <div className="myfloat addressfield">
              <input type="text" placeholder=" " required  />
              <label>Address</label>
            </div>
          </Box>
          <Text fontSize="16px" fontWeight={"600"} textAlign="left" ml={"5vw"} mt="3vh">Type of Address</Text>
          <Box className="typesof">
            <div className="home type" onClick={handleAddress}>
              Home
            </div>
            <div className="office type" onClick={handleAddress}>
              Office
            </div>
          </Box>
          <Box className="lastbuttons">
            <button className="lastbtn">Back</button>
            <button className="lastbtn shipbtn">Ship to this Address</button>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default AddressForm;
