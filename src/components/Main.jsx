import React, { useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

// FIXED ServiceCard component
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

// FIXED FAQItem component
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
  // FIXED FAQ toggle function
  const [activeIndex, setActiveIndex] = useState(null);
  const toggleFAQ = useCallback((index) => {
    setActiveIndex(prev => prev === index ? null : index);
  }, []); // Added empty dependency array

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
      {/* Pakistan Map Section - Now Responsive */}
      <div className="image-container">
        <div className="solar-content-wrapper">
          <div className="solar-image-container">
            <img 
              src="/images/Pakistan-map.svg" 
              alt="Pakistan map" 
              className="solar-main-image responsive-map"
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
          <div className="solar-content">
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
              <button className="solar-btn primary">Get Free Estimate →</button>
              <button className="solar-btn secondary">View Case Studies →</button>
            </div>
          </div>
        </div>
      </div>

      {/* Responsive Service Cards */}
      <div className="container">
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
<br/>
          {/*---------------get in touch--------------*/}
      <div className="solar-ready-container bg-gradient-to-r from-blue-800 to-blue-600 text-white py-12 px-6 rounded-xl shadow-xl max-w-4xl mx-auto my-8 text-center">
        <h2 className="solar-ready-title text-3xl md:text-4xl font-bold mb-4">Ready to Switch to Solar?</h2>
        <p className="solar-ready-desc text-lg md:text-xl opacity-90 max-w-2xl mx-auto mb-8">
          Join thousands of satisfied customers who have reduced their energy<br />
          bills and carbon footprint.
        </p>
        <button className="buttongetintouch">Get Started</button>
      </div>

     {/*----------------why choose us-------------------*/}
      <section class="solar-services-section">
    <div class="container-choose-us">
        <div className="solar-text-content">
            <p className="solar-subtitle1">Why Choose Our Solar Services?</p>
            <h2 className="solar-title">Your <span className="colorful">Trusted Partner</span> in <span className="colorful">Solar Solutions</span></h2>
            <p classn="solar-description">
                At [Your Company Name], we specialize in providing comprehensive solar power solutions tailored to your needs. From initial consultation and design to installation and maintenance, we ensure a seamless transition to clean, renewable energy. Our commitment to quality and customer satisfaction makes us the ideal choice for your solar journey.
            </p>
            <ul class="solar-checklist">
                <li>
                    <span className="checklist-icon">&#10004;</span> Expert Design & Consultation
                </li>
                <li>
                    <span className="checklist-icon">&#10004;</span> High-Quality Equipment
                </li>
                <li>
                    <span className="checklist-icon">&#10004;</span> Certified & Experienced Installers
                </li>
                <li>
                    <span className="checklist-icon">&#10004;</span> Seamless Installation Process
                </li>
                <li>
                    <span className="checklist-icon">&#10004;</span> Reliable Ongoing Support
                </li>
                <li>
                    <span className="checklist-icon">&#10004;</span> Maximized Energy Savings
                </li>
            </ul>
        </div>
          <div className="solar-image-content">
            <img src="/images/whychooseus.jpg" alt="Solar panel installation in progress"/>
            </div>
          </div>
            </section>

            {/**choose us cards */}
     <div className="features-section">
        <div className="cards-layout">
        
        <div className="feature-box">
            <i className="fas fa-drafting-compass box-icon"></i>
            <div className="box-text">
                <h3>Expert Design & Consultation</h3>
                <p>Customized solar solutions tailored to your property's unique needs and energy goals.</p>
            </div>
        </div>

       
        <div className="feature-box">
            <i className="fas fa-solar-panel box-icon"></i>
            <div className="box-text">
                <h3>High-Quality Equipment</h3>
                <p>Premium solar panels and components with industry-leading performance warranties.</p>
            </div>
        </div>

        <div className="feature-box">
            <i className="fas fa-solar-panel box-icon"></i>
            <div className="box-text">
                <h3>High-Quality Equipment</h3>
                <p>Premium solar panels and components with industry-leading performance warranties.</p>
            </div>
        </div>

        <div className="feature-box">
            <i className="fas fa-solar-panel box-icon"></i>
            <div className="box-text">
                <h3>High-Quality Equipment</h3>
                <p>Premium solar panels and components with industry-leading performance warranties.</p>
            </div>
        </div>

        <div className="feature-box">
            <i className="fas fa-solar-panel box-icon"></i>
            <div className="box-text">
                <h3>High-Quality Equipment</h3>
                <p>Premium solar panels and components with industry-leading performance warranties.</p>
            </div>
        </div>

        <div className="feature-box">
            <i className="fas fa-solar-panel box-icon"></i>
            <div className="box-text">
                <h3>High-Quality Equipment</h3>
                <p>Premium solar panels and components with industry-leading performance warranties.</p>
            </div>
        </div>
    </div>
</div>


       {/**---------------frequent asked questions------------------ */}
      {/* Modified FAQ section */}
      <div className="faq-section">
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
              <p>Most homeowners save between 50-90% on their electricity bills...</p>
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
              {/* ... answer content ... */}
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
              {/* ... answer content ... */}
            </div>
          </div>
        </div>
      </div>

{/*----------------footer-------------------*/}

      <footer className="solar-footer-gradient">
        <div className="footer-gradient-container">
          <div className="footer-main-content">
            <div className="footer-branding">
              <span className="footer-logo">Z/F</span>
              <p className="footer-mission">Harnessing the sun's power for a sustainable future</p>

              {/* Social Media Icons */}
              <ul className="social-wrapper">
                <li className="social-icon facebook">
                  <span className="tooltip">Facebook</span>
                  <svg viewBox="0 0 320 512" height="1.2em" fill="currentColor">
                    <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" />
                  </svg>
                </li>
                <li className="social-icon twitter">
                  <span className="tooltip">Twitter</span>
                  <svg height="1.8em" fill="currentColor" viewBox="0 0 48 48">
                    <path d="M42,12.429c-1.323,0.586-2.746,0.977-4.247,1.162c1.526-0.906,2.7-2.351,3.251-4.058c-1.428,0.837-3.01,1.452-4.693,1.776C34.967,9.884,33.05,9,30.926,9c-4.08,0-7.387,3.278-7.387,7.32c0,0.572,0.067,1.129,0.193,1.67c-6.138-0.308-11.582-3.226-15.224-7.654c-0.64,1.082-1,2.349-1,3.686c0,2.541,1.301,4.778,3.285,6.096c-1.211-0.037-2.351-0.374-3.349-0.914c0,0.022,0,0.055,0,0.086c0,3.551,2.547,6.508,5.923,7.181c-0.617,0.169-1.269,0.263-1.941,0.263c-0.477,0-0.942-0.054-1.392-0.135c0.94,2.902,3.667,5.023,6.898,5.086c-2.528,1.96-5.712,3.134-9.174,3.134c-0.598,0-1.183-0.034-1.761-0.104C9.268,36.786,13.152,38,17.321,38c13.585,0,21.017-11.156,21.017-20.834c0-0.317-0.01-0.633-0.025-0.945C39.763,15.197,41.013,13.905,42,12.429" />
                  </svg>
                </li>
                <li className="social-icon instagram">
                  <span className="tooltip">Instagram</span>
                  <svg height="1.2em" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
                  </svg>
                </li>
              </ul>
            </div>

            <div className="footer-grid">
              <div className="footer-column">
                <h4 className="footer-heading">Quick Links</h4>
                <ul className="footer-links custom-bullets">
                  <li><a href="/">Home</a></li>
                  <li><a href="/about">About</a></li>
                  <li><a href="/service">Services</a></li>
                  <li><a href="/contact">Contact</a></li>
                </ul>
              </div>

              <div className="footer-column">
                <h4 className="footer-heading">Services</h4>
                <ul className="footer-links custom-bullets">
                  <li><Link to="/service#residential">Residential</Link></li>
                  <li><Link to="/Service#commercial">Commercial</Link></li>
                </ul>
              </div>

              <div className="footer-column">
                <h4 className="footer-heading">Contact</h4>
                <ul className="footer-contact">
                  <li className="contact-item">
                    <svg className="contact-icon" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V8l8 5 8-5v10z" /></svg>
                    info@zfsolar.com
                  </li>
                  <li className="contact-item">
                    <svg className="contact-icon" viewBox="0 0 24 24"><path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z" /></svg>
                    +1 (234) 567-8900
                  </li>
                  <li className="contact-item">
                    <svg className="contact-icon" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" /></svg>
                    123 Solar Ave, Green City
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <p className="copyright">© {new Date().getFullYear()} Z/F Solar. All rights reserved.</p>
          </div>
        </div>
      </footer>

    </div>
  );
}