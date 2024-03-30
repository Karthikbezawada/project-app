import React from 'react';
import Nav from './navabout';
import img1 from './9.webp';
import img2 from './13.jpg';
import img3 from './111.jpeg';
import img4 from './11.avif';
import img5 from './Component/5.webp';
import img6 from './kkkk.jpeg';
import img8 from './Component/8.jpeg';
import img7 from './23.webp';
import Foot from './foot'


function Newla() {
  return (
    <div>
      <Nav />
      <img className='w-100' src={img8} alt="Image 1" />
      <img className='w-100' src={img4} alt="Image 2" />
      <img className='w-100' src={img1} alt="Image 2" />
      <img className='w-100' src={img3} alt="Image 1" />
      <img className='w-100' src={img7} alt="Image 2" />
      <img className='w-100' src={img2} alt="Image 2" />
      
      
      
      
      
     
      {/* <img className='w-100' src={img5} alt="Image 1" /> */}
      {/* <img className='w-100' src={img6} alt="Image 1" /> */}
      <Foot/>
      
    </div>
  );
}

export default Newla;
