import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './Header';
import Banner from './Banner';
import Services from './Services';
import Materials from './Materials';
import Footer from './Footer';
import Home from './pages/Home';
import About from './pages/About';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      {/* <main className="main-content"> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      {/* </main> */}
      <Footer />
    </div>
  );
}

export default App;
