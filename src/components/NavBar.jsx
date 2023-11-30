import React from 'react'
import CartWidget from './CartWidget'
import { Col, Container, Dropdown, DropdownButton, DropdownItem, DropdownItemText, Image, Row } from 'react-bootstrap'
import "./NavBar.css"
import { Link, NavLink } from 'react-router-dom'





const NavBar = () => {
  return (
    <div className='containerNavBar' fluid>
      <Row>
        <Col className='cityClothes mt-5'>
          <NavLink className='navLink' to={"/"}>
            <h1> CITY CLOTHES</h1>
          </NavLink>
        </Col>

        <Col>
          <DropdownButton className='mt-5' id="dropdownNavbar" title="Categorias" data-bs-theme="dark" variant="secondary">
            <DropdownItem> Todos los buzos </DropdownItem>
            <DropdownItem>
              <NavLink className='linkEssential' to={"/category/Essential"}> Buzos "Essential" </NavLink>
            </DropdownItem>
            <DropdownItem>
              <NavLink className='linkStussy' to={"/category/Stussy"}> Buzos "Stussy" </NavLink>
            </DropdownItem>
          </DropdownButton>
        </Col>

        <Col>
          <CartWidget />
        </Col>
      </Row>
    </div>
  );
}

export default NavBar;