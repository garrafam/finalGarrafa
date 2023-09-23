import { CardWidget } from './Cardwidget';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import {useState, useEffect} from 'react';
import {collection, getFirestore, getDocs, } from "firebase/firestore"


export const NavBar = () => { 
const [producto, setProducto ] =useState([]);


useEffect (()=>{
  const db= getFirestore()
  const refCollection= collection(db, "Items")
 
  getDocs(refCollection)
  .then(snapshot=>{
      if (snapshot.size===0) alert("no se encontraron resultados")
      else setProducto(
  snapshot.docs.map( doc=>{
 return({id: doc.id, ...doc.data()}  )

    
  }))})
})

let nombresReales = producto.map(producto => producto.Categoria);
const uniqueCategories =new Set(nombresReales)

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
