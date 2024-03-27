import React from "react";

import './Card.css';
import imgg from './images.jpeg'


const Card = ({
  imgSrc,
  imgAlt,
  title,
  description,
  link
}) => {
  return (
    <div className="card-container">
      <img src={imgSrc} alt={imgAlt} className="card-img"/>
      <h1 className="card-title">{title}</h1>
      <p className="card-description">{description}</p>
      <a href={link} target="_blank" className="card-btn">Donate Now</a>
    </div>

    

    
  );
};


export default Card;