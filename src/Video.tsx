import React from 'react';
import './Video.css';

const Video = () => {
  return (
    <div className="video-container">
      <video autoPlay loop muted id="background-video">
        <source src="/videos/production.webm" type="video/webm" />
        Your browser does not support the video tag.
      </video>
      <div className="video-text-content">
        <h1>We got your back</h1>
        <p>With our inhouse manufacturing</p>
      </div>
    </div>
  );
};

export default Video;