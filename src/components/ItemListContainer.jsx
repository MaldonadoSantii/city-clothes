import React from 'react'
import { useState, useEffect } from "react";
import "./ItemListContainer.css"
import ItemList from './ItemList';
import { getProductos, getProdByCat } from "./asyncmock.jsx";
import { useParams } from 'react-router-dom';
import { collection, getDocs, query, where} from "firebase/firestore"
import {db} from "../firebase/config.jsx"
import { Row } from 'react-bootstrap';



const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);

  const { category } = useParams();

  useEffect(() => {
    const productosRef = collection(db, "productos");
    const q = category ? query(productosRef, where("category", "==", category)) : productosRef;


    getDocs(q)
    .then((resp)=>{
      setProductos(

        resp.docs.map((doc)=> {
          return {...doc.data(), id: doc.id}
        })
      )

    })
    
  }, [category]);



  return (
    <div className='divBody'>
     
         <ItemList productos={productos}/>
     
         
        </div>
  )
}

export default ItemListContainer;