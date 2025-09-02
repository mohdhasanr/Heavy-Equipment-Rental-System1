import React from 'react';
import './FreshMeatPage.css';
import { assets } from '../../assets/assets';

const FreshMeatPage = () => {
  return (
    <div className="fresh-meat-container">
      <div className="fresh-meat-left">
        <video 
          src={assets.equipment} 
          className="equipment-video" 
          autoPlay 
          loop 
          muted 
          playsInline
        />
      </div>
      <div className="fresh-meat-right">
        <h1>Reliable Heavy Equipment Rentals</h1>
        <h2>Construction Machinery on Demand</h2>
        <h3>Delivered On-Site, Ready to Work</h3>
        <p>
          Looking for high-quality construction equipment? EarthShifter offers a wide range of heavy machinery, including excavators, loaders, cranes, and more, available for rent with flexible plans. Ensure your project runs smoothly with safe, certified, and well-maintained equipment delivered directly to your site.
        </p>
        <p>
          Make your construction projects efficient and cost-effective by choosing EarthShifter – your trusted partner for heavy equipment rental.
        </p>
        <a href="/explore-menu">
          <button className="shop-now-btn">Rent Now</button>
        </a>
      </div>
    </div>
  );
};

export default FreshMeatPage;
