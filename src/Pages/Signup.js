
import Form from 'react-bootstrap/Form';
import './Login.css'; 

function Signup() {
  return (
    <div className='Loginstyle'>
      <Form>
        <h3>SIGN UP</h3>
        <Form.Group className="mb-3" controlId="formGroupEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <button className='Primary'>Submit</button>
      </Form>
    </div>
  );
}

export default Signup;