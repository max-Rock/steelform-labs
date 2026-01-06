
// import React from 'react';
// import './ServicesPage.css';

// const Services = () => {
//   const services = [
//     {
//       title: 'Sheet Cutting',
//       description: 'Laser cutting, waterjet, and CNC routing for sheet materials.',
//       image: '/images/sheetMetal.webp',
//     },
//     {
//       title: 'Tap Drilling',
//       description: 'Multiaxis CNC machining in billet stock.',
//       image: '/images/tapDrill.webp',
//     },
//     {
//       title: 'Welding',
//       description: 'Bends within 1 degree of accuracy or better.',
//       image: '/images/welding.webp',
//     },
//     {
//       title: 'Hardware Connection',
//       description: 'Allow hardware to sit flush on your parts to reduce wear and tear.',
//       image: '/images/hardwareInsert.webp',
//     },
//     {
//       title: 'Deburring',
//       description: 'Allow hardware to sit flush on your parts to reduce wear and tear.',
//       image: '/images/deburring.webp',
//     },
//     {
//       title: 'Powder Coating',
//       description: 'Allow hardware to sit flush on your parts to reduce wear and tear.',
//       image: '/images/powderCoating.webp',
//     },
//   ];

//   return (
//     <div className="services-container">
//       <h2 className="services-title">Our Services</h2>
//       <div className="services-grid">
//         {services.map((service, index) => (
//           <div className="service-card" key={index}>
//             <img src={service.image} alt={service.title} className="service-image" />
//             <div className="service-card-content">
//               <h3>{service.title}</h3>
//               <p>{service.description}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Services;

import React from 'react';
import ScrollAnimation from '../components/ScrollAnimation';
import Services from '../Services';

function ServicesPage() {
  return (
    <ScrollAnimation>
      <div>
        <Services />
      </div>
    </ScrollAnimation>

  );
}

export default ServicesPage;