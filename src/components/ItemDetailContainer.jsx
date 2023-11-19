import React from 'react'
import "./ItemListContainer.css"
import ItemList from './ItemList';
import ItemDetail from "./ItemDetail"
import { useParams } from 'react-router-dom';




const ItemDetailContainer = () => {
  const {id} = useParams

  product


   const mostrarProductos = new Promise ((resolve, reject)=>{

     if(productos.length > 0){
       setTimeout(()=>{
         resolve(productos)
       },3000)
     } else{
       reject("No se pudo mostrar el producto");
     }
   });

  
   mostrarProductos
   .then((resultado)=>{
       console.log(resultado);
   })

   .catch((error)=> {
     console.log(error);
   })


  return (
    <div className='divBody'>
          <ItemDetail />
        </div>
  )
}

export default ItemDetailContainer;