import React from 'react';
import './Card.css';

const Card = ({title, src}) =>{

    return(
        <div className="card">
        <h3>{title}</h3>
        <img className="imagen-bonita" src={src}/>
        </div>
    );
}

export default Card;