import React from 'react'
import { Container, Nav, Navbar, NavDropdown} from 'react-bootstrap';
import {
  Link
} from "react-router-dom";
import '../styles/MainNavbar.css';
import {ReactComponent as SearchIcon} from '../icons/searchIcon.svg';
export default function MainNavbar() {
  return (
    <Navbar bg="myColor" expand="lg" variant="dark" sticky="top"> 
        <Container>
          <Navbar.Brand className="nav-brand"><Link to="/"><span className="logo-books">Books</span>Reviews</Link></Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              style={{ maxHeight: '100px'}}
              navbarScroll
            >
              <Nav.Link href="#Home">HOME</Nav.Link>
              <NavDropdown title="BOOKS" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#Nonfiction">Nonfiction</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#Fiction">Fiction</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#Children's">Children's</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#Self Improvement">Self Improvement</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#Reviews">REVIEWS</Nav.Link>
              <Nav.Link href="#News">NEWS</Nav.Link>
              <Nav.Link href="#Contacts">CONTACTS</Nav.Link>
              <Nav.Link href="#Contacts"><SearchIcon></SearchIcon></Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
  )
}

