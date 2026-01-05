import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Video from './Video';
import Materials from './Materials';
import './App.css';

function App() {
  return (
    <>
      <Header />
      <div className="hero-section">
          <div className="main-content">
              <div className="main-left">
                  <p className="proven-text">PROVEN AND TESTED</p>
                  <h1 className="main-title">The most durable parts on the market</h1>
                  <div className="tags">
                      <span>STEEL</span>
                      <span>ALUMINUM</span>
                      <span>TITANIUM</span>
                  </div>
              </div>
              <div className="main-right">
                  <img src="/images/part.webp" alt="Metal Part" className="part-image" />
                  <p className="side-text">Our parts are lighter, stronger, and more cost-effective than any others.</p>
                  <button className="equipment-button">
                      Explore Equipment
                      <span className="arrow">→</span>
                  </button>
              </div>
          </div>
      </div>
      <Video />
      <Materials />
      <Footer />
    </>
  );
}

export default App;
