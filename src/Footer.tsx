import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-main-content">
        <div className="footer-content">
            <h2 className="footer-title">Let's build something creative </h2>
            <button className="contact-button">Join Here</button>
        </div>
        <div className="footer-bottom">
            <div className="footer-logo">
              <Link to="/">
                <img src="/logo.webp" alt="Steelform Labs Logo" />
              </Link>
            </div>
        </div>
      </div>
      <img src="/images/footerImg.webp" alt="Metal fabrication" className="footer-image" />
    </footer>
  );
};

export default Footer;
