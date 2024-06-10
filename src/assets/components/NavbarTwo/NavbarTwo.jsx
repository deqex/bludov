import './NavbarTwo.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

  /* The following line can be included in your src/index.js or App.js file */

import 'bootstrap/dist/css/bootstrap.min.css';
import './../Navi/Navi.css'

export default function NavbarTwo() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary navi-shadowabuse navi-fix">
      <Container className='navi-logo' >
      <Navbar.Brand href="#home">
            <img
              alt=""
              src="https://www.bludov.cz/images/logo.png"
              width="auto"
              height="80"
              className="d-inline-block align-top"
            />{' '}
            
          </Navbar.Brand>

          <Navbar.Brand href="/" className='navi-name'>Bludov</Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className='navi-fix'>
          <Nav className="me-auto">

          <NavDropdown title="O Bludově" id="basic-nav-dropdown" className='navi-link'>
              <NavDropdown.Item href="/OObci">O obci</NavDropdown.Item>
              <NavDropdown.Item href="/Fotogalerie">Fotogalerie</NavDropdown.Item>
              <NavDropdown.Item href="/Historie">Historie</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Služby města" id="basic-nav-dropdown" className='navi-link'>
              <NavDropdown.Item href="/Mapa">Mapa města</NavDropdown.Item>
              <NavDropdown.Item href="/Rekreace">Rekreace</NavDropdown.Item>
              <NavDropdown.Item href="/Sluzby">Služby</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Turistika" id="basic-nav-dropdown" className='navi-link'>
              <NavDropdown.Item href="/Cile">Turistické cíle</NavDropdown.Item>
              <NavDropdown.Item href="/Restaurace">Restaurace</NavDropdown.Item>
              <NavDropdown.Item href="/Ubytovani">Ubytovaní</NavDropdown.Item>
            </NavDropdown>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
