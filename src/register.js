
import React, { useState } from "react";
import Navbar from "./navbar";

import { useNavigate } from "react-router-dom";

function Register() {
    const[name,setName]= useState('');
    const[email,setEmail]= useState('');
    const[password,setPassword]= useState('');
    const[number,setNumber]= useState('');

    const navigate = useNavigate();

    const handleLoginClick = () => {
        navigate('/login');
    };

  return (
    <div>
        {/* <Navbar/> */}
      <div className="border w-25 mt-5 m-auto p-3">
        <h1 className="text-secondary text-center">Register Page</h1>
        <div className="mt-3">
            <label>
                Name
            </label>
            <input type='name' className="form-control" id='name' placeholder='Enter your Name' value={name}
            onChange={(e)=>{setName(e.target.value)}} 
            />
        </div>
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
        <div className="mt-3">
            <label>
                Phone Number
            </label>
            <input type='number' className="form-control" id='number' placeholder='Enter your Number' value={number}
            onChange={(e)=>{setNumber(e.target.value)}} 
            />
        </div>
        
        
        {/* <div>
            <button className="btn btn-secondary w-100 mt-3" onClick={handleLoginClick} onClick={()=>{
                
                console.log("Name:- "+name);
                console.log("Email:- "+email);
                console.log("Password:- "+password);
                console.log("Number:- "+number);
                alert("Registration Successful !!!");
                
            }} >Register</button>
        </div> */}
        <div>
    <button className="btn btn-success w-100 mt-3" onClick={() => {
        handleLoginClick();
        console.log("Name:- " + name);
        console.log("Email:- " + email);
        console.log("Password:- " + password);
        console.log("Number:- " + number);
        alert("Registration Successful !!!");
    }}>Register</button>
</div>


        <p className="text-center mt-2">or</p>
        <div>
            <button className="btn btn-primary w-100" onClick={handleLoginClick} >Login</button>
        </div>
        </div>
    </div>
  )
}

export default Register
