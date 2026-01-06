import React from 'react';
import './Footer.css';
import { Link, useLocation } from 'react-router-dom';

const Footer = () => {
  const location = useLocation();

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (location.pathname === '/') {
      e.preventDefault();
      window.location.href = '/';
    }
  };

  return (
    <footer className="footer">
      <div className="footer-main-content">
        <div className="footer-content">
            <h2 className="footer-title">Let's build something creative </h2>
            <button className="contact-button">Join Here</button>
        </div>
        <div className="footer-bottom">
            <div className="footer-logo">
              <Link to="/" onClick={handleLogoClick}>
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
