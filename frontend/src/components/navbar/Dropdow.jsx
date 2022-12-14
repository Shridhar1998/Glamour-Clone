import { Box, Select } from '@chakra-ui/react'
import React from 'react'

const Dropdow = () => {
    return (
        <Box>
            <Select placeholder='Select option'>
                <option value='option1'>Option 1</option>
                <option value='option2'>Option 2</option>
                <option value='option3'>Option 3</option>
            </Select>
        </Box>
    )
}

export default Dropdow