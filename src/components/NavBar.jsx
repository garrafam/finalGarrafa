import { CardWidget } from './Cardwidget';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import {useContext} from 'react';
import { ProdutContext } from '../context/ProdutContext';



export const NavBar = () => { 
  const {product} = useContext (ProdutContext)
 

let nombresReales =product.map(producto => producto.Categoria);
const uniqueCategories =new Set(nombresReales)
console.log(product)
return(
  
  <Navbar bg="dark" data-bs-theme="dark" >
    <Container >
      <Navbar.Brand className='titulo' href="#home">Pelusitas</Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link href="/">Home </Nav.Link>
        {[...uniqueCategories].map(Categoria=> (
          <Nav.Link as={NavLink} key={Categoria} to={`/Categoria/${Categoria}`}>{Categoria}</Nav.Link>
          
        ))}
      </Nav>
      <CardWidget data-bs-theme="dark"/>
    </Container>
  </Navbar>

)
        }
