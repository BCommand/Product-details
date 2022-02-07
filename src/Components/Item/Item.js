import React from 'react';
import './Item.css'

const Item = ({movie}) => {
  return (
  <div className='item-wrap'>
    <img src={movie.imgUrl} alt={movie.title} />
    <p>{movie.title}</p>
    <p>{movie.price}</p>
  
    
  </div>
  )
};

export default Item;