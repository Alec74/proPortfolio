import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import NavDropdown from 'react-bootstrap/NavDropdown';
import '../resources/css/navbar.css';

export default function FooterComponent() {

    return (
        <Navbar fixed="bottom" collapseOnSelect expand="lg" id="navColor" variant="light">
            <Container>
                <Navbar.Brand href="/">Alec McGlone</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/about">About Me</Nav.Link>

                        <NavDropdown title="Developed" id="nav-dropdown">
                            <NavDropdown.Item eventKey="4.1" href='/develop#recipes'>Cocktail and Recipe Generator</NavDropdown.Item>
                            <NavDropdown.Item eventKey="4.2" href='/develop#fitness'>21st Century Fitness</NavDropdown.Item>
                            <NavDropdown.Item eventKey="4.3" href='/develop#fund'>The Tom Fund</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item eventKey="4.4" href='/develop#codequiz'>Code Quiz</NavDropdown.Item>
                            <NavDropdown.Item eventKey="4.5" href='/develop#worksched'>Workday Planner</NavDropdown.Item>
                            <NavDropdown.Item eventKey="4.6" href='/develop#weather'>Weather Dashboard</NavDropdown.Item>
                            <NavDropdown.Item eventKey="4.7" href='/develop#notes'>Note Taker</NavDropdown.Item>
                            <NavDropdown.Item eventKey="4.8" href='/develop#blog'>Tech Blog</NavDropdown.Item>
                            <NavDropdown.Item eventKey="4.9" href='/develop#fitness2'>Fitness App</NavDropdown.Item>
                            <NavDropdown.Item eventKey="4.10" href='/develop#budget'>Budget Tracker</NavDropdown.Item>
                            <NavDropdown.Item eventKey="4.11" href='/develop#book'>Book Search Engine</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item eventKey="4.11" href='/develop#backend'>Backend Dev</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="/contact">Contact Me</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

