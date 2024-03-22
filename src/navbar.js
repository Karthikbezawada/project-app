// import React from 'react'
// import './App.css';
// import { BrowserRouter, Route, Switch } from 'react-router-dom';

// import Home from './navhome.js';
// import {Link} from 'react-router-dom'

// function navbar() {
//     return (
//         <div>
//             <nav>
//                 <Link to='./navhome.js'><span>Home</span></Link>
//                 <Link to='./navabout.js'><span>About</span></Link>
//                 <span>Service</span>
//                 <span>Contact Us</span>

//             </nav>

//         </div>
//     )
// }

// export default navbar

import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';
// import Navbar from './navbar.js';


function Navbar() {
    return (
        <div>
            <nav>
                <div>
                <Link to="/"><span>Home</span></Link>
                <Link to="/about"><span>About</span></Link>
                <Link><span>Service</span></Link>
                <span>Contact Us</span>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;

