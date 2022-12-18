import { Box, Center, Text } from "@chakra-ui/react";
import React from "react";

function Header_Gradient({ name, size }) {
  return (
    <Box padding={"10px"} className="flexmedia">
      <Center>
        <Box fontSize={size} fontWeight="bold" color="black">
          <Text padding={"0 1rem"} textTransform='uppercase'>{name}</Text>

          <Box
            bgImage="linear-gradient(white, #fbbcbc)"
            height="20px"
            margin="auto"
            marginTop="-20px"
          />
        </Box>
      </Center>
    </Box>
  );
}

export default Header_Gradient;
