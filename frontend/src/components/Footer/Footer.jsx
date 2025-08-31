import React from 'react';
import './Footer.css';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { assets } from '../../assets/assets';

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        {/* Left Section */}
        <div className="footer-content-left">
          <img src={assets.logo} alt="Logo" />
          <p>
           At EarthShifter, we specialize in providing reliable, high-performance heavy machinery and exceptional service. Our mission is to empower construction projects with the right equipment, ensuring efficiency, safety, and cost-effective solutions for every client.
          </p>
          <br />
          <div className="footer-social-icons">
            <a href="https://www.facebook.com/profile.php?id=61570845011410&mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <FaFacebookF />
            </a>
            {/* <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <FaTwitter />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FaLinkedinIn />
            </a> */}
            <a href="https://www.instagram.com/big.bucher?igsh=MTlzdno0aXRrcm83eQ==" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <FaInstagram />
            </a>
            <a href="https://wa.me/918150053321" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
              <FaWhatsapp />
            </a>
          </div>
        </div>

        {/* Center Section */}
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
            <a href="/aboutus" class="nav-link">About Us</a>
            </li>

            <li>
              <a href="/explore-menu">products</a>
            </li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        {/* Right Section */}
        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+91 8050267688</li>
            <li>mohdhasanr11@gmail.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">Copyright 2024 © EarthShifter.in - All Rights Reserved.</p>
    </div>
  );
};

export default Footer;
