import React from "react";
import { Link } from "react-router-dom"; 
import "./Home.css";
import image from "../images/skate.webp";
import Nav from "../Components/Nav";

function Home() {
  return (
    <div className="home-page">
      <Nav />
      
      {/* Live Ticker */}
      <div className="ticker-wrap">
        <div className="ticker-title">LIVE UPDATES</div>
        <div className="ticker">
          <span className="ticker-item">🎯 Archery tryouts starting next week! Sign up now.</span>
          <span className="ticker-item">🏆 MIT wins the Inter-College Football Cup!</span>
          <span className="ticker-item">🏀 New basketball batches open for beginners.</span>
          <span className="ticker-item">🏊‍♂️ Swimming pool maintenance scheduled for this Sunday.</span>
          <span className="ticker-item">🎾 Table tennis tournament registration closes tomorrow.</span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="hero-section">
        <img className="hero-bg" src={image} alt="Background" />
        <div className="hero-content">
          <h1 className="hero-title text-gradient">Fuel your passion for sports</h1>
          <p className="hero-subtitle">Ignite your journey to greatness with ALLMITSPORT - where every athlete finds their winning edge!</p>
          <div className="search-bar">
            <input type="search" placeholder="Search for sports, batches, news..." />
          </div>
          <Link to="/Batch"><button className="btn-primary">Check Batches</button></Link>
        </div>
      </section>

      {/* Daily Tip Section (Overlapping Hero) */}
      <div className="daily-tip-container">
        <div className="daily-tip-card">
          <div className="tip-icon">💡</div>
          <div className="tip-content">
            <h3>Daily Fitness Tip</h3>
            <p>Consistency is key. A 20-minute workout every day is more effective than a 2-hour workout once a week. Stay active, stay hydrated, and always remember to stretch before hitting the field!</p>
          </div>
        </div>
      </div>

      {/* Specialization Section */}
      <section className="specialization-section">
        <h2 className="section-title">Specialization</h2>
        <h3 className="section-subtitle">Your Partner in Sports Excellence</h3>
        
        <div className="specialization-grid">
          <div className="spec-card glass-panel">
            <h3>Passion for Athletics</h3>
            <p>We are passionate about sports and committed to helping athletes achieve success in all areas of their lives.</p>
          </div>
          <div className="spec-card glass-panel">
            <h3>Coaching & Training</h3>
            <p>We strive for excellence in coaching and training, providing the highest quality guidance and support to help athletes reach their full potential.</p>
          </div>
          <div className="spec-card glass-panel">
            <h3>Community Engagement</h3>
            <p>It fosters a sense of community among students, faculty, alumni, and sports enthusiasts by providing a platform to share news, updates, and discussions about college sports events and achievements.</p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <h2 className="section-title text-gradient">Our Services</h2>
        <h3 className="section-subtitle">Empowering You to Achieve Sports Excellence</h3>
        
        <div className="services-grid">
          <div className="service-box glass-panel">
            <h2>Sports Information</h2>
            <p>Get comprehensive information about various sports and their rules. Stay up-to-date with the latest news, schedules, and scores.</p>
            <button className="btn-primary">Get Started</button>
          </div>
          <div className="service-box glass-panel">
            <h2>Sports Community</h2>
            <p>Join our sports community to connect with other enthusiasts, find events, and share your passion.</p>
            <button className="btn-primary">Get Started</button>
          </div>
          <div className="service-box glass-panel">
            <h2>News & Analysis</h2>
            <p>Stay up-to-date with the latest sports news, analysis, and commentary from our experts.</p>
            <button className="btn-primary">Get Started</button>
          </div>
          <div className="service-box glass-panel">
            <h2>Sports Registration</h2>
            <p>Register for sports events and programs with ease, including custom forms and payment processing.</p>
            <button className="btn-primary">Get Started</button>
          </div>
          <div className="service-box glass-panel">
            <h2>Secure Login</h2>
            <p>Access exclusive sports content and features with a secure, seamless authentication system.</p>
            <button className="btn-primary">Get Started</button>
          </div>
          <div className="service-box glass-panel">
            <h2>Platform Engagement</h2>
            <p>Engage with your fellow sports enthusiasts through our dedicated sports community platform.</p>
            <button className="btn-primary">Get Started</button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-about">
            <h3 className="text-gradient">ALLMITSPORT</h3>
            <p>
              ALLMITSPORT is your ultimate destination for all things sports! Stay updated with the latest news, scores, and highlights from the world of Sports. 
              At ALLMITSPORT, we are passionate about promoting sports excellence and fostering a community of athletes, enthusiasts, and fans. Join us in celebrating the spirit of sportsmanship.
            </p>
          </div>
          <div className="footer-links-container">
            <ul className="footer-links">
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
              <li><Link to="/terms">Terms of Use</Link></li>
              <li><Link to="/privacy">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} ALLMITSPORT. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default Home;
