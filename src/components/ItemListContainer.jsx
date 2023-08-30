import { ItemList } from "./ItemList";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react"
import  {Container } from "react-bootstrap"
import data from "../data/productos.json"

import '../App.css'

export const ItemListContainer =(props)=>{
    const [product, setProduct ] =useState([]);
    const {id}= useParams()
    useEffect (()=>{
    const promise= new Promise ((resolve, reject)=>{
    setTimeout(()=> resolve(data),2000);
    });
    promise.then((data)=> {
        if(!id) {setProduct(data);
    } else {
        const productFiltered = data.filter(product=>product.categoria === id);
        setProduct(productFiltered)
    }
}   
    );
}, []);
    if (product.length === 0) return (<div>Loading...</div>)


    return( 
    <Container>
 
   
     <div className="bienvenido">{props.greeting }</div>
     <div className="cardHome">
       <ItemList product={product}/>

     </div>



    </Container>
    )
}