import { useState } from 'react';
import '../App.css';

export const ItemCount= ({value}) =>{
    const[contador, setcontador]= useState(value)
   const handclick =() =>{
    if(contador>=5) return
   setcontador (contador + 1 )
        console.log(setcontador)

    }
    const handclick1 =() =>{
        if(contador <1) return
        setcontador (contador - 1)
             console.log()
     
         }
    return(
        <>
        <h1>soy un contador</h1>
        <div  className='count'>  
        <button onClick={  handclick1 }>-</button>
        <p>{contador}</p>
        <button onClick={  handclick }>+</button>
        <button>Agregar al carrito</button>
        
        </div>
        </>
    )
}