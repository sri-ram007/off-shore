
import { Container, Button, Card, Nav, Navbar, Row, Col } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import './Product.css'; 

import jeans from './jeans.jpg'; 
import transparent from './transparent.jpg';
import WhiteImg from './White.jpg'; 
import Formals from './Formals.jpg'; 
import Casuals from './Casual'; 
import cotton from './cotton.jpg'; 
import coat from './Coat.jpg';
import sherwani from './Sherwani.jpg';
import halfshirt from './halfshirt.jpg';
import dhotis from './dhotis.jpg';
import police from './police.jpg.png';
import uniform from './Uniform.png';

function Product() {
  const navigate = useNavigate();

  const products = [
    { id: 'jeans', title: 'Jeans Pants', img: jeans },
    { id: 'white-shirt', title: 'White T-Shirt', img: WhiteImg },
    { id: 'transparent-pants', title: 'Transparent Pants', img: transparent },
    { id: 'formal-shirt', title: 'Formal Shirt', img: Formals },
    { id: 'casual-shirt', title: 'Casual Shirt', img: Casuals },
    { id: 'cotton-pants', title: 'Cotton Pants', img: cotton },
    { id: 'coat', title: 'Coat', img: coat },
    { id: 'sherwani', title: 'Sherwani', img: sherwani },
    { id: 'half-shirt', title: 'Half Shirt', img: halfshirt },
    { id: 'dhoti', title: 'Dhoti', img: dhotis },
    { id: 'police-uniform', title: 'Police Uniform', img: police },
    { id: 'school-uniform', title: 'School Uniform', img: uniform },
  ];

  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Navbar.Brand href="#home">Off-white</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/">Home</Nav.Link>
          <Nav.Link as={Link} to="/About">About</Nav.Link>
          <Nav.Link as={Link} to="/Contact">Contact</Nav.Link>
        </Nav>
      </Navbar>

      <div className="Image">
      <Container className="py-5">
        <Row className="g-4">
          {products.map((product) => (
            <Col key={product.id} xs={12} sm={6} md={4} lg={3}>
              <Card className="h-100">
                <Card.Img variant="top" src={product.img} style={{ height: '250px', objectFit: 'cover' }} />
                <Card.Body className="d-flex flex-column">
                  <Card.Title>{product.title}</Card.Title>
                  <Card.Text>
                    This is a sample product: {product.title}.
                  </Card.Text>
                 <Button 
                      variant="primary" 
                     className="mt-auto"
                     onClick={() => navigate(`/ProductDetail/${product.id}`)}
                  >
                  View Details
                </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
      </div>
    </>
  );
}

export default Product;