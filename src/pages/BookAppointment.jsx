import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { CalendarCheck } from 'lucide-react';
import './BookAppointment.css';

const BookAppointment = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const preSelectedDoctor = searchParams.get('doctor');

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    date: '',
    department: '',
    doctor: preSelectedDoctor || '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Appointment Request Submitted Successfully! We will contact you shortly to confirm the timings.');
    // Reset form
    setFormData({name: '', phone: '', email: '', date: '', department: '', doctor: '', message: ''});
  };

  return (
    <div className="appointment-page container section">
      <div className="appointment-wrapper glass-card animate-fade-in">
        <div className="appointment-info">
          <h2 className="text-white mb-2">Book an Appointment</h2>
          <p className="text-white mb-4" style={{opacity: 0.9}}>Fill out the form and our team will get back to you to confirm your slot.</p>
          
          <div className="info-block mb-3">
            <h4 className="text-white">Emergency Cases</h4>
            <p className="text-white" style={{opacity: 0.9}}>Please call our emergency number for urgent care: <strong>1800-200-2273</strong></p>
          </div>
          
          <div className="info-block">
            <h4 className="text-white">Working Hours</h4>
            <p className="text-white" style={{opacity: 0.9}}>Monday - Saturday: 8:00 AM - 8:00 PM<br/>Sunday: 9:00 AM - 2:00 PM</p>
          </div>
        </div>
        
        <div className="appointment-form-container">
          <form onSubmit={handleSubmit} className="appointment-form">
            <div className="grid grid-2" style={{gap: '1rem'}}>
              <div className="form-group mb-0">
                <label className="form-label">Patient Name</label>
                <input type="text" name="name" value={formData.name} onChange={handleChange} className="form-input" required placeholder="John Doe" />
              </div>
              <div className="form-group mb-0">
                <label className="form-label">Phone Number</label>
                <input type="tel" name="phone" value={formData.phone} onChange={handleChange} className="form-input" required placeholder="+91 9876543210" />
              </div>
            </div>

            <div className="grid grid-2" style={{gap: '1rem'}}>
              <div className="form-group mb-0">
                <label className="form-label">Email Address</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} className="form-input" placeholder="john@example.com" />
              </div>
              <div className="form-group mb-0">
                <label className="form-label">Preferred Date</label>
                <input type="date" name="date" value={formData.date} onChange={handleChange} className="form-input" required />
              </div>
            </div>

            <div className="grid grid-2" style={{gap: '1rem'}}>
              <div className="form-group mb-0">
                <label className="form-label">Department</label>
                <select name="department" value={formData.department} onChange={handleChange} className="form-select" required>
                  <option value="">Select Department</option>
                  <option value="Cardiology">Cardiology</option>
                  <option value="Neurology">Neurology</option>
                  <option value="Orthopedics">Orthopedics</option>
                  <option value="Pediatrics">Pediatrics</option>
                  <option value="General">General Medicine</option>
                </select>
              </div>
              <div className="form-group mb-0">
                <label className="form-label">Doctor (Optional)</label>
                <select name="doctor" value={formData.doctor} onChange={handleChange} className="form-select">
                  <option value="">Any Available Doctor</option>
                  <option value="1">Dr. Arjun Mehta</option>
                  <option value="2">Dr. Sarah Khan</option>
                  <option value="3">Dr. Rajiv Singh</option>
                </select>
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">Symptoms / Message</label>
              <textarea name="message" value={formData.message} onChange={handleChange} className="form-input" rows="4" placeholder="Briefly describe your symptoms or treatment required..."></textarea>
            </div>

            <button type="submit" className="btn btn-accent w-100">
              <CalendarCheck size={20} /> Confirm Booking Request
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookAppointment;
