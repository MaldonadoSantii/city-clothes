import React from 'react';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.min.css' ;
import { Container } from 'react-bootstrap';
import "./components/NavBar.css"
import ItemDetailContainer from "./components/ItemDetailContainer"
import { CarritoProvider } from './components/CarritoContext';
import Footer from './components/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProductDetail from './components/ProductDetail';
import Home from './components/Home';
import CartConstruccion from './components/CartConstruccion';




const App = () => {




  return (
    <BrowserRouter>
    
      <CarritoProvider>
        <Container  fluid className='containerBody' >
            <div>
              <NavBar  />
             </div>
    
     <Routes>
    <Route exact path='/home' element={<Home/>} />
    <Route exact path='/cart' element={<CartConstruccion/>} />
    <Route exact path='/category/:category' element={<ItemListContainer/>}/>
    <Route exact path='/item/:id' element={<ItemDetailContainer/>} />
     </Routes>

             
{/* <Home /> */}

     {/* <ItemListContainer  /> */}
        {/* <ItemDetailContainer />    */}
      <Footer />
    </Container>  
  </CarritoProvider>
 </BrowserRouter>
  )
}

export default App
