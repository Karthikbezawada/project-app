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
                <Link to="/service"><span>Service</span></Link>
                <Link to="/donateus"><span>Donate</span></Link>
                <Link to='/register'><span>Register</span></Link>
                {/* <Link to='/register'><span>RRR</span></Link> */}
                </div>
            </nav>
        </div>
    );
}

export default Navbar;

