import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom'

//Pages
import Nav from './components/navigation/Nav';
import Footer from './components/footer/Footer';
import Profile from './components/pages/Profile';
import Home from './components/pages/Home';
import About from './components/pages/About';

function App() {

  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/users/:id" element={<Profile />}></Route>
        <Route path="/about" element={<About />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
