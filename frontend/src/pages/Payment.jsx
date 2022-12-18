import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Grid,
  GridItem,
  Input,
  Text,
  useToast,
} from "@chakra-ui/react";
import React from "react";
import { TriangleDownIcon } from "@chakra-ui/icons";
import upiimg from "../Images/bhimupi.png";
import "../styles/payment.css";
import { getItem } from "../redux/localStorage";
import {  useNavigate } from "react-router-dom";
import axios from "axios";
const Payment = () => {
  const [value, setValue] = React.useState("1");
  let total = getItem("total")
  const toast = useToast()
  const navigate = useNavigate()

  const id = getItem("userid")

  const handlePay = async() => {

    await axios.delete(`https://glamour.onrender.com/cart/all/${id}`).then((res)=>console.log(res)).catch((err)=> console.log(err))

    setTimeout(()=>{
      toast({
        title: 'Order Successfully',
        position:"top",
        description: "Your order will be delivered soon",
        status: 'success',
        duration: 4000,
        isClosable: true,
      })
      navigate("/")
    },2000)
  }

  return (
    <>
      <Text fontSize={"30px"} textAlign="center">
        Payment
      </Text>
      <div className="paymentouterbox">
        <Accordion allowToggle className="paymentoptions">
          <AccordionItem
            className="accordoption"
            borderTop="1px solid transparent"
            _hover={{ bgColor: "rgb(216, 216, 216)" }}
          >
            <h2>
              <AccordionButton fontSize={["15px","15px","18px","22px","24px"]}>
                <Box
                  as="span"
                  flex="1"
                  textAlign="left"
                  fontSize={["20px","20px","20px","22px","24px"]}
                  height="60px"
                  display={"flex"}
                  alignItems="center"
                  pl={"20px"}
                >
                  Google Pay / PhonePe / UPI
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel bgColor={"white"} pt="30px" pb="30px">
              <div className="inputbox">
                <input className="inputupi" placeholder="Enter UPI"></input>
                <button className="upibutton">Request</button>
              </div>
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem
            className="accordoption"
            borderTop="1px solid transparent"
          >
            <h2>
              <AccordionButton>
                <Box
                  as="span"
                  flex="1"
                  textAlign="left"
                  fontSize={"20px"}
                  height="60px"
                  display={"flex"}
                  alignItems="center"
                  pl={"20px"}
                >
                  Net Banking
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel bgColor={"white"} pt="30px" pb="30px">
              <div className="netbank">
                {" "}
                <select
                  icon={<TriangleDownIcon fontSize={"10px"} />}
                  placeholder="Woohoo! A new icon"
                  borderRadius={"0%"}
                  outline="none"
                  _focusVisible="none"
                >
                  <option value="">Axis Bank</option>
                  <option value="">Bank of Baroda</option>
                  <option value="">HDFC Bank</option>
                  <option value="">Yes Bank</option>
                  <option value="">SBI Bank</option>
                  <option value="">Canara Bank</option>
                </select>{" "}
                <Button colorScheme={"white"} color={"white"} bgColor="black">
                  {`PAY $${total}`}
                </Button>{" "}
              </div>
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem
            className="accordoption"
            borderTop="1px solid transparent"
          >
            <h2>
              <AccordionButton>
                <Box
                  as="span"
                  flex="1"
                  textAlign="left"
                  fontSize={"20px"}
                  height="60px"
                  display={"flex"}
                  alignItems="center"
                  pl={"20px"}
                >
                  Credit or Debit Card
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel bgColor={"white"} pt="30px" pb="30px">
              <Box display={"flex"} mt="20px" flexDirection={["column","column","column","row","row"]}>
                <Text fontSize={["14px","14px","16px","16px","18px"]} w={["70%","70%","70%","30%","30%"]} pl={"10%"}>
                  Card Number :
                </Text>
                <Input
                  _focusVisible={"none"}
                  bgColor="white"
                  h="40px"
                  fontSize={"16px"}
                  w={["80%","80%","80%","60%","60%"]}
                  ml={["10%","10%","10%","0","0"]}
                  borderRadius={"0%"}
                ></Input>
              </Box>
              <Box display={"flex"} mt="20px" flexDirection={["column","column","column","row","row"]}>
                <Text fontSize={["14px","14px","16px","16px","18px"]} w={["70%","70%","70%","30%","30%"]} pl={"10%"}>
                  Name :
                </Text>
                <Input
                  _focusVisible={"none"}
                  bgColor="white"
                  h="40px"
                  fontSize={"16px"}
                  w={["80%","80%","80%","60%","60%"]}
                  ml={["10%","10%","10%","0","0"]}
                  borderRadius={"0%"}
                ></Input>
              </Box>
              <Box display={"flex"} mt="20px" flexDirection={["column","row","row","row","row"]}>
                <Text fontSize={["14px","14px","16px","16px","18px"]} w="30%" pl={"10%"}>
                  {" "}
                  Validity :
                </Text>
                <Input
                  _focusVisible={"none"}
                  bgColor="white"
                  h="40px"
                  fontSize={"16px"}
                  w={["50%","20%","20%","20%","20%"]}
                  borderRadius={"0%"}
                  ml={["10%","0%","0%","0%","0%"]}
                ></Input>
                <Text fontSize={["14px","14px","16px","16px","18px"]} w={["50%","20%","20%","20%","20%"]} pl={"10%"}>
                  {" "}
                  CVV :
                </Text>
                <Input
                  _focusVisible={"none"}
                  bgColor="white"
                  h="40px"
                  fontSize={"16px"}
                  w={["50%","20%","20%","20%","20%"]}
                  borderRadius={"0%"}
                  ml={["10%","0%","0%","0%","0%"]}
                ></Input>
              </Box>
              <Button bgColor={"black"} color="white" fontSize={["15px","18px","20px","22px","24px"]} colorScheme="green" display={"block"}  m="auto" mt={"20px"} borderRadius="%" onClick={handlePay}>{`PAY $${total}`}</Button>
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem
            className="accordoption"
            borderTop="1px solid transparent"
          >
            <h2>
              <AccordionButton>
                <Box
                  as="span"
                  flex="1"
                  textAlign="left"
                  fontSize={"20px"}
                  height="60px"
                  display={"flex"}
                  alignItems="center"
                  pl={"20px"}
                >
                  Wallets
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel bgColor={"white"} pt="30px" pb="30px">
              <Grid>
                <GridItem></GridItem>
              </Grid>
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem
            className="accordoption"
            borderTop="1px solid transparent"
          >
            <h2>
              <AccordionButton>
                <Box
                  as="span"
                  flex="1"
                  textAlign="left"
                  fontSize={"20px"}
                  height="60px"
                  display={"flex"}
                  alignItems="center"
                  pl={"20px"}
                >
                  Cash on Delivery
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel bgColor={"white"} pt="30px" pb="30px">
              <Box w="95%" m={"auto"}>
                <Text fontSize={"15px"} fontWeight="500" mt={"20px"}>
                  By selecting cash on delivery, you are choosing to pay cash to
                  the agent when you receive your order.
                </Text>
                <Button
                  colorScheme={"white"}
                  bgColor="black"
                  color={"white"}
                  fontSize="15px"
                  textTransform={"uppercase"}
                  h="40px"
                  borderRadius="0%"
                  p={"3px 10px 3px 10px"}
                  mt="20px"
                  mb={"30px"}
                >
                  Confirm and place order
                </Button>
              </Box>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </div>
    </>
  );
};

export default Payment;
