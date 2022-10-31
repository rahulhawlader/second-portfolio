

import { Route, Routes } from 'react-router-dom';
import './App.css';

import Home from './Pages/Home/Home';
import Footer from './Pages/Shered/Footer';
import Navber from './Pages/Shered/Navber';


function App() {
  return (
    <>
      <Navber/>
      {
        <Routes>

          <Route path='/' element={<Home/>} ></Route>
          
        </Routes>
      }
      <Footer/>
    </>
  );
}

export default App;
