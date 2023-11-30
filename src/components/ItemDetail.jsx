import React from 'react'
import { Card, Col , Row, Button } from 'react-bootstrap'
import ItemCount from './ItemCount'
import "./ItemListContainer.css"
import productos from "./productos.json"



const ItemDetail = ({ id, titulo, descripcion, precio, pictureUrl }) => {
  return (
    <Row xs={1} md={3} >
      <Col key={id} className=' px-4 cardItem'>
        <Card style={{ width: '18rem', height: '21rem' }}>
          <Card.Img variant="top" src={pictureUrl} className='imgCard' />
          <Card.Body>
            <Card.Title>{titulo}</Card.Title>
            <Card.Text>{descripcion}</Card.Text>
            <Card.Text>Precio: ${precio}</Card.Text>
           
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
}

export default ItemDetail