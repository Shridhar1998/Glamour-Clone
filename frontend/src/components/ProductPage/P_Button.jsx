import { Button, useColorModeValue } from "@chakra-ui/react";
import React from "react";

function P_Button({ text }) {
  return (
    <Button
      rounded={"none"}
      minW={"200px"}
      mt={8}
      size={"lg"}
      py={"7"}
      bgColor="black"
      color="white"
      textTransform={"uppercase"}
      _hover={{
        transform: "translateY(2px)",
        boxShadow: "lg",
      }}
    >
      {text}
    </Button>
  );
}

export default P_Button;
