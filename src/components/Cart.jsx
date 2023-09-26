import { useContext, useState } from "react"
import  {Container, Table} from "react-bootstrap"
import { CartContext } from "../context/CartContext"
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import {collection,getFirestore, addDoc} from "firebase/firestore"
import '../App.css';


export const Cart=()=>{
    const [Nombre, setName] = useState();
    const [Telefono, setPhone] = useState();
    const [email, setEmail] = useState();
    const [validated, setValidated] = useState();  
    const [formValues, setFormValue]= useState({
       Nombre:"",
       Telefono: "" ,
        Email:""

    })
    const { clear, items, removeItem} = useContext (CartContext)
    const total = ()=>
    items.reduce( (acumulador, valorActual)=>
    acumulador + (valorActual.quantity * valorActual.Precio), 0
    )

    const isFormValid = () => {
        if (!Nombre|| !Telefono ||!email ) {
          return false;
        }
        return true;
      };
   
    const sendOrder= ( )=>{
        const order={
            buyer: formValues,
            items,
            total:total(),
        }
        const db = getFirestore()
        const orderCollection = collection( db,"orders")   
        
        addDoc (orderCollection, order ).then(({id}) =>{
            if(id){
                setFormValue({
                    Nombre:"",
                    Telefono: "" ,
                    Email: ""  , 
                })
                clear()
                alert("su orden:" + id+ "ah sido completada!")
            }
        })
       
    }
    const handleSubmit = (event) => {
        event.preventDefault();       
        if (items.length === 0) {
          alert("El carro está vacío, por favor añade productos antes de enviar.");
          return;
        } 
       if (isFormValid()) {
            alert("Por favor, completa todos los campos del formulario antes de enviar.");
            return;
          }   
      }
   
    return(

        <Container>
            <h1>Carrito de compras</h1>
            <Table striped bordered hover variant=" dark">
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Precio</th>
                        {/*<th>Foto</th>*/}
                        <th>Cantidad</th>
                    </tr>
                </thead>
                <tbody>
                    {items.map(item =>(
                        <tr key={item.id}>
                            <td>{item.Nombre}</td>
                            <td>{item.Precio}</td>
                            {/*<img className="foto" src= {item.Foto} alt="foto" />*/}
                            <td>{item.quantity}</td>
                            <td>
                                < button onClick= {() =>removeItem( item.id)}>
                                    Eliminar
                                </button>
                            </td>
                        </tr>    
                    )
                        )}
                </tbody>
                <tfoot>
                    <tr>
                        <td>Total</td>
                        <td></td>
                        <td></td>
                        <td>{total()}</td>
                        <td></td>
                    </tr>

                </tfoot>  
            </Table>
            <h2>Ingresar datos de usuarios</h2>          

            <Form >
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Nombre</Form.Label>
              <Form.Control
              
               type="text"
               name="Nombre" 
               onChange={handleSubmit}
                />
               
               
            </Form.Group>            
          
            <Form.Group className="mb-3" >
              <Form.Label >Telefono</Form.Label>
              <Form.Control
               
               type="text"
               name="phone"
               onChange={handleSubmit}
            />
                
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control 
           
             type="email"
             name="email" 
             onChange={handleSubmit}
             
             />
            

            </Form.Group>
            <button type="submit" disabled={items.length === 0 || isFormValid()}>Enviar Pedido</button>
   
        <Button type="submit" onClick={sendOrder}>Comprar</Button>
          </Form>
         
    </Container>



  );
}


            
          
            
           
         