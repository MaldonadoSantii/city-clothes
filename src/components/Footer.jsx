import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { FaRegCopyright, FaWhatsapp, FaInstagram  } from "react-icons/fa"
import { IoMdHelpCircleOutline } from "react-icons/io";
import "./NavBar.css"



const Footer = () => {


  return (
    <Container fluid className='containerFooter'>
        <Row>
            <Col></Col>

        <Col xs={8}>
            <Row className='iconApps text-center'>
                <Col xs={1}> <FaWhatsapp /></Col>
               
                
                <Col xs={1}>  <FaInstagram />   </Col>
                
               <Col xs={1}> <IoMdHelpCircleOutline />   </Col>
                
            </Row>
            <Row className='iconCopyright text-center'>
                <Col xs={10}> <FaRegCopyright />  Todos los derechos reservados 2023 </Col>
               
                
            </Row>
         </Col>

            <Col></Col>

        </Row>
        
        </Container>
  )
}

export default Footer
