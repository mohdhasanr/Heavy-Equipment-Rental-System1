import React, { useState } from 'react';
import { FaFacebookF, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { FiMenu, FiX } from 'react-icons/fi';
import './Header3.css'; // Make sure to create this CSS file or integrate the styles

const Header3 = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <div className="header-container">
      <div className="header-left">
        <p>Currently, we are serving in Bengaluru.</p>
      </div>

      <div className="hamburger" onClick={toggleMenu} aria-label="Toggle Menu">
        {menuOpen ? <FiX /> : <FiMenu />}
      </div>

      <div className={`menu ${menuOpen ? 'open' : ''}`}>
        <a href="#home" onClick={toggleMenu}>Home</a>
        <a href="#about-us" onClick={toggleMenu}>About Us</a>
        <a href="#contact-us" onClick={toggleMenu}>Contact Us</a>
        <a href="#services" onClick={toggleMenu}>Services</a>
      </div>

      <div className="header-center">
        <a href="https://www.facebook.com/profile.php?id=61570845011410&mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
          <FaFacebookF />
        </a>
        <a href="https://www.instagram.com/big.bucher?igsh=MTlzdno0aXRrcm83eQ==" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
          <FaInstagram />
        </a>
        <a href="https://wa.me/918150053321" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
          <FaWhatsapp />
        </a>
      </div>
    </div>
  );
};

export default Header3;
