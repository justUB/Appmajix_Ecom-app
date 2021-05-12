import {Nav, Navbar, Form, FormControl, Button} from 'react-bootstrap';
import React, {Component} from "react";
import { Link } from 'react-router-dom';

const NavBar = ({ click }) => {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home">Ecommerce</Navbar.Brand>
            <Nav>
            <Form inline style={{marginRight: 15+'em', marginLeft: 20+'em'}}>
            <FormControl type="text" placeholder="Search" className="mr-lg-2 mx-auto" style={{width:30+'em'}}/>
            <Button variant="outline-info">Search</Button>
            </Form>
            
            <Nav.Link className="mr-auto" href="/">Home</Nav.Link>
            <Nav.Link className="mr-auto" href="#user">User</Nav.Link>
            <Nav.Link className="mr-auto" href="/products">Products</Nav.Link>
            </Nav>
            
        </Navbar>
        </div>
    );
};
export default NavBar;