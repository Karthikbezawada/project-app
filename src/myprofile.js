 import React from 'react'
 import Navbar from './navabout';
 function Myprofile() {
    const userData = JSON.parse(localStorage.getItem("user"));
    
   return (
     <div>
        <Navbar/>
       <div className='my-3 text-center'>{userData && <h1 className='text-success'>Email = {userData.Email}</h1>}</div>
       <div className='my-3 text-center'>{userData && <h1 className='text-success'>Phone Number = {userData.Mobile}</h1>}</div>
       <div className='my-3 text-center'>{userData && <h1 className='text-success'>Name = {userData.name}</h1>}</div>
     
     </div>
   )
 }
 
 export default Myprofile
 