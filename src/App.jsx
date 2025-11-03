import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <NavBar />

      <Routes>
        <Route path="/" element={<ItemListContainer greeting="BIENVENIDOS A MI TIENDA " />} />
        <Route path="/category/:categoryId" element={<ItemListContainer greeting="Productos por categoría" />} />
        <Route path="/item/:itemId" element={<ItemDetailContainer />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="*" element={<h1>404 - Página no encontrada</h1>} />
      </Routes>
    </div>
  )
}

export default App