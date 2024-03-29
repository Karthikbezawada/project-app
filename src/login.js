
import React, { useState } from "react";
import Navbar from "./navbar";
import RegisterForm from './register';

import { Link, useNavigate } from "react-router-dom";



const Login=()=>{
    // const navigate=useNavigate();
    const[email,setEmail]= useState('');
    const[password,setPassword]= useState('');

    const navigate = useNavigate();

    const handleRegisterClick = () => {
        navigate('/home');
    };
    const handleLoginClick = () => {
        navigate('/register');
    };
    return(
        <>
        {/* <Navbar/> */}
        {/* <form onSubmit={handleSubmit}> */}
        <div className="border w-25 mt-5 m-auto p-3">
        <h1 className="text-success text-center">Login Page</h1>
        <div className="mt-3">
            <label>
                Email
            </label>
            <input type='email' className="form-control" id='email' placeholder='Enter your email' value={email}
            onChange={(e)=>{setEmail(e.target.value)}} 
            />
        </div>
        <div className="mt-3">
            <label>
                Password
            </label>
            <input type='password' className="form-control" id='password' placeholder='Enter your password' value={password}
            onChange={(e)=>{setPassword(e.target.value)}} 
            />
        </div>
        <div>
            <button className="btn btn-success w-100 mt-3" onClick={()=>{
                handleRegisterClick();
                console.log("Emial:- "+email);
                console.log("Password:- "+password);
                alert("Login succesfull!")
            }} >Submit</button>
        </div>
        <p className="text-center mt-2">or</p>
        <div>
            <button className="btn btn-secondary w-100" onClick={handleLoginClick}>New User Registration</button>
        </div>

        </div>
        {/* </form> */}
        </>
    )
}
export default Login;