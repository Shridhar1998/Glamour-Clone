import { Hide,Box } from '@chakra-ui/react'
import React from 'react'
import Nav1 from './Nav1'
import Nav2 from './Nav2'
import Nav3 from './Nav3'
import "./Nav.css"

const Navbar = () => {
    return (
        <Box className='navbar-sticky'>
            <Nav1 />
            <Nav2 />
            <Hide below='md'>
                <Nav3 />
            </Hide>
        </Box>
    )
}

export default Navbar