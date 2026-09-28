import React, { useState } from 'react';
import { BadgeCheck, Star, Clock, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Doctors.css';

// Mock Data
const doctorsData = [
  { id: 1, name: 'Dr. Arjun Mehta', domain: 'Cardiology', experience: '15+ Years', rating: 4.9, reviews: 342, fee: '₹1200', timings: '10:00 AM - 02:00 PM', image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=300&q=80', verified: true },
  { id: 2, name: 'Dr. Sarah Khan', domain: 'Neurology', experience: '12+ Years', rating: 4.8, reviews: 210, fee: '₹1500', timings: '11:00 AM - 04:00 PM', image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=300&q=80', verified: true },
  { id: 3, name: 'Dr. Rajiv Singh', domain: 'Orthopedics', experience: '20+ Years', rating: 4.7, reviews: 450, fee: '₹1000', timings: '09:00 AM - 01:00 PM', image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=300&q=80', verified: true },
  { id: 4, name: 'Dr. Neha Sharma', domain: 'Pediatrics', experience: '8+ Years', rating: 4.9, reviews: 180, fee: '₹800', timings: '04:00 PM - 08:00 PM', image: 'https://images.unsplash.com/photo-1594824436998-d70cb26227c8?auto=format&fit=crop&w=300&q=80', verified: true },
  { id: 5, name: 'Dr. Vikram Das', domain: 'Dermatology', experience: '10+ Years', rating: 4.6, reviews: 156, fee: '₹900', timings: '10:00 AM - 01:00 PM', image: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=300&q=80', verified: true },
  { id: 6, name: 'Dr. Priya Verma', domain: 'Gynecology', experience: '14+ Years', rating: 4.8, reviews: 320, fee: '₹1100', timings: '12:00 PM - 05:00 PM', image: 'https://images.unsplash.com/photo-1527613426441-4da17471b66d?auto=format&fit=crop&w=300&q=80', verified: true }
];

const domains = ['All', 'Cardiology', 'Neurology', 'Orthopedics', 'Pediatrics', 'Dermatology', 'Gynecology'];

const Doctors = () => {
  const [filter, setFilter] = useState('All');

  const filteredDoctors = filter === 'All' 
    ? doctorsData 
    : doctorsData.filter(doc => doc.domain === filter);

  return (
    <div className="doctors-page">
      <section className="page-header">
        <div className="container text-center">
          <h1 className="section-title">Our Expert Specialists</h1>
          <p className="section-subtitle text-white">Find the right verified doctor for your needs.</p>
        </div>
      </section>

      <section className="container section">
        {/* Filter */}
        <div className="filter-container mb-4">
          {domains.map(d => (
            <button 
              key={d} 
              className={`filter-btn ${filter === d ? 'active' : ''}`}
              onClick={() => setFilter(d)}
            >
              {d}
            </button>
          ))}
        </div>

        {/* Doctors List */}
        <div className="grid grid-3">
          {filteredDoctors.map(doc => (
            <div key={doc.id} className="glass-card doctor-card animate-fade-in">
              <div className="doc-img-container">
                <img src={doc.image} alt={doc.name} className="doc-img" />
                {doc.verified && <div className="verified-badge"><BadgeCheck size={18} /> Verified</div>}
              </div>
              <div className="doc-info">
                <div className="flex justify-between items-center mb-1">
                  <span className="domain-tag">{doc.domain}</span>
                  <div className="rating flex items-center gap-1 text-warning">
                    <Star size={16} fill="#f39c12" stroke="#f39c12" /> {doc.rating} ({doc.reviews})
                  </div>
                </div>
                <h3>{doc.name}</h3>
                <p className="experience mb-2">Exp: {doc.experience}</p>
                
                <div className="doc-details mb-3">
                  <div className="detail-item"><Clock size={16} className="text-primary"/> {doc.timings}</div>
                  <div className="detail-item fee"><strong>Consultation Fee:</strong> {doc.fee}</div>
                </div>

                <Link to={`/book-appointment?doctor=${doc.id}`} className="btn btn-primary w-100">
                  Book Appointment
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Doctors;
