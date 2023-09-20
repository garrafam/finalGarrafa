import { useState } from 'react';
import '../App.css';
//import { useContext } from 'react';

export const ItemCount= ({value,onAdd,stock }) =>{
   console.log({stock ,value})
    const[contador, setcontador]= useState(value)
   const handclick =() =>{  
    if( contador >=stock ) return
   setcontador (contador + 1 )
        

    }
    const handclick1 =() =>{
        if(contador <= 1) return
        setcontador (contador - 1)
             
         }
    return(
        <>        
        <div  className='count'>  
        <button onClick={  handclick1 }>-</button>
        <p>{contador}</p>
        <button onClick={  handclick }>+</button>
        <button onClick={()=>onAdd(contador)}>Agregar al carrito</button>
        
        </div>
        </>
    )
}