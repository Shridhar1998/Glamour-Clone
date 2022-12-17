import React from 'react'
import { Box, Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerOverlay, Flex, Hide, Image, Show, Spacer, Stack, Text, useDisclosure, } from '@chakra-ui/react'
import { AiFillGift } from "react-icons/ai";
import { AddIcon } from '@chakra-ui/icons';
import { Link } from 'react-router-dom';
import logo from "../../Images/Glamour1.png";

const Nav1 = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const firstField = React.useRef()
    return (
        <Box w='100%' bg='rgb(254,232,232)' h='42' display='flex' justifyContent='center' alignItems='center' pl='-3px' >
            <Flex width='70%' margin='auto'  >
                <Box marginTop={"2px"}>
                    <AiFillGift cursor='pointer' style={{ color: 'rgb(255,168,168)', border: '1px', fontSize: '24px' }} />
                </Box>

                <Hide below='sm'>
                    <Box marginTop={"4px"} className='flat' fontFamily='Roboto' cursor='pointer' fontWeight='500' fontSize='13px' pl='13px' >
                        Pick Any Product at Rs 199
                    </Box>
                </Hide>


                <Box marginTop={"4px"} className='flat' fontFamily='Roboto' cursor='pointer' color='rgb(255,168,168)' fontWeight='500' fontSize='13px' pl='12px' >
                    <Hide below='md'>  <Text>SHOP NOW</Text></Hide>
                </Box>

                <Spacer />

                <Link to='/' >
                    <Box marginTop={"4px"} fontFamily='Roboto' cursor='pointer' fontWeight='500' fontSize='13px'  >
                        <Flex fontSize={"13px"} w={"160px"} justifyContent="space-between"><Image w={"20px"} src="https://cdn3.iconfinder.com/data/icons/linecons-free-vector-icons-pack/32/shop-512.png"></Image>
                            <Hide below='md'><Text >MY GLAMOUR STORE</Text></Hide>
                        </Flex>
                    </Box>
                </Link>
                
                <Show below='lg'>

                    <Box>
                        <Button leftIcon={<AddIcon color={"teal"} />} colorScheme='rgb(254,232,232)' onClick={onOpen}>

                        </Button>
                        <Drawer
                            isOpen={isOpen}
                            placement='right'
                            initialFocusRef={firstField}
                            onClose={onClose}
                        >
                            <DrawerOverlay />
                            <DrawerContent bg='rgb(254,232,232)'>
                                <DrawerCloseButton />
                                <Box>
                                    <Link to="/">
                                        <Image w="280px" h="120px" src={logo} />
                                    </Link>
                                </Box>

                                <DrawerBody>
                                    <Stack spacing='24px' mt="30px">
                                        <Link to='/'><Button w={"90%"} bg={"blackAlpha.500"} color={"white"}>HOME</Button></Link>
                                        <Link to='/products/lipstick'><Button w={"90%"} bg={"blackAlpha.500"} color={"white"}>LIPSTICK</Button></Link>
                                        <Link to='/products/cream'><Button w={"90%"} bg={"blackAlpha.500"} color={"white"}>CREAM</Button></Link>
                                        <Link to='/products/powder'><Button w={"90%"} bg={"blackAlpha.500"} color={"white"}>SKINCARE</Button></Link>
                                        <Link to='/products/gel'><Button w={"90%"} bg={"blackAlpha.500"} color={"white"}>LOTON</Button></Link>
                                        <Link to='/'><Button w={"90%"} bg={"blackAlpha.500"} color={"white"}>COLLECTION</Button></Link>
                                        <Link to='/'><Button w={"90%"} bg={"blackAlpha.500"} color={"white"}>REWARD</Button></Link>
                                    </Stack>
                                </DrawerBody>
                            </DrawerContent>
                        </Drawer>
                    </Box>

                </Show>
            </Flex>


        </Box>

    )
}

export default Nav1