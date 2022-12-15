import { Box, Select } from '@chakra-ui/react'
import React from 'react'

const Dropdow = () => {
    return (
        <Box>
            <Select placeholder='Select option'>
                <option value='option1'>Profile</option>
                <option value='option2'>Logout</option>
            </Select>
        </Box>
    )
}

export default Dropdow