import { useContext, useState } from "react"
import  {Container, FormGroup, Table} from "react-bootstrap"
import { CartContext } from "../context/CartContext"
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import {collection,getFirestore, addDoc} from "firebase/firestore"
import '../App.css';
export const Cart=()=>{
    const [formValues, setFormValue]= useState({
        nname:"",
        phone: "" ,
        email:""

    })
    const { clear, items, removeItem} = useContext (CartContext)
    const total = ()=>
    items.reduce( (acumulador, valorActual)=>
    acumulador + (valorActual.quantity * valorActual.Precio), 0
    )

    const handleChange = ev =>{
        setFormValue ( prev =>({
            ...prev,
            [ev.target.name]: ev.target.value,
        }))
    }
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
                    nombre:"",
                    telefono: "" ,
                    Email: ""  , 
                })
                clear()
                alert("su orden:" + id+ "ah sido completada!")
            }
        })
       
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

          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Nombre</Form.Label>
              <Form.Control
               onChange={handleChange}
               value={formValues.name}
               type="text"
               name="Nombre" 
               requiered/>
            </Form.Group>            
          
            <Form.Group className="mb-3" >
              <Form.Label required>Telefono</Form.Label>
              <Form.Control
               onChange={handleChange}
               value={formValues.phone}
               type="text"
               name="phone"
               required                 />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control 
              onChange={handleChange}
              value={formValues.Email}
              type="email"
              name="email" 
              required
               />
            </Form.Group>
            <Form.Check
          required
          label="Agree to terms and conditions"
          feedback="You must agree before submitting."
          feedbackType="invalid"
        />
        <Button type="submit" onClick={sendOrder}>Comprar</Button>
          </Form>
         
    </Container>



  );
}


            
          
            
           
         