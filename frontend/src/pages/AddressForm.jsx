import { Box, Text } from "@chakra-ui/react";
import React from "react";
import { useState } from "react";
import { setItem } from "../redux/localStorage";
import "./styles/addressform.css";
// import {Link} from 'react-router-dom'

let initial ={
  name:"",
  mobile:"",
  pincode:"",
  city:"",
  state:"",
  type:"home"
}

const AddressForm = () => {
  const [type, setType] = useState("");
  const [formData, setFormData] = useState(initial);

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
  const handleChange = (e) => {
    e.preventDefault()
    const {name,value} = e.target
    setFormData({...formData,[name]:value})
  }


let address = formData
  const handleSubmit=() => {
    address = {...formData,"type":type}
    setItem("address",address)
  }

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
        <form action="">

        <Box className="contactInfo">
          <div className="myfloat">
            <input type="text" placeholder=" " required onChange={handleChange} />
            <label>Name</label>
          </div>
          <div className="myfloat">
            <input type="number" placeholder=" " required onChange={handleChange} />
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
              <input type="number" placeholder=" " required onChange={handleChange} />
              <label>Pincode</label>
            </div>
            <div className="myfloat">
              <input type="text" placeholder=" " required onChange={handleChange} />
              <label>City</label>
            </div>
            <div className="myfloat">
              <input type="text" placeholder=" " required onChange={handleChange} />
              <label>State</label>
            </div>
          </Box>
          <Box className="detailedaddress">
            <div className="myfloat addressfield">
              <input type="text" placeholder=" " required onChange={handleChange} />
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
            <button className="lastbtn shipbtn" onClick={handleSubmit} >Ship to this Address</button>
          </Box>
        </Box>
        </form>
      </Box>
    </>
  );
};

export default AddressForm;
