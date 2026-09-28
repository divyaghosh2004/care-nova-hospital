import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';
import './Footer.css';
import logo from '../assets/logo.jpg';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container grid grid-4 footer-top">
        <div className="footer-col">
          <Link to="/" className="footer-logo">
             <img src={logo} alt="Care-Nova" className="footer-logo-img" />
             <span className="logo-text text-white">Care<span className="text-accent">-Nova</span></span>
          </Link>
          <p className="footer-desc">
            Providing world-class medical facilities and comprehensive healthcare for a brighter, healthier future.
          </p>
          <div className="social-links">
            <a href="#">FB</a>
            <a href="#">TW</a>
            <a href="#">IG</a>
            <a href="#">IN</a>
          </div>
        </div>

        <div className="footer-col">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/doctors">Find a Doctor</Link></li>
            <li><Link to="/book-appointment">Book Appointment</Link></li>
            <li><Link to="/rooms">Room Booking</Link></li>
            <li><Link to="/pharmacy">Online Pharmacy</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h3>Departments</h3>
          <ul>
            <li><a href="#">Cardiology</a></li>
            <li><a href="#">Neurology</a></li>
            <li><a href="#">Orthopedics</a></li>
            <li><a href="#">Pediatrics</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h3>Contact Us</h3>
          <ul className="contact-info">
            <li><MapPin size={18} className="text-accent" /> <span>123 Health Avenue, Medical City, HC 10012</span></li>
            <li><Phone size={18} className="text-accent" /> <span>+91 1800-200-CARE (2273)</span></li>
            <li><Mail size={18} className="text-accent" /> <span>support@carenova.com</span></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Care-Nova Hospital. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
