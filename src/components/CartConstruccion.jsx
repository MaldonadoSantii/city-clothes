import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { useCarrito } from './CarritoContext';
import { db } from '../firebase/config';

const CartConstruccion = () => {
  const { carrito } = useCarrito();
  console.log("Carrito:", carrito);
  return (
    <Container fluid className='divBodyCart'>
      <h1 className='cartelAviso py-3'>
        RESUMEN DE PRODUCTOS AGREGADOS
      </h1>
      <Row xs={1} md={2} lg={3}>
        {carrito.map((producto) => (
          <Col key={producto.id} className='mb-3'>
            <Card>
              {producto.pictureUrl && (
                <Card.Img variant="top" src={producto.pictureUrl} className='imgCard' />
              )}
              <Card.Body>
                <Card.Title>{producto.titulo}</Card.Title>
                <Card.Text>Precio: ${producto.precio}</Card.Text>
                <Card.Text>Cantidad: {producto.cantidad}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default CartConstruccion;