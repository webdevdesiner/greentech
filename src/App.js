import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Contato from './pages/Contato'




function App() {
  return (
    
    <Routes>
      <Route path='/' element ={
          <Home/>
        }>
      </Route>
      <Route path='/Contato' element ={
          <Contato/>
        }>
      </Route>
    </Routes>

  );
}

export default App;
