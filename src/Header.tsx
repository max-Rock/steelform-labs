import React, { useState, useEffect } from 'react';
import './Header.css';
import { List, X } from 'phosphor-react';
import { Link, useLocation } from 'react-router-dom';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const location = useLocation();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const isScrolledUp = prevScrollPos > currentScrollPos;

      if (!menuOpen) {
        setVisible(isScrolledUp || currentScrollPos < 10);
      }
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos, menuOpen]);

  return (
    <header className={`header ${visible || menuOpen ? '' : 'hidden'}`}>
      <div className="logo">
        <Link to="/">
          <img src="/logo.webp" alt="Steelform Labs Logo" />
        </Link>
      </div>
      <div className="hamburger" onClick={toggleMenu}>
        {menuOpen ? <X size={32} color="white" /> : <List size={32} color="white" />}
      </div>
      <nav className={`nav ${menuOpen ? 'open' : ''}`}>
        <Link to="/about">About</Link>
        <Link to="/services">Services</Link>
        <div className="actions-mobile">
          <button className="login-button">Log in</button>
        </div>
      </nav>
      <div className="actions">
        <button className="login-button">Log in</button>
      </div>
    </header>
  );
}

export default Header;
