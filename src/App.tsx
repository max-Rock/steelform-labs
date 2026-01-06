import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Home from './pages/Home';
import About from './pages/About';
import ServicesPage from './pages/ServicesPage';
import './App.css';
import { motion, AnimatePresence } from 'framer-motion';
import ScrollToTop from './components/ScrollToTop';

function App() {
  const location = useLocation();

  return (
    <div className="App">
      <Header />
      <ScrollToTop />
      <AnimatePresence mode="wait">
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Routes location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<ServicesPage />} />
          </Routes>
        </motion.div>
      </AnimatePresence>
      <Footer />
    </div>
  );
}

export default App;
