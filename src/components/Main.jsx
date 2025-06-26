import React, { useState, useCallback, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';


const ServiceCard = React.memo(({ title, description, items = [], link, imgSrc, imgAlt }) => (
  <div className="service-card">
    <img
      className='imageservices-mainpage'
      src={imgSrc}
      alt={imgAlt}
      loading="lazy"
    />
    <div className="service-card-content">
      <h3>{title}</h3>
      <p>{description}</p>
      <div className="more-info">
        <ul>
          {items.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>
      <Link className="modern-btn" to={link}>
        Learn More
      </Link>
    </div>
  </div>
));

const FAQItem = React.memo(({ question, answer, index, activeIndex, toggleFAQ }) => (
  <div className={`faq-item ${activeIndex === index ? 'active' : ''}`}>
    <button className="faq-question" onClick={() => toggleFAQ(index)}>
      {question}
      <svg className="faq-icon" viewBox="0 0 24 24">
        <path d="M19 9l-7 7-7-7" />
      </svg>
    </button>
    {activeIndex === index && (
      <div className="faq-answer">
        <p>{answer}</p>
      </div>
    )}
  </div>
));

export default function Main() {

    useEffect(() => {
          const observer = new IntersectionObserver((entries) => {
              entries.forEach(entry => {
                  if (entry.isIntersecting) {
                      entry.target.classList.add('active');
                  }
              });
          }, {
              threshold: 0.1,
              rootMargin: '0px 0px -50px 0px'
          });
  
          const slideElements = document.querySelectorAll('.slide-in');
          slideElements.forEach(el => observer.observe(el));
  
          return () => {
              slideElements.forEach(el => observer.unobserve(el));
          };
      }, []);

  
  const [activeIndex, setActiveIndex] = useState(null);
  const toggleFAQ = useCallback((index) => {
    setActiveIndex(prev => prev === index ? null : index);
  }, []); 

  // Service card data
  const services = [
    {
      title: "Residential Solar",
      description: "Transform your home with our top-rated residential solar services...",
      items: [
        "Smart Energy Independence",
        "Custom Roof Integration",
        "Outage-Ready Backup Power"
      ],
      link: "/service#residential",
      imgSrc: "/images/residentials-panels1.jpg",
      imgAlt: "Residential Solar Panels"
    },
    {
      title: "Commercial Systems",
      description: "For businesses, our tailored commercial solar services...",
      items: [
        "Operational Cost Reduction",
        "Scalable Power Solution",
        "Visible Green Commitment"
      ],
      link: "/service#commercial",
      imgSrc: "/images/commercial-panels1.jpg",
      imgAlt: "Commercial Solar Panels"
    }
  ];

  return (
    <div className="main-container">
      <div className="image-container">
        <div className="solar-content-wrapper">
          <div className="solar-image-container slide-in slide-left delay-1">
            <img
              src="/images/Pakistan-map.svg"
              alt="Pakistan map"
              className="solar-main-image responsive-map"
              loading="lazy"
            />
            <div
              className="location-pointer"
              style={{
                top: "45%",
                left: "73.5%"
              }}
            ></div>
          </div>

          {/* Right Content */}
          <div className="solar-content slide-in slide-rigth delay-1">
            <h1>Premium Solar Solutions in Lahore</h1>
            <p className="solar-subtitle">
              Harness Pakistan's abundant sunlight with our certified solar systems
            </p>

            <div className="services-container1">
              <div className="card">
                <h3>Residential Systems</h3>
                <p>Complete home solar solutions with NEPRA-compliant installations</p>
              </div>

              <div className="card">
                <h3>Maintenance Services</h3>
                <p>Professional upkeep and performance optimization</p>
              </div>
            </div>

            <div className="solar-cta">
              <Link className="solar-btn primary" to="/contact">Get Free Estimate →</Link>
            </div>
          </div>
        </div>
      </div>

      {/*-------------------------- Service Cards -----------------------------*/}
      <div className="container slide-in slide-up delay-1">
        <div className='center'>
          <h1 className="h1">Our Services</h1>
          <h5 className="service-line">Innovative Solar Solutions for Energy Independence</h5>
        </div>
        <div className="services-container responsive-cards">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>

        <Link className="service-button-mainpage" to="/service" id="Services-btn">
          <span>More Packages</span>
        </Link>
      </div>
      {/*services ends here*/}
      <br />
      {/*---------------get in touch--------------*/}
      <div className="solar-ready-container slide-in slide-up delay-1 bg-gradient-to-r from-blue-800 to-blue-600 text-white py-12 px-6 rounded-xl shadow-xl max-w-4xl mx-auto my-8 text-center">
        <h2 className="solar-ready-title slide-in slide-up delay-1 text-3xl md:text-4xl font-bold mb-4">Ready to Switch to Solar?</h2>
        <p className="solar-ready-desc slide-in slide-up delay-2 text-lg md:text-xl opacity-90 max-w-2xl mx-auto mb-8">
          Unlock significant savings and energy independence with the power of <br />solar—join your neighbors who are already enjoying lower bills and a cleaner, sustainable future!
        </p>
        <Link className="buttongetintouch slide-in slide-up delay-3" to='/contact'>Take the First Step</Link>
      </div>

      {/*----------------why choose us-------------------*/}
      <section class="solar-services-section">
        <div class="container-choose-us">
          <div className="solar-text-content">
            <p className="solar-subtitle1 slide-in slide-left delay-1">Why Choose Our Solar Services?</p>
            <h2 className="solar-title slide-in slide-up delay-2">Your <span className="colorful">Trusted Partner</span> in <span className="colorful">Solar Solutions</span></h2>
            <p classn="solar-description slide-in slide-up delay-1">
              At Solar Wings, we specialize in providing comprehensive solar power solutions tailored to your needs. From initial consultation and design to installation and maintenance, we ensure a seamless transition to clean, renewable energy. Our commitment to quality and customer satisfaction makes us the ideal choice for your solar journey.
            </p>
            <ul class="solar-checklist">
              <li className='slide-in slide-right delay-3'>
                <span className="checklist-icon">&#10004;</span> Expert Design & Consultation
              </li>
              <li className='slide-in slide-right delay-3'>
                <span className="checklist-icon">&#10004;</span> High-Quality Equipment
              </li>
              <li className='slide-in slide-right delay-3'>
                <span className="checklist-icon">&#10004;</span> Reliable Installation Crew
              </li>
              <li className='slide-in slide-right delay-3'>
                <span className="checklist-icon">&#10004;</span> Seamless Installation Process
              </li>
              <li className='slide-in slide-right delay-3'>
                <span className="checklist-icon">&#10004;</span> Reliable Ongoing Support
              </li>
              <li className='slide-in slide-right delay-3'>
                <span className="checklist-icon">&#10004;</span> Maximized Energy Savings
              </li>
            </ul>
          </div>
          <div className="solar-image-content slide-in slide-left delay-2">
            <img src="/images/whychooseus.jpg" alt="Solar panel installation in progress" />
          </div>
        </div>
      </section>

      {/**choose us cards */}
      <div className="features-section">
        <div className="cards-layout">

          <div className="feature-box slide-in slide-up delay-1">
            <i className="fas fa-drafting-compass box-icon"></i>
            <div className="box-text">
              <h3>Expert Design & Consultation</h3>
              <p>Customized solar solutions tailored to your property's unique needs and energy goals</p>
            </div>
          </div>

          <div className="feature-box slide-in slide-up delay-3">
            <i className="fas fa-solar-panel box-icon"></i>
            <div className="box-text">
              <h3>High-Quality Equipment</h3>
              <p>Premium solar panels and components backed by industry-leading 25-year performance warranties</p>
            </div>
          </div>

          <div className="feature-box slide-in slide-up delay-2">
            <i className="fas fa-solar-panel box-icon"></i>
            <div className="box-text">
              <h3>Reliable Installation Crew</h3>
              <p>Our locally-based team completes projects on schedule with 98% customer satisfaction</p>
            </div>
          </div>

          <div className="feature-box slide-in slide-up delay-1">
            <i className="fas fa-solar-panel box-icon"></i>
            <div className="box-text">
              <h3>Seamless Installation Process</h3>
              <p>Project managed from permit to activation with minimal disruption to your home</p>
            </div>
          </div>

          <div className="feature-box slide-in slide-up delay-3">
            <i className="fas fa-solar-panel box-icon"></i>
            <div className="box-text">
              <h3>Reliable Ongoing Support</h3>
              <p>*24/7 system monitoring + priority service response within 48 hours*</p>
            </div>
          </div>

           <div className="feature-box slide-in slide-up delay-2">
            <i className="fas fa-solar-panel box-icon"></i>
            <div className="box-text">
              <h3>Maximized Energy Savings</h3>
              <p>*Production guarantees ensuring 90%+ output for 25 years of solar ROI*</p>
            </div>
          </div>
        </div>
      </div>


      {/**---------------frequent asked questions------------------ */}
      <div className="faq-section slide-in slide-up delay-1">
        <div className="faq-header">
          <h2 className="faq-title">Frequently Asked Questions</h2>
          <p className="faq-subtitle">Find answers to common questions about solar energy solutions</p>
        </div>

        <div className="faq-container">
          {/* Question 1 */}
          <div className={`faq-item ${activeIndex === 0 ? 'active' : ''}`}>
            <button className="faq-question" onClick={() => toggleFAQ(0)}>
              How much can I save with solar panels?
              <svg className="faq-icon" viewBox="0 0 24 24">
                <path d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div className="faq-answer">
              <p>Most homeowners save 50-90% on electricity bills. Exact savings depend on your energy usage and local sunlight conditions.</p>
            </div>
          </div>

          {/* Question 2 */}
          <div className={`faq-item ${activeIndex === 1 ? 'active' : ''}`}>
            <button className="faq-question" onClick={() => toggleFAQ(1)}>
              What maintenance do solar panels require?
              <svg className="faq-icon" viewBox="0 0 24 24">
                <path d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div className="faq-answer">
              <p>Solar panels need minimal maintenance - just occasional cleaning and annual inspections. They're designed to withstand weather with no moving parts.</p>
            </div>
          </div>

          {/* Question 3 */}
          <div className={`faq-item ${activeIndex === 2 ? 'active' : ''}`}>
            <button className="faq-question" onClick={() => toggleFAQ(2)}>
              How long does installation take?
              <svg className="faq-icon" viewBox="0 0 24 24">
                <path d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div className="faq-answer">
              <p>Residential installations typically take 1-3 days. Commercial systems may require 1-2 weeks depending on size.</p>
            </div>
          </div>

          {/* Question 4 - Changed index to 3 */}
          <div className={`faq-item ${activeIndex === 3 ? 'active' : ''}`}>
            <button className="faq-question" onClick={() => toggleFAQ(3)}>
              How long do solar panels last?
              <svg className="faq-icon" viewBox="0 0 24 24">
                <path d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div className="faq-answer">
              <p>High-quality solar panels typically last 25-30 years or more. Over time, efficiency decreases slightly, but proper maintenance ensures long-term performance.</p>
            </div>
          </div>

          {/* Question 5 - About solar panel efficiency */}
          <div className={`faq-item ${activeIndex === 4 ? 'active' : ''}`}>
            <button className="faq-question" onClick={() => toggleFAQ(4)}>
              What affects solar panel efficiency?
              <svg className="faq-icon" viewBox="0 0 24 24">
                <path d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div className="faq-answer">
              <p>Several factors impact solar panel efficiency:</p>
              <ul>
                <li><strong>Sunlight intensity:</strong> More direct sunlight means better efficiency</li>
                <li><strong>Temperature:</strong> Panels work best at moderate temperatures (around 25°C)</li>
                <li><strong>Angle and orientation:</strong> Proper positioning maximizes sun exposure</li>
                <li><strong>Shading:</strong> Even partial shading can significantly reduce output</li>
                <li><strong>Panel quality:</strong> Higher-grade panels typically have better efficiency ratings</li>
                <li><strong>Dust and dirt:</strong> Clean panels perform better than dirty ones</li>
              </ul>
            </div>
          </div>

        </div>
      </div>

      {/*----------------footer-------------------*/}

      <footer className="solar-footer-gradient">
        <div className="footer-gradient-container">
          <div className="footer-main-content">
            <div className="footer-branding">
              <span className="footer-logo">Solar Wings</span>
              <p className="footer-mission">Harnessing the sun's power for a sustainable future</p>

              <ul className="social-wrapper">
                <li className="social-icon facebook">
                  <span className="tooltip">Facebook</span>
                  <a href='https://www.facebook.com/profile.php?id=61563839062378' target="_blank" rel="noopener noreferrer">
                    <svg viewBox="0 0 320 512" height="1.2em" fill="currentColor">
                      <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" />
                    </svg>
                  </a>
                </li>
                <li className="social-icon linkedin">
                  <span className="tooltip">LinkedIn</span>
                  <a href="https://www.linkedin.com/in/solar-wings-solution-483143361?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
                    <svg height="1.2em" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>
                </li>
                <li className="social-icon instagram">
                  <span className="tooltip">Instagram</span>
                  <a href="https://www.instagram.com/wings_solar" target="_blank" rel="noopener noreferrer">
                    <svg height="1.2em" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
                    </svg>
                  </a>
                </li>
              </ul>
            </div>

            <div className="footer-grid">
              <div className="footer-column">
                <h4 className="footer-heading">Quick Links</h4>
                <ul className="footer-links custom-bullets">
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="/about">About</Link></li>
                  <li><Link to="/service">Services</Link></li>
                  <li><Link to="/contact">Contact</Link></li>
                </ul>
              </div>

              <div className="footer-column">
                <h4 className="footer-heading">Services</h4>
                <ul className="footer-links custom-bullets">
                  <li><Link to="/service#residential">Residential</Link></li>
                  <li><Link to="/service#commercial">Commercial</Link></li>
                </ul>
              </div>

              <div className="footer-column">
                <h4 className="footer-heading">Contact</h4>
                <ul className="footer-contact">
                  <li className="contact-item">
                    <svg className="contact-icon" viewBox="0 0 24 24">
                      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V8l8 5 8-5v10z" />
                    </svg>
                    solarwingsolution@gmail.com
                  </li>
                  <li className="contact-item">
                    <svg className="contact-icon" viewBox="0 0 24 24">
                      <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z" />
                    </svg>
                    +92 329-0806908
                  </li>
                  <li className="contact-item">
                    <svg className="contact-icon" viewBox="0 0 24 24">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                    </svg>
                    89-3-BII Townre
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <p className="copyright">© {new Date().getFullYear()} Solar Wings Solar. All rights reserved.</p>
          </div>
        </div>
      </footer>

    </div>
  );
}