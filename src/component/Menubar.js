import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

function Menubar() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/">MDR</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <NavDropdown title="Product" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">All</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Top</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Bottom</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Acc</NavDropdown.Item>
            </NavDropdown>            
            <Nav.Link href="#link">AboutMe</Nav.Link>

          </Nav>
          <Navbar.Collapse className="justify-content-end">
            <Nav.Link href="/cart">Cart &nbsp;
            <FontAwesomeIcon icon={ faCartShopping } />
            </Nav.Link>              

          </Navbar.Collapse>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Menubar;