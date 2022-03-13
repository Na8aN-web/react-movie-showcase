import React from 'react'
import './CardStyle.css';


function Card(props) {
  return (
    <div className='container'>
       <img className='card-image' src={`../images/${props.img}`} />
       <div className='content'>
       <h3 className="show-name">{props.name}</h3>
       <div className="more-details">
         <div className='genre'>{props.genre[0]}, {props.genre[1]}</div>
         <div className='air-date'>{props.date}</div>
        </div>
        <div className='about-show'>
          {props.about}
        </div>
        </div>
    </div>
  )
}

export default Card