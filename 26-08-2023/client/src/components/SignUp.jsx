import React, { useState, useContext } from 'react'
import { Link  , useNavigate} from 'react-router-dom';
import httpService from '../servies/httpService';
import AuthContext from '../context/AuthContext';
const SignUp = (props) => {
    const [creds, setCreds] = useState({
        name: "",
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
            url: "auth/signup",
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
            <input placeholder="Name" type="text" name="name" value={creds.name} onChange={(e) => handleChange("name", e.target.value)} />
            <input placeholder="Email" type="email" name="email" value={creds.email} onChange={(e) => handleChange("email", e.target.value)} />
            <input placeholder="Password" type="password" name="password" value={creds.password} onChange={(e) => handleChange("password", e.target.value)} />
            <button onClick={onLogin}>Sign Up</button>

            <p>Already have an account? <Link to="/">Log in</Link></p>

        </div>
    )
}

export default SignUp