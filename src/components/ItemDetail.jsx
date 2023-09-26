import { useContext } from "react"
import { ItemCount } from "./ItemCount"
import { CartContext } from "../context/CartContext"
   

export const ItemDetail =({producto})=>{        
       const {addItem}= useContext(CartContext)
       const onAdd= (contador)=> addItem(producto , contador )
       return( 
  
      

        <div  className="cardHome">
        <ItemCount Stock= {producto.Stock } value= {1} onAdd={onAdd}/>
       <h1>{producto.Nombre}</h1>
       <img src= {producto.Foto} alt="foto" />
       <div className="stock">Stock disponible  {producto.Stock}</div>
       <div> 
              <h2>Detalle del producto</h2>
               {producto.Detalle}
       </div>
    <ItemCount Stock= {producto.Stock } value= {1} onAdd={onAdd}/>
    

</div>)
}
