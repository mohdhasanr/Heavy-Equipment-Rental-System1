


import React, { useState, useEffect } from 'react';
import './Header.css';

// Import images from the assets folder
import { assets } from '../../assets/assets'; // Assuming assets.js exists and contains these imports

const Header = () => {
  const images = [assets.header_img, assets.banner];

  const [activeIndex, setActiveIndex] = useState(0);

  // Cycle images every 7 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 7000); // 7000 ms = 7 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="header-container">
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Header ${index}`}
          className={`header-image ${activeIndex === index ? 'active' : ''}`}
        />
      ))}
    </div>
  );
};

export default Header;
