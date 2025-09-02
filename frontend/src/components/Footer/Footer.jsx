import React from 'react';
import './Footer.css';
import { FaFacebookF, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { assets } from '../../assets/assets';

const Footer = () => {
  return (
    <footer className="footer" id="footer">
      <div className="footer-content">
        
        {/* Left Section */}
        <div className="footer-content-left">
          <img src={assets.logo} alt="Logo" className="footer-logo" />
          <p>
            At <span className="brand">EarthShifter</span>, we provide reliable heavy machinery and 
            exceptional service to empower construction projects with efficiency, 
            safety, and cost-effective solutions.
          </p>
          <div className="footer-social-icons">
            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <FaFacebookF />
            </a>
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <FaInstagram />
            </a>
            <a href="https://www.whatsapp.com/" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
              <FaWhatsapp />
            </a>
          </div>
        </div>

        {/* Center Section */}
        <div className="footer-content-center">
          <h2>Company</h2>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/aboutus">About Us</a></li>
            <li><a href="/explore-menu">Products</a></li>
            <li><a href="/privacy">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Right Section */}
        <div className="footer-content-right">
          <h2>Get in Touch</h2>
          <ul>
            <li><a href="tel:+918050267688">+91 8050267688</a></li>
            <li><a href="mailto:mohdhasanr11@gmail.com">mohdhasanr11@gmail.com</a></li>
          </ul>
        </div>
      </div>

      <hr />
      <p className="footer-copyright">
        © {new Date().getFullYear()} <span className="brand">EarthShifter</span>. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
