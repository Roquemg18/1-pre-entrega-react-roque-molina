import NavBar from './componentes/header/NavBar'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import ItemListContainer from './componentes/itemListContainer/ItemListContainer'


function App() {
  return (
    <>
    
      <NavBar/>
      <ItemListContainer palabra="Productos"/>
      
      
      
    </>
  );
}

export default App;
