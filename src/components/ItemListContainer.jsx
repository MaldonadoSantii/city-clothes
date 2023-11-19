import React from 'react'
import { useState, useEffect } from "react";
import "./ItemListContainer.css"
import ItemList from './ItemList';
import { getProductos, getProdByCat } from "./asyncmock.jsx";
import { useParams } from 'react-router-dom';



const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);

  const { category } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        let data;
        if (category) {
          
          data = await getProdByCat(category);
        } else {
        
          data = await getProductos();
        }
        setProductos(data);
      } catch (error) {
        console.error('Error al obtener los productos:', error);
      }
    };

    fetchData();
  }, [category]);
  return (
    <div className='divBody'>
          <ItemList productos={productos}/>
        </div>
  )
}

export default ItemListContainer;