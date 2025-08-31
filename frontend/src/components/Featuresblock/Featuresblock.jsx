import React from "react";
import "./Featuresblock.css";
import { FaTruck, FaTools, FaCogs, FaHardHat } from "react-icons/fa";
import { assets } from "../../assets/assets";

const FeaturesBlock = () => {
  const features = [
    {
      heading: "Wide Equipment Range",
      text: "Choose from a variety of heavy machinery including excavators, loaders, and cranes for all your project needs.",
      icon: <FaTruck />, // Icon for equipment/machinery
      img: assets.feature1, 
    },
    {
      heading: "On-Site Delivery",
      text: "Get the equipment delivered directly to your construction site, saving time and effort.",
      icon: <FaTools />, // Icon for delivery/service
      img: assets.feature2,
    },
    {
      heading: "Certified & Safe",
      text: "All equipment is certified, maintained, and tested for safety and reliability.",
      icon: <FaCogs />, // Icon for certified/maintenance
      img: assets.feature3,
    },
    {
      heading: "Flexible Rentals",
      text: "Rent machinery on short-term or long-term plans according to your project requirements.",
      icon: <FaHardHat />, // Icon for safety/flexibility
      img: assets.feature4,
    },
  ];

  return (
    <div className="features-wrapper">
      <div className="line top-line"></div>
      <div className="features-container">
        {features.map((feature, index) => (
          <div className="feature-box" key={index}>
            <div className="feature-icon-wrapper">{feature.icon}</div>
            <h3 className="feature-heading">{feature.heading}</h3>
            <p className="feature-text">{feature.text}</p>
            <img className="feature-image" src={feature.img} alt={feature.heading} />
          </div>
        ))}
      </div>
      <div className="line bottom-line"></div>
    </div>
  );
};

export default FeaturesBlock;
