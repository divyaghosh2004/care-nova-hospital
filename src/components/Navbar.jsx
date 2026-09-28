import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, HeartPulse } from 'lucide-react';
import './Navbar.css';
import logo from '../assets/logo.jpg';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);
  
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Doctors', path: '/doctors' },
    { name: 'Rooms', path: '/rooms' },
    { name: 'Pharmacy', path: '/pharmacy' },
    { name: 'Ambulance', path: '/ambulance' },
    { name: 'About', path: '/about' },
  ];

  return (
    <nav className="navbar">
      <div className="container nav-container">
        <Link to="/" className="nav-logo">
          <img src={logo} alt="Care-Nova" className="logo-img" />
          <span className="logo-text">Care<span className="text-accent">-Nova</span></span>
        </Link>
        
        <div className={`nav-menu ${isOpen ? 'active' : ''}`}>
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path} 
              className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Link to="/book-appointment" className="btn btn-accent nav-btn" onClick={() => setIsOpen(false)}>
            Book Appointment
          </Link>
        </div>

        <div className="nav-toggle" onClick={toggleMenu}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
