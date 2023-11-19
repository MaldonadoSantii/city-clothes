import React from 'react'
import { Card, Col , Row, Button } from 'react-bootstrap'
import ItemCount from './ItemCount'
import "./ItemListContainer.css"
import productos from "./productos.json"




const ItemDetail = () => {




  return (
    <Row xs={1} md={3} className="g-4 py-2">
      {productos.map((p) => (
        <Col key={p.id} className='cardItem'>
          <Card style={{ width: '18rem', height: "30rem" }} >
            <Card.Img variant="top" src={p.pictureUrl} className='imgCard' />
            <Card.Body>
            <Card.Title> {p.titulo} </Card.Title>
            <Card.Text className='p-1'> {p.descripcion} </Card.Text>
            <Card.Text>${p.precio}</Card.Text>
            <ItemCount />
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default ItemDetail