import React from 'react'
import "./ItemListContainer.css"
import ItemList from './ItemList';
import ItemDetail from "./ItemDetail"
import { useParams } from 'react-router-dom';
import { getUnProducto } from './asyncmock';
import { useState, useEffect } from 'react';




const ItemDetailContainer = () => {
  const [producto, setProducto] = useState(null);
  const { id } = useParams().id;

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Utiliza la función getUnProducto para obtener el producto
        const productoData = await getUnProducto(id);

        // Verifica si el producto existe
        if (productoData) {
          setProducto(productoData);
        } else {
          console.log('No se encontró el producto');
        }
      } catch (error) {
        console.error('Error al obtener el producto:', error);
      }
    };

    fetchData();
  }, [id]);

  return (
    <div className='divBody'>
      {/* Renderiza el componente ItemDetail con el producto obtenido */}
      {producto && <ItemDetail producto={producto} />}
    </div>
  );
};

export default ItemDetailContainer;