import React from "react";

import './Card.css';
import imgg from './images.jpeg'
// src/Component/images.jpeg


const Card = ({
  imgSrc,
  imgAlt,
  title,
  description,
  link
}) => {
  return (
    <div  className="card-container">
      <img src={imgSrc} alt={imgAlt} className="card-img"/>
      <h1 className="card-title">{title}</h1>
      <p className="card-description">{description}</p>
      <a href={link} target="_blank" className="card-btn w-95">Donate Now</a>
      {/* <button className="m-3 btn btn-primary">Click Me</button> */}
    </div>

    

    
  );
};


export default Card;