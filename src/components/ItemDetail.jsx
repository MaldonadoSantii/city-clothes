import React from 'react'
import { Card, Col , Row, Button, CardText } from 'react-bootstrap'
import ItemCount from './ItemCount'
import "./ItemListContainer.css"
import productos from "./productos.json"



const ItemDetail = ({ id, titulo, descripcion, precio, pictureUrl }) => {
  return (
    <Row xs={1} md={3} >
      <Col key={id} className=' px-4 cardItemDetail'>
        <Card style={{ width: '20rem', height: '30rem' }}>
          <Card.Img variant="top" src={pictureUrl} className='imgCard' />
          <Card.Body>
            <Card.Title>{titulo}</Card.Title>
            <Card.Text>{descripcion}</Card.Text>
            <Card.Text className='precio'>Precio: <b>  ${precio}</b></Card.Text>
             <ItemCount /> 
           
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
}

export default ItemDetail