import React, { useState } from 'react';
import { ArrowRight } from 'phosphor-react';
import './Materials.css';

// Import images (assuming you have these in your public/images folder)
const images = {
  'ABS': '/images/part.webp',
  'ACM Panel': '/images/part.webp',
  'Acrylic (10 colors)': '/images/part.webp',
  '2024 T3 Aluminum': '/images/part.webp',
  '5052 H32 Aluminum': '/images/part.webp',
  '6061 T6 Aluminum': '/images/part.webp',
  '6061 T6 Aluminum Billet': '/images/part.webp',
  '7075 T6 Aluminum': '/images/part.webp',
  'AR400': '/images/part.webp',
  'AR500': '/images/part.webp',
  'Baltic Birch Plywood': '/images/part.webp',
  '1075 Blue Temper Spring': '/images/part.webp',
  'Brass': '/images/part.webp',
  'Carbon Fiber': '/images/part.webp',
  'Chipboard': '/images/part.webp',
};

const materials = [
  { name: 'CRCA IS 513', details: 'thickness: 1mm, 1.6mm, 2mm, 3mm', category: 'Mild Steel', industry: ['Transportation', 'EV', 'Defence'], image: images['AR400'] },
  { name: 'SS 304 2B', details: 'thickness: 1mm, 1.6mm, 2mm, 3mm', category: 'Stainless Steel', industry: ['Aerospace', 'Defence'], image: images['AR400'] },
  { name: '5052 H32', details: 'thickness: 1.5mm, 2mm, 3mm', category: 'Aluminum', industry: ['Transportation', 'EV', 'Drones', 'Aerospace'], image: images['2024 T3 Aluminum'] },
  { name: '6061 T6', details: 'thickness: 3mm, 5mm, 6mm', category: 'Aluminum', industry: ['Transportation', 'EV', 'Drones', 'Aerospace', 'Defence'], image: images['2024 T3 Aluminum'] },
  { name: 'MDF', details: 'thickness: 6mm, 9mm, 12mm, 18mm', category: 'Engineered Woods', industry: ['Construction'], image: images['Chipboard'] },
  { name: 'BWR Ply IS 303MR', details: 'thickness: 12mm, 18mm', category: 'Engineered Woods', industry: ['Construction'], image: images['Chipboard'] },
  { name: 'Birch Ply', details: 'thickness: 6mm', category: 'Engineered Woods', industry: ['Construction'], image: images['Chipboard'] },
];

const filters = [
  'ALL', 'MILD STEEL', 'STAINLESS STEEL', 'ALUMINUM', 'ENGINEERED WOODS', 'TRANSPORTATION', 'EV', 'DRONES', 'AEROSPACE', 'DEFENCE', 'CONSTRUCTION'
];

const Materials = () => {
  const [activeFilter, setActiveFilter] = useState('ALL');

  const filteredMaterials = activeFilter === 'ALL'
    ? materials
    : materials.filter(material => 
        material.category.toUpperCase() === activeFilter || 
        material.industry.map(i => i.toUpperCase()).includes(activeFilter)
      );

  return (
    <section className="materials-section">
      <h2 className="materials-title">Materials you can choose from</h2>
      <div className="filter-buttons">
        {filters.map(filter => (
          <button
            key={filter}
            className={`filter-btn ${activeFilter === filter ? 'active' : ''}`}
            onClick={() => setActiveFilter(filter)}
          >
            {filter}
          </button>
        ))}
      </div>
      <div className="materials-grid">
        {filteredMaterials.map(material => (
          <div key={material.name} className="material-card">
            <img src={material.image} alt={material.name} className="material-image" />
            <div className="material-info">
              <h3 className="material-name">{material.name}</h3>
              <p className="material-details">{material.details}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="quote-button-container">
        <button className="quote-button">
          Get an Instant Quote <ArrowRight className="arrow" />
        </button>
      </div>
    </section>
  );
};

export default Materials;
