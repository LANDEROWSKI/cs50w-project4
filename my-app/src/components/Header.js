import React from 'react'
import { Container, Col, Row, Navbar, Nav, NavDropdown} from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

function Header() {
  return (
    <header>
      <Navbar expand="lg" className="bg-body-tertiary" bg="dark" data-bs-theme="dark" collapseOnSelect>
      <Container>
        <LinkContainer to='/'>
        <Navbar.Brand>JOJO-MARKET</Navbar.Brand>
        </LinkContainer>
  
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {/* Botones del carrito y Login */}
            
          <LinkContainer to='/carrito'>
            <Nav.Link><i className='fas fa-shopping-cart'></i>Carrito</Nav.Link>
            </LinkContainer>

            <LinkContainer to='/login'>
            <Nav.Link><i className='fas fa-user'></i>Inicia Sesión</Nav.Link>
            </LinkContainer>
            {/* Boton desplegable */}
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </header>
  )
}

export default Header
