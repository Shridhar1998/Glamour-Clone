import { Box, HStack, Text } from "@chakra-ui/layout";
import { Tag } from "@chakra-ui/tag";
import React from "react";
import Svg from "./Svg";

function P_Description() {
  return (
    <Box>
      <Tag color="black">
        You will receive cashback worth ₹111 as myglammPOINTS on this purchase
      </Tag>
     <HStack>
     <Svg/>
     <Text>
        <details>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt iusto praesentium laborum itaque molestiae incidunt nostrum fuga perferendis aut consequuntur omnis, cupiditate est? Quidem, accusamus. Repellat officiis quos rerum iure?
        </details>
     </Text>

     </HStack>

    </Box>
  );
}

export default P_Description;
