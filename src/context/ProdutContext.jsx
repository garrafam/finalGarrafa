import { createContext , useState, useEffect } from "react";
import {collection, getFirestore, getDocs} from "firebase/firestore"
import { useParams } from "react-router-dom";


export const ProdutContext = createContext ([]);
export const ProdutProvider= ({children})=> {  
    const [product, setProduct ] = useState([])
    const [loading, setLoading] =useState(true)
    const {id}= useParams()

    useEffect (()=>{
        const db= getFirestore()
        const refCollection= collection(db, "Items")       
        getDocs(refCollection)
        .then(snapshot=>{
            if (snapshot.size===0) alert("no se encontraron resultados")
            else setProduct(
        snapshot.docs.map( doc=>{
       return({id: doc.id, ...doc.data()}  )
     
          
        }))})
     
      .finally(()=>{
        setLoading(false)
    })
}, [id]);
    if (loading) return (<div>Loading...</div>)

      return (
        < ProdutContext.Provider value={{product, setProduct}}>
        {children}
         </ProdutContext.Provider>
            )
}