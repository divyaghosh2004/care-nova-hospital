import React, { useState } from 'react';
import { Search, ShoppingCart, Plus } from 'lucide-react';
import './Pharmacy.css';

const medicinesData = [
  { id: 1, name: 'Paracetamol 500mg', category: 'Fever & Pain', price: '₹30', image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=200&q=80' },
  { id: 2, name: 'Amoxicillin 250mg', category: 'Antibiotics', price: '₹85', image: 'https://images.unsplash.com/photo-1550572017-0243e8f8101a?auto=format&fit=crop&w=200&q=80' },
  { id: 3, name: 'Vitamin C Complex', category: 'Supplements', price: '₹120', image: 'https://images.unsplash.com/photo-1616671285437-023a1ebcc566?auto=format&fit=crop&w=200&q=80' },
  { id: 4, name: 'Cough Syrup 100ml', category: 'Cough & Cold', price: '₹90', image: 'https://images.unsplash.com/photo-1628771065518-0d82f1938462?auto=format&fit=crop&w=200&q=80' },
  { id: 5, name: 'Omeprazole 20mg', category: 'Acidity', price: '₹55', image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=200&q=80' },
  { id: 6, name: 'First Aid Kit', category: 'Essentials', price: '₹350', image: 'https://images.unsplash.com/photo-1603398938378-e54eab446dde?auto=format&fit=crop&w=200&q=80' }
];

const Pharmacy = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredMedicines = medicinesData.filter(med => 
    med.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    med.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="pharmacy-page">
      <section className="page-header">
        <div className="container text-center">
          <h1 className="section-title">Online Pharmacy</h1>
          <p className="section-subtitle text-white">Order genuine medicines from our certified pharmacy.</p>
          
          <div className="search-bar">
            <Search className="search-icon" />
            <input 
              type="text" 
              placeholder="Search for medicines, categories..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button className="btn btn-accent">Search</button>
          </div>
        </div>
      </section>

      <section className="container section">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-primary">Available Medicines</h2>
          <button className="btn btn-outline"><ShoppingCart size={18} /> Cart (0)</button>
        </div>

        <div className="grid grid-4">
          {filteredMedicines.map(med => (
            <div key={med.id} className="glass-card med-card animate-fade-in">
              <img src={med.image} alt={med.name} className="med-img" />
              <div className="med-info">
                <span className="med-category">{med.category}</span>
                <h4>{med.name}</h4>
                <div className="flex justify-between items-center mt-2">
                  <span className="med-price">{med.price}</span>
                  <button className="add-btn"><Plus size={20} /></button>
                </div>
              </div>
            </div>
          ))}
        </div>
        {filteredMedicines.length === 0 && (
          <div className="text-center mt-4">
            <p className="text-light">No medicines found matching your search.</p>
          </div>
        )}
      </section>
    </div>
  );
};

export default Pharmacy;
