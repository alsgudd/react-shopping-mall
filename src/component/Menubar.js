import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from 'react-router-dom';

function Menubar() {
  const navigate = useNavigate();

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand onClick={() => { navigate('/') }} style={{cursor: "pointer"}}>MDR</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link onClick={()=>{ navigate('/') }}>Home</Nav.Link>
            <NavDropdown title="Product" id="basic-nav-dropdown">
              <NavDropdown.Item onClick={()=>{ navigate('/tab/all') }}>All</NavDropdown.Item>
              <NavDropdown.Item onClick={()=>{ navigate('/tab/top') }}>Top</NavDropdown.Item>
              <NavDropdown.Item onClick={()=>{ navigate('/tab/bottom') }}>Bottom</NavDropdown.Item>
              <NavDropdown.Item onClick={()=>{ navigate('/tab/acc') }}>Acc</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link onClick={() => { navigate('/about') }}>About</Nav.Link>

          </Nav>
          <Navbar.Collapse className="justify-content-end">
            <Nav.Link onClick={()=>{ navigate('/cart') }}>Cart &nbsp;
            <FontAwesomeIcon icon={ faCartShopping } />
            </Nav.Link>              

          </Navbar.Collapse>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Menubar;