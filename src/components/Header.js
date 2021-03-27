import React, { useEffect, useState  } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import { NavLink } from "react-router-dom";



const Header = () => {

      const [navigationData, setNavigationData] = useState([]);

    useEffect(() => {
        getHeaderData();
    }, []);

    const getHeaderData = async () => {
        const response = await fetch('http://localhost:3001/navigation');
        const data = await response.json();
        setNavigationData(data);
    }

    return (
        <Navbar bg="light" expand="lg">
            <NavLink className="navbar-brand" to="/">Guestbook App</NavLink>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
                {navigationData.map(navitem => (
                    <NavLink key={navitem.id} className="nav-link" to={navitem.path}>{navitem.display}</NavLink>
                ))}
            </Nav>
            <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="secondary">Search</Button>
            </Form>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default Header;