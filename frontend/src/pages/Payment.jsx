import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Input,
  Radio,
  RadioGroup,
  Select,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import {MdArrowDropDown, TriangleDownIcon} from '@chakra-ui/icons'
import upiimg from "../Images/bhimupi.png";
import "./payment.css";
const Payment = () => {

    const [value, setValue] = React.useState('1')


  return (
    <>
      <Text fontSize={"30px"} textAlign="center">
        Payment
      </Text>
      <div className="paymentouterbox">
        <Accordion allowToggle className="paymentoptions">
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left">
                  Google Pay / PhonePe / UPI
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <div className="inputbox"><input className="inputupi" placeholder="Enter UPI"></input><button className="upibutton">Request</button></div>
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left">
                  Net Banking
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
            <div className="netbank"><select className="inputupi" placeholder="Enter UPI"></select><button className="upibutton">Request</button></div>
            <Select icon={<TriangleDownIcon border={"1px solid"} boxSize={3} />} placeholder='Woohoo! A new icon' />
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </div>
    </>
  );
};

export default Payment;
