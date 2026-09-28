import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Doctors from './pages/Doctors';
import Rooms from './pages/Rooms';
import Pharmacy from './pages/Pharmacy';
import Ambulance from './pages/Ambulance';
import BookAppointment from './pages/BookAppointment';
import HospitalDetails from './pages/HospitalDetails';
import './index.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/doctors" element={<Doctors />} />
            <Route path="/rooms" element={<Rooms />} />
            <Route path="/pharmacy" element={<Pharmacy />} />
            <Route path="/ambulance" element={<Ambulance />} />
            <Route path="/book-appointment" element={<BookAppointment />} />
            <Route path="/about" element={<HospitalDetails />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
