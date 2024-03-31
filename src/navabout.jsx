import React from 'react';
// import { CgProfile } from "react-icons/cg";
import './Component/N.css';
import { FaUserAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";



function NavAbout() {

  const navigate = useNavigate();

    const handleLoginClick = () => {
        navigate('/register');
    };

    const handleClick = () => {
      navigate('/login');
  };

  const goToHome = () => {
    navigate('/home');
};
const NewLunch = () => {
  navigate('/newlaunch');
};

const GotoProducts = () => {
  navigate('/products');
};

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-success">
  <div className="ap collapse navbar-collapse container-fluid d-flex justify-content-end">
    
  <li className="ap nav-item dropdown">
          <a className="nav-link dropdown-toggle headings" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            <FaUserAlt className="icon" />
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">My Profile</a></li>
            <li><a className="dropdown-item" onClick={handleLoginClick} href="">New User?</a></li>
            <li><a className="dropdown-item" onClick={handleClick} href="#">Logout</a></li>
          </ul>
        </li>
    
    
    
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mb-2 mb-lg-0 d-flex justify-content-end w-100">
        <li className="nav-item">
          <a className="nav-link headings" aria-current="page" onClick={goToHome} href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link headings" onClick={GotoProducts} aria-current="page" href="#">Products</a>
        </li>
        <li className="nav-item">
          <a className="nav-link headings" onClick={NewLunch} aria-current="page" href="#">New Launches</a>
        </li>
        
        <li className="nav-item">
          <a className="nav-link headings" href="#">Service</a>
        </li>
        
        <li className="nav-item">
          <a className="nav-link headings" href="#">Contactus</a>
        </li>



      </ul>
    </div>
  </div>
</nav>

    </div>
  );
}

export default NavAbout;































































// import React from 'react'
// import './ramcharan.css';
// import Navbar from './navbar';

// const navabout = () => {
//   const [count, setCount] = React.useState(0);
//   const inc = () => {
//     setCount(count + 1);
//   };
// };


//   return (
    
    
//     <div>
//         <Navbar/>
      
//       <h1 className='logo'>About</h1>
//       <button onClick={inc}>Click here</button>
//       <h1>{count}</h1>
//     </div>
//   )
// export default navabout
// import React from 'react';
// import Navbar from './navbar';

// const NavAbout = () => {
//   const [count, setCount] = React.useState(0);
//   const inc = () => {
//     setCount(count + 1);
//   };
//   const dec = () => {
//     setCount(count - 1);
//   };

//   // Example of returning JSX
//   return (
//     <div>
//       <Navbar />
//       <h1>Count: {count}</h1>
//       <button onClick={inc}>Increment</button>
//       <button onClick={dec}>Decrement</button>
//     </div>
//   );
// };

// export default NavAbout;