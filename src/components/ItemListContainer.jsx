import { ItemList } from "./ItemList";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react"
import  {Container } from "react-bootstrap"
import {collection, getFirestore, getDocs, query, where,} from "firebase/firestore"
import '../App.css'

export const ItemListContainer =(props)=>{
    const [product, setProduct ] =useState([]);
    const [loading, setLoading] =useState(true)
    const {id}= useParams()

    useEffect (()=>{
    const db= getFirestore()
    const refCollection= id
     ? query(collection(db, "Items"), where ("Categoria", "==", id))
     : collection(db, "Items")


   
    getDocs(refCollection)
    .then(snapshot=>{
        if (snapshot.size===0) alert("no se encontraron resultados")
        else setProduct (
    snapshot.docs.map( doc=>{
        return {id: doc.id, ...doc.data()}
       
    }))
    })
  
    .finally(()=>{
        setLoading(false)
    })
}, [id]);
    if (loading) return (<div>Loading...</div>)


    return( 
    <Container>
 
   
     <div className="bienvenido">{props.greeting }</div>
     <div className="cardHome">
       <ItemList product={product}/>

     </div>



    </Container>
    )
}