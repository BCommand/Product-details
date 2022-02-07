import React from 'react';
import carrito from '../../assets/carrito.png'
import './CartWidget.css'
const CartWidget = () => {
  return <div className='carrito'>
      <img src={carrito} alt="" />
  </div>;
};

export default CartWidget;