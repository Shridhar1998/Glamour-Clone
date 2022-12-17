import {
  Box,
  Divider,
  HStack,
  List,
  ListItem,
  Stack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  UnorderedList,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { BsStarFill } from "react-icons/bs";
import P_Button from "./P_Button";
import P_Dummy from "./P_Dummy";

function Prod_Tabs({type}) {

  const how_to=`To apply ${type} as a beginner, start by washing your face and applying a moisturizer, to make sure your skin is hydrated. Dab small dots of a light foundation across your face with your finger and use a brush to blend the foundation evenly across your skin. Next, apply concealer to any blemishes`
  const exp_tips=`Beyond physical health, cosmetics can help to improve our mood, enhance our appearance and boost our self-esteem. They can also help to exhibit personal style and, as such, are an important means of social expression.`
  const init=`A "cosmetic" is any substance used to clean, improve or change the complexion, skin, hair, nails or teeth. Cosmetics include beauty preparations (make-up, perfume, skin cream, nail polish) and grooming aids (soap, shampoo, shaving cream, deodorant).`
  const faq=`They are used as a cleansing, moisturizing and beautifying agent.

  They help in enhancing attractiveness of the body.

  They help in altering the appearance of the body without affecting its functions.
  
  Sunscreen products help in protecting the body from UV rays and treating sunburns.`
  return (
    <Tabs variant="unstyled" 
    mt={'1rem'}
    >
      <TabList>
        <Tab
          _selected={{ borderBottom: "2px solid black" }}
          w="120px"
          m="0"
          p="0"
          fontWeight="bold"
        >
          WHAT IT IS
        </Tab>
        <Tab
          _selected={{ fontWeight: "bold", borderBottom: "2px solid black" }}
          fontWeight="bold"
          w="120px"
          m="0"
          p="0"
        >
          HOW TO USE
        </Tab>
        <Tab
          _selected={{ fontWeight: "bold", borderBottom: "2px solid black" }}
          w="120px"
          m="0"
          p="0"
          fontWeight="bold"
        >
          EXPERT TIPS
        </Tab>
        <Tab
          _selected={{ fontWeight: "bold", borderBottom: "2px solid black" }}
          w="120px"
          m="0"
          p="0"
          fontWeight="bold"
        >
          WHAT'S INIT
        </Tab>
        <Tab _selected={{ borderBottom: "2px solid black" }} fontWeight="bold">
          FAQS
        </Tab>
      </TabList>
      {/* whats it is */}
      <TabPanels>
        <TabPanel>
          <Box>
            <Box fontWeight={"semibold"} textAlign="justify">
              Whether you’re channelling your inner Beyoncé or Sasha Fierce
              there’s a shade for every person and their alter egos! The LIT 2
              in 1 Liquid Matte Lipstick by MyGlamm gives you soft, kiss-proof
              lips, no smudges or transfers, just pure, intense colour!
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

          <Divider bg={"grey"} />

          {/* review */}
          <VStack spacing={3} m="1.5rem 0">
            <Text fontSize="lg" fontWeight={"bold"}>
              Review this product
            </Text>
            <Text fontWeight={"semibold"}>
              Share your thoughts with everyone
            </Text>
            <P_Button text={"WRITE A REVIEW"} />
          </VStack>
          <Divider bg={"grey"} />

          {Array(2)
            .fill(0)
            ?.map((e, i) => (
              <Stack spacing="1rem" m={"2rem 0"}>
                <Text fontWeight={"bold"}>RATINGS & REVIEWS (2 Reviews)</Text>
                <HStack gap={"0.5rem"}>
                  {Array(5)
                    ?.fill(0)
                    ?.map((e) => (
                      <BsStarFill
                        mt="1rem 0.5rem"
                        fontSize={"1.5rem"}
                        style={{ marginLeft: "1" }}
                      />
                    ))}
                </HStack>
                <Text>Five star review</Text>

                <HStack justifyContent={"space-between"}>
                  <HStack>
                    <Text as="b">{i % 2 == 1 ? "Neha" : "Priya"}</Text>
                    <Divider orientation="vetical" bg="black" />
                    <Text color={"grey"}>14th Dec,2022</Text>
                  </HStack>
                  <Box>
                    <Text
                      as="span"
                      border={"1px solid lightgrey"}
                      p="2px 4px"
                      fontWeight={"semibold"}
                    >
                      Helpful
                    </Text>
                    <Text
                      p="2px 4px"
                      fontWeight={"bold"}
                      as="span"
                      border={"1px solid lightgrey"}
                    >
                      0
                    </Text>
                  </Box>
                </HStack>
                <Divider bg="grey" />
              </Stack>
            ))}
        </TabPanel>
        <TabPanel>
          <P_Dummy how={how_to} />
        </TabPanel>
        <TabPanel>
          <P_Dummy how={exp_tips}/>
        </TabPanel>
        <TabPanel>
          <P_Dummy how={init}/>
        </TabPanel>
        <TabPanel>
          <P_Dummy  how={faq}/>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
}

export default Prod_Tabs;
