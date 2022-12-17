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
import Myglam200 from "../Images/Myglam200.jpg"
import wipeout600 from "../Images/wipeout600.jpg"
import lipstick400 from "../Images/lipstick400.jpg"
import lipstick800 from "../Images/lipstick800.jpg"
import kajal100 from "../Images/kajal100.jpg"
import lipcolur300 from "../Images/lipcolur300.jpg"
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
      image: Myglam200,
      price: 200,
      name: "My Glamm Lipstick"
    },
    {
      image: wipeout600,
      price: 400,
      name: "Lipstick"
    },
    {
      image: lipstick400,
      price: 600,
      name: "WipEout"
    },
    {
      image: lipstick800,
      price: 800,
      name: "Lipstick"
    },
    {
      image: kajal100,
      price: 100,
      name: "Kajal"
    },
    {
      image: lipcolur300,
      price: 300,
      name: "Lip Colur"
    },
    {
      image: wipeout600,
      price: 500,
      name: "LIT Creamy"
    },
    {
      image: lipstick800,
      price: 800,
      name: "Lipstick"
    }

  ];


  return (
    <Box w={"80%"} margin="auto" mt={8}  >
      <Carousel responsive={responsive}  >
        {offer.map((e,i) => {
          return (
            <Box key={i} boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px;" w={[270, 275, 260, 340]} margin="auto" spacing={"auto"} mt={5}  >
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