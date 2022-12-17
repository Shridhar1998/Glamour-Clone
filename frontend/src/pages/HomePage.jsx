import { AspectRatio, Box, Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'
import Slider from '../components/Slider';
import "./Homepage.css"
import india from "../Images/india.gif"
import GoodLife from "../Images/GoodLife.png"
import Biggest from "../Images/Biggest.jpg"
import off55 from "../Images/off55.jpg"
import get100 from "../Images/get100.jpg"
import picA from "../Images/picA.jpg"
import pic399 from "../Images/pic399.jpg"
import Best from "../Images/Best.jpg"
import beauty from "../Images/beauty.jpg"
import winbig from "../Images/winbig.png"
import wedding from "../Images/wedding.png"
import giftguide from "../Images/giftguide.png"
import beware from "../Images/beware.png"
import covers from "../Images/covers.png"


const HomePage = () => {
	
  const offer = [
    {
      image: off55,
      name: "Get 55% off"
    },
    {
      image: get100,
      name: "Get 100% off"
    },
    {
      image: picA,
      name: "Product at RS 299"
    },
    {
      image: pic399,
      name: "Product at RS 399"
    }

  ];

  const offer2 = [
    {
      image: winbig,
      name: "Win big at Slot Machine"
    },
    {
      image: winbig
      ,
      name: "Total Makeover"
    }

  ];

  const offer3 = [
    {
      image: wedding,
      name: "Wedding Store"
    },
    {
      image: giftguide
      ,
      name: "Gifting Store"
    }

  ];
  return (
    <Box bg={"rgb(244,244,244)"}>
      <Box mt={1}>
        <Image src={india} />
      </Box>
      <Box mt={4}>
        <Image src={GoodLife} />
      </Box>
      <Box mt={8} >
        <Image h={190} w={"100%"} src={Biggest} />
      </Box>
      <Box>
        <Box margin="auto" mt={7} >
          <Flex className="flexBoxForHome" direction={["column", "column", "column", "row"]}>
            {offer.map((e,i) => {
              return (
                <Box
                  key={i}
                  w={["300px", "600px", "600px", "400px"]}
                  bgPosition="center"
                  bgRepeat="no-repeat"
                  bgSize="cover"
                  h={250}
                  backgroundImage={`url(${e.image})`}
                  display="flex"
                  alignItems="end"
                >
                  <Box
                    w={"100%"}
                    opacity="70%"
                    height={"50px"}
                    textAlign={"center"}
                    bg={"white"}
                  >
                    <Text
                      m="auto"
                      fontWeight="bold"
                      fontSize={"xl"}
                      opacity={"100%"}
                    >
                      {e.name}
                    </Text>
                  </Box>
                </Box>
              );
            })}
          </Flex>
        </Box>
      </Box>
      <Box mt={10} >
        <Image h={190} w={"100%"} src={Best} />
      </Box>
      <Box>
      <Slider/>
      </Box>
      <Box mt={10} >
        <Image h={190} w={"100%"} src='https://files.myglamm.com/site-images/original/Sectional-Headers-1_5.jpg' />
      </Box>
      <Box>
        <Box margin="auto" mt={7} >
          <Flex className="flexBoxForHome" direction={["column", "column", "column", "row"]}>
            {offer2.map((e,i) => {
              return (
                <Box
                  key={i}
                  w={["300px", "600px", "600px", "400px"]}
                  bgPosition="center"
                  bgRepeat="no-repeat"
                  bgSize="cover"
                  h={250}
                  backgroundImage={`url(${e.image})`}
                  display="flex"
                  alignItems="end"
                >
                  <Box
                    w={"100%"}
                    opacity="70%"
                    height={"50px"}
                    textAlign={"center"}
                    bg={"white"}
                  >
                    <Text
                      m="auto"
                      fontWeight="bold"
                      fontSize={"xl"}
                      opacity={"100%"}
                    >
                      {e.name}
                    </Text>
                  </Box>
                </Box>
              );
            })}
          </Flex>
        </Box>
      </Box>
      <Box mt={10} >
        <Image w={"100%"} src={beauty} />
      </Box>
      <Box>
        <Box margin="auto" mt={7} >
          <Flex className="flexBoxForHome" direction={["column", "column", "column", "row"]}>
            {offer3.map((e,i) => {
              return (
                <Box
                  key={i}
                  w={["300px", "600px", "600px", "400px"]}
                  bgPosition="center"
                  bgRepeat="no-repeat"
                  bgSize="cover"
                  h={250}
                  backgroundImage={`url(${e.image})`}
                  display="flex"
                  alignItems="end"
                >
                  <Box
                    w={"100%"}
                    opacity="70%"
                    height={"50px"}
                    textAlign={"center"}
                    bg={"white"}
                  >
                    <Text
                      m="auto"
                      fontWeight="bold"
                      fontSize={"xl"}
                      opacity={"100%"}
                    >
                      {e.name}
                    </Text>
                  </Box>
                </Box>
              );
            })}
          </Flex>
        </Box>
      </Box>
      <Box mt={10} >
        <Image w={"100%"} src={beware} />
      </Box>
      <Box mt={10} >
        <Box margin={"auto"} w="70%">
          <Image h={100} w={"100%"} src={covers} />
        </Box>
      </Box>
      <Box m={4} mt={10}>
        
          <iframe height={"600px"} width={"100%"}
            src="https://www.youtube.com/embed/GdcxfyKNiDg?vq=hd1080&autoplay=1&loop=1&modestbranding=1&rel=0&cc_load_policy=1&iv_load_policy=3&fs=0&color=white&controls=0&disablekb=1&playlist=GdcxfyKNiDg"
            title="glamour Add"

          ></iframe>
      
      </Box>
    </Box>
  )
}

export default HomePage