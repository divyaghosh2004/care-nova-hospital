import React from 'react';
import { Wifi, Tv, Coffee, Wind, ShieldPlus } from 'lucide-react';
import './Rooms.css';

const roomsData = [
  {
    id: 1,
    type: 'General Ward',
    category: 'Affordable (Middle Class)',
    price: '₹500 / Day',
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=600&q=80',
    amenities: ['Shared Room', 'Common Washroom', 'Nurse Call System', 'Regular Meals'],
    desc: 'Cost-effective shared accommodation with all basic medical facilities and round-the-clock nursing care.'
  },
  {
    id: 2,
    type: 'Semi-Private Room',
    category: 'Standard',
    price: '₹1500 / Day',
    image: 'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=600&q=80',
    amenities: ['Twin Sharing', 'Attached Washroom', 'AC / Heater', 'Dietary Meals', 'TV'],
    desc: 'Comfortable twin-sharing rooms providing a balance between privacy and affordability.'
  },
  {
    id: 3,
    type: 'Private Suite',
    category: 'Luxury (Upper Class)',
    price: '₹4000 / Day',
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=600&q=80',
    amenities: ['Single Room', 'Sofa for Attendant', 'Smart TV', 'Free WiFi', 'Premium Meals', 'AC'],
    desc: 'Spacious private suites ensuring maximum comfort, privacy, and premium amenities for a stress-free recovery.'
  }
];

const Rooms = () => {
  return (
    <div className="rooms-page">
      <section className="page-header">
        <div className="container text-center">
          <h1 className="section-title">Patient Accommodation</h1>
          <p className="section-subtitle text-white">Comfortable rooms tailored for every budget and need.</p>
        </div>
      </section>

      <section className="container section">
        <div className="grid grid-3">
          {roomsData.map(room => (
            <div key={room.id} className="glass-card room-card animate-fade-in">
              <img src={room.image} alt={room.type} className="room-img" />
              <div className="room-info">
                <span className={`badge ${room.id === 3 ? 'badge-warning' : room.id === 2 ? 'badge-primary' : 'badge-success'} mb-1`}>
                  {room.category}
                </span>
                <h3>{room.type}</h3>
                <h4 className="room-price text-accent mb-2">{room.price}</h4>
                <p className="room-desc mb-3">{room.desc}</p>
                
                <div className="amenities mb-4">
                  <strong>Amenities:</strong>
                  <ul>
                    {room.amenities.map((amenity, i) => (
                      <li key={i}><ShieldPlus size={14} className="text-primary"/> {amenity}</li>
                    ))}
                  </ul>
                </div>
                
                <button className="btn btn-primary w-100 mt-auto">Book Room</button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Rooms;
