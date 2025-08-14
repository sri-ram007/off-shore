// src/Pages/Home.js
import { Container, Nav, Navbar, Col, Image, Card, Button, Row } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import WhiteImg from './White.jpg'; 
import Formals from './Formals.jpg'; 
import Casuals from './Casual'; 
import cotton from './cotton.jpg'; 
import jeans from './jeans.jpg'; 
import trans from './transparent.jpg'; 

function Home() {
  const navigate = useNavigate();
  
  const homeProducts = [
    { id: 'white-shirt', title: 'Sample T-shirts', description: 'This is a sample card with an image.', img: WhiteImg },
    { id: 'formal-shirt', title: 'Sample Formal-Shirts', description: 'This is a sample card with an image.', img: Formals },
    { id: 'casual-shirt', title: 'Sample Casuals-Shirts', description: 'This is a sample card with an image.', img: Casuals },
    { id: 'formal-pants', title: 'Sample Formal Pants', description: 'This is a sample card with an image.', img: cotton },
    { id: 'jeans-pants', title: 'Sample Jeans-Pants', description: 'This is a sample card with an image.', img: jeans },
    { id: 'casual-pants', title: 'Sample Casualpants', description: 'This is a sample card with an image.', img: trans },
  ];

  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Off-white</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/Product">Products</Nav.Link>
            <Nav.Link as={Link} to="/About">About</Nav.Link>
            <Nav.Link as={Link} to="/Contact">Contact</Nav.Link>
          </Nav>
        <Nav className="ms-auto">
        <Nav.Link as={Link} to="/Login">Login</Nav.Link>
        <Nav.Link as={Link} to="/SignUp">SignUp</Nav.Link>
        </Nav>
        </Container>
      </Navbar>

      <Container fluid className="p-0">
        <Image src="/Group.jpg" fluid style={{ width: '100%', height: '600px', objectFit: 'cover' }} />
      </Container>

      <Container fluid className="style py-5">
        <Row className="g-4">
          {homeProducts.map((product) => (
            <Col key={product.id} md={4}>
              <Card style={{ width: '100%' }}>
                <Card.Img variant="top" src={product.img} style={{ height: '250px', objectFit: 'cover' }} />
                <Card.Body>
                  <Card.Title>{product.title}</Card.Title>
                  <Card.Text>{product.description}</Card.Text>
                  <Button variant="primary" onClick={() => navigate(`/ProductDetail/${product.id}`)}>
                    View Details
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}

export default Home;
