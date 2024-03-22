import React from 'react'
import './ramcharan.css';
import { AiFillAlert } from "react-icons/ai";
import imgg from './Nikil/images.jpeg';

const ramcharan = () => {
  return (
    <div>

      <h1 className='rrr'>Alluri Setha Ramaraju</h1>
      <AiFillAlert className='logo'/>
      <img src={imgg}/>
      

    </div>
  )
}

export default ramcharan
