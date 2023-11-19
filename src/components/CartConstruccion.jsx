import React from 'react'
import { Container, Image } from 'react-bootstrap'
import "./home.css"

const CartConstruccion = () => {
  return (
   <Container fluid className='divBodyCart'>
    <h1 className='cartelAviso py-3'>
        ESTAMOS EN CONSTRUCCIÓN
    </h1>
    <h3 className='subtituloCart'>
        Pagina en desarrollo, porfavor siga navegando en las otras categorias 
    </h3>
    <Image className='imgCartConstruccion' src='../src/assets/estamos en construccion.png' />
   </Container> 
  )
}

export default CartConstruccion