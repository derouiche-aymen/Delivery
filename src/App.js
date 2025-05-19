import './App.css';
import NavBar from './components/navBar';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import Contact from './pages/contact';
import Footer from './components/footer';
import React, { useState, useEffect } from 'react';


function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    document.body.className = isDarkMode ? 'dark-mode' : '';
  }, [isDarkMode]);

  return (
<div >
      <NavBar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode}/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/a-propos" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
    </div>
  );
}

export default App;
