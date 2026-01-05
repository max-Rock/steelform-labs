import React from 'react';
import './Services.css';
import { ArrowRight, DownloadSimple } from 'phosphor-react';

const services = [
  {
    title: 'Sheet Cutting',
    description: 'Laser cutting, waterjet, and CNC routing for sheet materials.',
    image: '/images/sheetMetal.webp',
  },
  {
    title: 'Tap Drilling',
    description: 'Multiaxis CNC machining in billet stock.',
    image: '/images/tapDrill.webp',
  },
  {
    title: 'Welding',
    description: 'Bends within 1 degree of accuracy or better.',
    image: '/images/welding.webp',
  },
  {
    title: 'Hardware Connection',
    description: 'Allow hardware to sit flush on your parts to reduce wear and tear.',
    image: '/images/hardwareInsert.webp',
  },
  {
    title: 'Deburring',
    description: 'Allow hardware to sit flush on your parts to reduce wear and tear.',
    image: '/images/deburring.webp',
  },
  {
    title: 'Powder Coating',
    description: 'Allow hardware to sit flush on your parts to reduce wear and tear.',
    image: '/images/powderCoating.webp',
  },
];

function Services() {
  return (
    <section className="services-section">
      <h2 className="services-title">Your Custom parts delivered fast.</h2>
      <p className="services-subtitle"> No Wait Time. No Outsourcing. No Minimum Order Requirements.</p>
      <div className="services-grid">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <img src={service.image} alt={service.title} className="service-image" />
            <h3 className="service-card-title">{service.title}</h3>
            <p className="service-description">{service.description}</p>
            <ArrowRight className="service-arrow" />
          </div>
        ))}
      </div>
      <div className="get-started-button-container">
        <h1>Just, upload your CAD files we will get it done</h1>
        <button className="get-started-button">
          Upload CAD File <DownloadSimple className="arrow" />
        </button>
        <p className="services-subtitle"> Formats: STEP, IGES, STL, DXF, DWG</p>
      </div>
    </section>
  );
}

export default Services;
