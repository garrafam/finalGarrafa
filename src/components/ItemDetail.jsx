export const ItemDetail =({producto})=> 
<div  className="cardHome">
       <h1>{producto.nombre}</h1>
       <img src= {producto.foto} alt="foto" />
       <div className="stock">Stock disponible  {producto.stock}</div>
       <div> 
              <h2>Detalle del producto</h2>
               {producto.detalle}
       </div>

</div>