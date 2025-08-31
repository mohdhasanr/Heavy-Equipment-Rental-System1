import React from 'react';
import './AboutUs.css';
import { assets } from '../../assets/assets';

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <header className="about-us-header">
        <h1>Welcome to Big Butcher – Fresh Chicken and Premium Beef!</h1>
        <p>Learn more about our journey, mission, and the team behind the finest chicken and beef cuts delivered fresh to your doorstep.</p>
      </header>

      <section className="about-us-story">
        <h2>Our Story</h2>
        <p>
          Big Butcher began as a local shop with a focus on delivering high-quality chicken and beef to our community. Over time, we have become a trusted name for premium meat, combining traditional methods with modern convenience.
        </p>
        <p>
          Our dedication to freshness and ethical sourcing ensures that every bite is as good as it gets. With Big Butcher, you can always count on quality and taste.
        </p>
      </section>

      <section className="about-us-mission">
        <h2>Our Mission</h2>
        <p>At Big Butcher, we promise:</p>
        <ul>
          <li><strong>Freshness First:</strong> Fresh chicken and beef, sourced daily for unmatched flavor.</li>
          <li><strong>Ethical Practices:</strong> Partnering with suppliers who prioritize animal welfare and sustainability.</li>
          <li><strong>Seamless Convenience:</strong> Easy online ordering and fast delivery.</li>
        </ul>
      </section>

      <section className="about-us-team">
        <h2>Meet the Team</h2>
        <div className="team-member">
          <img src={assets.aftabpic} alt="Mohammed Aftab" />
          <div className="team-member-content">
            <h3>Mohammed Aftab</h3>
            <p>Founder & CEO</p>
            <p>With a passion for quality meat, Aftab leads Big Butcher in its mission to bring fresh, premium chicken and beef to your table.</p>
          </div>
        </div>
      </section>

      <section className="about-us-why-choose">
        <h2>Why Choose Big Butcher?</h2>
        <ul>
          <li><strong>100% Fresh:</strong> Chicken and beef delivered fresh, never frozen.</li>
          <li><strong>Hygiene Standards:</strong> Processed in top-notch facilities for safety and quality.</li>
          <li><strong>Fast Delivery:</strong> Get your favorite cuts delivered quickly.</li>
          <li><strong>Wide Variety:</strong> From tender chicken to premium beef, we have it all.</li>
        </ul>
      </section>

      <section className="about-us-contact">
        <h2>Contact Us</h2>
        <p>We’d love to hear from you! Reach out with any questions or orders.</p>
        <p>📧 <a href="mailto:bigbutchermeat@gmail.com.com">bigbutchermeat@gmail.com</a></p>
        <p>📞 Phone: +91-8088492209</p>
      </section>

      <footer className="about-us-footer">
        <p>Join the Big Butcher Family</p>
        <p>Order now and experience the difference. With Big Butcher, you’re not just buying meat—you’re choosing quality, convenience, and care.</p>
        <p>© 2024 Big Butcher. All rights reserved.</p>
      </footer>

      <br />
      <br />
    </div>
  );
};

export default AboutUs;
