import React from 'react'
import { Box, Flex, Hide, Image, Link, Spacer, Text, } from '@chakra-ui/react'
import { AiFillGift } from "react-icons/ai";
const Nav1 = () => {
    return (
        <Box w='100%' bg='rgb(254,232,232)' h='42' display='flex' justifyContent='center' alignItems='center' pl='-3px' >
            <Flex width='70%' margin='auto'  >
                <Box>
                    <AiFillGift cursor='pointer' style={{ color: 'rgb(255,168,168)', border: '1px', fontSize: '24px' }} />
                </Box>

                <Hide below='sm'>
                    <Box className='flat' fontFamily='Roboto' cursor='pointer' fontWeight='500' fontSize='13px' pl='13px' >
                        Pick Any Product at Rs 199
                    </Box>
                </Hide>

                <Box className='flat' fontFamily='Roboto' cursor='pointer' color='rgb(255,168,168)' fontWeight='500' fontSize='13px' pl='12px' >
                    SHOP NOW
                </Box>
                <Spacer />

                <Link to='' >
                    <Box fontFamily='Roboto' cursor='pointer' fontWeight='500' fontSize='13px'  >
                        <Flex fontSize={"13px"} w={"160px"} justifyContent="space-between"><Image w={"20px"} src="https://cdn3.iconfinder.com/data/icons/linecons-free-vector-icons-pack/32/shop-512.png"></Image>
                            <Text >MY GLAMOUR STORE</Text>
                        </Flex>
                    </Box>
                </Link>
            </Flex>


        </Box>

    )
}

export default Nav1