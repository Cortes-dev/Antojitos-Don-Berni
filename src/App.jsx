import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './views/Home';
import PageNotFound from './views/NoPage';
import Navbar from './layouts/Navbar';
import Footer from './layouts/Footer';
import Contact from './views/Contact';
import Services from './views/Services';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/Servicios" element={<Services />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;