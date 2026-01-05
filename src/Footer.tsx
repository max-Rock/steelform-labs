import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-main-content">
        <div className="footer-content">
            <h2 className="footer-title">Let's build something creative </h2>
            <button className="contact-button">Contact Us</button>
        </div>
        <div className="footer-bottom">
            <div className="footer-logo">Steelform Labs</div>
        </div>
      </div>
      <img src="/images/footerImg.webp" alt="Metal fabrication" className="footer-image" />
    </footer>
  );
};

export default Footer;
