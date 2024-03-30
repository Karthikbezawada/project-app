import React from 'react'
import Nav from './navabout';
import './Component/N.css';
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
// import { BiLogoGmail } from "react-icons/bi";
import { IoMdGlobe } from "react-icons/io";
import { BsTwitterX } from "react-icons/bs";

function foot() {
  return (
    <div>
      <footer className='bg-success m-auto text-center foot w-100  p-3'>
        <a className='aa' target="_blank" href='https://www.facebook.com/flipkart/'><span><FaFacebookF />FaceBook</span></a>
        <a className='aa' target="_blank" href='https://www.instagram.com/flipkart/?hl=en'><span><FaInstagram />Instagram</span></a>
        <a className='aa' target="_blank" href='https://www.facebook.com/flipkart/'><span><IoMdGlobe />Website</span></a>
        <a className='aa' target="_blank" href='https://www.facebook.com/flipkart/'><span><BsTwitterX /> X</span></a>
      </footer>
    </div>
  )
}

export default foot
