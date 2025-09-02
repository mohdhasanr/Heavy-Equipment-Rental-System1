import React from "react";
import "./Featuresblock.css";
import { FaTruck, FaTools, FaCogs, FaHardHat } from "react-icons/fa";
import { assets } from "../../assets/assets";
import image01 from "../../assets/image01.jpg"
import image02 from "../../assets/image02.jpeg"
import image03 from "../../assets/image03.jpeg"
import image04 from "../../assets/image04.jpeg"



const FeaturesBlock = () => {
  const features = [
    {
      heading: "Wide Equipment Range",
      text: "Choose from a variety of heavy machinery including excavators, loaders, and cranes for all your project needs.",
      icon: <FaTruck />,
      img: image01,
    },
    {
      heading: "On-Site Delivery",
      text: "Get the equipment delivered directly to your construction site, saving time and effort.",
      icon: <FaTools />,
      img: image02,
    },
    {
      heading: "Certified & Safe",
      text: "All equipment is certified, maintained, and tested for safety and reliability.",
      icon: <FaCogs />,
      img: image03,
    },
    {
      heading: "Flexible Rentals",
      text: "Rent machinery on short-term or long-term plans according to your project requirements.",
      icon: <FaHardHat />,
      img: image04,
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
            <img
              className="feature-image"
              src={feature.img}
              alt={feature.heading}
            />
          </div>
        ))}
      </div>
      <div className="line bottom-line"></div>
    </div>
  );
};

export default FeaturesBlock;
