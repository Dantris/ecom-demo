import { Navbar, Nav, Container, NavbarCollapse } from 'react-bootstrap'
import { FaShoppingCart, FaUser } from 'react-icons/fa'
import logo from '../assets/logo.png'

import React from 'react'

const Header = () => {
  return (
    <header>
        <Navbar bg="dark" variant="dark" expand="md" collapseOnSelect>
            <Container>
                <Navbar.Brand href="/">
                    <img src={logo} alt="Proshop" />
                    Proshop
                    </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <NavbarCollapse id='basic-navbar-nav'>
                    <Nav className='ms-auto'>
                        <Nav.Link href="/cart"><FaShoppingCart />Cart</Nav.Link>
                        <Nav.Link href="/login"><FaUser />Login</Nav.Link>
                    </Nav>
                </NavbarCollapse>
            </Container>
        </Navbar>
    </header>
  )
}

export default Header