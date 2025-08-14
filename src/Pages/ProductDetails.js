

import { useParams, Link } from 'react-router-dom';
import { Nav,Navbar,Container, Card, Button } from 'react-bootstrap';
import './Product.css'; 


import jeans from './jeans.jpg'; 
import transparent from './transparent.jpg';
import WhiteImg from './White.jpg'; 
import Formals from './Formals.jpg'; 
import Casuals from './Casual.jpg';
import cotton from './cotton.jpg'; 
import coat from './Coat.jpg';
import sherwani from './Sherwani.jpg';
import halfshirt from './halfshirt.jpg';
import dhotis from './dhotis.jpg';
import police from './police.jpg.png';
import uniform from './Uniform.png';

function ProductDetail() {
  const { id } = useParams();


  const products = [
    { id: 'jeans', title: 'Jeans Pants', img: jeans, description: 'Stylish and comfortable jeans.' },
    { id: 'white-shirt', title: 'White T-Shirt', img: WhiteImg, description: 'Classic white t-shirt.' },
    { id: 'transparent-pants', title: 'Transparent Pants', img: transparent, description: 'Modern fashion statement.' },
    { id: 'formal-shirt', title: 'Formal Shirt', img: Formals, description: 'Perfect for office or events.' },
    { id: 'casual-shirt', title: 'Casual Shirt', img: Casuals, description: 'Everyday wear with style.' },
    { id: 'cotton-pants', title: 'Cotton Pants', img: cotton, description: 'Soft and breathable cotton pants.' },
    { id: 'coat', title: 'Coat', img: coat, description: 'Elegant coat for formal occasions.' },
    { id: 'sherwani', title: 'Sherwani', img: sherwani, description: 'Traditional Indian outfit.' },
    { id: 'half-shirt', title: 'Half Shirt', img: halfshirt, description: 'Cool and breezy half-shirt.' },
    { id: 'dhoti', title: 'Dhoti', img: dhotis, description: 'Ethnic Indian wear for festivals.' },
    { id: 'police-uniform', title: 'Police Uniform', img: police, description: 'Professional law enforcement attire.' },
    { id: 'school-uniform', title: 'School Uniform', img: uniform, description: 'Neat and proper for school.' },
  ];

  const product = products.find(p => p.id === id);

  if (!product) {
    return (
      <Container className="py-5">
        <h2>Product not found</h2>
        <Link to="/Product">
          <Button variant="secondary">Back to Products</Button>
        </Link>
      </Container>
    );
  }

  return (

    <Container className="py-5">
    <Navbar bg="dark" data-bs-theme="dark">
        <Navbar.Brand href="#home">Off-white</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/">Home</Nav.Link>
          <Nav.Link as={Link} to="/About">About</Nav.Link>
          <Nav.Link as={Link} to="/Contact">Contact</Nav.Link>
        </Nav>
      </Navbar>
      <Card className="mx-auto" style={{ maxWidth: '600px' }}>
        <Card.Img variant="top" src={product.img} alt={product.title} style={{ height: '400px', objectFit: 'cover' }} />
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>{product.description}</Card.Text>
          <Link to="/Product">
          <Button variant="primary">Back to Products</Button>
          </Link><br></br>
          <div><br></br>
          <Link to="/">
          <Button variant="success">Buy Now</Button>
          </Link>
          </div>
          <div><br></br>
          <Link to="/">
          <Button variant="secondary">Add to Cart</Button>
          </Link>
          </div>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default ProductDetail;
