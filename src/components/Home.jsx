import React from 'react'
import { Container, Image } from 'react-bootstrap'
import "./home.css"

const Home = () => {
  return (
<Container fluid className='divBodyHome'>

    
        <h1 className='bienvenidoHome py-3'>
            Bienvenidos a City Clothes, aquí encontrarás todos los productos que son tendencia y al mejor precio
        
        </h1>

        <h3 className='subtituloHome'>
            Al hacer Click en categorias podras encontrar los distintos tipos de prendas que tenemos!
        </h3>
        
        <Image className='imgHome' src='../src/assets/city-clothes.png' />
        
        
</Container>
  )
}

export default Home