import {
  Box,
  Flex,
  Hide,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  Link,
  Stack,
} from "@chakra-ui/react";
import React from "react";
import logo from "../../Images/Glamour1.png";
import "./Nav.css";
import { CiSearch } from "react-icons/ci";
import { BsFillBagFill } from "react-icons/bs";
import { RiAccountCircleFill } from "react-icons/ri";
import Dropdow from "./Dropdow";

const Nav2 = () => {

    return (
        <Box margin="auto" w='70%' h='70px' display='flex' justifyContent='space-between'>
            <Flex width='100%'>
                <Box>
                    <Link to='/'><Image w='230px' h='80px' src={logo} /></Link>
                </Box>
                <Hide below='md'>
                <Stack ml='5'>
                    <InputGroup>
                        <InputLeftElement
                            pointerEvents='none'
                            children={<CiSearch />}
                            mt='3.5'
                        />
                        <Input bg='gray.200' type='search' placeholder='Find Lipstick, Eyeliner,Makeup,Tutorial,etc' htmlSize='60' mt='3.5' />
                    </InputGroup>
                </Stack>
                </Hide>
                
            </Flex>
            <Flex margin='auto' mt='4' justifyContent={"space-between"} width="200px" >
                    <Box   display="flex" >
                       <Link to=''>
                        
                        <BsFillBagFill  style={{marginRight:'20px' ,color: 'black', border: '1px', fontSize: '25px' }} />
                    </Link><span className='length'></span> 
                    </Box>
                    <Box className='vline'></Box>
                    <Box  mt='0.2' cursor={"pointer"}> 
                     <Link to=''><RiAccountCircleFill size='30px' /></Link> 
                    </Box>
                    {/* <Box  mt='0.2' cursor={"pointer"}> <Dropdow htmlSize='sm' /> </Box> */}
            </Flex>
       
        <Hide below="md">
          <Stack ml="5">
            <InputGroup>
              <InputLeftElement
                pointerEvents="none"
                children={<CiSearch />}
                mt="3.5"
              />
              <Input
                bg="gray.200"
                type="search"
                placeholder="Find Lipstick, Eyeliner,Makeup,Tutorial,etc"
                htmlSize="60"
                mt="3.5"
              />
            </InputGroup>
          </Stack>
        </Hide>
      
      <Flex margin="auto" mt="4" justifyContent={"space-between"} width="200px">
        <Box display="flex">
          {" "}
          <Link to="">
            <BsFillBagFill
              style={{
                marginRight: "20px",
                color: "black",
                border: "1px",
                fontSize: "25px",
              }}
            />
          </Link>
          <span className="length"></span>{" "}
        </Box>
        <Box className="vline"></Box>
        <Box mt="0.2" cursor={"pointer"}>
          {" "}
          <Link to="">
            <RiAccountCircleFill size="30px" />
          </Link>{" "}
        </Box>
        {/* <Box  mt='0.2' cursor={"pointer"}> <Dropdow htmlSize='sm' /> </Box> */}
      </Flex>
    </Box>
  );
};

export default Nav2;
