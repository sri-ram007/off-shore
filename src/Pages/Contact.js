 import React from 'react';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';

function ContactUs() {
  return (
    <Container>
      <h3>Contact Us</h3>
      <p>
        We'd love to hear from you! Whether you have a question about our dresses, your order, or just want to share feedback,
        the Off-white team is here to help.
      </p>

      <Form>
        <Row className="mb-3">
          <Col md={6}>
            <Form.Group controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Your name" required />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Your email" required />
            </Form.Group>
          </Col>
        </Row>

        <Form.Group className="mb-3" controlId="formSubject">
          <Form.Label>Subject</Form.Label>
          <Form.Control type="text" placeholder="Subject" />
        </Form.Group>

        <Form.Group className="mb-4" controlId="formMessage">
          <Form.Label>Message</Form.Label>
          <Form.Control as="textarea" rows={5} placeholder="Your message" required />
        </Form.Group>

        <Button variant="dark" type="submit">
          Send Message
        </Button>
      </Form>

      <div className="mt-5">
        <h5>Other ways to reach us:</h5>
        <p><strong>Email:</strong> Off-White5667@gmail.com</p>
        <p><strong>Phone:</strong> +91 7896556777</p>
        <p><strong>Address:</strong> 56,100 feet Road,TNagar,Chennai</p>
      </div>
    </Container>
  );
}

export default ContactUs;
