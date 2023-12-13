import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Toast, Form } from 'react-bootstrap';
import { useCarrito } from './CarritoContext';
import { db } from '../firebase/config';
import "./home.css";

const CartConstruccion = () => {
  const [valores, setValores] = useState({
    nombre: "",
    apellido: "",
    email: "",
    telefono: ""
  });

  const [showToast, setShowToast] = useState(false);
  const [emailError, setEmailError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validación del correo electrónico
    if (!validateEmail(valores.email)) {
      setEmailError("Por favor, ingresa un correo electrónico válido.");
      return;
    } else {
      setEmailError("");
    }

    // Resto del código para enviar la orden, mostrar el toast, limpiar el carrito, etc.
    setShowToast(true);
  };

  const handleValores = (e) => {
    setValores({
      ...valores,
      [e.target.name]: e.target.value,
    });
  };

  const validateEmail = (email) => {
    // Utiliza una expresión regular para validar el correo electrónico
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const { carrito } = useCarrito();

  return (
    <Container fluid className='divBodyCart'>
      <h1 className='cartelAviso py-3'>
        RESUMEN DE PRODUCTOS AGREGADOS
      </h1>
      {carrito.length === 0 ? (
        <p>Tu carrito está vacío</p>
      ) : (
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
      )}

      <Form className='formulario' onSubmit={handleSubmit}>
        <Form.Group controlId="formNombre">
          <Form.Label>Nombre</Form.Label>
          <Form.Control
            type='text'
            placeholder='Ingresá tu nombre'
            value={valores.nombre}
            onChange={handleValores}
            name='nombre'
          />
        </Form.Group>
        <Form.Group controlId="formApellido">
          <Form.Label>Apellido</Form.Label>
          <Form.Control
            type='text'
            placeholder='Ingresá tu apellido'
            value={valores.apellido}
            onChange={handleValores}
            name='apellido'
          />
        </Form.Group>
        <Form.Group controlId="formEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type='email'
            placeholder='Ingresá tu email'
            value={valores.email}
            onChange={handleValores}
            name='email'
            isInvalid={!!emailError}
          />
          <Form.Control.Feedback type="invalid">
            {emailError}
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group controlId="formTelefono">
          <Form.Label>Teléfono</Form.Label>
          <Form.Control
            type='phone'
            placeholder='Ingresá tu teléfono'
            value={valores.telefono}
            onChange={handleValores}
            name='telefono'
          />
        </Form.Group>
        <Button className='enviar' type='submit'>Comprar</Button>
      </Form>
      
      <Toast
        onClose={() => setShowToast(false)}
        show={showToast}
        delay={5000}
        autohide
        style={{
          position: 'fixed',
          top: 20,
          right: 20,
        }}
      >
        <Toast.Header>
          <strong className="me-auto">Orden de Compra</strong>
        </Toast.Header>
        <Toast.Body>
          ¡Gracias por tu compra, {valores.nombre}! Tu orden incluye los siguientes productos:
          {carrito.map((producto) => (
            <div key={producto.id}>
              {producto.titulo} - Cantidad: {producto.cantidad}
            </div>
          ))}
        </Toast.Body>
      </Toast>
    </Container>
  );
};

export default CartConstruccion;