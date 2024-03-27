import React from 'react';
// import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import Home from './navhome.js';
import About from './navabout.js';
import Navbar from './navbar.js';
import Contact from './contactus.js';



function App() {
    return (
      <>
        <Router>
          
                {/* <Navbar /> */}
                <Routes>
                    <Route path="/" element={<Home/>} />
                    <Route path="/about" element={<About/>} />
                    <Route path='/service' element={<div>404 NOT FOUND</div>}/>
                    <Route path="/donateus" element={<Contact/>}/>
                    
                </Routes>
          
        </Router>
        </>
    );
}

export default App;

