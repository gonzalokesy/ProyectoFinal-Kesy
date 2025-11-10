import CartWidget from "./CartWidget"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from "react-router";
import { useState, useEffect } from "react";
import styles from '../styles/NavBar.module.css'

function NavBar() {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        fetch('https://dummyjson.com/products/category-list')
            .then(res => res.json())
            .then(category => setCategories(category));
    }, [])
    return (
        <Navbar expand="lg" className={styles.navBar}>
            <Container>
                <Navbar.Brand as={Link} to={"/"}>✨ Nova</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <NavDropdown title="Categorias" id="basic-nav-dropdown">
                            {
                                categories.map(cat => (
                                    <NavDropdown.Item key={cat} as={Link} to={`/category/${cat}`}>
                                        {cat}
                                    </NavDropdown.Item>
                                ))
                            }
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
                <CartWidget />
            </Container>
        </Navbar>
    )
}

export default NavBar