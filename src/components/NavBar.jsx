import React from 'react'
import CartWidget from './CartWidget'
import { Col, Container, Dropdown, DropdownButton, DropdownItem, DropdownItemText, Image, Row } from 'react-bootstrap'
import "./NavBar.css"





const NavBar = () => {
  return (
    <Container className='containerNavBar' fluid>
        <Row>
            <Col> <h3> <Image className='cityClothes mt-2' src='../src/assets/city-clothes.png' rounded  fluid/> 
              
              </h3> </Col>
            
            
            <Col>
             <DropdownButton className='mt-2' id="dropdownNavbar"  title="NavBar" data-bs-theme="dark"  variant="secondary"> 
              <DropdownItem>Temporada</DropdownItem>
              <DropdownItem>Categoría Hombres</DropdownItem>
              <DropdownItem>Categoría Mujeres</DropdownItem>
             </DropdownButton>
              </Col>
            
            <Col>  <CartWidget  /></Col>
            
            



        </Row>
            
    </Container>
  )
}

export default NavBar