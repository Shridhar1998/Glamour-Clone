import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Checkout from '../pages/Checkout'
import HomePage from '../pages/HomePage'

const AllRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='' />
            <Route path='' />
            <Route path='' />
            <Route path='/checkout' element={<Checkout/>} />
            <Route path='' />
        </Routes>
    )
}

export default AllRoutes