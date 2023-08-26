
import React from 'react'
import { Routes, Route } from "react-router-dom";
import Products from '../components/Products';
const AppRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<Products />} />
        </Routes>
    )
}

export default AppRoutes