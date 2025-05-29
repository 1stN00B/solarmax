import React, { useEffect } from 'react';
import '../Loader.css';

const SolarWingsLoader = () => {
  useEffect(() => {
    // Clean up when component unmounts
    return () => {
      document.body.classList.remove('solar-loader-active');
    };
  }, []);

  return (
    <div className="solar-loader">
      <div className="solar-grid">
        {[...Array(16)].map((_, i) => (
          <div key={i} className="solar-grid-line"></div>
        ))}
      </div>
      
      <div className="solar-text-container">
        <h1 className="solar-text">
          <span className="solar-letter">S</span>
          <span className="solar-letter">o</span>
          <span className="solar-letter">l</span>
          <span className="solar-letter">a</span>
          <span className="solar-letter">r</span>
          <span className="solar-space"></span>
          <span className="solar-letter">W</span>
          <span className="solar-letter">i</span>
          <span className="solar-letter">n</span>
          <span className="solar-letter">g</span>
          <span className="solar-letter">s</span>
        </h1>
        
        <div className="solar-underline">
          <div className="solar-underline-inner"></div>
        </div>
      </div>
      
      <div className="solar-particles">
        {[...Array(20)].map((_, i) => (
          <div key={i} className="solar-particle"></div>
        ))}
      </div>
    </div>
  );
};

export default SolarWingsLoader;