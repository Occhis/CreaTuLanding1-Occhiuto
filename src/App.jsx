import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/NavBar/itemlistcontainer/itemlistcontainer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting="Bienvenidos a mi tienda"/>
    </div>
  )
}

export default App
