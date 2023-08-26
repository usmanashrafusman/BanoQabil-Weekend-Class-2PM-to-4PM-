import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import httpService from '../servies/httpService';
import AuthContext from '../context/AuthContext';

const Login = (props) => {
    const [creds, setCreds] = useState({
        email: "",
        password: ""
    });
    const navigate = useNavigate()
    const { setUser } = useContext(AuthContext)


    const handleChange = (name, value) => {
        setCreds((pre) => ({ ...pre, [name]: value }))
    }

    const onLogin = async () => {
        const data = await httpService({
            url: "auth/signin",
            method: "POST",
            data: creds
        });
        if (data && data.user) {
            setUser(data.user);
            localStorage.setItem("token" , data.token)
            navigate("/");
        } else {
            alert("Invalid Creds")
        }
    }
    return (
        <div>
            <input placeholder="Email" type="email" name="email" value={creds.email} onChange={(e) => handleChange("email", e.target.value)} />
            <input placeholder="Password" type="password" name="password" value={creds.password} onChange={(e) => handleChange("password", e.target.value)} />
            <button onClick={onLogin}>Login</button>

            <p>Dont't have an account? <Link to="signup">Sign Up</Link></p>
        </div>
    )
}

export default Login


