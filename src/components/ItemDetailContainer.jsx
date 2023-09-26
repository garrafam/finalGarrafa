import { useParams } from "react-router-dom";
import { ItemDetail } from "./ItemDetail";
import { useState, useEffect } from "react"
import  {Container } from "react-bootstrap"
import { getFirestore, getDoc, doc} from "firebase/firestore"
import '../App.css'


export const ItemDetailContainer =(props)=>{
    const [producto, setProducto ] =useState([null]);
    const [loading, setLoading] =useState(true)
    const {id}= useParams()   

    useEffect (()=>{
      const db = getFirestore()
      const refDoc = doc(db, "Items",id )
      getDoc(refDoc).then(snapshot=>{
        setProducto  ({id : snapshot.id, ...snapshot.data() })
      })
      .finally(()=>setLoading(false))
    },[id])

   
if (loading) return (<div>Loading...</div>)

console.log({producto})
 return( 
    <Container>   
     <div className="bienvenido">{props.greeting }</div>
     <ItemDetail producto={producto}/>
    
    </Container>
    )
}