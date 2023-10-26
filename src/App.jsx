import React from 'react';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.min.css' ; 
import { Container } from 'react-bootstrap';



const App = () => {
  return (
    <Container className='' >



    <div>
       <NavBar />
    </div>


  <ItemListContainer />

    


    </Container>



    
  )
}

export default App
