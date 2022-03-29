
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container, Form, Nav, Navbar } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
   <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
  <h1>WELCOME</h1>
  <div >
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sit amet varius ipsum. Integer quis diam eu dui suscipit dignissim quis quis est. Etiam placerat lacus congue venenatis volutpat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; In hac habitasse platea dictumst. In sit amet neque dui. Etiam sodales, mauris non laoreet fringilla, justo est dignissim sem, et ornare eros turpis sit amet risus.</p>
<h3>ABOUT US</h3>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sit amet varius ipsum. Integer quis diam eu dui suscipit dignissim quis quis est. Etiam placerat lacus congue venenatis volutpat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; In hac habitasse platea dictumst. In sit amet neque dui. Etiam sodales, mauris non laoreet fringilla, justo est dignissim sem, et ornare eros turpis sit amet risus.</p>
</div>
  <h1>To Join Us</h1>
  <Form style={{width:"50%", margin:"auto"}}>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
    </div>
  );
}

export default App;
