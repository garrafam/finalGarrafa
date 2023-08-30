import { useParams } from "react-router-dom";
import { ItemDetail } from "./ItemDetail";
import { useState, useEffect } from "react"
import  {Container } from "react-bootstrap"
import data from "../data/productos.json"

import '../App.css'

export const ItemDetailContainer =(props)=>{
    const [producto, setProducto ] =useState([]);
    const {id}= useParams()

    useEffect (()=>{
    const promise= new Promise ((resolve, reject)=>{
    setTimeout(()=>{ 
    const productoById=data.find((producto)=>producto.id=== id);
    resolve(productoById);
  },    2000);
    });
    promise.then((data)=> setProducto(data));
}, []);
if (producto.length === 0) return (<div>Loading...</div>)


 return( 
    <Container>   
     <div className="bienvenido">{props.greeting }</div>
     <ItemDetail producto={producto}/>
    </Container>
    )
}