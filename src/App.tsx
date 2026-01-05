import React from 'react';
import Header from './Header';
import Services from './Services';
import Materials from './Materials';
import Footer from './Footer';
import './App.css';
import { ArrowRight } from 'phosphor-react';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="hero-section">
        <div className="main-content">
          <div className="main-left">
            <p className="proven-text"> [ BRING VISION TO REALITY ] </p>
            <h1 className="main-title" dangerouslySetInnerHTML={{ __html: 'Designed by YOU. <br /> Built by US.' }}></h1>
            <div className="tags">
              <span>CNC MACHINING</span>
              <span>SHEET METAL</span>
            </div>
          </div>
          <div className="main-right">
            <img src="/images/part.webp" alt="Part" className="part-image" />
            <p className="side-text">
              When you need a part tomorrow, we’ll help you get it there.
            </p>
            <button className="equipment-button">
              Get Started <ArrowRight className="arrow" />
            </button>
          </div>
        </div>
      </div>
      <Services />
      <Materials />
      <Footer />
    </div>
  );
}

export default App;
