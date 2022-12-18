import { Box, Divider, Text } from "@chakra-ui/react";
import React, { useEffect } from "react";
import "../styles/checkout.css";
import { EmailIcon, PhoneIcon } from "@chakra-ui/icons";
import { FaTruckMoving } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { getCartDetails } from "../redux/cart/action";
import { Link } from "react-router-dom";
import { getItem, setItem } from "../redux/localStorage";

const Checkout = () => {

  const dispatch = useDispatch()
  const data = useSelector((Store) => Store.cart);
  const cartDetails = data.cartData

  const findTotal = (cartDetails) => {
    let total = 0;
    cartDetails.map((el) => {
      return total = total + el.quantity * el.price;
    });
    return total;
  };

  let total = findTotal(cartDetails);
  setItem("total",total)


  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];

const d = new Date()
d.setDate(d.getDate() + 5);
let month = months[d.getMonth()];
let date = d.getDate();
let year = d.getFullYear();
     
  var delDate = date + " " + month + " " + year;

  useEffect(() => {
    let id = getItem("userid");
    let token = getItem("token");
    // console.log(id)
    dispatch(getCartDetails(id, token));
  },[])

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
              <Text ml="1vw" fontSize="16px">{delDate}</Text>
            </div>
          </Box>
          <Box className="ordersection">
            <Text fontSize="16px" mt="3vh" fontWeight="600" mb="1vh">
              YOUR ORDER
            </Text>
            <Divider borderColor="blackAlpha.500"></Divider>
            <div className="tablescroll">
          {data.cartData?.map((el,i)=>{
              return (
                <Box className="orderTable" key={i}>
                <Box className="imagetable">
                  <img
                    src={el.image_link}
                    alt=""
                  />
                </Box>
                <Box className="producttable">
                 {el.name}
                </Box>
                <Box className="quantitytable">{el.quantity}</Box>
                <Box className="pricetable">${el.price}</Box>
              </Box>
                // <Divider mt={".5vh"} border="2px" bgColor={"blackAlpha.500"}></Divider>
              )
              })}
            </div>
          </Box>
        </Box>
        <Box className=" innerbox2">
          <Text ml={["2vw"]} mt="2vh" fontSize={"20px"} fontWeight="600">
            Order Summary
          </Text>
          <Box className="orderouter">
            <Text>MRP</Text>
            <Text>${total}</Text>
          </Box>
          <Box className="orderouter">
            <Text>Discount on MRP</Text>
            <Text></Text>
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
            <Text>{total}</Text>
          </Box>
          <Box className="orderouter">
            <Text>You Saved</Text>
            <Text>0</Text>
          </Box>
          <Box className="orderouter">
            <Text>You will earn</Text>
            <Text>${total/10}</Text>
          </Box>
          <Link to="/payment">
            <button className="proceedtopayment">proceed to payment</button>
          </Link>
        </Box>
      </div>
      <Divider borderColor="blackAlpha.500" mt={"20px"} mb="1vh"></Divider>
      <div></div>
    </>
  );
};

export default Checkout;
