import React from 'react'
import {
    Box,
    Container,
    SimpleGrid,
    Stack,
    Text,
    Flex,
    Tag,
    useColorModeValue,
    Hide,
    Input,
    IconButton,
    Image,
} from '@chakra-ui/react';
import { ReactNode } from 'react';
import { BiMailSend } from 'react-icons/bi';
import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import "../components/navbar/Nav.css"
import { Link } from 'react-router-dom';
const ListHeader = ({ children }) => {
    return (
        <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
            {children}
        </Text>
    );
};

const Footer = () => {
    return (
        <Box
            >
            <Container as={Stack} maxW={'6xl'} py={10}>
                <SimpleGrid columns={{ base: 3, sm: 4, md: 7 }} spacing={8}>
                    <Stack align={'flex-start'}>
                        <ListHeader>LIPS</ListHeader>
                        <Link to="/"><Text>Lipstick</Text></Link>
                        <Link to="/">Crayon </Link>
                        <Link to="/">Matte </Link>
                        <Link to="/">Hi-Shine </Link>
                        <Link to="/">Lip Kit</Link>
                        <Link to="/">LipstickSet</Link>
                        <Link to="/">Lip Stain </Link>
                        <Link to="/">Glitter</Link>
                        <Link to="/"><Text>Lip Liner</Text></Link>
                    </Stack>
                    <Stack align={'flex-start'}>
                        <ListHeader>FACE</ListHeader>
                        <Link to="/">Face Sets</Link>
                        <Link to="/">Concealer</Link>
                        <Link to="/">Highlighter</Link>
                        <Link to="/">Bronzer</Link>
                        <Link to="/">Blush</Link>
                        <Link to="/">Sindoor</Link>
                        <Link to="/">Makeup</Link>
                        <Link to="/">Contact</Link>
                        <Link to="/">Stain</Link>
                    </Stack>
                    <Stack align={'flex-start'}>
                        <ListHeader>EYES</ListHeader>
                        <Link to="/">Eye</Link>
                        <Link to="/">Eyeliner</Link>
                        <Link to="/">Eyebrow</Link>
                        <Link to="/">Glitter Us</Link>
                        <Link to="/">Mascara</Link>
                        <Link to="/">Kajal</Link>
                        <Link to="/">EyeCombos</Link>
                        <Link to="/">Contact</Link>
                        <Link to="/">Brushes</Link>
                    </Stack>
                    <Stack align={'flex-start'}>
                        <ListHeader>NAILS</ListHeader>
                        <Link to="/">Nail</Link>
                        <Link to="/">Poilish</Link>
                        <Link to="/">Matte</Link>
                        <Link to="/">Contact</Link>
                        <Link to="/">Partners</Link>
                        <Link to="/">Lacquer</Link>
                        <Link to="/">Polish</Link>
                    </Stack>
                    <Stack align={'flex-start'}>
                        <ListHeader>HAIRCARE</ListHeader>
                        <Link to="/">Shampoo</Link>
                        <Link to="/">Press</Link>
                        <Link to="/">Conditioner</Link>
                        <Link to="/">Oil</Link>
                        <Link to="/">Serum</Link>
                        <Link to="/">Combos</Link>
                        <Link to="/">Hair</Link>
                        <Link to="/">Liquid</Link>
                        <Link to="/">Mask</Link>
                    </Stack>
                    <Hide below='sm'>
                        <Stack align={'flex-start'}>
                            <ListHeader>SANITIZER</ListHeader>
                            <Link to="/">Sanitizer</Link>
                            <Link to="/">Wipes</Link>
                            <Link to="/">Kits</Link>
                            <Link to="/">Spray</Link>
                            <Link to="/">Serum</Link>
                            <Link to="/">Hand</Link>
                            <Link to="/">Cline</Link>
                            <Link to="/">Liquid</Link>
                        </Stack>
                    </Hide>
                    <Stack align={'flex-start'}>
                        <ListHeader>KNOW MORE</ListHeader>
                        <Link to="/">About Us</Link>
                        <Link to="/">Offers</Link>
                        <Link to="/">Refer</Link>
                        <Link to="/">Store</Link>
                        <Link to="/">Privacy</Link>
                        <Link to="/">Policy</Link>
                        <Link to="/">Sitemap</Link>
                        <Link to="/">Returns</Link>
                    </Stack>
                </SimpleGrid>
            </Container>
            <Box py={10}>
                <Flex
                    align={'center'}
                    _before={{
                        content: '""',
                        borderBottom: '1px solid',
                        borderColor: useColorModeValue('gray.200', 'gray.700'),
                        flexGrow: 1,
                        mr: 8,
                    }}
                    _after={{
                        content: '""',
                        borderBottom: '1px solid',
                        borderColor: useColorModeValue('gray.200', 'gray.700'),
                        flexGrow: 1,
                        ml: 8,
                    }}>

                </Flex>
            </Box>
            <Flex display={{base:"block",sm:"block",md:"Flex"}} justifyContent={"space-around"}>
                <Stack align={'flex-start'} marginTop={"23px"}>
                    <Stack direction={'row'}>
                        <Input
                            placeholder={'Your email address'}
                            bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
                            border={0}
                            _focus={{
                                bg: 'whiteAlpha.300',
                            }}
                            w="260px"
                        />
                        <IconButton
                            bg={useColorModeValue('blackAlpha.900', 'blackAlpha.800')}
                            color={useColorModeValue('white', 'gray.800')}
                            _hover={{
                                bg: 'rgb(254,232,232)',
                                color:"black"
                            }}
                            aria-label="Subscribe"
                            w={{base:"110px",sm:"150px",md:"180px"}}
                        ><Text>SUBSCRIBE</Text></IconButton>
                    </Stack>
                </Stack>

                <Stack direction={'row'} marginTop={"32px"}>
                    <Box><Text>Stay Connected</Text></Box>
                    <Box className='vline'></Box>
                    <Box>
                        <Stack  marginTop={"5px"} direction={'row'} spacing={6}>

                            <FaTwitter />

                            <FaYoutube />

                            <FaInstagram />

                        </Stack>
                    </Box>
                </Stack>
                <Flex>

                    <Box>
                        <Image w={300} src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSLPvwr7V7lCv9EFtuZoV_cQsSomBzjIrWrfLFDeFdB15hILL08" />
                    </Box>
                </Flex>

            </Flex>
        </Box>
    )
}

export default Footer