import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <header className="about-us-header">
        <div className="about-us-overlay">
          <h1>Heavy Vehicle Management System</h1>
          <p>Your Trusted Partner for Construction Equipment Rentals</p>
        </div>
      </header>

      <section className="about-us-story">
        <h2>Our Story</h2>
        <p>
          Heavy Vehicle Management System was founded with a vision to simplify 
          the way contractors and builders access essential machinery. 
          From excavators to graders, we provide top-quality equipment with 
          transparent rentals and reliable support.
        </p>
        <p>
          Over the years, we have built a strong reputation as a dependable 
          rental partner for infrastructure projects of all scales.
        </p>
      </section>

      <section className="about-us-mission">
        <h2>Our Mission</h2>
        <p>We aim to empower construction projects with:</p>
        <ul>
          <li><strong>Reliability:</strong> A well-maintained fleet ready when you need it.</li>
          <li><strong>Flexibility:</strong> Short-term and long-term rental options.</li>
          <li><strong>Efficiency:</strong> Easy booking, tracking, and hassle-free returns.</li>
        </ul>
      </section>

      <section className="about-us-why-choose">
        <h2>Why Choose Us?</h2>
        <ul>
          <li><strong>Wide Fleet:</strong> Excavators, dozers, loaders, graders & more.</li>
          <li><strong>Safety Assured:</strong> Regular inspections and certified operators.</li>
          <li><strong>On-Time Delivery:</strong> Equipment available when your project needs it.</li>
          <li><strong>Trusted Support:</strong> Customer-first approach for all rentals.</li>
        </ul>
      </section>

      <section className="about-us-contact">
        <h2>Contact Us</h2>
        <p>We’re here to power your next project. Get in touch with us:</p>
        <p>📧 <a href="mailto:mohdhasanr11@gmail.com">mohdhasanr11@gmail.com</a></p>
        <p>📞 Phone: +91-8050267688</p>
        <a href="mailto:mohdhasanr11@gmail.com" className="contact-btn">Request a Quote</a>
      </section>

      
    </div>
  );
};

export default AboutUs;
