import React from 'react';
import { BsFillCartFill } from 'react-icons/bs';
import { useCarrito } from './CarritoContext';
import { Link } from 'react-router-dom';


const CartWidget = () => {
  const { totalProductos } = useCarrito();

  return (
    <div className='cartWidget'>
      <div>
      <Link className='cartLink' to={"/cart"}>

        <BsFillCartFill className='Cart mt-5' /> 
      </Link>
      </div>
      <p className='numeroHardcodeado'>{totalProductos}</p>
    </div>
  );
};

export default CartWidget;