import { Button, useColorModeValue } from "@chakra-ui/react";
import React from "react";

function P_Button({text}) {
  return (
    <Button
      rounded={"none"}
      minW={"200px"}
      mt={8}
      size={"lg"}
      py={"7"}
      bg={useColorModeValue("gray.900", "gray.50")}
      color={useColorModeValue("black", "gray.900")}
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
