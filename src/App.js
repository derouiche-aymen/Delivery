import './App.css';
import NavBar from './components/navBar';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import Contact from './pages/contact';
import Footer from './components/footer';

function App() {
  return (
<div >
      <NavBar />
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
