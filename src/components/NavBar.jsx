import { CardWidget } from './Cardwidget';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import data from "../data/productos.json"
import { Item } from './Item';


const categorie =(data.map(producto => producto.categoria))
const uniqueCategories = new Set(categorie)

export const NavBar = () => (


  <Navbar bg="dark" data-bs-theme="dark" >
    <Container >
      <Navbar.Brand className='titulo' href="#home">Pelusitas</Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link href="/">Home </Nav.Link>
        {[...uniqueCategories].map(categoria=> (
          <Nav.Link as={NavLink} key={categoria.id} to={`/categoria/${categoria}`}>{categoria}</Nav.Link>
          
        ))}
      </Nav>
      <CardWidget data-bs-theme="dark"/>
    </Container>
  </Navbar>

)

