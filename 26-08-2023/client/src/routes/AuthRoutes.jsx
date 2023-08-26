
import React from 'react'
import { Routes, Route } from "react-router-dom";
import Login from '../components/Login';
import SignUp from '../components/SignUp';

const AuthRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/signup' element={<SignUp />} />
        </Routes>
    )
}

export default AuthRoutes