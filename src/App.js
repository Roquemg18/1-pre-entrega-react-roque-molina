import NavBar from './componentes/header/NavBar'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import ItemListContainer from './componentes/main/productos/itemListContainer/ItemListContainer'
import Footer from './componentes/footer/Footer';
import PagHome from './componentes/main/home/PagHome';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ItemDetailContainer from './componentes/main/productos/itemDetailContainer/ItemDetailContainer';





function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route
          path="/"
          element={
          <PagHome/> 
          } 
        />
        <Route
        path='/productos'
        element={
          <ItemListContainer palabra="Productos"/>
        }
        />
        <Route
          path="/productos/:categoryName"
          element={
            <ItemListContainer palabra="Productos"/>
          }
        />

        <Route
        path="/detail/:id"
        element={<ItemDetailContainer/>}
        />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
