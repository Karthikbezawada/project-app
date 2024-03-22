// import logo from './logo.svg';
// import './App.css';
// //import Ramcharan from './ramcharan.js';
// // import Ram from './ramcharan.js';
// import Nav from './navbar.js';
// import Home from './navhome.js';
// import About from './navabout.js';



// function App() {
//   return (
//   //  <Ram/>
//   <Nav/>
//   // <Home/>

//   );
// }

import React from 'react';
// import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import Home from './navhome.js';
import About from './navabout.js';
import Navbar from './navbar.js';



function App() {
    return (
      <>
        <Router>
          
                {/* <Navbar /> */}
                <Routes>
                    <Route path="/" element={<Home/>} />
                    <Route path="/about" element={<About/>} />
                    {/* <Route path='*' element={<div>404 NOT FOUND</div>}/> */}
                </Routes>
          
        </Router>
        </>
    );
}

export default App;

