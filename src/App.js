import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import{ItemCount} from "./components/ItemCount";
import { ItemListContainer } from './components/ItemListContainer';
import { ItemDetailContainer } from './components/ItemDetailContainer';
import { NavBar } from './components/NavBar';
function App() {
  return (
    <BrowserRouter>
    <NavBar/>
    <Routes>
     <Route path="/" element={<ItemListContainer greeting="Bienvenidos "/>}/>
     <Route path="/categoria/:id" element={<ItemListContainer greeting="Bienvenidos "/>}/>
  <Route path="/Item/:id" element={<ItemDetailContainer  />}/>
 <Route path="/contador" element={<ItemCount value={0} />}/>
   
     </Routes>    
    </BrowserRouter>
  );
}

export default App;
