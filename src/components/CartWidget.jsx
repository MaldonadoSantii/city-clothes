import React from 'react'
import { Image } from 'react-bootstrap'
import "./CartWidget.css"



const CartWidget = () => {
  return (
    <div>
        <h5>
        <Image  className='Cart mt-2' src='../src/assets/cart.png' />
        </h5>
        <h5 className='numeroHardcodeado'>
            5

        </h5>
    </div>
  )
}

export default CartWidget