import { Item } from './Item';

export  const ItemList=({product})=>

 product.map((product)=>
 
 <Item key= {product.id} product={product}/>)

