import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../pages/HomePage'

const AllRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='' />
            <Route path='' />
            <Route path='' />
            <Route path='' />
            <Route path='' />
        </Routes>
    )
}

export default AllRoutes