import React from 'react';
import Navbar from './Components/Navbar';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import Home from './Components/Pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Services from './Components/Pages/Services';
import Products from './Components/Pages/Products';
import SignIn from './Components/Pages/SignUp';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/services' element={<Services />} />
          <Route path='/products' element={<Products />} />
          <Route path='/sign-up' element={<SignIn />} />
          {/* <Route path='/' */}
        </Routes>
      </Router>
    </>
  );
}

export default App;