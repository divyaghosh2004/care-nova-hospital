import React from 'react';
import './HospitalDetails.css';
import logo from '../assets/logo.jpg';

const HospitalDetails = () => {
  return (
    <div className="about-page">
      <section className="page-header text-center">
        <div className="container">
          <h1 className="section-title text-white">About Care-Nova Hospital</h1>
          <p className="section-subtitle text-white">Pioneering healthcare excellence since 2010.</p>
        </div>
      </section>

      <section className="container section">
        <div className="grid grid-2 items-center">
          <div className="about-img-container glass-card animate-fade-in">
            <img src={logo} alt="Care-Nova Logo" className="about-logo" />
            <div className="about-stats mt-4 grid grid-2">
              <div className="stat-box text-center">
                <h3 className="text-accent">500+</h3>
                <p>Beds</p>
              </div>
              <div className="stat-box text-center">
                <h3 className="text-primary">150+</h3>
                <p>Specialists</p>
              </div>
              <div className="stat-box text-center">
                <h3 className="text-accent">50,000+</h3>
                <p>Happy Patients</p>
              </div>
              <div className="stat-box text-center">
                <h3 className="text-primary">15+</h3>
                <p>Awards</p>
              </div>
            </div>
          </div>
          
          <div className="about-content animate-fade-in" style={{animationDelay: '0.2s'}}>
            <h2 className="text-primary mb-3">Our Mission & Vision</h2>
            <p className="mb-3 text-light">
              At <strong>Care-Nova</strong>, our mission is to provide compassionate, accessible, and high-quality healthcare to our community. We envision a world where advanced medical care is within reach for everyone, regardless of their background.
            </p>
            <p className="mb-4 text-light">
              Equipped with state-of-the-art technology and a team of internationally trained medical professionals, we offer comprehensive services ranging from routine check-ups to complex surgeries.
            </p>

            <h3 className="text-primary mb-2">Our Core Values</h3>
            <ul className="values-list mb-4">
              <li><strong>Compassion:</strong> We treat every patient like family.</li>
              <li><strong>Excellence:</strong> We strive for the highest medical standards.</li>
              <li><strong>Integrity:</strong> We maintain transparency in all our dealings.</li>
              <li><strong>Innovation:</strong> We continuously adopt the latest medical advancements.</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HospitalDetails;
