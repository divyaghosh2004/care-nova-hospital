import React from 'react';
import { PhoneCall, AlertCircle, Clock, HeartPulse } from 'lucide-react';
import './Ambulance.css';

const Ambulance = () => {
  return (
    <div className="ambulance-page">
      <section className="page-header ambulance-header text-center">
        <div className="container">
          <div className="pulse-icon"><HeartPulse size={60} /></div>
          <h1 className="section-title text-white mt-4">24/7 Emergency Ambulance</h1>
          <p className="section-subtitle text-white">We are always ready to save lives. Call us immediately in case of emergency.</p>
          
          <div className="emergency-call-box">
            <AlertCircle size={30} className="alert-icon" />
            <div className="call-info">
              <span>Toll-Free Emergency Number</span>
              <h2>1800-200-CARE (2273)</h2>
            </div>
            <a href="tel:18002002273" className="btn call-btn"><PhoneCall size={20} /> CALL NOW</a>
          </div>
        </div>
      </section>

      <section className="container section">
        <h2 className="text-center text-primary mb-4">Our Fleet Types</h2>
        <div className="grid grid-3">
          <div className="glass-card text-center animate-fade-in">
            <h3 className="text-primary mb-2">Basic Life Support (BLS)</h3>
            <p className="text-light mb-3">Equipped with standard medical equipment for non-critical transport.</p>
            <div className="price-tag">₹800 Base Fare</div>
          </div>
          <div className="glass-card text-center animate-fade-in" style={{animationDelay: '0.2s'}}>
            <h3 className="text-primary mb-2">Advanced Life Support (ALS)</h3>
            <p className="text-light mb-3">Includes ventilator, defibrillator, and trained paramedics for critical care.</p>
            <div className="price-tag">₹1500 Base Fare</div>
          </div>
          <div className="glass-card text-center animate-fade-in" style={{animationDelay: '0.4s'}}>
            <h3 className="text-primary mb-2">Neonatal Ambulance</h3>
            <p className="text-light mb-3">Specialized transport for newborn babies with incubators and neonatal staff.</p>
            <div className="price-tag">₹2000 Base Fare</div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Ambulance;
