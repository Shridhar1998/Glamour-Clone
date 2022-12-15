import {
  Box,
  Center,
  Divider,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
} from '@chakra-ui/react';
import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import {

} from "@chakra-ui/react";
const Slider = () => {
  const responsive = {
    LD: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    d: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    t: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    m: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  const offer = [
    {
      image: "https://files.myglamm.com/site-images/400x400/OTP1.jpg",
      price: 200,
      name: "My Glamm Lipstick"
    },
    {
      image: "https://files.myglamm.com/site-images/400x400/PPY1_1.jpg",
      price: 400,
      name: "Lipstick"
    },
    {
      image: "https://files.myglamm.com/site-images/400x400/Facewash_3.jpg",
      price: 600,
      name: "WipEout"
    },
    {
      image: "https://files.myglamm.com/site-images/400x400/MHML-(1).jpg",
      price: 800,
      name: "Lipstick"
    },
    {
      image: "https://files.myglamm.com/site-images/400x400/INDG1.jpg",
      price: 100,
      name: "Kajal"
    },
    {
      image: "https://files.myglamm.com/site-images/400x400/Rare-(1).jpg",
      price: 300,
      name: "Lip Colur"
    },
    {
      image: "https://files.myglamm.com/site-images/400x400/ENV1.jpg",
      price: 500,
      name: "LIT Creamy"
    },
    {
      image: "https://files.myglamm.com/site-images/400x400/MHML-(1).jpg",
      price: 800,
      name: "Lipstick"
    }

  ];


  return (
    <Box w={"80%"} margin="auto" mt={8}  >
      <Carousel responsive={responsive}  >
        {offer.map((e) => {
          return (
            <Box boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px;" w={[270, 275, 260, 340]} margin="auto" spacing={"auto"} mt={5}  >
              <Box bg="white" borderRadius={8} _hover={{
                boxShadow: "rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px", w: "100%",
              }}>
                <Center height={"280px"} >
                  <Image
                    src={e.image}
                    alt="Green double couch with wooden legs"
                    borderRadius="sm"

                    height={"85%"}
                    _hover={{
                      w: "95%",
                      h: "95%",
                    }}
                  />
                </Center>
                <Stack mt="2" spacing="3" paddingLeft={4} paddingRight={4}>
                  <Heading
                    size="sm"
                    color={"black"}
                  >
                    {e.name}
                  </Heading>
                  <Text color={"black"}>
                    Skin-perfecting Compact Powder With Hyaluronic Acid
                  </Text>
                  <Flex color={"#111"} gap="0.5rem">
                    <Image
                      src={
                        "https://files.myglamm.com/site-images/original/plus-icon.png"
                      }
                    />
                    <span>SHADES</span>
                  </Flex>
                  <Text color="blue.600" fontSize="2xl" paddingBottom="5px">
                    ${e.price}
                  </Text>
                </Stack>
                <Divider />
              </Box>
            </Box>
          )
        })}
      </Carousel>;
    </Box>
  )
}

export default Slider