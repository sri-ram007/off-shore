import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image';
import { Link } from 'react-router-dom';

function About() {
    return (
        <>
            <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand as={Link} to="/">Off-white</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        <Nav.Link as={Link} to="/Product">Products</Nav.Link>
                        <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>

            <Container fluid className="p-0">
                <Image src="/About.jpg" fluid style={{ width: '100%', height: '450px' }} />
            </Container>
            <Container className="Align">
            <h4>About Us</h4>
            <p>
                 At <strong>Off-white</strong>, we believe fashion is more than just clothing — it's a form of self-expression. 
                 Our mission is to empower individuals to feel confident and stylish by offering a curated collection of modern, elegant, and affordable dresses for every occasion.
            </p>
            <p>
                Whether you're dressing up for a wedding, a night out, or simply refreshing your wardrobe, our designs blend timeless trends with quality fabrics to bring you the best of fashion.
                Each piece is thoughtfully crafted to celebrate diversity, comfort, and individuality.
            </p>
            <p>
               We’re committed to sustainable practices, ethical sourcing, and exceptional customer service. Our passionate team works tirelessly to stay ahead of trends and ensure that our customers have access to the latest styles and seasonal collections — all from the comfort of home.
            </p>
            <p>
                Thank you for choosing <strong>Off-white</strong>. We're honored to be part of your style journey.
            </p>
           </Container>
        </>
    );
}

export default About;
