import React from 'react'
import "./ItemListContainer.css"
import ItemList from './ItemList';
import ItemDetail from "./ItemDetail"
import { useParams } from 'react-router-dom';
import {doc, getDoc} from "firebase/firestore";
import { useState, useEffect } from 'react';
import { db } from '../firebase/config';




const ItemDetailContainer = () => {
  const [producto, setProducto] = useState(null);
  const  id  = useParams().id;

  useEffect(() => {
    const docRef = doc(db, "productos", id);
    getDoc(docRef)
    .then((resp) => {
      setProducto(  
        {...resp.data(), id: resp.id}
      )
    })
  }, [id]);

  return (
    <div className='divBody'>
      {/* Renderiza el componente ItemDetail con el producto obtenido */}
      {producto && <ItemDetail {...producto} />}
    </div>
  );
};

export default ItemDetailContainer;