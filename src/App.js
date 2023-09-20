import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { Cart } from './components/Cart';
import { ItemListContainer } from './components/ItemListContainer';
import { ItemDetailContainer } from './components/ItemDetailContainer';
import { NavBar } from './components/NavBar';
import { CartProvider } from './context/CartContext';
function App() {
  return (
   <CartProvider>
    <BrowserRouter>    
    <NavBar/>
    <Routes>
     <Route exact path="/" element={<ItemListContainer greeting="Bienvenidos "/>}/>
     <Route exact path="/cart" element={<Cart/>}/>
     <Route exact path="/categoria/:id" element={<ItemListContainer greeting="Bienvenidos "/>}/>
     <Route exact path="/Item/:id" element={<ItemDetailContainer  />}/> 
         
     </Routes>        
    </BrowserRouter>
  </CartProvider>
   
  );
}

export default App;
