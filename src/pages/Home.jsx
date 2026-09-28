import React from 'react';
import { Link } from 'react-router-dom';
import { Stethoscope, Pill, Ambulance as AmbulanceIcon, BedDouble, ShieldCheck, Clock, Award } from 'lucide-react';
import './Home.css';

const Home = () => {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="container hero-content animate-fade-in">
          <span className="badge badge-primary mb-2">Advanced Healthcare</span>
          <h1 className="hero-title">
            Compassionate Care,<br />
            <span className="text-accent">Advanced Medicine.</span>
          </h1>
          <p className="hero-desc">
            Care-Nova is your trusted partner in health. With world-class doctors, state-of-the-art facilities, and 24/7 emergency services, we ensure the best care for you and your family.
          </p>
          <div className="hero-btns">
            <Link to="/book-appointment" className="btn btn-primary">Book Appointment</Link>
            <Link to="/doctors" className="btn btn-outline bg-white">Find a Doctor</Link>
          </div>
        </div>
      </section>

      {/* Services Cards */}
      <section className="services-section container section">
        <div className="grid grid-4 mt-neg-4">
          <Link to="/doctors" className="glass-card service-card text-center">
            <div className="service-icon text-primary"><Stethoscope size={40} /></div>
            <h3>Expert Doctors</h3>
            <p>Verified specialists across all domains.</p>
          </Link>
          <Link to="/rooms" className="glass-card service-card text-center">
            <div className="service-icon text-accent"><BedDouble size={40} /></div>
            <h3>Patient Rooms</h3>
            <p>Affordable general to luxury private suites.</p>
          </Link>
          <Link to="/pharmacy" className="glass-card service-card text-center">
            <div className="service-icon text-primary"><Pill size={40} /></div>
            <h3>Online Pharmacy</h3>
            <p>Order medicines online with home delivery.</p>
          </Link>
          <Link to="/ambulance" className="glass-card service-card text-center">
            <div className="service-icon text-danger" style={{color: 'var(--danger)'}}><AmbulanceIcon size={40} /></div>
            <h3>24/7 Ambulance</h3>
            <p>Emergency fleet always on standby.</p>
          </Link>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="why-us section bg-light">
        <div className="container">
          <div className="text-center mb-4">
            <h2 className="section-title">Why Choose Care-Nova?</h2>
            <p className="section-subtitle">We bring together the best medical minds and latest technology.</p>
          </div>
          
          <div className="grid grid-3">
            <div className="feature-item">
              <ShieldCheck size={32} className="text-accent mb-2" />
              <h4>Verified Professionals</h4>
              <p>Every doctor and staff member undergoes rigorous background and verification checks.</p>
            </div>
            <div className="feature-item">
              <Clock size={32} className="text-primary mb-2" />
              <h4>24/7 Availability</h4>
              <p>From emergencies to late-night pharmacy needs, we are always open.</p>
            </div>
            <div className="feature-item">
              <Award size={32} className="text-accent mb-2" />
              <h4>Quality Care</h4>
              <p>High ratings from patients due to our personalized and compassionate treatment approach.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
