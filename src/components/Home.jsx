import React, { useState, useEffect } from 'react';
import { Container, Image, Card } from 'react-bootstrap';
import "./home.css";
import { useParams } from 'react-router-dom';
import Item from './Item.jsx';
import { collection, getDocs} from "firebase/firestore"
import {db} from "../firebase/config.jsx"
import ItemListContainer from './ItemListContainer.jsx';

const Home= () => {
  const [productos, setProductos] = useState([]);

  const { category } = useParams();

  useEffect(() => {
    const productosRef = collection(db, "productos");
    getDocs(productosRef)
    .then((resp)=>{
      setProductos(

        resp.docs.map((doc)=> {
          return {...doc.data(), id: doc.id}
        })
      )

    })
    
  }, [category]);
  return (
<Container fluid className='divBodyHome'>
  <h1 className='bienvenidoHome'>BIENVENIDO A CITY CLOTHES</h1>

    <ItemListContainer />
       
        
</Container>
  )
}

export default Home