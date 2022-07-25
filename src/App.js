import './App.css';
import './estilos/menu.css'
import './estilos/principal.css'
import './estilos/biblia.css'
import Menu from './componentes/menu';
import Baground from './baground';
import './estilos/baground.css'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Biblia from './paginas/Biblia';

function App() {

  return (
    <BrowserRouter>
    <Menu></Menu>
    <div className='contenedor-biblia-libros'>
      <Routes>
        <Route path='/' element={<Baground/>}></Route>
        <Route path='/biblia' element={<Biblia></Biblia>}></Route>
        <Route path='/libros' element={<p>Libros</p>}></Route>
        <Route path='/libros' element={<p>Radio</p>}></Route>
        <Route path='/libros' element={<p>Registrarse</p>}></Route>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
