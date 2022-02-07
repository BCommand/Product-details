import './App.css';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import NavBar from './Components/NavBar/NavBar';

function App() {
  return (
    <div className="App">
    <NavBar></NavBar>
    <ItemListContainer greeting="Desafío detalle del producto"></ItemListContainer>
    </div>
  );
}

export default App;
