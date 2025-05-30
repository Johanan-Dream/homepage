import React from 'react';
import logo from './logo.svg';
// import './App.css';
import './App.scss';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Main from './pages/Main';
import About from './pages/About';
import Skill from './pages/Skill';
import PortFolio from './pages/PortFolio';
import Todolist from './pages/Todolist';
import Contact from './pages/Contact';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path="/" element={<Main />} />
          <Route path="/about" element={<About />} />
          <Route path="/skill" element={<Skill />} />
          <Route path="/portfolio" element={<PortFolio />} />
          <Route path="/todolist" element={<Todolist />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
