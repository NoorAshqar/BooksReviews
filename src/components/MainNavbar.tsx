import React from 'react'
import { Container, Nav, Navbar, NavDropdown} from 'react-bootstrap';
import {
  Link
} from "react-router-dom";
import './MainNavbar.css';
import {ReactComponent as SearchIcon} from '../icons/searchIcon.svg';
export default function MainNavbar() {
  return (
    <Navbar bg="myColor" expand="lg" variant="dark" sticky="top"> 
        <Container>
          <Navbar.Brand className="nav-brand"><Link to="/"><strong>Books</strong>Reviews</Link></Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              style={{ maxHeight: '100px'}}
              navbarScroll
            >
              <Nav.Link href="#Home">HOME</Nav.Link>
              <NavDropdown title="BOOKS" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">Nonfiction</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action4">Fiction</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">Children's</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">Self Improvement</NavDropdown.Item>
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

