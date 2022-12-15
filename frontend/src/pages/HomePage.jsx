import { AspectRatio, Box, Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'
import Slider from '../components/Slider';
import "./Homepage.css"
const HomePage = () => {
  const offer = [
    {
      image: "https://files.myglamm.com/site-images/original/16-700x488.jpg",
      name: "Get 55% off"
    },
    {
      image: "https://files.myglamm.com/site-images/original/17--700x488.jpg"
      ,
      name: "Get 100% off"
    },
    {
      image: "https://files.myglamm.com/site-images/original/18-700x488.jpg",
      name: "Product at RS 299"
    },
    {
      image: "https://files.myglamm.com/site-images/original/19-700x488.jpg",
      name: "Product at RS 399"
    }

  ];

  const offer2 = [
    {
      image: "https://files.myglamm.com/site-images/original/TGLF-December-Slot-Machine-1-1_2.png",
      name: "Win big at Slot Machine"
    },
    {
      image: "https://files.myglamm.com/site-images/original/TGLF-December-Slot-Machine-1-1_2.png"
      ,
      name: "Total Makeover"
    }

  ];

  const offer3 = [
    {
      image: "https://files.myglamm.com/site-images/original/cu700x488.png",
      name: "Wedding Store"
    },
    {
      image: "https://files.myglamm.com/site-images/original/700x488_12.png"
      ,
      name: "Gifting Store"
    }

  ];
  return (
    <Box bg={"rgb(244,244,244)"}>
      <Box mt={1}>
        <Image src='https://files.myglamm.com/site-images/original/Number-1-logo-strip-3360-x-279.gif' />
      </Box>
      <Box mt={4}>
        <Image src='https://files.myglamm.com/site-images/original/Homepage-desktop-1920x527.png' />
      </Box>
      <Box mt={8} >
        <Image h={190} w={"100%"} src='https://files.myglamm.com/site-images/original/Sectional-Headers-2_3.jpg' />
      </Box>
      <Box>
        <Box margin="auto" mt={7} >
          <Flex className="flexBoxForHome" direction={["column", "column", "column", "row"]}>
            {offer.map((e) => {
              return (
                <Box
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
        <Image h={190} w={"100%"} src='https://files.myglamm.com/site-images/original/bestsellers_6.jpg' />
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
            {offer2.map((e) => {
              return (
                <Box
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
        <Image w={"100%"} src='https://files.myglamm.com/site-images/original/spn3360x279_1.jpg' />
      </Box>
      <Box>
        <Box margin="auto" mt={7} >
          <Flex className="flexBoxForHome" direction={["column", "column", "column", "row"]}>
            {offer3.map((e) => {
              return (
                <Box
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
        <Image w={"100%"} src='https://files.myglamm.com/site-images/original/Row-44-Beware-Strip-3360x220.png' />
      </Box>
      <Box mt={10} >
        <Box margin={"auto"} w="70%">
          <Image h={100} w={"100%"} src='https://files.myglamm.com/site-images/original/Row-43-Disclaimer-Strip-3360x220.png' />
        </Box>
      </Box>
      <Box mt={10}>
        
          <iframe height={"600px"} width={"100%"}
            src="https://www.youtube.com/embed/GdcxfyKNiDg?vq=hd1080&autoplay=1&loop=1&modestbranding=1&rel=0&cc_load_policy=1&iv_load_policy=3&fs=0&color=white&controls=0&disablekb=1&playlist=GdcxfyKNiDg"
            title="glamour Add"

          ></iframe>
      
      </Box>
    </Box>
  )
}

export default HomePage