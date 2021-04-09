import React, { useRef  } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import { NavLink } from "react-router-dom";
import { useFetch }  from '../hooks/useFetch';
import { apiPath } from '../helpers/apiPath';
import CenteredSpinner from '../components/CenteredSpinner';

const Header = () => {

    const isComponentMounted = useRef(true);

    const { data, loading, error } = useFetch(
        apiPath.header,
        isComponentMounted,
        []
    );

    if (error)
        console.log(error);

    return (
        <Navbar bg="light" expand="lg">
            <NavLink className="navbar-brand" to="/">
                <h1>Guestbook</h1>
                <div className="subhead">{data.location}</div>
            </NavLink>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
                {loading ? (
                    <CenteredSpinner />
                ) : ( 
                    data.navigation.map(navitem => (
                        <NavLink key={navitem.id} className="nav-link" to={navitem.path}>{navitem.display}</NavLink>
                    ))
                )}
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