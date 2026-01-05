import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="logo">Steelform Labs</div>
      <nav className="nav">
        <a href="#">About</a>
        <a href="#">Products</a>
        {/* <a href="#">Sectors +</a> */}
        <a href="#">Services</a>
        <a href="#">Case Studies</a>
        {/* <a href="#">News</a> */}
        {/* <a href="#">Sustainability</a> */}
        <a href="#">Contact</a>
      </nav>
      <div className="actions">
        <a href="#" className="login">Log in</a>
        <button className="book-call">Book a call</button>
      </div>
    </header>
  );
}

export default Header;
