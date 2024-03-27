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
import React from 'react';
import Navbar from './navbar';

const NavAbout = () => {
  const [count, setCount] = React.useState(0);
  const inc = () => {
    setCount(count + 1);
  };
  const dec = () => {
    setCount(count - 1);
  };

  // Example of returning JSX
  return (
    <div>
      <Navbar />
      <h1>Count: {count}</h1>
      <button onClick={inc}>Increment</button>
      <button onClick={dec}>Decrement</button>
    </div>
  );
};

export default NavAbout;