import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
{
  /* The following line can be included in your src/index.js or App.js file */
}
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../assets/components/Navi/Navi.css'

export default function BasicExample() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary navi-shadowabuse">
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

          <Navbar.Brand className='navi-name'>Bludov</Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">

          <NavDropdown title="O Bludově" id="basic-nav-dropdown" className='navi-link'>
              <NavDropdown.Item href="#action/1.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/1.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/1.3">Something</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Služby města" id="basic-nav-dropdown" className='navi-link'>
              <NavDropdown.Item href="#action/2.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/2.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/2.3">Something</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Turistika" id="basic-nav-dropdown" className='navi-link'>
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            </NavDropdown>


          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
