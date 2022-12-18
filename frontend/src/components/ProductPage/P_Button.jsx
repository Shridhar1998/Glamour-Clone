import { Button, useColorModeValue } from "@chakra-ui/react";
import React from "react";

function P_Button({ text,handleAddtoCart }) {
  return (
    <Button
      rounded={"none"}
      minW={"180px"}
      mt={4}
      mb={4}
      size={"md"}
      py={"6"}
      bgColor="black"
      color="white"
      textTransform={"uppercase"}
      _hover={{
        transform: "translateY(2px)",
        boxShadow: "lg",
      }}
      colorScheme="black"

      onClick={handleAddtoCart}
    >
      {text}
    </Button>
  );
}

export default P_Button;
