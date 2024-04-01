import React from 'react';
// import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import Home from './navhome.js';
import About from './navabout.jsx';
import Navbar from './navbar.js';
import Contact from './contactus.js';
import Login from './login.js';
import Register from './register.js';
import Ho from './home.js'
import NL from './newla.js'
import Products from './products.js';
import ContactUs from './cont.js'
import Serv from './servicepage.js'

function App() {
    return (
      <>
        <Router>
          
                {/* <Navbar /> */}
                <Routes>
                    <Route path="/" element={<Home/>} />
                    <Route path="/about" element={<About/>} />
                    {/* <Route path='/service' element={<div>404 NOT FOUND</div>}/> */}
                    <Route path='/login'  element={<Login/>}/>
                    <Route path="/donateus" element={<Contact/>}/>
                    <Route path='/register' element={<Register/>} />
                    <Route path='/home' element={<Ho/>} />
                    <Route path='/newlaunch' element={<NL/>} />
                    <Route path='/products' element={<Products/>}/>
                    <Route path='/contactus' element={<ContactUs/>}/>
                    <Route path='/service' element={<Serv/>}/>
                    
                    
                    
                </Routes>
          
        </Router>
        </>
    );
}

export default App;

