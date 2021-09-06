import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

export default function Navbar() {
  
    return (
      <Nav variant="pills" activeKey="1">
        <Nav.Item>
          <Nav.Link eventKey="1" href="/">
            Home
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="2" href='/about' title="Item">
            About
          </Nav.Link>
        </Nav.Item>
        <NavDropdown title="Developed" id="nav-dropdown">
          <NavDropdown.Item eventKey="4.1" href='/develop#recipes'>Cocktail and Recipe Generator</NavDropdown.Item>
          <NavDropdown.Item eventKey="4.2" href='/develop#fitness'>21st Century Fitness</NavDropdown.Item>
          <NavDropdown.Item eventKey="4.3" href='/develop'>The Tom Fund</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item eventKey="4.4" href='/develop#codequiz'>Code Quiz</NavDropdown.Item>
          <NavDropdown.Item eventKey="4.5" href='/develop#worksched'>Workday Planner</NavDropdown.Item>
          <NavDropdown.Item eventKey="4.6" href='/develop#weather'>Weather Dashboard</NavDropdown.Item>
          <NavDropdown.Item eventKey="4.7" href='/develop#notes'>Note Taker</NavDropdown.Item>
          <NavDropdown.Item eventKey="4.7" href='/develop#blog'>Tech Blog</NavDropdown.Item>
          <NavDropdown.Item eventKey="4.7" href='/develop#fitness2'>Fitness App</NavDropdown.Item>
        </NavDropdown>
        <Nav.Item>
          <Nav.Link eventKey="3" href='/contact'>
            Contact
          </Nav.Link>
        </Nav.Item>
      </Nav>
    );
  }
  
