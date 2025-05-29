import React, { useEffect } from 'react';
import '../App.css';

export default function Hero() {
  useEffect(() => {
    const slides = document.querySelectorAll('.hero-slide');
    let current = 0;
    
    const activateSlide = () => {
      slides.forEach(slide => {
        slide.classList.remove('active');
        slide.classList.add('transition-out');
      });
  
      setTimeout(() => {
        slides.forEach(slide => {
          slide.classList.remove('transition-out');
          // Reset animations for next cycle
          const content = slide.querySelector('.hero-content');
          if(content) {
            content.style.animation = 'none';
            void content.offsetHeight; // Trigger reflow
            content.style.animation = '';
          }
        });
        
        slides[current].classList.add('active');
        current = (current + 1) % slides.length;
      }, 800); // Match CSS transition duration
    };
  
    activateSlide();
    const interval = setInterval(activateSlide, 8000); // 8-second cycle
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="hero-container">
      <div className="hero-slideshow">
        {/* Slide 1 */}
        <div className="hero-slide">
          <img 
            src="/images/solar-panels.jpg" 
            alt="Solar solutions" 
            className="hero-image"
          />
          <div className="hero-content">
            <h1 className="text-size">Harness the  <span className="colorful">Power</span> of the <span className="colorful">Sun</span></h1>
            <p className="hero-subtitle">
              Sustainable energy solutions for a brighter tomorrow.<br />
              Reduce your carbon footprint and save on energy bills.
            </p>
          </div>
        </div>

        {/* Slide 2 */}
        <div className="hero-slide">
          <img 
            src="/images/solar-panels2.jpg" 
            alt="Commercial solutions" 
            className="hero-image"
            loading="lazy"
          />
          <div className="hero-content">
            <h1 className="text-size"> <span className="colorful">Commercial</span> Solar <span className="colorful">Solution</span></h1>
            <p className="hero-subtitle">
              Power your business with clean energy.<br />
              Customizable industrial-grade solar systems.
            </p>
          </div>
        </div>

        {/* Slide 3 */}
        <div className="hero-slide">
          <img 
            src="/images/solar-panels1.jpg" 
            alt="Residential solutions" 
            className="hero-image"
            loading="lazy"
          />
          <div className="hero-content">
            <h1 className="text-size"> <span className="colorful"> Residential</span> Solar Systems</h1>
            <p className="hero-subtitle">
              Home energy independence made easy.<br />
              Start saving with our affordable packages.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}