import React from 'react';
import Video from '../Video';
import './About.css';

function About() {
  return (
    <div>
      <Video />
      <div className="about-wrapper">
        <div className="about-container">
          <h1>About Us</h1>
          <p>
          We are a rapid sheet-metal prototyping company built to help innovators move from design to prtotype— cheaper,faster, and more reliably.
          </p>
          <p>
            Modern hardware development demands speed. Startups, engineers, researchers, and manufacturers often lose valuable time navigating slow quotations, fragmented vendors, and unclear manufacturing feedback. We exist to remove that friction.
          </p>
          <p>
            Our platform enables customers to upload their CAD designs and receive high-quality sheet-metal parts with predictable pricing, quick turnaround times, and consistent quality. From flat laser-cut components to bent and finished parts, we focus exclusively on sheet metal, allowing us to deliver precision and repeatability at every step.
          </p>

          <h1>
            Our Approach
          </h1>
          <p>
            We believe manufacturing should be:
            <ul>
              <li>Fast – minimal back and forth, shorter lead times</li>
              <li>Transparent – clear pricing and processes</li>
              <li>Engineer-friendly – manufacturability considered from the start</li>
              <li>Scalable – capable of growing from prototypes to production</li>
              <li>Affordable</li>
            </ul>
            Every part is reviewed with real manufacturing constraints in mind, helping customers avoid costly redesigns and delays.
          </p>
        </div>
      </div>
      
    </div>
    
  );
}

export default About;
