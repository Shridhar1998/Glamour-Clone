import { Box, List, ListItem, Text, UnorderedList } from "@chakra-ui/react";
import React from "react";

function P_Dummy() {
  return (
    <Box>
      <Box fontWeight={"semibold"} textAlign="justify">
        Whether you’re channelling your inner Beyoncé or Sasha Fierce there’s a
        shade for every person and their alter egos! The LIT 2 in 1 Liquid Matte
        Lipstick by MyGlamm gives you soft, kiss-proof lips, no smudges or
        transfers, just pure, intense colour!
      </Box>
      <Box m={"1rem 0"}>
        <Text m="0.5rem 0" fontWeight={"bold"}>
          Benefits
        </Text>
        <UnorderedList>
          <ListItem fontWeight={"semibold"}>
            Lorem ipsum dolor sit amet
          </ListItem>
          <ListItem fontWeight={"semibold"}>
            Consectetur adipiscing elit
          </ListItem>
          <ListItem fontWeight={"semibold"}>
            Integer molestie lorem at massa
          </ListItem>
          <ListItem fontWeight={"semibold"}>
            Facilisis in pretium nisl aliquet
          </ListItem>
        </UnorderedList>
      </Box>
      <Box m={"1rem 0"}>
        <Text m="0.5rem 0" fontWeight={"bold"}>
          Enhanced Properties
        </Text>
        <UnorderedList>
          <ListItem fontWeight={"semibold"}>
            Lorem ipsum dolor sit amet
          </ListItem>
          <ListItem fontWeight={"semibold"}>
            Consectetur adipiscing elit
          </ListItem>
          <ListItem fontWeight={"semibold"}>
            Integer molestie lorem at massa
          </ListItem>
          <ListItem fontWeight={"semibold"}>
            Facilisis in pretium nisl aliquet
          </ListItem>
        </UnorderedList>
      </Box>
      <Box m={"1.5rem 0"}>
        <List spacing={"3"}>
          <ListItem>
            <Text as={"span"} fontWeight={"bold"}>
              Net Weight :
            </Text>
            <Text as="i">{"   "}2 N x 4 ml</Text>
          </ListItem>
          <ListItem>
            <Text as={"span"} fontWeight={"bold"}>
              Manufacturer Detail :
            </Text>

            <Text fontWeight={"semibold"}>
              {"   "} VIVA Cosmetics, C1/1 to 6, Radheshyam Indl. Complex,
              Asangaon, Shahapur, Thane- 421 601 M.L.No.:MKD/C/265.
            </Text>
          </ListItem>
          <ListItem>
            <Text as={"span"} fontWeight={"bold"}>
              Country of Origin :
            </Text>
            <br />
            <Text fontWeight={"semibold"}>{"   "} india</Text>
          </ListItem>
          <ListItem>
            <Text as={"i"} fontWeight={"bold"}>
              Disclaimer: {"  "}
              <Text as="i" fontWeight={"semibold"}>
                Colours of the makeup may vary due to the differences in
                computer monitors and phone screens.
              </Text>
            </Text>
          </ListItem>
        </List>
      </Box>
    </Box>
  );
}

export default P_Dummy;
