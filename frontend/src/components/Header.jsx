import { Navbar, Nav, Container, NavbarCollapse } from 'react-bootstrap'
import { FaShoppingCart, FaUser } from 'react-icons/fa'
import { LinkContainer } from'react-router-bootstrap'
import logo from '../assets/logo.png'

import React from 'react'

const Header = () => {
  return (
    <header>
        <Navbar bg="dark" variant="dark" expand="md" collapseOnSelect>
            <Container>
                <LinkContainer to='/'>
                    <Navbar.Brand>
                    <img src={logo} alt="Proshop" />
                    Proshop
                    </Navbar.Brand>
                </LinkContainer>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <NavbarCollapse id='basic-navbar-nav'>
                    <Nav className='ms-auto'>
                        <LinkContainer to='/'>
                        <Nav.Link><FaShoppingCart />Cart</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to='/login'>
                        <Nav.Link><FaUser />Login</Nav.Link>
                        </LinkContainer>
                    </Nav>
                </NavbarCollapse>
            </Container>
        </Navbar>
    </header>
  )
}

export default Header