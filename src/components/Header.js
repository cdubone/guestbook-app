import React, { useEffect, useState  } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';



const Header = () => {

      const [navigationData, setNavigationData] = useState([]);

    useEffect(() => {
        console.log('use effect');
        getHeaderData();
    }, []);

    const getHeaderData = async () => {
        const response = await fetch('http://localhost:3001/navigation');
        const data = await response.json();
        setNavigationData(data);
        console.log(data);
    }

    return (
        <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">Guestbook App</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
            {navigationData.map(navitem => (
                <Nav.Link key={navitem.key} href="/">{navitem.display}</Nav.Link>
            ))}
        </Nav>
        <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
        </Form>
        </Navbar.Collapse>
    </Navbar>
    );
};

export default Header;