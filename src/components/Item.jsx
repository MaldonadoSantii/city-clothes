import React from 'react'
import { Button, Card, Col , Row } from 'react-bootstrap'
import ItemCount from './ItemCount'
import "./ItemListContainer.css"
import productos from "./productos.json"
import { NavLink } from 'react-router-dom'



const Item = ({ id, titulo, descripcion, precio, pictureUrl }) => {
  return (
    <Row xs={1} md={3} >
      <Col key={id} className=' px-4 cardItem'>
        <Card style={{ width: '18rem', height: '21rem' }}>
          <Card.Img variant="top" src={pictureUrl} className='imgCard' />
          <Card.Body>
            <Card.Title>{titulo}</Card.Title>
            {/* <Card.Text>{descripcion}</Card.Text> */}
            {/* <Card.Text>Precio: ${precio}</Card.Text> */}
            <Button variant='secondary' className='botonDetalles'>
              <NavLink className="detallesLink" to={"/item/:id"}>   Ver detalles </NavLink>
            
            </Button>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
}


export default Item


