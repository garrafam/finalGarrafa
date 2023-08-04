import { Card } from './Card';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';




export const NavBar=()=>
     {
        return (
          <>
            {[false].map((expand) => (
              <Navbar key={expand} expand={expand} className="bg-body-tertiary mb-3">
                <Container fluid>
                  <Navbar.Brand className='titulo' href="#">Pelusitas</Navbar.Brand>
                  <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                  <Navbar.Offcanvas
                    id={`offcanvasNavbar-expand-${expand}`}
                    aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                    placement="end"
                  >
                    <Offcanvas.Header closeButton>
                      <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                        Productos de limpieza
                      </Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                      <Nav className="justify-content-end flex-grow-1 pe-3">
                        <Nav.Link href="#action1">Plasticos </Nav.Link>
                        <Nav.Link href="#action2">Aromatizacion</Nav.Link>
                        <Nav.Link href="#action3">Productos sueltos</Nav.Link>                       
                      </Nav>                      
                    </Offcanvas.Body>
                  </Navbar.Offcanvas>                 
                </Container>
                <Card/>
              </Navbar>
            ))}
          </>
        );
      }