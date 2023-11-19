import React, { useState } from 'react';
import { Badge, Button } from 'react-bootstrap';
import Swal from 'sweetalert2';
import { useCarrito } from './CarritoContext';

const ItemCount = ({ producto }) => {
  const [count, setCount] = useState(0);
  const { agregarAlCarrito } = useCarrito();

  const decreaseCount = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const increaseCount = () => {
    if (count < 6) {
      setCount(count + 1);
    }
  };

  const addToCart = () => {
    agregarAlCarrito({ ...producto, cantidad: count });
    Swal.fire({
      icon: 'success',
      title: `Se han añadido ${count} productos al carrito`,
      timer: 5000,
    });
  };

  return (
    <div>
      <Button variant="outline-secondary" onClick={decreaseCount}>
        -
      </Button>

      <Badge bg="secondary">{count}</Badge>

      <Button variant="outline-secondary" onClick={increaseCount}>
        +
      </Button>
      <br />
      <Button variant="secondary" onClick={addToCart}>
        Agregar al carrito
      </Button>
    </div>
  );
};

export default ItemCount;