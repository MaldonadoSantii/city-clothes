import {useState,useEffect} from 'react'
import "./ItemListContainer.css"
import Item from './Item';




const ItemList = ({productos}) => {
 

  return (
    <div className='pCargando '>
      {productos.length === 0 ? (
        <h3 >Cargando productos...</h3>
      ) :
       ( productos.map(item => <Item key={item.id} {...item} />)
       
      )}
    </div>
  );
}
export default ItemList;





