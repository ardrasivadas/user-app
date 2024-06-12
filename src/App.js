import logo from './logo.svg';
import './App.css';
import Adduser from './components/Adduser';
import Login from './components/Login';
import Viewuser from './components/Viewuser';
import Navbar from './components/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Adduser/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/viewuser' element={<Viewuser/>}/>
      </Routes></BrowserRouter>
  );
}

export default App;
